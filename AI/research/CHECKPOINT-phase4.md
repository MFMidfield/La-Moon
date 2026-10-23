# CHECKPOINT — End of Phase 4 (hand-off to Generation Session)

- **Created:** 2026-10-22 22:39 +07 (v1) · **Updated:** 2026-10-22 22:50 +07 (v2 — verification round: legal, fact-check, supply-side, Pantip scan 3)
- **Phase completed:** 0, 1, 2, 3, 4 (Generation 0 — no ideas generated)
- **Next phase:** 5 (Exploration Design) → 6 (Divergent Generation) in a new session
- **Read order for a new session:** this file → `03-problem-memory.md` → `04-problem-graph.md` → `01-existing-solutions.md` → `02-common-baseline.md` → `05-coverage-memory.md` → `00-calibration.md`. Raw evidence in `raw/` only when a source must be checked (A–F discovery, G legal, H fact-check, I supply-side).

---

## 1. Project Configuration (locked)

| Field | Value |
|---|---|
| Project | AFOU — All for One University, Software track, brief "Make Me Money" |
| Deadline | Submit 2026-10-25 12:00–13:30 (+07); no edits after; late = disqualified. Top-5 pitch 19:00–20:30 same day |
| Deliverables | Working prototype link (website or Google Drive installer) + 2-min .mp4 on Google Drive |
| Judging (/100) | Problem 20 · Product completeness 30 · Feasibility & business model 30 · Presentation & demo 20 |
| Domain | Open; **bonus for travel/tourism** |
| Target | General public; Thailand primary, global scan |
| Team | 3: idea/business 1, full-stack dev 1, tester 1. **Stack: React + Tailwind + Supabase + Vercel** (user, 2026-10-22) |
| Budget | Zero (free tiers only) |
| Novelty | **Strong Mechanism Novelty + Practical Gate** (buildable ~1.5 build days by 1 dev; free; clear revenue path) |
| Conflict rule | Judging criteria > Master Prompt §12 weights; practical filter applied from Phase 3 |
| Independent review | **Human review by the team** (user, 2026-10-22); model critique = Internal Critique only |
| Subagent model | **Sonnet 5.5** for research/search subagents; main thread Opus 5.5 (user, 2026-10-22) |
| Generation count / candidates | Not yet set (prompt default 3×30 likely too large for the time) |
| Business model | Not yet set (must be clear) |

## 2. Phase status
| Phase | Output | Status |
|---|---|---|
| 0 Calibration | `00-calibration.md` | Done |
| 1 Existing Landscape | `01-existing-solutions.md` (+ raw A–F, H) | Done — Preliminary Scan, key numbers re-verified |
| 2 Common Baseline | `02-common-baseline.md` (12 travel + 12 general baselines; RF-01…08) | Done |
| 3 Problem Mining | `03-problem-memory.md` (27 PMs; Tier 1 ×4, Tier 2 ×9, Tier 3 ×14) | Done |
| 4 Decomposition & Graph | `04-problem-graph.md` (6 root-cause families, graph, stakeholder/constraint/failure maps, conflicts, two-sided trust deadlock) | Done |

## 3. Problem Memory — Tier 1 (compressed)
| ID | Problem | Ev | Mech | Build | Rev | Travel | Confidence |
|---|---|---|---|---|---|---|---|
| PM-01 | Group money: payer-first risk, improvised fairness rules (fuel, driver, fines), creditor bears cost of asking | M | H | H | L–M | ✓ | Medium |
| PM-03 | Pay-first trust gap with strangers/small operators — **two-sided**: travellers fear prepaying (impersonation), honest operators impersonated and need deposits vs no-shows (PM-27) | H | H | M | M | ✓ | High (scale) / Med (mechanism) |
| PM-04 | Transport price opacity & overcharging (tourists **and Thai locals**); driver-side fare pressure | H | H | H | L–M | ✓ | High / Medium |
| PM-09 | Rental/dorm deposit forfeiture; **dorms excluded from 2025 rule and no deposit rule in dorm lease form** | H | H | H | L–M | ✗ | High |

Tier 2: PM-02 group decisions · PM-05 fake TDAC sites (Ev upgraded to H) · PM-06 kickback scams · PM-07 invisible small operators/homestays · PM-10 COD refusals · PM-13 contractor deposits · PM-22 ferry connection risk · PM-23 เมืองรอง last-mile · **PM-27 operator no-shows (new)**.

## 4. Key verified facts (citable — see raw H/G/I for URLs)
- ETDA 1212 (2025): 39,112 complaints; online shopping 14,238 (36.40%).
- AOC 1441 (Nov 2023–Apr 2024): fake buying/selling = largest suspended-account category 30,858/102,925 (29.98%).
- Mastercard (~15 May 2025): 48% of reported fraud cases in Bangkok involve taxis/rental cars (no city ranking).
- DLT 1584: 10,687 taxi complaints Oct 2023–Feb 2024 (single source).
- Immigration (Mar 2026, via Bangkok Post): fake TDAC sites charge US$20–90; ≥10% of foreign arrivals used them.
- Rental complaints: 1,655 (2025–May 2026), deposit forfeiture top — stated by the Minister (2 sources).
- 2025 rental rules: 3+ units, deposit back in 7/14 days, dorms & hotels excluded (Tilleke + 2 news).
- Homestay study: 45.3% of 53 certified Isan communities had zero tourists (peer-reviewed 2025).
- Impersonation cases: Koh Si Chang resort 100+ victims; Vranda Pattaya 70+ victims >400k THB; fake Khao Yai page 11k followers vs real 425.
- Robinhood: THB 2.1bn loss 2023, closed Jul 2024.
- **Do NOT cite:** ฿1.2bn foreign-visitor scam loss (unverified); "Bangkok top-4 scam city" (withdrawn); KhunThong 650k users as current (2021 figure).

