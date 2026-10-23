# Generation 1 — Track A (Memory-Guided) Idea Cards

- **Created:** 2026-10-22 ~23:00 +07 · Generator: main thread (Opus 5.5)
- **Inputs:** `03-problem-memory.md`, `04-problem-graph.md`, `01-existing-solutions.md`, `02-common-baseline.md` (RFs)
- **Status of every card:** Prior-art = NOT VERIFIED (Critic pending) · Validation = NOT VALIDATED
- All mechanisms keep money **peer-to-peer** (PromptPay QR / direct transfer); the app never holds funds (constraint, raw G).

---

### G1-A01 — PactLink: proof-of-page booking pact for small operators
- **Operator:** Problem Fusion (PM-03 ↔ PM-27) + Incentive Redesign · **Root causes:** RC-A, RC-B
- **Problem:** Travellers fear prepaying deposits to homestays/vans/tours found on Facebook because fake pages copy real ones (Koh Si Chang 100+ victims; Vranda 70+ victims; fake page 11k followers vs real 425 — FACT, raw I). Honest operators still need deposits to deter no-shows, but chat bookings have no written terms, so penalties are unenforceable (lawyer answers, FACT, raw I). Both sides are stuck; OTAs resolve it for commission.
- **Target User:** Paying side = small Thai operators selling via FB/LINE (homestays, pool villas, van/day-trip operators with licences). Free side = their customers.
- **Core Mechanism:** A **page-control handshake**: the operator proves control of their real Facebook page/LINE OA by posting a one-time code the system checks once; the system then binds a public "pact" link to that page. Each booking = a pact page showing (1) the page it was issued from, (2) cancellation/no-show terms both sides tap to accept **before** paying, (3) the operator's registered business-name PromptPay QR (money goes straight to the operator). A traveller who received a pact link from a fake page sees that it is not bound to the page they are chatting with. → Trust attaches to *control of the real channel*, not to follower counts or comments (which are faked); terms are recorded *before* money moves, making deposits enforceable.
- **Closest existing approach:** OTA escrow (trust + commission); Meta Verified (paid badge on the page, not per-booking terms); blacklist sites (after loss). Difference: per-booking, pre-payment, channel-bound proof + mutual terms, no money holding, no commission.
- **Expected Value:** Travellers can prepay with lower fear; operators get enforceable deposits and a reason for customers to book direct. **Key assumption:** travellers will actually open/check a pact link before paying (behaviour change), and fake pages can't easily clone the flow (e.g., by issuing their own pact links from their fake page — mitigated because the pact shows *which* page it's bound to; risk remains if travellers don't compare).
- **Revenue path (HYPOTHESIS):** Operator subscription (e.g., monthly fee for unlimited pacts + no-show records) — operators are a *frequent* actor (unlike travellers, RC-F). Benchmark willingness: Meta Verified ~280–330 THB/mo (snippet), OTA commissions.
- **Feasibility:** High — Supabase auth + tables (operators, pacts, acceptances), PromptPay QR generation (EMVCo payload, free libs), page-code check can be manual-confirm for demo. Demo: operator creates pact → traveller opens link, sees bound page + terms, accepts, pays via QR, uploads slip.
- **Uses AI:** No.

### G1-A02 — QuorumTrip: assurance-contract trip pledges with auto slot release
- **Operator:** Problem Fusion (PM-02 → PM-01) + Temporal Transformation · **Root causes:** RC-A, RC-D
- **Problem:** Group trips stall because nobody commits; then one organizer front-pays and chases friends (82.5% of organizers burdened — FACT single source; Pantip dropouts 12h before departure, pre-collection pushback — PT-07, PT-26). Ledgers (Splitwise, KhunThong) act after money is owed.
- **Target User:** Thai friend groups (students, young workers) planning trips; the organizer.
- **Core Mechanism:** An **assurance contract** (all-or-nothing threshold, like crowdfunding) without holding money: members pledge "in" to a trip option with a deadline and a minimum headcount; **no money moves until the threshold is reached**; at that moment each pledger gets a personal PromptPay QR (to the organizer) and a pay-by time; unpaid pledges are **automatically released to the waitlist** and announced by the system, not by the organizer. Fairness rules (driver counted? fuel split? who covers fines) are chosen from templates and accepted as part of the pledge. → Commitment and payment are re-coupled in time; the social cost of chasing moves from the organizer to the rule set.
- **Closest existing approach:** KhunThong (tags non-payers *after* expenses); Splitwise (ledger); PolyTrip ("crowd-funded group trip planning" — **close prior art, must be checked by Critic**). Difference vs ledgers: acts before booking; vs PolyTrip: unknown until checked.
- **Expected Value:** Trips get decided; organizer doesn't front cash. **Key assumption:** friend groups accept a "rules-based" flow among friends instead of informal trust (social acceptability).
- **Revenue path (HYPOTHESIS):** Affiliate commission at the **commit moment**, which is also the booking moment (Agoda ~4–7% after stay; Klook activities) — addresses "planning doesn't monetize" (D lesson 1) by attaching to booking. Risk: affiliate revenue is small and paid late (M-01).
- **Feasibility:** High — trip page, pledge table, threshold trigger (Supabase function/cron), QR generation, waitlist. Demo with 4 test accounts.
- **Uses AI:** No.

