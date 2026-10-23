# E — Social Signal Pass (last30days + Chrome attempt)

- **Run:** 2026-10-22 ~22:30 +07
- **Tool:** last30days v3.28.1, `--search reddit,hackernews,youtube --no-browser-cookies --days 365 --quick --auto-resolve`
- **Raw outputs:** `raw/social/L1.md`–`L5.md` (+ `.log`)

## What worked / failed (FACT — from tool logs)
| Source | Result |
|---|---|
| Reddit (keyless) | **Blocked** — `HTTP 403: Blocked`; 0 posts. Direct curl to reddit.com JSON also 403. |
| YouTube | Not available — requires `yt-dlp` (not installed). |
| Hacker News | Worked. Only source with data. |
| Claude in Chrome | **Not connected** (extension not running/connected) → Pantip/Facebook/Reddit via browser not done. |

→ Social-media coverage in this session relies on subagents' web search (site:pantip.com / site:reddit.com snippets) rather than direct crawling. **Coverage gap recorded.**

## Topics run
- L1 "group trip planning frustrations" — thin (3 HN items)
- L2 "Thailand tourist scams overcharging" — off-topic HN results (not usable)
- L3 "travel app I wish existed" — 6 HN Show HN items (prior-art signal)
- L4 "small tour operator homestay booking problems" — 1 off-topic item
- L5 "everyday app idea problem nobody solves" — off-topic

## Usable prior-art signals (FACT = the product page/Show HN post exists; claims about the products are their own)
| ID | Product | Date (HN post) | Self-described mechanism | Signal |
|---|---|---|---|---|
| ES-E-01 | PolyTrip (polytrip.co) | 2026-08-04 | "crowd-funded group trip planning with AI" | Group-trip + pooled money already attempted; low HN traction (3 pts) |
| ES-E-02 | Squad In Sync (squadinsync.com) | 2026-01-06 | "dashboard for group trip and event logistics" | Group-logistics dashboard exists |
| ES-E-03 | GridTravel (gridtravel.app) | 2026-05-14 | community route sharing | Commenter: screenshots "absolutely generic: city map, featured locations" → differentiation problem |
| ES-E-04 | Uncover Roads (uncoverroads.com) | 2026-07-30 | "not building generic itinerary" | Itinerary-generator fatigue acknowledged by builders |
| ES-E-05 | Globally Based (globallybased.com) | 2026-03-30 | "replaces trip research with a 30s briefing" | Research-time compression already attempted |
| ES-E-06 | Viamour (viamour.app) | 2026-09-28 | agentic social connections + travel | Social-travel matching still being attempted |

Interpretation (HYPOTHESIS): the "AI itinerary / trip research" and "group-trip dashboard" spaces are crowded with indie launches in 2026 — consistent with RF-01 / RF-04 in `02-common-baseline.md`. HN points are low across all, which is weak evidence of low developer-audience enthusiasm, not of market demand.

## Limitations
- HN audience ≠ general public; ≠ Thai users.
- 1-year window used (`--days 365`); not full 2020+.
