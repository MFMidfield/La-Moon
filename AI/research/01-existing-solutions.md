# Phase 1 — Existing Solution Memory (consolidated)

- **Phase:** 1 · **Compiled:** 2026-10-22 22:39 +07 (v1)
- **Prior-art status overall:** Preliminary Scan (≈120 search/fetch calls across 4 subagents + last30days + Pantip scan). Not a complete market audit. **Not finding a competitor ≠ no competitor.**
- **Full rows** (Target User, Mechanism, Limitations, Evidence, Source URL+date, Status, Confidence) live in the raw files; this file consolidates and de-duplicates them, grouped by the Problem Memory cluster they relate to (see `03-problem-memory.md`).
  - `raw/A-travel-global.md` (ES-A-01…16) · `raw/B-travel-thailand.md` (ES-B-01…17) · `raw/C-general-public.md` (ES-C-01…18) · `raw/D-failures-workarounds.md` (ES-D-01…10, ES-D-W01…W07, M-01…08) · `raw/E-social-signal.md` (ES-E-01…06) · `raw/F-pantip-scan.md` (PT-01…13)
- Evidence labels: FACT = source opened; HYPOTHESIS = snippet-only or inference; SPECULATION = weak.

---

## Cluster 1 — Group money: commitment, splitting, collection (→ PM-01, PM-02)

| ES ID | Solution | Type | Mechanism | Key limitation | Status |
|---|---|---|---|---|---|
| ES-A-01 / C-10 / D-10 | Splitwise | partial app | Post-hoc ledger; freemium; daily free cap reported since late 2023 (3–4/day) | Records debt, doesn't collect; creditor still has to remind; cap pushed users to Tricount | FACT (cap as of Dec 2023, single source); current cap UNVERIFIED |
| ES-C-12 / D-W05 | Tricount, Spliit, Lightsplit (web + LINE), Kittysplit | direct app | Shared ledger | PromptPay support unconfirmed | HYPOTHESIS |
| ES-D-W02 | **KhunThong** (KBank/KBTG LINE OA "treasurer" bot) | direct app (LINE) | Bot in LINE group reads bill photo, splits, links K PLUS / any-bank payment, **tags non-payers every morning** | Bank-subsidised funnel (inferred); 650k+ users is a Jan 2021 figure; 2026 activity UNVERIFIED (raw H) | FACT (features, Thairath 2026-07-24) — **closest Thai competitor for collection** |
| ES-D-W03 | MAKE by KBank Cloud Pocket (shared pocket) | partial app | Pre-pool money in shared wallet; even refund of leftovers | Requires all to use same bank app (inferred) | FACT |
| ES-C-11 / D-W04 | Split Bill – Pay Friends (Thai, iOS) | direct app | Per-person PromptPay QR + manual mark-paid | iPhone-only; data on one device; debtor can't see ledger | HYPOTHESIS (snippet) |
| ES-A-02 | Non-refundable deposit + "in-or-out" cutoff | user workaround | Social commitment device | Organizer still chases & holds risk | HYPOTHESIS |
| ES-C-13 | Bank/retailer "polite debt reminder" content | user workaround | Scripts to soften asking | Burden stays with creditor | HYPOTHESIS |
| ES-D-W01 | Google Sheets / Notion trip templates | user workaround | Free-form shared planning + budget | Manual; no payment/commitment link | HYPOTHESIS |
| ES-A-03 | Mindtrip Group Chat | direct app | AI planner inside group chat | Decisions only, not money; monetisation unknown | HYPOTHESIS (vendor) |
| ES-E-01 | PolyTrip | direct app | "Crowd-funded group trip planning with AI" | Low traction (HN 3 pts); details unverified | FACT (exists) |
| ES-E-02 | Squad In Sync | direct app | Dashboard for group trip/event logistics | Unverified traction | FACT (exists) |
| ES-D-01/09, A-14 | Tripnotes, Bucket, OutTrippin, Utrip, Google Trips | failed-abandoned | Free planners hoping for affiliate/funding | Planning is used briefly; can't monetize; Tripnotes shut 2023 | FACT (Tripnotes) / HYPOTHESIS (pre-2020) |

## Cluster 2 — Pay-first trust gap with strangers / small operators (→ PM-03, PM-10, PM-13, PM-14)

