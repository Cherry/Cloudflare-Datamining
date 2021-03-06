const navigation = {
	root: [{
		title: "navigation.root.accounts",
		url: "/",
		iconType: "user-multi"
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: function(Q) {
			return !!(0, ce.z1)("oauth-access-management")(Q)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(Q) {
			return !(0, F.n3)() && !(0, ce.z1)("oauth-access-management")(Q)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(Q) {
			return !(0, ce.z1)("oauth-access-management")(Q)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(Q) {
			return (0, ce.z1)("registrar-account-home-copy-experiment")(Q) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(Q) {
				return m(Q)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(Q) {
				return m(Q)
			}
		}]
	}, {
		title: "navigation.common.analytics",
		url: "",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(Q) {
				return S(Q) && !!(0, z.getAccountFlipperFlag)(Q, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(Q) {
				return S(Q) && !!(0, z.getAccountFlipperFlag)(Q, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(Q) {
			return S(Q) && (0, ae.dU)(Q)
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(Q) {
			return S(Q)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(Q) {
			return S(Q)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(Q) {
				return !!(0, z.getAccountFlipperFlag)(Q, "workers", "origin_workers") && !!(0, z.getAccountFlipperFlag)(Q, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(Q) {
				return !!(0, z.getAccountFlipperFlag)(Q, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		labels: ["beta"],
		hasPermission: function(Q) {
			return S(Q)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(Q) {
			return S(Q) && !!(p(Q) || _(Q))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(Q) {
				var Ze = !!b(Q) && !!D(Q);
				return !!w(Q) || Ze
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(Q) {
				var Ze = !!w(Q) || !!b(Q) && !!D(Q);
				return Ze ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(Q) {
				return !!p(Q)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(Q) {
				return !!_(Q)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(Q) {
			return S(Q)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(Q) {
				return y(Q)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(Q) {
				return y(Q)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(Q) {
				return y(Q)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(Q) {
			return S(Q) && !!(0, z.getAccountFlipperFlag)(Q, "cloudflare_images", "early_release_access")
		}
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(Q) {
			return S(Q) && (0, J.sL)(Q)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(Q) {
				return S(Q) && (0, J.sL)(Q)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(Q) {
				return S(Q) && (0, J.sL)(Q)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(Q) {
				return S(Q) && (0, J.TT)(Q)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(Q) {
				return S(Q) && (0, J.jD)(Q)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(Q) {
				return S(Q) && (0, J.BU)(Q)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(Q) {
			return S(Q)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(Q) {
			return S(Q) && !!(0, z.getAccountFlipperFlag)(Q, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(Q) {
			return S(Q) && !!(0, z.getAccountFlipperFlag)(Q, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(Q) {
			return S(Q) && !!(0, z.getAccountFlipperFlag)(Q, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(Q) {
			return S(Q)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(Q) {
			return S(Q)
		}
	}, {
		title: "navigation.account.manage_account",
		url: "",
		iconType: "gear",
		labels: ["border-top"],
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(Q) {
				return (0, d.b)(Q) ? S(Q) : (0, z.getPermission)(Q)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(Q) {
				return S(Q)
			}
		}]
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview"
	}, {
		title: "navigation.common.analytics",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		hasPermission: function(Q) {
			return N(Q, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(Q) {
				var Ze = (0, P.getZone)(Q);
				return Ze ? !!(!(0, a.zoneIsDNSOnly)(Q) && !!(0, P.getZoneFlipperFlag)(Q, "origin_reachability_dash", "dash_view") && (0, P.isPlanAtLeast)(Ze, "enterprise") && !!(0, q.getZoneGraphQLSettingEnabled)(Q, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(Q) {
				var Ze = (0, P.getZone)(Q);
				return Ze ? !!(!(0, a.zoneIsDNSOnly)(Q) && !!(0, P.getZoneFlipperFlag)(Q, "edge_reachability_dash", "dash_view") && (0, P.isPlanAtLeast)(Ze, "enterprise") && !!(0, q.getZoneGraphQLSettingEnabled)(Q, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(Q) {
				return Object.values((0, V.H_)(Q)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q) && !!(0, P.getZoneFlipperFlag)(Q, "logs", "instant_log") && !!(0, a.getZoneEntitlement)(Q, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(Q) {
			return N(Q, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		labels: ["beta"],
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(Q) {
			var Ze = (0, P.getZone)(Q);
			if ((0, a.zoneIsDNSOnly)(Q) || !B(Q, "zone_settings", "spectrum.app") || !Ze) return !1;
			var nt = !!((0, W.userHasEntZones)(Q) || (0, P.userHasDelegatedEntZones)(Q)),
				ft = !!(0, P.getZoneFlipperFlag)(Q, "spectrum", "enabled"),
				wt = !!(0, P.isFree)(Ze);
			return ft || nt || !wt
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			hasPermission: function(Q) {
				return (0, a.hasAccountEntitlement)(Q, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(Q) {
				return !!(0, ce.z1)("client-certificates")(Q) || !!(0, P.getZoneFlipperFlag)(Q, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.page_shield",
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(Q) {
				return !!(0, z.getAccountFlipperFlag)(Q, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(Q) {
				return (0, a.hasZoneEntitlement)(Q, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			hasPermission: function(Q) {
				var Ze = (0, P.getZone)(Q);
				return Ze ? !!(0, P.getZoneFlipperFlag)(Q, "firewall", "api_shield_tab") && (0, P.isPlanAtLeast)(Ze, "business") : !1
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && (B(Q, "access", "access.app") || B(Q, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed"
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}, {
			title: "navigation.zone.speed.browser_insights",
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(Q) {
				return !!O(Q)
			}
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && B(Q, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "account.bulk_redirects.title",
			labels: ["beta", "absolute"],
			url: function(Q) {
				var Ze = (0, z.getAccount)(Q);
				return "/".concat(Ze == null ? void 0 : Ze.id, "/bulk-redirects")
			},
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(Q) {
				return !!(0, P.getZoneFlipperFlag)(Q, "page_rules", "normalization") && N(Q, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(Q) {
			return N(Q, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q) && !!(0, q.getZoneGraphQLSettingEnabled)(Q, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q) && ((0, a.hasZoneEntitlement)(Q, "waiting_rooms.allowed") || !!(0, P.getZoneFlipperFlag)(Q, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(Q) {
			var Ze = [],
				nt = (0, P.getZone)(Q);
			return nt && !(0, P.isPlanAtLeast)(nt, "pro") && Ze.push("beta"), Ze
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security/waf",
		iconType: "shield",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(Q) {
				return !!(0, z.getAccountFlipperFlag)(Q, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.speed",
		url: "/speed/optimization",
		iconType: "bolt",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(Q) {
				return S(Q)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(Q) {
				return N(Q, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(Q) {
				return !!(0, P.getZoneFlipperFlag)(Q, "page_rules", "normalization") && N(Q, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(Q) {
			return N(Q, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(Q) {
				return !(0, a.zoneIsDNSOnly)(Q)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(Q) {
			return !(0, a.zoneIsDNSOnly)(Q) && N(Q, "zone_settings", "setting")
		}
	}]
}