## 5. Existing Solution Memory — key incumbents
- PM-01: Splitwise (daily free cap confirmed; number reported 3–4/day), Tricount, **KhunThong LINE bot** (auto-tags non-payers; 2026 activity unverified), Cloud Pocket, Split Bill (iOS), PolyTrip, Squad In Sync, Mindtrip.
- PM-03: Shopee/Lazada escrow, OTAs, Blacklistseller/Checkgon/Whoscall, Cyber Check, tour-licence registry (no public homestay register), COD, Meta Verified (~280–330 THB/mo, 2023, snippet).
- PM-04: Grab/Bolt, 1584 hotline, Tourist Police 1155.
- PM-09: 2025 rental rules (exclude dorms), สคบ., Small Claims, Legardy.
- Monetization lessons: planners don't monetize; travel subscriptions fail; zero-commission fails; paywalling core utility → defection; Thai behaviour LINE + PromptPay.

## 6. Legal constraints (raw G — not legal advice)
- **Escrow / collecting money for sellers = licensed payment service** (MoF 2018 list; no small-volume exemption; BOT sandbox only) — FACT.
- Coordination-only PromptPay QR (app never touches funds) likely needs no licence — HYPOTHESIS.
- Public named scammer lists: criminal defamation (≤2 yrs / THB 200k) + PDPA risk — avoid. Opt-in self-verification, joint room photos — low risk (HYPOTHESIS).
- Unlicensed tour selling illegal (≤2 yrs and/or THB 500k; FB seller arrested May 2026).

## 7. Rejection Fingerprints (initial, Phase 2)
RF-01 itinerary text generation · RF-02 post-hoc ledger · RF-03 crowd reviews/map discovery · RF-04 two-sided matching cold start · RF-05 "add AI chatbot" · RF-06 gamification only · RF-07 paid-API aggregation · RF-08 holding/escrowing funds (**now FACT-backed: licence required**). Flags, not bans — a different core mechanism can pass.

## 8. Idea Family Fingerprints
None yet (no ideas generated).

## 9. Problem Graph — key structure
- Root-cause families: **RC-A pay-first asymmetry**, **RC-B no neutral record of real-world state**, RC-C one-shot info asymmetry, RC-D enforcement cost on victim, RC-E platform-concentrated trust, RC-F low frequency (constraint).
- Densest region: RC-A + RC-B → PM-01, PM-03, PM-09, PM-27 (+ PM-10, PM-13). Fusion candidate area (must not hold money).
- **Two-sided trust deadlock PM-03 ↔ PM-27**: both sides want a trusted record of identity + terms + payment; OTAs currently resolve it for commission.
- PM-04 has two causes: tourist-side info asymmetry and driver-side fare pressure.
- Causal edges: PM-02→PM-01; PM-01→PM-03; PM-03→PM-10; PM-03↔PM-07; PM-03→PM-11; PM-03↔PM-27.

## 10. Coverage Memory (summary)
Deep: tourist scams/transport; online-purchase fraud; rental deposits; legal constraints. Medium: group trips; homestays & operator impersonation; friend IOUs. Not reached: Reddit, TikTok/X/YouTube, Facebook groups, field interviews. Not scanned: overtourism, solo safety, nomads, events, freelance payment, subscriptions. Details: `05-coverage-memory.md`.

## 11. Current Shortlist
None (shortlisting happens after Generation + Critic).

## 12. Open Questions (need user/team decision)
1. **Generation scale:** how many generations × candidates fit the time? (Default 3×30 — likely too large.)
2. ~~Independent review~~ → answered: team review.
3. ~~Dev stack~~ → answered: React + Tailwind + Supabase + Vercel.
4. Keep non-travel PM-09 in Tier 1?
5. Keep PM-04 in Tier 1 if no payer can be shown?
6. Team field research: 5–10 Mom-Test interviews on Tier-1 problems before 24 Oct? Strongly recommended for the 20-pt problem criterion and because **no direct Thai WTP evidence exists in any cluster**.

## 13. Next Actions
1. User answers Open Questions 1–3 (minimum).
2. New session: load this checkpoint → Phase 5 Exploration Design (operator mix; Track A memory-guided vs Track B blind).
3. Track B (blind) receives only constraints + domains + operators (no Idea Memory / RFs).
4. Optional: connect Claude in Chrome → Facebook groups/Reddit voice for PM-01/03/04; install `yt-dlp` for YouTube.

## 14. Research limitations (carry forward)
- Prior-art status = Preliminary Scan; absence of competitors not verified.
- No direct Thai survey-based WTP in any cluster; WTP signals are revealed behaviour only.
- Supply-side voice mostly via news, not operators themselves.
- Critique so far = Internal (same model).