### G1-A03 — TwoKey Room Record: co-signed move-in condition record for dorms
- **Operator:** Problem Fusion (PM-09 + PM-13 via RC-B) + Constraint Inversion (instead of the tenant proving damage didn't happen, both sides co-sign the state at move-in) · **Root causes:** RC-B, RC-D
- **Problem:** Dorm deposits are forfeited with disputed itemised deductions (3,000 THB fully deducted for AC cleaning/bulb/faded wall — PT-17); dorms are excluded from the 2025 rental rule and the official dorm lease form has no deposit return rule (FACT, raw G); 1,655 rental complaints with deposit forfeiture top (FACT, 2 sources). Lawyers tell landlords to keep itemised evidence (raw I) — both sides lack a neutral record.
- **Target User:** Paying side = dorm/apartment owners & managers (many rooms, frequent move-ins). Free side = tenants.
- **Core Mechanism:** A **two-key record**: at move-in, each checklist item (walls, AC, bulbs, furniture) is photographed and *both* parties confirm via their own link (timestamped, immutable once both keys sign). At move-out, the same checklist is re-shot; the system produces a side-by-side diff that **only allows deductions on items whose state changed**, plus a countdown to the deposit-return date and an auto-drafted letter if overdue. → Converts a "he-said/she-said" after-the-fact dispute into a pre-agreed baseline; the honest landlord gains defensible deductions, the tenant gains protection where the law is silent.
- **Closest existing approach:** Paper checklists; LINE photos (unilateral, scattered); overseas inventory/check-in report apps (UK-style inventory clerks — **cross-domain prior art, Critic to check Thai equivalents**). Difference: bilateral co-sign + diff-constrained deductions, built for Thai dorms.
- **Expected Value:** Fewer disputes, faster turnover, trust signal for dorm marketing ("TwoKey-certified dorm"). **Key assumption:** dorm owners want fewer disputes more than the option to keep deposits (incentive misalignment may make bad landlords refuse; honest ones adopt → selection effect).
- **Revenue path (HYPOTHESIS):** Per-room or per-building subscription for owners/managers; free for tenants. Possible later: listing badge for dorm-search sites.
- **Feasibility:** High — checklist templates, Supabase storage for photos, dual-confirmation flow, diff view, PDF letter. Demo end-to-end with two browsers.
- **Uses AI:** No (optional AI photo-diff later; not required).

### G1-A04 — Fair-Fare Pledge Card for tuk-tuk / boat / songthaew drivers
- **Operator:** Hidden Stakeholder (honest drivers) + Incentive Redesign (one-shot → repeat game) · **Root cause:** RC-C
- **Problem:** Tourists can't know fair prices for non-metered transport; 48% of reported fraud cases in Bangkok involve taxis/rental cars (FACT); honest drivers suffer reputational spillover; Grab covers cars only (FACT). Locals also ask fair fares before riding (PT-21, PT-23).
- **Target User:** Honest non-metered drivers (tuk-tuk, longtail boat, songthaew, island transfer) + tourists.
- **Core Mechanism:** Each driver has a personal QR card. Before boarding, the passenger scans → sees the driver's **own pre-published fixed fares** for common routes (self-binding commitment) next to a reference range; after the ride, the passenger taps "fare matched / didn't match". The driver accumulates a **portable commitment record** visible to the next passenger. → Turns a one-shot interaction into a repeated game for the individual driver; honest drivers can differentiate themselves at the curb.
- **Closest existing approach:** Grab (platform sets price; cars only); official rate cards (static, old); review sites (place-based, not driver-based). Difference: driver-owned, self-bound fares + per-driver kept-promise record, no booking platform.
- **Expected Value:** Tourists choose committed drivers; honest drivers earn more rides. **Key assumption:** enough honest drivers adopt in a demo area and tourists scan before boarding.
- **Revenue path (HYPOTHESIS):** Hotels/hostels pay to list vetted partner drivers at their door; or drivers pay a small monthly fee for the card. Weak — needs validation.
- **Feasibility:** High (QR profile, fare table, confirmation). Cold-start risk for real use; demo works with 1 driver profile.
- **Legal flag:** Metered taxis must use the meter → **scope excludes metered taxis** (fixed fares there would encourage illegal behaviour). HYPOTHESIS on exact rules for tuk-tuk/boat fares — Critic to check.
- **Uses AI:** No.

### G1-A05 — Trust Relay: verified operators refer travellers to the next verified operator
- **Operator:** Decentralization + Resource Recombination (high-risk, reasoned) · **Root causes:** RC-E, RC-A
- **Problem:** Small operators are invisible (45.3% of certified Isan homestay communities had zero tourists — FACT) and trust is concentrated in OTAs (20–30% commission for tours; Robinhood's 0% model failed — FACT). Travellers in secondary cities need the *next* step (van, guide, homestay) and find it via Facebook, where impersonation lives.
- **Target User:** Small operators in one region (homestay ↔ van ↔ local guide ↔ restaurant) + their travellers.
- **Core Mechanism:** Operators who already served a traveller hand them a **signed referral** to the next operator in a local trust network ("this van driver is who we use"). The referral carries the referrer's identity and is valid only for that traveller; the next operator pays a small referral fee **directly** to the referrer when the booking completes. → Trust travels along the real itinerary from a party the traveller has already met in person, replacing anonymous page reputation; small operators collectively replace the OTA's trust function without a central marketplace.
- **Closest existing approach:** Informal word-of-mouth/commission kickbacks (untracked; can become kickback scams — PM-06); OTAs; CBT networks. Difference: explicit, traveller-visible, signed referrals; fee is disclosed (not a hidden kickback).
- **Expected Value:** Operators gain a demand channel without OTA; travellers get vetted next steps. **Key assumption:** operators will refer to each other honestly, and disclosed referral fees don't turn into PM-06-style steering.
- **Revenue path (HYPOTHESIS):** Small platform cut of referral fees, or network subscription per operator.
- **Feasibility:** Medium — operator profiles, referral tokens, completion confirmation. **Cold start is severe** (needs several operators); demo needs seeded profiles.
- **Uses AI:** No.

### G1-A06 — Arrive-Right: official-only Thailand arrival checklist monetized on adjacent needs
- **Operator:** Constraint Inversion (don't fight scam sites; out-serve the high-intent moment) + Remove Dependency (no account, no app) · **Root cause:** RC-C
- **Problem:** Fake TDAC sites charge US$20–90 for a free form; ≥10% of foreign arrivals used fake sites (Immigration, Mar 2026 — FACT). Warnings don't reach travellers at search time.
- **Target User:** Foreign tourists preparing to fly to Thailand.
- **Core Mechanism:** A free, no-login pre-arrival checklist that **only deep-links to official government forms** (TDAC, visa) with a step-by-step walkthrough, plus a "verify this URL" checker for arrival-card sites; monetized by **adjacent, genuinely needed** items (eSIM, airport transfer, insurance) via affiliates — never by charging for the form. → Captures the same intent the scammers buy, but converts it into honest affiliate revenue.
- **Closest existing approach:** Government site + news warnings; travel blogs. Difference: dedicated official-only flow + URL check; mechanism novelty is **low** (content/SEO play) — included for revenue clarity and coverage.
- **Expected Value:** Tourists avoid fake fees. **Key assumption:** can win search/social traffic vs paid scam ads with zero budget (major distribution risk).
- **Revenue path (HYPOTHESIS):** Affiliates (Klook eSIM up to 20% — snippet; transfers). Trust risk if monetization feels pushy.
- **Feasibility:** Very high (static site + checklist + URL list).
- **Uses AI:** No.

---

## Track A coverage self-check
- Mechanism change: A01, A02, A03, A04 ✓ · Reduces dependency: A06 (no login/app), A01 (no OTA) ✓ · No AI: all ✓ · No new platform: A06 (+A04 QR card) ✓ · Single problem deep: A04 ✓ · Workflow/incentive change: A02, A04, A05 ✓ · High-risk reasoned: A05 ✓
- Track A is concentrated on RC-A/RC-B (A01–A03) — family concentration to be checked after Track B merge.
