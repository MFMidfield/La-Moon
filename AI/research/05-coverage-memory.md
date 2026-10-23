# Coverage Memory

- **Updated:** 2026-10-22 22:50 +07 (v2, after verification round G/H/I + Pantip scan 3)
- Purpose: what has been explored, how deeply, what is missing — so the Generation session knows where Coverage is low.

## By domain

| Domain | Depth | Main sources | Gaps |
|---|---|---|---|
| Travel — tourist scams/transport (TH) | **Deep** | A, B (opened news, complaint data) | Mastercard primary report not opened; no tourist-side forum voice |
| Travel — group trips (money/decisions) | **Medium** | A (surveys), D (workarounds), F (Pantip) | No Thai survey; KhunThong usage unknown; Facebook groups not reached |
| Travel — small operators/homestays/CBT | **Medium** | B (peer-reviewed study), D, I (impersonation cases, no-shows) | Operators' own voice still via news; causes of inactivity (full PDF) unread; no van/tour no-show data |
| Travel — fake official sites (TDAC) | Shallow–Medium | A, B (snippets) | No opened source (Khaosod 403) |
| Travel — payments for tourists | Medium | B (BoT/Visa via Fintech News) | Single primary source |
| Travel — flights/bags/insurance/accessibility | Shallow | A (snippets) | Low Thai relevance |
| Travel — ferries, เมืองรอง transport | Shallow | B (snippets) | No 2025–26 data |
| Travel — overtourism, solo/female safety, digital nomads (DTV), language barriers | **Not scanned** | — | Out of budget |
| Everyday — online purchase fraud / chat commerce | **Deep** | C (ETDA, AOC, สคบ.) | No P2P-vs-merchant split |
| Everyday — rental/dorm deposits | **Deep** | C, G (law), I (landlord side), F (PT-14–19) | Dorm Act details beyond lease form |
| Everyday — friend loans/IOUs | Medium | C, F (Pantip) | No frequency data |
| Everyday — anti-mule freezes, job scams, Gold Card referrals | Deep (but Tier 3) | C | — |
| Everyday — COD refusals, contractors, prepaid packages | Shallow | C (snippets) | Scale unknown |
| Everyday — elderly care, food waste, household debt | Shallow / context | C | Mechanism unsupported |
| Everyday — subscriptions, pet care, hospital queues, freelance payment, events | **Not scanned** | — | — |

## By source type

| Source type | Status |
|---|---|
| Thai official stats (ETDA, AOC, สคบ., BOT, MOTS via press) | Used (several opened) |
| Peer-reviewed research | 1 (homestay study) |
| Industry/vendor surveys | Klook, Skyscanner, CleverTap, Mindtrip (vendor bias noted) |
| News (TH + EN) | Used extensively; Khaosod/Phocuswire blocked |
| Pantip | Titles/descriptions via direct scan (raw F); comments not read |
| Reddit | **Blocked** (403 for WebFetch, curl, last30days) |
| X / TikTok / Instagram / YouTube | **Not reached** (last30days needs keys/yt-dlp; Chrome extension not connected) |
| Facebook groups | **Not reached** |
| App-store reviews | Only via aggregators (snippets) |
| Hacker News | Used (last30days) — prior-art signal only |
| Legal/regulatory (payments, PDPA, dorms, tour licences) | Medium–Deep (raw G; official MoF PDF + law-firm explainers) |
| Fact re-verification of key numbers | Done (raw H) |
| Field research (interviews) | **None** — must be done by the team |

## By stakeholder
- Covered: tourists, Thai domestic travellers, group organizers, online buyers, tenants, small operators (via literature), government agencies.
- Partly covered in v2 (raw I): impersonated operators, taxi drivers' fare pressure, landlords' evidence needs.
- Still under-covered: operators' first-person voice; car owners in group trips (no Thai source); homestay community leaders; hotel front-desk/concierge as intermediaries.

## Low-coverage areas recommended for Generation 2 (per Master Prompt §10)
1. Stakeholder voice of small operators and drivers (supply side of PM-03/04/07).
2. Thai social video platforms (TikTok) for travel pain — needs ScrapeCreators key or Chrome.
3. Non-scanned domains: events/concerts group coordination, freelance payment, subscriptions.
4. Travel safety/solo travel, language barriers, digital-nomad/DTV.
