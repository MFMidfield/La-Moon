# Phase 3 — Problem Memory (consolidated)

- **Phase:** 3 · **Compiled:** 2026-10-22 22:39 +07 (v1)
- **Sources:** raw A/B/C/D/E/F (see `01-existing-solutions.md` for file list). Raw problem IDs (P-A-xx, P-B-xx, P-C-xx, PT-xx) are kept for traceability.
- **Merging rule:** raw problems were merged only when they share the same affected party + trigger + causal mechanism (not keyword similarity).
- **Problem type:** Observed (data/field study) · Reported (news/complaints/posts) · Inferred · Speculative.
- **Evidence Status:** FACT / HYPOTHESIS / SPECULATION. **No hypothesis upgraded to fact without a new opened source.**

## Practical filter (user rule ก — judging criteria applied from Phase 3)
Ratings are **H / M / L / ?** (no numeric scores, to avoid false precision). `?` = UNKNOWN, not low.

| Axis | Meaning | Judging link |
|---|---|---|
| **Ev** | Evidence quality that the problem is real & sizable | Problem importance (20) |
| **Mech** | Clarity that current solutions fail at the mechanism level (not UI) | Novelty preference (Strong Mechanism) |
| **Build** | 1 full-stack dev + 1 tester can demo a working core flow in ~1.5 build days, free tools, no money-holding licence | Completeness (30) |
| **Rev** | Plausible revenue path with some WTP signal | Feasibility & business model (30) |
| **Trav** | Travel/tourism bonus | User preference |

**Tier 1** = carry into Generation as primary · **Tier 2** = secondary / fusion material · **Tier 3** = parked (reason recorded).

---

## Summary table

| PM | Problem (short) | Raw IDs | Ev | Mech | Build | Rev | Trav | Tier |
|---|---|---|---|---|---|---|---|---|
| PM-01 | Group money: payer-first risk, unclear fairness rules, creditor bears cost of asking | A-01, C-05, PT-01…07, PT-11/12, D-W02…W05 | M | H | H | L–M | ✓ | **1** |
| PM-02 | Group trip decision coordination falls on one person | A-02, PT-13 | M | M | H | L | ✓ | 2 |
| PM-03 | Pay-first trust gap with strangers/small operators (fake tours/stays, deposits, chat commerce) | B-03, C-01, D-W06, PT-08…10 | H | H | M | M | ✓ | **1** |
| PM-04 | Tourist ground-transport price opacity & overcharging | A-03, B-01 | H | H | H | L–M | ✓ | **1** |
| PM-05 | Fake "official" sites charging for free TDAC form | A-04, B-02 | H | M | H | L | ✓ | 2 |
| PM-06 | Commission-steering scams (touts, gem shops, zero-dollar tours) | B-07 | M | H | M | ? | ✓ | 2 |
| PM-07 | Small operators/homestays invisible; OTA dependence; zero-commission collapses | B-04, B-05, A-09 | H | H | L | M | ✓ | 2 |
| PM-08 | Tourist payment-rail mismatch (PromptPay vs foreign wallets; cash 78%) | B-06 | H | M | L | ? | ✓ | 3 |
| PM-09 | Rental/dorm deposit forfeiture; tenant bears burden of proof | C-02 | H | H | H | L–M | ✗ | **1** |
| PM-10 | COD refusals shift risk to small online sellers | C-03 | L | M | M | M | ✗ | 2 |
| PM-11 | Innocent accounts frozen by anti-mule measures | C-04 | H | M | L | L | ✗ | 3 |
| PM-12 | Fake job/part-time listings → victims become mule suspects | C-07 | H | M | M | L | ✗ | 3 |
| PM-13 | Contractor deposits not tied to milestones | C-08 | L–M | H | M | ? | ✗ | 2 |
| PM-14 | Non-refundable prepaid service packages | C-09 | M | M | M | ? | ✗ | 3 |
| PM-15 | Gold Card referral-slip bouncing | C-06 | H | H | L | L | ✗ | 3 |
| PM-16 | Flight-compensation claims rejected; agencies take 25–50% | A-05 | M | H | M | H | ✓ | 3 (low Thai relevance; crowded) |
| PM-17 | OTA host cancellations, capped compensation | A-06 | L | M | L | ? | ✓ | 3 |
| PM-18 | Lost bags; airlines ignore tracker data | A-07 | M | M | L | ? | ✓ | 3 |
| PM-19 | Travel-insurance exclusions misunderstood | A-08 | M | M | M | ? | ✓ | 3 |
| PM-20 | Unreliable accessibility info for lodging | A-10 | M | H | M | ? | ✓ | 3 (data cold start; no Thai data) |
| PM-21 | Opaque dual pricing for foreigners | A-11, B-08 | L | M | H | L | ✓ | 3 |
| PM-22 | Island ferry connection risk pushed onto travellers | B-11 | L–M | H | M | ? | ✓ | 2 |
| PM-23 | Secondary-city last-mile transport without a car | B-10 | L | M | M | ? | ✓ | 2 |
| PM-24 | Subsidy fraud via self-attested stays | B-09, D-07 | H | H | L | L (B2G) | ✓ | 3 (mechanism lesson only) |
| PM-25 | Household debt overload | C-10 | H | L | L | L | ✗ | 3 (context) |
| PM-26 | Elderly-care coordination among siblings | C-11 | L | ? | H | ? | ✗ | 3 (speculative) |
| PM-27 | Small operators' no-shows: deposits are their only enforcement, terms rarely written in LINE/FB bookings | I-S2 | L–M | H | M | ? | ✓ | 2 |