| ES ID | Solution | Type | Mechanism | Key limitation | Status |
|---|---|---|---|---|---|
| ES-C-03 | Shopee/Lazada marketplace escrow | other context | Platform holds money until receipt | Doesn't reach FB/LINE/TikTok chat deals or P2P | HYPOTHESIS (gap) |
| ES-B-08 | OTAs (Agoda, Booking, Airbnb) | direct app | Escrow-like trust + commission | Commission; small supply buried | HYPOTHESIS (numbers) |
| ES-C-01/02 | Blacklistseller, Checkgon, Whoscall | direct app | Crowd blacklist of accounts/phones | Reactive; fresh mule accounts come back clean | HYPOTHESIS (snippet) |
| ES-B-06 | Cyber Check / Police Care / thaipoliceonline / 1441 | partial app (gov) | Check/report suspicious accounts | Only already-reported accounts | FACT (tools exist) |
| ES-B-07 | Dept. of Tourism tour-licence registry | non-app | Manual lookup | **Excludes homestays & freelance guides** (inferred) | FACT (exists) |
| ES-C-04 | AOC 1441 + account suspension | non-app | Post-loss tracing/freezing | Freeze rate 47.86% of requested amount (Nov 23–Mar 24) | FACT (single source) |
| ES-C-05/06 | ETDA 1212; สคบ. 1166 | non-app | Complaints / mediation | After the fact; slow | FACT |
| ES-C-18 | Cash on delivery | workaround | Buyer pays courier on delivery | Shifts risk to seller (→ PM-10) | HYPOTHESIS |
| ES-C-14 | Fixzy, Seekster, Q-CHANG, ServisHero | direct app | Vetted technicians, fixed small jobs; Seekster damage guarantee | Large-deposit jobs happen off-platform | HYPOTHESIS |
| ES-D-W06 | Booking villas/tours via FB pages + transfer to personal account | workaround | Trust from comments/page look | Easily faked; police cases | HYPOTHESIS (2 outlets, snippet) |
| ES-D-07 / B-15 | เราเที่ยวด้วยกัน co-pay | gov subsidy | State co-pays; hotel self-reports stay | Broker–hotel collusion; fake stays | FACT (Thai PBS 2021) |

## Cluster 3 — Tourist price opacity & scams (→ PM-04, PM-05, PM-06, PM-21)

| ES ID | Solution | Type | Mechanism | Key limitation | Status |
|---|---|---|---|---|---|
| ES-A-05 / B-01 | Grab | direct app | Upfront fixed price, identity, ratings | Costs more; cars only; not everywhere; taxi-lobby conflict | FACT (switching reported) |
| ES-B-02 | Bolt / InDriver | direct app | Upfront price, lower fee | Uncertain DLT certification (snippet) | HYPOTHESIS |
| ES-A-06 | DLT 1584 hotline + fines | non-app | Complaint → fine | Reactive; 10,687 taxi complaints Oct 23–Feb 24 | FACT (single source) |
| ES-B-03 | Police crackdowns | non-app | Episodic enforcement | Episodic | HYPOTHESIS |
| ES-B-04 | Tourist Police 1155 + "i lert u" | non-app/app | Report incidents | After loss; tourists rarely pursue | FACT |
| ES-A-16 | Using Grab fare as negotiation anchor | workaround | Price reference | No benchmark for tuk-tuk, boats, piers | HYPOTHESIS |
| ES-A-07 / B-05 | Official TDAC site + warnings | gov web | Free form + warnings | Fake sites outrank via ads/SEO; Immigration (Mar 2026): fees US$20–90, ≥10% of arrivals used fake sites | FACT (raw H) |
| ES-A-08 / B-14 | 2PriceThailand FB group | workaround | Crowd-shaming dual pricing | No power; mostly pre/2020 | HYPOTHESIS |

## Cluster 4 — Small supply distribution & platform power (→ PM-07)

