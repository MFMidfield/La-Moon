# Generation 1 — Report

- **Completed:** 2026-10-22 23:05 +07
- **Files:** `trackA-ideas.md`, `trackB-ideas.md`, `dedupe-families.md`, `critic-trackA.md`, `critic-trackB.md`
- **Critique type:** Internal Critique (Sonnet subagents, same model family) — **not independent validation**. Independent review = team (pending).
- **Prior-art status:** Targeted Scan for all 10. **Validation status:** NOT VALIDATED for all.

## Summary metrics
| Metric | Value |
|---|---|
| Candidates | 10 (Track A 6 memory-guided, Track B 4 blind) |
| Idea Families | 6 (IF-1 holds 4/10 → concentration) |
| Duplicates | 0 |
| Close variants | 1 (A03 × B01) |
| SURVIVE / HOLD / REJECT | **1 / 6 / 3** |
| New Problem Families touched | Freelance delivery/payment (B02), rental-damage disputes (B01), slip fraud (B04) — from blind track |
| New Mechanism Families | IF-1 bilateral pre-commitment record; IF-2 commitment timing; IF-3 per-actor reputation; IF-4 trust relay; IF-5 honest intent capture; IF-6 self-identifying payment |

## Verdict table

| ID | Name | Family | Verdict | Mech. Diff | Novelty Conf. | Closest alternative (Critic) | Main reason |
|---|---|---|---|---|---|---|---|
| G1-A03 | TwoKey Room Record (dorm co-signed condition record) | IF-1 | **SURVIVE (weak)** | Med | Low–Med | Inventory Hive, Property Inspect, HelloReport (UK; snippets) | Mature prior art abroad; differentiation = bilateral co-sign + deductions constrained to changed items + Thai dorm legal gap (dorms excluded from 2025 rule; 2025 rule requires signed move-in report for apartments — Critic) |
| G1-B01 | Handover Tariff (rental damage tariff + co-signed record) | IF-1 | HOLD | Med | Med | Record360 (snippet) | Pre-agreed price table is the new part; dishonest shops won't adopt; sticker may shield bad shops; no tourist discovery channel |
| G1-A02 | QuorumTrip (threshold pledge, auto slot release) | IF-2 | HOLD | Low–Med | Low | **PolyTrip** (min-headcount, platform fee on bookings) | Core assurance-contract logic exists; differences = no custody, PromptPay, Thai, auto-release (unverified as unique) |
| G1-A04 | Fair-Fare Pledge Card (driver self-bound fares) | IF-3 | HOLD | Low–Med | Med | DLT taxi QR program (snippet); MuvMi; Grab tuk-tuk | Government/platforms moving in; voluntary scheme lacks adoption lever; revenue unproven |
| G1-A06 | Arrive-Right (official-only arrival checklist + affiliates) | IF-5 | HOLD | Low | Low | Gov site + blogs | Can't win search vs paid scam ads at zero budget |
| G1-B02 | Tranche Unlock (freelance tranches + deemed acceptance) | IF-1 | HOLD | Low | Low | **Reveald** (watermark-until-paid, Stripe-verified), Fastwork escrow | Payment confirmation unverifiable (freelancer tap); deemed-acceptance legal force untested |
| G1-B04 | Satang-ID Pay (unique-amount matching) | IF-6 | HOLD (lean reject) | Low | Low | SlipOK, EasySlip; Indonesian WooCommerce unique-amount plugin | Existing slip check + bank alerts; pasting statements tedious; PDPA burden |
| G1-A01 | PactLink (page-control handshake) | IF-1 | **REJECT** | — | — | Facebook Page verification; bank-app recipient name display | **Mechanism flaw:** scammers control their own fake pages → handshake passes for them; binding to a page doesn't tell the traveller which page is real |
| G1-A05 | Trust Relay (operator referrals) | IF-4 | **REJECT** | — | — | Informal referrals, CBT networks | Platform can't collect operator-to-operator fees without custody; paid referrals re-create steering (PM-06); doesn't help operators with zero travellers |
| G1-B03 | Next Payer | IF-2 | **REJECT** | — | — | **WhoPays** ("next payer" banner), Settle Up, Splitwise | Headline feature already exists; weak revenue |

## New Rejection Fingerprints (added to global memory)
| ID | Fingerprint | Source |
|---|---|---|
| RF-09 | Trust anchored on **channel control** (page/account ownership) — fails because scammers control their own channels; a trust anchor must be something a scammer cannot produce or the traveller already knows | G1-A01 |
| RF-10 | Platform revenue from **payments between third parties** without custody (referral cuts, success fees on P2P transfers) — uncollectible; disclosed referral fees risk steering | G1-A05 |
| RF-11 | Prescriptive "who pays next" rotation during group spending | G1-B03 |
| RF-12 (soft) | Unique-amount payment matching / slip replacement for small sellers — existing tools; low differentiation | G1-B04 |
| RF-13 (soft) | Assurance-contract group trip commitment (min headcount before booking) — PolyTrip exists; only localisation differs | G1-A02 |

## Evidence gaps
- WTP of the **frequent paying actors** proposed repeatedly (dorm owners, rental shops, freelancers, operators) — no evidence collected.
- Whether tourists/travellers check a verification artefact before paying (behaviour) — unknown.
- Thai prior art for dorm inventory apps and rental-damage tools — not found (≠ absent).
- DLT taxi QR scope/status (snippet only).

## Novelty risks
- IF-1 ideas are mostly **feature-level variants of existing inspection/portal products**; the differentiating parts (pre-agreed tariff, constrained deductions, Thai legal gap) are small and must be argued with evidence.
- Several HOLDs differ from prior art mainly by "Thai + PromptPay + no custody" → localisation ≠ mechanism novelty (Innovation Gate Q4).

## What Generation 2 must explore (per Master Prompt §10)
1. **Low-coverage problem areas** (Coverage Memory): events/concert/festival group coordination; solo & female travel safety; language barriers; digital nomads/long-stay; hidden stakeholders — car owners in group trips, hotel front desks/concierges, homestay community leaders, honest drivers' economics (fare pressure).
2. **Tier-2 problems not yet used:** PM-07 (invisible small supply — but not as a marketplace), PM-22 ferry connection risk, PM-23 เมืองรอง last-mile, PM-10 COD refusals, PM-13 contractor milestones.
3. **Trust anchors that pass RF-09:** what can a scammer *not* produce? (registered business identity ↔ licence, prior in-person contact, government registry, bank account name ↔ business name, physical presence).
4. Reduce IF-1 slots to ≤2 unless the mechanism is clearly different.
5. Run Track A (memory-guided) + Track B (blind, new domains/operators) again; dedupe against global memory (`07-idea-memory.md`).