---

## Tier 1 — full Problem Fingerprints

### PM-01 — Group money: the payer-first carries the risk; fairness rules are improvised; the person owed bears the cost of asking
- **ID / Timestamp:** PM-01 · Phase 3, 2026-10-22
- **Affected:** Trip organizers and car owners in friend groups; friends who lend/split small sums; roommates. Hidden: the driver/car owner whose cost (fuel, wear) is negotiated ad hoc (PT-01–04).
- **Trigger:** A shared cost must be paid before everyone commits (villa, van, tour) or after the fact (fuel, food with discounts/service charge); a member drops out (PT-07: cancelled 12h before departure).
- **Proximate cause:** One person pays; others "owe" informally; rules for who-pays-what (driver counted? fuel vs meals?) are argued case-by-case.
- **Possible root cause:** (1) Commitment and payment are decoupled in time; (2) no shared, agreed **fairness rule** set before spending; (3) enforcement depends on the creditor asking, which carries social cost. (HYPOTHESIS)
- **Current behavior:** Splitwise/Tricount ledgers; KhunThong LINE bot that tags non-payers; bank shared pockets (pre-pooling); per-person PromptPay QR; deposits + cutoff dates; polite reminder scripts; Pantip posts asking what's "fair".
- **Harm:** Organizer absorbs unpaid shares; friendships strained; 82.5% of organizers felt burdened; trips 15.6% over budget (Skyscanner Korea n=100, FACT single source, small sample).
- **Where current solutions fail:** Ledgers record but don't create commitment before booking; reminders still come from (or on behalf of) the creditor; fairness rules aren't agreed up front; Splitwise free cap (Dec 2023, single source); KhunThong is the closest Thai solution and already automates reminders → **differentiation must be at commitment/fairness-rule level, not reminders** (HYPOTHESIS).
- **Who benefits / loses:** Stalling debtors, booking platforms (single payer) benefit; organizers/creditors lose.
- **Frequency/severity:** Pantip: ≥6 friend-loan threads Oct 2025–Feb 2026; 6 fairness-rule threads 2024–26 (fuel split, driver counted?, two-car trips, rental-car fines/accidents — PT-01–04, PT-24/25); organizer pre-collection pushback (PT-26) (FACT that posts exist; not a frequency measure). Klook 10-market survey (planning time) relates to PM-02.
- **Problem type:** Reported.
- **WTP signal:** Weak–moderate. Splitwise Pro exists; but monetizing core utility causes defection (D lesson 5); Thai free alternatives subsidised by banks (KhunThong). → Revenue must come from elsewhere (e.g., booking side) — HYPOTHESIS.
- **Evidence Status:** FACT (survey numbers, Pantip posts, KhunThong features) · HYPOTHESIS (root cause). **Confidence:** Medium.
- **Uncertainty:** No Thai frequency data; KhunThong: 650k+ users is a **Jan 2021** figure; no 2025–26 evidence it is active or discontinued (raw H C5); whether Thai users want a separate tool vs LINE-native.
- **Practical filter:** Ev M · Mech H · Build H · Rev L–M · Travel ✓ → **Tier 1** (revenue is the weak link).

