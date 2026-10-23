# Global Idea Memory — Idea Lineage, Families, Rejection Fingerprints

- **Updated:** 2026-10-22 ~23:40 +07 (after Generation 2)
- Track B (blind) must **not** receive this file.

## A. Idea Lineage
| ID | Name | Gen | Track | Operator | Problems | Family | Verdict (Internal) | Parent / relation |
|---|---|---|---|---|---|---|---|---|
| G1-A01 | PactLink | 1 | A | Fusion + Incentive | PM-03, PM-27 | IF-1 | REJECT (RF-09) | — |
| G1-A02 | QuorumTrip | 1 | A | Fusion + Temporal | PM-02, PM-01 | IF-2 | HOLD | prior art PolyTrip |
| G1-A03 | TwoKey Room Record | 1 | A | Fusion + Constraint Inversion | PM-09, PM-13 | IF-1 | SURVIVE (weak) | close variant of G1-B01 |
| G1-A04 | Fair-Fare Pledge Card | 1 | A | Hidden Stakeholder + Incentive | PM-04 | IF-3 | HOLD | — |
| G1-A05 | Trust Relay | 1 | A | Decentralization | PM-07, PM-03 | IF-4 | REJECT (RF-10) | — |
| G1-A06 | Arrive-Right | 1 | A | Constraint Inversion + Remove Dependency | PM-05 | IF-5 | HOLD | — |
| G1-B01 | Handover Tariff | 1 | B | Cross-domain (insurance schedule + chain of custody) | rental damage (new) | IF-1 | HOLD | close variant of G1-A03 |
| G1-B02 | Tranche Unlock | 1 | B | Cross-domain (fair exchange + progress billing) | freelance non-payment (new) | IF-1 | HOLD | prior art Reveald; close variant G2-B01 |
| G1-B03 | Next Payer | 1 | B | Temporal | PM-01 | IF-2 | REJECT (RF-11) | prior art WhoPays |
| G1-B04 | Satang-ID Pay | 1 | B | Human–Machine Boundary Shift | slip fraud (new) | IF-6 | HOLD (lean reject) | — |
| G2-A01 | Callback Confirm | 2 | A | Cross-domain (payment-fraud callback) | PM-03, PM-28 | IF-7 | HOLD (kill if no registry contact) | answers RF-09 from G1-A01 |
| G2-A02 | Hedge Booking | 2 | A | Mechanism Substitution | PM-29 | IF-8 | REJECT (RF-14) | — |
| G2-A03 | Field-Trip Pipeline | 2 | A | Hidden Stakeholder + Resource Recombination | PM-07 | IF-10 | HOLD | — |
| G2-A04 | Desk Guardian | 2 | A | Hidden Stakeholder + H–M Boundary | PM-31 | IF-9 | HOLD | prior art bSafe |
| G2-A05 | Meter-Plus Card | 2 | A | Incentive Redesign (alt. causal model) | PM-04 | IF-11 | REJECT (RF-15) | — |
| G2-B01 | Pay-After-It-Lands Ticket Deal Room | 2 | B | Failure Reversal | PM-28 | IF-1 | HOLD | close variant of G1-B02 |
| G2-B02 | Standby Window | 2 | B | Resource Recombination | idle slots (new) | IF-13 | HOLD (weak) | — |
| G2-B03 | 30-Day Cliff Stay Planner | 2 | B | Second-order Effects | visa-exempt cut (new) | IF-14 | **SURVIVE (conditional)** | prior art Nomada/OpenVan |
| G2-B04 | Concert Exit Pool | 2 | B | Mechanism Substitution | PM-35 | IF-15 | REJECT (RF-16) | — |

## B. Idea Family Fingerprints
| Family | Problem structure | Core mechanism | Interaction | Members |
|---|---|---|---|---|
| IF-1 Bilateral pre-commitment record | Two parties, unequal power, value handed over before obligation settled | Both co-sign terms/state **before** value moves; later outcomes constrained by the record | Link + co-sign + compare | A01✗, A03, B01, B02 |
| IF-2 Group commitment timing | Group spending, one person fronts | Change **when** commitment/payment occurs | Group link / realtime | A02, B03✗ |
| IF-3 Per-actor portable reputation | One-shot service encounter | Provider self-binds publicly; customers confirm kept promises | Scan QR at curb | A04 |
| IF-4 Decentralized trust relay | Small supply invisible | Peers pass trust along itinerary | Signed referral | A05✗ |
| IF-5 Honest capture of high-intent moment | Scam-captured search | Official-only flow + adjacent affiliates | Static guide | A06 |
| IF-6 Self-identifying payment | Payment-proof fraud | Unique amount + seller's own bank feed as truth | Order link + paste | B04 |
| IF-7 Out-of-band verification | Impersonation of real businesses | Confirm via a channel from an independent registry the scammer can't control | Request → registry contact → confirm | G2-A01 |
| IF-8 Free-cancellation hedge | Connection/tail risk | Pre-book refundable fallback, cancel if unused | Planner + reminder | G2-A02✗ |
| IF-9 Institutional guardian check-in | Solo safety | On-site institution staff as responder | Trip log + timer | G2-A04 |
| IF-10 Institutional demand aggregation | Idle certified supply | Package supply for institutional buyers | Approval-ready programme | G2-A03 |
| IF-11 Open incentive bridge | Street-service refusal | Public pre-committed side-payment | Card | G2-A05✗ |
| IF-13 Idle-capacity matching | Empty slots | Flexible users × operators bidding | Two-sided board | G2-B02 |
| IF-14 Rule-change compliance planner | New/changed rule creates confusion | Rules engine → dated, costed plan | Planner + calendar | G2-B03 |
| IF-15 Post-event pooling | Event exit transport | Pre-committed pools | Group link | G2-B04✗ |

## C. Rejection Fingerprints (global)
- Phase 2 baseline: RF-01 … RF-08 (see `02-common-baseline.md`; RF-08 now FACT-backed).
- Generation 2: RF-14 cheap-component hedge · RF-15 (soft) behaviour cards w/o evidence/payer · RF-16 post-event pooling w/o supply · RF-17 (conditional) registry without contact data. Details: `gen2/generation-report.md`.
- Generation 1: RF-09 channel-control trust anchor · RF-10 platform cut of third-party payments without custody · RF-11 prescriptive next-payer rotation · RF-12 (soft) unique-amount matching · RF-13 (soft) assurance-contract group trip commitment. Details: `gen1/generation-report.md`.