| ES ID | Solution | Type | Mechanism | Key limitation | Status |
|---|---|---|---|---|---|
| ES-B-11 | Homestay certification + CBT promotion | policy | Certify supply | **45.3% of 53 certified Isan communities had zero tourists** | FACT (peer-reviewed 2025) |
| ES-B-09 / D-05 | Robinhood (zero-commission food + travel) | failed | Bank-subsidised 0% GP | Lost THB 2.1bn in 2023; closed Jul 2024 | FACT |
| ES-B-10 | Direct-booking engines (SmartOrder etc.) | partial app | Own-site booking | Don't create demand | HYPOTHESIS |
| ES-A-13 | Viator/GYG/Klook | two-sided | 20–30% commission; ranking for commission | Operators lose customer relationship | HYPOTHESIS |
| ES-D-08 | Airbnb Experiences pause/relaunch | other | Host-led marketplace | Generic experiences failed even with Airbnb traffic | HYPOTHESIS |
| ES-D-04 / D-W07 | Couchsurfing paywall → Couchers/BeWelcome forks | failed / workaround | Gift economy monetised later | Supply-side defection | FACT |
| ES-D-06 | IRL (social events) | failed | Growth-led social graph | 95% fake users; shut 2023 | FACT |

## Cluster 5 — Everyday disputes & admin (→ PM-09, PM-11, PM-12, PM-15)

| ES ID | Solution | Type | Mechanism | Key limitation | Status |
|---|---|---|---|---|---|
| ES-C-07 | 2025 rental contract-control announcement | regulation | Deposit ≤3 months; return in 7/14 days | **Excludes dormitories**; tenant must enforce | FACT (2 sources) |
| ES-C-08/09 | Small Claims Court; Legardy free lawyer Q&A | legal | Civil claim / advice | Effort > amount | FACT |
| ES-C-17 | BOT mule-account freeze + 1441 unlock (4h target) | regulation | Chain freezes | Innocent holders frozen | FACT |
| ES-C-16 | Jobsdb/SEEK fraud scanning | partial app | Scan own listings | Social-channel fake jobs uncovered | FACT |
| ES-C-15 | NHSO 1330 / no-slip policies | gov | Policy + hotline | Facilities still demand slips | FACT |

## Cluster 6 — Other travel (lower Thai relevance) (→ PM-16…20, 22)
ES-A-09 (Booking.com rebooking caps), ES-A-10 (EU261 claim agencies 25–50% fee), ES-A-11 (travel insurance), ES-A-12 (AirTag + airline sharing), ES-A-15 (FTC junk-fee rule), ES-B-12/13 (cross-border QR, tourist wallets), ES-B-16 (ferry T&Cs). See raw A/B.

---

## Monetization Evidence (from D) — FACT/HYPOTHESIS as labelled in raw D
| ID | Model | Key numbers | Implication |
|---|---|---|---|
| M-01 | Agoda affiliate | ~4–7% of booking value, paid after checkout | Small, late revenue; no cash in competition window |
| M-03 | Klook affiliate | 2–5% (up to 20% eSIM) — snippet | Unconfirmed terms |
| M-04 | Consumer travel subscription | Tripadvisor Plus $99/yr, Flight Penguin — both abandoned | Avoid subscription on low-frequency travel |
| M-05 | Freemium usage cap | Splitwise Pro ~$5/mo | Gating core action → churn |
| M-06 | Zero-commission marketplace | Robinhood loss THB 2.1bn (2023) | Unsustainable |
| M-07 | Travel app funnel | CleverTap 2023: 13% week-1 repeat transaction; 18% stickiness | Low frequency → CAC must be ~0 |
| M-08 | Free bot subsidised by bank | KhunThong | Thai free utilities often subsidised by larger players |

## Structural lessons (HYPOTHESIS, from D + cross-check)
1. Planning is used briefly and doesn't monetize; booking does (Tripnotes, Bucket, OutTrippin).
2. Low travel frequency kills subscriptions (Tripadvisor Plus, Flight Penguin; CleverTap).
3. Supplier rate parity blocks "cheaper price" mechanisms.
4. Zero-commission/subsidy mechanisms fail on unit economics or invite self-attestation fraud (Robinhood; เราเที่ยวด้วยกัน).
5. Monetizing goodwill/core utility action causes defection (Couchsurfing, Splitwise).
6. Thai coordination is LINE-native; payment is PromptPay/bank transfer (KhunThong, Cloud Pocket).
7. Social-commerce trust signals are easily faked.
8. Vanity metrics hide missing network effects (IRL).