### PM-03 — Pay-first trust gap with strangers and small operators
- **Affected:** Thai travellers booking tours/villas/vans via Facebook/LINE/TikTok and paying by transfer; buyers in chat commerce/P2P; **honest small operators** (homestays, local guides, van operators) who are discounted as possible scammers (lemons problem).
- **Trigger:** A cheap package/stay/van advertised on social media requiring a deposit to a personal account; P2P goods requiring payment before delivery.
- **Proximate cause:** No intermediary; seller identity = a bank account + page appearance; scammers copy pages and disappear.
- **Possible root cause:** (1) No low-cost verification layer for micro-operators (licence registry excludes homestays/freelance guides); (2) escrow exists only inside commission-charging OTAs/marketplaces → market splits into "safe but expensive" vs "cheap but unverifiable"; (3) blacklists only learn after victims report (mule accounts rotate). (HYPOTHESIS, consistent across B, C, D)
- **Current behavior:** Check blacklists (Blacklistseller, Checkgon), Cyber Check app, licence registry, ask for more photos, COD, report to 1441 after loss; or retreat to OTAs and pay markup.
- **Harm:** Lost deposits; honest operators lose conversions; COD shifts risk to sellers (PM-10, second-order).
- **Where current solutions fail:** Reactive; doesn't reach chat commerce; registry excludes homestays; escrow requires a licence (RF-08).
- **Who benefits / loses:** Scammers, mule recruiters, OTAs (capture trust-seeking demand) benefit; travellers, honest small operators lose.
- **Frequency/severity:** ETDA 1212: online shopping = 14,238 of 39,112 complaints in **2025** (36.40%) — FACT (raw H, supersedes 2024: 15,050/35,358, 42.56%); AOC 1441: fake buying/selling = largest suspended-account category 30,858/102,925 (29.98%) Nov 2023–Apr 2024 — FACT; สคบ. FY2568 online shopping = #1 — FACT. Travel-specific: >฿1.2bn foreign-visitor scam losses Jan–Oct 2025 is reported only by Chiang Rai Times (low-reliability signs; **UNVERIFIED — do not cite**, raw H); fake villa/tour cases (snippet); no reliable domestic travel-scam statistic found (raw H C9). Pantip deposit disputes PT-08–10.
- **Supply-side evidence (raw I, FACT opened):** impersonation of real operators — fake Khao Yai villa page ~11,000 followers vs real page 425, 160+ people messaged the fake; Koh Si Chang resort: 100+ victims (deposits 1,000–2,000 THB), fake pages reappear after reports (Thai PBS Verify, 11 Apr 2025); Vranda Resort Pattaya: 70+ victims, >400,000 THB, 20+ mule account names. Honest operators' legitimacy routine = company-name account + "one official page" + video calls. Official advice ("check followers", "book via booking sites") **pushes demand to OTAs** → second-order harm to direct-booking small operators (HYPOTHESIS).
- **Mirror problem (see PM-27):** operators need prepaid deposits to deter no-shows, while travellers fear prepaying strangers → **two-sided trust deadlock**; current resolution = route money through commission platforms (HYPOTHESIS, raw I).
- **Problem type:** Observed (official stats) + Reported.
- **WTP signal:** Indirect — people pay OTA/marketplace markups for protection; operators already pay OTA commission (FACT that commission exists; amounts unverified). No direct WTP for third-party verification (HYPOTHESIS).
- **Evidence Status:** FACT (scale, 3 independent official sources) · HYPOTHESIS (lemons mechanism; escrow gap). **Confidence:** High (scale) / Medium (mechanism).
- **Legal (raw G):** escrow/collecting money for sellers = licensed payment service (FACT, MoF 2018 list); unlicensed tour selling punishable (FACT); no public online homestay register found → verification gap for homestays confirmed at search level.
- **Uncertainty:** Whether a coordination-only PromptPay-QR flow needs any licence (HYPOTHESIS: no); PDPA/defamation risk of reputation data; domestic travel-scam loss numbers missing.
- **Practical filter:** Ev H · Mech H · Build M (only if no money holding) · Rev M · Travel ✓ → **Tier 1**.

