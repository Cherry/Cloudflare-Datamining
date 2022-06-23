import 'dotenv/config';
import path from 'path';

import fs from 'fs-extra';
import dateFormat from 'dateformat';
import fetch from 'node-fetch';
import {parseDocument} from 'htmlparser2';
import {selectOne} from 'css-select';
import {parse} from 'acorn';
import {fullAncestor} from 'acorn-walk';
import {generate} from 'astring';

import {tryAndPush} from './utils.js';

const API_DOCS_URL = 'https://api.cloudflare.com/';
const SCHEMAS_URL = `${API_DOCS_URL}schemas/v4/`;

async function run(){
	console.log('Fetching API Schemas...');

	const docs = await fetch(API_DOCS_URL);
	const html = await docs.text();
	const parsed = new parseDocument(html);
	const docsScriptAttr = selectOne('script[src*=apidocs-static]', parsed);
	if(!docsScriptAttr){
		return console.log('No docs script found, exiting');
	}

	const docsScriptReq = await fetch(`${API_DOCS_URL}/${docsScriptAttr.attribs.src}`);
	const docsScript = await docsScriptReq.text();
	const docsScriptParsed = parse(docsScript, {
		sourceType: 'script',
		ecmaVersion: 2020,
	});
	const schemas = {};
	fullAncestor(docsScriptParsed, (node, ancestors) => {
		if(node.type === 'Literal' && node.value?.includes?.(SCHEMAS_URL)){
			// assume that 3 from the last ancestor is the schema
			const schema = ancestors.at(-3);
			if(!schema || schema.type !== 'ObjectExpression'){ return; }
			// this is a massive hack. TODO: find a better way to do this
			// eslint-disable-next-line no-eval
			const realschema = eval('(function run(){return ' + generate(schema) + '})()');
			schemas[node.value] = realschema;
		}
	});
	for(const [url, schema] of Object.entries(schemas)){
		const schemaname = url.replace(SCHEMAS_URL, '');
		if(!schemaname){ continue; }
		const filename = path.resolve(`../data/api-schemas/${schemaname}`);
		console.log('Writing API schema', schemaname);
		await fs.ensureFile(filename);
		await fs.writeFile(filename, JSON.stringify(schema, null, '\t'));
	}

	console.log('Pushing!');
	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		['data/api-schemas/*.json'],
		`${prefix} - API Schemas were updated!`,
		'CFData - API Schema Data Update',
		'Pushed API Schema Data: ' + prefix,
	);

	console.log('Done! :)');
}
run();