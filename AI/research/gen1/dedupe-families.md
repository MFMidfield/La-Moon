# Generation 1 — Structural Dedup & Idea Families (Phase 7)

- **Created:** 2026-10-22 ~23:08 +07 · Input: `trackA-ideas.md` (6) + `trackB-ideas.md` (4) = 10 candidates
- Similarity rubric per axis: 0 none · 1 some elements · 2 clear structural/mechanism similarity · 3 practically the same. Core Mechanism and Workflow weighted most. **No averaging into a single verdict.**

## Level 1 — Pairwise checks (only pairs with any axis ≥ 2 shown)

| Pair | Problem | Mechanism | Interaction | Workflow | Value | Result | Note |
|---|---|---|---|---|---|---|---|
| G1-A03 TwoKey Room × G1-B01 Handover Tariff | 1 | **3** | 2 | **3** | 2 | **CLOSE VARIANT** | Both: co-signed condition record at handover → diff at return → deductions limited to changed items. B01 adds a **pre-agreed damage price table** + on-the-spot P2P settlement; domains differ (dorms vs beach rentals). Keep both for now — strategic difference: B01 has travel bonus + same-day dispute; A03 has stronger official evidence (complaints, legal gap). Generated independently by Track A and blind Track B → convergence signal (HYPOTHESIS: RC-B is a fertile area). |
| G1-A01 PactLink × G1-B02 Tranche Unlock | 1 | 2 | 1 | 1 | 1 | DISTINCT | Shared element: terms accepted **before** money moves. Different problem (impersonation vs non-payment for delivered work) and workflow. |
| G1-A02 QuorumTrip × G1-B03 Next Payer | 2 | 1 | 1 | 1 | 1 | DISTINCT | Same problem family (group-trip money). A02 = threshold commitment before booking; B03 = prescriptive payer rotation during the trip. |
| G1-A01 PactLink × G1-A03 TwoKey | 1 | 2 | 1 | 1 | 1 | DISTINCT | Both "bilateral pre-commitment record", different object (terms+channel vs physical condition). |
| G1-A01 PactLink × G1-B04 Satang-ID | 1 | 1 | 1 | 1 | 1 | DISTINCT | Both use P2P PromptPay QR (implementation detail, not mechanism). |

Duplicates: **0** · Close variants: **1** (A03 × B01) · Uncertain: 0

## Level 2 — Idea Families

| Family | Structure (problem × mechanism) | Members | Share |
|---|---|---|---|
| **IF-1 Bilateral pre-commitment record** | Value/handover between two parties with unequal power × both sides co-sign terms/state **before** money or goods move; later outcomes are constrained by the record | A01, A03, B01, B02 | **4/10** |
| IF-2 Group commitment timing | Group money × change *when* commitment/payment happens | A02, B03 | 2/10 |
| IF-3 Per-actor portable reputation in one-shot encounters | One-shot service × provider self-binds publicly, passengers confirm | A04 | 1/10 |
| IF-4 Decentralized trust relay | Small-supply discovery × peer referrals carrying trust | A05 | 1/10 |
| IF-5 Honest capture of high-intent moments | Scam-captured search intent × official-only content + adjacent affiliates | A06 | 1/10 |
| IF-6 Self-identifying payments | Payment proof fraud × unique amount + seller's own bank feed as truth | B04 | 1/10 |

**Concentration warning:** IF-1 holds 40% of Gen 1. Per §7 Level 2: in Gen 2, reduce new IF-1 slots unless the mechanism is clearly different, and add exploration in under-covered problem families (Coverage Memory: hidden stakeholders, events, freelance, safety, language).

**Diversity note:** 6 families from 10 ideas. Diversity is not claimed from count alone — IF-1's internal variants differ mainly in the object recorded (terms, room, vehicle, deliverable).