### PM-04 — Tourist ground-transport price opacity & overcharging (Thailand)
- **Affected:** Short-stay foreign tourists (Bangkok, Pattaya, Phuket, Samui); hidden: honest metered drivers (reputational spillover). **Thai locals also report it** (Pantip PT-21 Ekkamai inflated fare 2025; PT-23 asking fair fare before riding) → a more frequent user segment may exist (HYPOTHESIS). PT-20 (2026) reposts a ranking of Thailand 3rd worldwide for taxi overcharging — source report unidentified, may differ from Mastercard "top-4".
- **Trigger:** Airport/pier arrival; hailing taxi/tuk-tuk/boat at hotspots or night.
- **Proximate cause:** Meter refusal, flat inflated quotes, long routes.
- **Possible root cause:** One-shot game + information asymmetry on fair price; tourists won't pursue complaints; weak enforcement ("culture of impunity", ATTA — FACT quote); no benchmark for tuk-tuks/boats/piers.
- **Current behavior:** Grab/Bolt (pay premium), negotiate using Grab fare as anchor, 1584 hotline.
- **Harm / severity:** **48% of reported fraud cases in Bangkok involve taxis/rental cars** (Mastercard, ~15 May 2025 — CONFIRMED, raw H; the report does **not** rank cities, so "top-4" is withdrawn); 10,687 taxi complaints to 1584 in Oct 2023–Feb 2024 (FACT single source).
- **Where current solutions fail:** Grab: cars only, pricier, not everywhere; hotlines reactive; crackdowns episodic.
- **Who benefits / loses:** Overcharging drivers, touts, "pier cartels" (unverified) benefit; tourists, metered drivers, Thailand's brand lose.
- **WTP signal:** Tourists pay Grab premium for certainty (FACT qualitative, The Nation/ANN).
- **Driver side (raw I, FACT):** Bangkok fare from 16 Jan 2023: flagfall 35 THB (small car); associations asked +25% but got +7%, and linked cost pressure to passenger refusals (Thai PBS, 7 Sep 2023). → Regulated fares below drivers' perceived cost are a **root-cause contributor** to meter refusal (HYPOTHESIS).
- **Evidence Status:** FACT (complaints, Mastercard figure via 2 outlets) · HYPOTHESIS (mechanism). **Confidence:** High (exists) / Medium (numbers).
- **Uncertainty:** Price data acquisition (cold start); tourist reach before the encounter; low per-tourist frequency; who pays (tourist vs hotel vs driver) — UNKNOWN.
- **Practical filter:** Ev H · Mech H · Build H · Rev L–M · Travel ✓ → **Tier 1** (revenue model unclear).

### PM-09 — Rental/dorm deposit forfeiture; tenant carries the burden of proof
- **Affected:** Tenants of dorms/apartments/condos, esp. students & young workers; hidden: honest landlords (general distrust).
- **Trigger:** Move-out; landlord deducts/keeps deposit citing paperwork or wear.
- **Proximate cause:** Landlord holds the money; tenant must initiate dispute; no move-in condition record.
- **Possible root cause:** Incentive misalignment (keeping costs nothing unless tenant acts); information asymmetry (tenants don't know 7/14-day rule); **regulatory gap: 2025 announcement excludes dormitories**.
- **Current behavior:** Save LINE chats/photos; demand letter; สคบ. complaint; Small Claims Court.
- **Harm:** Up to 3 months' rent at stake; documented case 11,800 → 2,080 THB offered (FACT).
- **Frequency/severity:** สคบ. 1,655 rental complaints 2025–May 2026, deposit forfeiture #1 (FACT, **single source**). Pantip PT-14–19 (2023–2026): disputes over itemised deductions (e.g., 3,000 THB fully deducted for AC cleaning/bulb/faded wall), utility markups (10 THB/unit), refund delays, notice periods; move-in cash 8,000–10,000 THB for a ~4,000 THB room (FACT that posts exist; anecdotal).
- **WTP signal:** Weak for tenants per incident; possible from landlords/agents wanting fewer disputes (HYPOTHESIS, no evidence).
- **Evidence Status:** FACT (rules — 2 sources; case; complaint count single source) · HYPOTHESIS (mechanism). **Confidence:** High.
- **Landlord side (raw I):** lawyers advise landlords to keep itemised deduction lists with evidence + chat records; without move-in photos deductions can be challenged → **both sides benefit from a neutral record** (HYPOTHESIS).
- **Legal (raw G):** official 2016 dorm lease form has **no deposit cap or return deadline**; 2025 rental rules confirmed (Tilleke): 3+ units, deposit back in 7 days (14 with damage), **dorms & hotels excluded** → dorm tenants have the weakest protection (FACT).
- **Uncertainty:** Dorm law details beyond the lease form not fully read; payer unclear; raw I cites 2018 OCPB rules for landlords with **5+ units** vs 2025 announcement **3+ units** — reconcile (likely 2025 widened scope; UNVERIFIED).
- **Practical filter:** Ev H · Mech H · Build H · Rev L–M · Travel ✗ → **Tier 1** (non-travel; included because of strong evidence + build fit; shares root cause with PM-03/PM-13).

---

## Tier 2 — condensed fingerprints

| PM | Affected · Trigger | Mechanism failure (root cause) | Evidence (status) | Why Tier 2 |
|---|---|---|---|---|
| PM-02 | Group-trip organizer · choosing dates/budget/activities | Unstructured chat; "anything is fine" then objections; free-rider on coordination cost | Klook n=2,725: ~75% >10h planning (FACT vendor survey); Skyscanner Korea (FACT, n=100) | Crowded (Mindtrip, PolyTrip, Squad In Sync); planners don't monetize (FACT Tripnotes). Useful for fusion with PM-01 |
| PM-05 | All foreign arrivals · googling arrival card | Ads/SEO capture new mandatory-form intent; govt doesn't advertise | US$10 fee (May 2025); MOTS warning 17 Oct 2025 (no amount); **US$20–90 + ≥10% of foreign arrivals used fake sites** (Immigration via Bangkok Post, 30 Mar 2026) — FACT (raw H) | Monetization conflicts with trust |
| PM-06 | Tourists; licensed guides · "temple closed" / zero-dollar tours | Kickback incentive: intermediary paid by shop, not traveller | Chiang Rai Times typology (FACT); zero-dollar details (snippet) | Revenue unknown; point-of-encounter reach hard |
| PM-07 | Small operators/homestays · need demand | Supply-push certification without demand channel; OTA power; zero-commission unsustainable | 45.3% inactive (FACT peer-reviewed); Robinhood loss (FACT) | Two-sided cold start in 62h; owners cash-poor |
| PM-10 | Small online sellers · COD refused | COD fixes buyer distrust by shifting risk to seller (2nd-order of PM-03) | Legal Q&A snippets (HYPOTHESIS) | Weak evidence; PDPA risk of buyer blacklists |
| PM-27 | Small operators (restaurants, homestays, vans) · customer no-show | No-show penalty enforceable only if terms set before booking; chat bookings lack written terms → deposit by transfer is the only lever, which collides with traveller prepay fear (PM-03) | Restaurant owner case + lawyer answers (FACT, Legardy 2023/2025); no Thai van/tour data | Thai data thin; but closes the PM-03 loop |
| PM-13 | Homeowners · large contractor deposit | Payment not tied to verified progress | สคบ. real estate #3 (FACT, not contractor-specific); snippets | Evidence thin; same root cause as PM-03/09 |
| PM-22 | Island-hoppers · weather cancellation | No party owns end-to-end connection; T&Cs push risk to traveller | Operator T&Cs (snippet) | Evidence thin; live data access unknown |
| PM-23 | Car-less Thai travellers in เมืองรอง · arrival by bus/train | Thin demand; informal drivers not discoverable | Snippets only (HYPOTHESIS, Low) | Needs manual data; evidence weak |

## Tier 3 — parked (reason)
PM-08 payments regulated; PM-11 fix requires bank/regulator; PM-12 liability/accuracy risk, no WTP; PM-14 shallow research; PM-15 needs NHSO integration, no WTP; PM-16 low Thai relevance + crowded; PM-17/18 need platform/airline leverage; PM-19 LLM cost + liability; PM-20 no Thai data, data cold start; PM-21 policy grievance, low WTP; PM-24 B2G; PM-25 context only; PM-26 speculative.

---

## Cross-cutting evidence notes
- **Strongest official data** (FACT, multi-source): online-purchase fraud scale (ETDA/AOC/สคบ.) → PM-03.
- **Strongest field study:** homestay inactivity 45.3% (single peer-reviewed) → PM-07.
- **Thai voice-of-user:** only Pantip titles/descriptions (raw F); Facebook groups & Reddit not reached.
- **WTP:** No direct Thai survey-based WTP found in any cluster. All WTP signals are revealed-behaviour (Grab premium, OTA commission, fake TDAC fees, marketplace fees) — HYPOTHESIS for transfer to a new product.

---

## Generation 2 additions (2026-10-22 ~23:25, from raw J & K — Sonnet subagents)

| PM | Problem (short) | Raw IDs | Ev | Mech | Build | Rev | Trav | Tier | Key evidence (status) |
|---|---|---|---|---|---|---|---|---|---|
| PM-28 | Concert/fan-event ticket scams (pay-first to resellers; mule accounts incl. shell companies) | P-J-07, P-K-01 | H | H | M | L–M | ✓ (fan travel) | **1** | The Standard 10 Jun 2026: 400+ victims ~1.22M THB (FACT); BTS "Arirang" ~120 victims ~1.23M THB; police: X network 350+ accounts, 739 complaints ~3.7M THB (summary-only, HYPOTHESIS) |
| PM-29 | Ferry weather cancellations; operators exclude liability for missed onward connections | P-J-06 (≈PM-22) | M | H | H | L–M | ✓ | 2 (upgraded evidence for PM-22) | Lomprayah T&Cs (FACT); no frequency data |
| PM-30 | DTV/long-stay foreigners can't open Thai bank accounts → insurance payouts/rent friction | P-J-04 | M | H | L | ? | ✓ | 2 | 2 opened sources; AML de-risking after mule crackdowns (second-order of PM-11) |
| PM-31 | Solo/female travellers: unvetted late-night rides & one-on-one tours, no local responder | P-J-01 | L | M | H | ? | ✓ | 2 | No official statistic; severity high, frequency unknown |
| PM-32 | Provider-side English confidence in secondary cities | P-J-02 | L–M | L | M | L | ✓ | 3 | Small study (n=50) |
| PM-33 | Thai travellers refused entry at South Korean immigration | P-J-03 | L | M | M | ? | ✓ | 3 | Counts unverified |
| PM-34 | TM30 address-reporting burden on landlords/tenants | P-J-05 | L | M | M | L | ✓ | 3 | Evidence 2019–20 only |
| PM-35 | Festival/hotspot transport price surges (Songkran, concerts) | P-J-08 | L | M | H | ? | ✓ | 2 | Viral posts only. **Correction (gen2 critic-trackB):** the cited post-concert tuk-tuk case was 400 THB, not 4,000; "police fined" unsupported |
| PM-36 | Group event money & headcount (concerts, weddings, reunions) | P-K-02 | L | M | H | L | ✗ | 3 | No Thai data (overlaps PM-01) |
| PM-37 | Car owner costs/liability in friend road trips | P-K-03 | L | M | H | L | ✓ | 3 | No Thai data beyond Pantip PT-01–04, PT-24/25 (overlaps PM-01) |
| PM-38 | Freelancer non-payment / scope creep | P-K-04 | L–M | M | H | M | ✗ | 2 | Legal blog (FACT, raw Track B); no prevalence |

**Trust-anchor finding (raw K, FACT/HYPOTHESIS mix):** every free Thai anchor (DBD lookup, DOT licence search, payee name shown at PromptPay confirm) proves an entity/account **exists**, not that the person chatting **is** that entity. DBD has no public per-company API; DOT licence search exists; no public hotel-licence lookup found; ThaID/NDID access for small apps unconfirmed.
