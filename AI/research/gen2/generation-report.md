# Generation 2 — Report (incl. dedup & families)

- **Completed:** 2026-10-22 ~23:40 +07
- **Files:** `trackA-ideas.md` (5), `trackB-ideas.md` (4), `critic-trackA.md`, `critic-trackB.md`; new research `raw/J-gen2-travel-lowcoverage.md`, `raw/K-gen2-everyday-trustanchors.md`; Problem Memory PM-28…38 appended.
- **Critique type:** Internal Critique (Sonnet subagents) — not independent validation. Prior-art = Targeted Scan. Validation = NOT VALIDATED.

## Summary metrics
| Metric | Gen 1 | Gen 2 |
|---|---|---|
| Candidates | 10 | 9 (Track A 5 — 6th slot left empty to avoid padding; Track B 4) |
| Idea Families (new this gen) | 6 (baseline) | **8 new of 9 ideas (≈89%)** + 1 in existing IF-1 |
| Duplicates (vs global memory) | 0 | 0 |
| Close variants | 1 | 1 (G2-B01 × G1-B02, cross-generation) |
| SURVIVE / HOLD / REJECT | 1 / 6 / 3 | **1 / 5 / 3** |
| New Problem Families | freelance, rental damage, slip fraud | ticket scams, ferry connections, long-stay/DTV, solo safety, visa rule change, institutional homestay demand |

## Verdict table

| ID | Name | Family | Verdict | Closest alternative (Critic) | Main reason |
|---|---|---|---|---|---|
| G2-B03 | 30-Day Cliff Stay Planner | IF-14 Rule-change compliance planner (new) | **SURVIVE (conditional)** | Nomada, OpenVan stay trackers | Rule change **verified** (TAT notice citing Royal Gazette 31 Aug 2026; effective 15 Sep 2026); land-border twice-a-year cap only; extension rule discretionary/contested; prior art exists (card's "none found" was wrong); foreign users may not pay via PromptPay (unchecked) |
| G2-A01 | Callback Confirm | IF-7 Out-of-band verification (new) | HOLD | DOT licence search; bank payee name | DOT search appears to show only name/licence no./status (UNVERIFIED) → no public contact; self-registered contact can't prove control. **Kill condition:** if registry exposes no contact → REJECT. No Thai case found of impersonation of a *licensed* tour operator |
| G2-A03 | Field-Trip Pipeline | IF-10 Institutional demand aggregation (new) | HOLD | Local Alike, CBT-I, DASTA | Niche already served; Tour Business Act licence unresolved; institutional demand untested |
| G2-A04 | Desk Guardian | IF-9 Institutional guardian check-in (new) | HOLD (highest risk) | bSafe (timer alert) | Night desks often unstaffed; staff liability (Civil Code ss.420/425, snippet) |
| G2-B01 | Pay-After-It-Lands Ticket Deal Room | IF-1 (gated exchange) | HOLD | Eventpop in-account transfer (organiser-dependent, irreversible); Tixel lists Eventpop tickets | Transfer support unknown for Thai Ticket Major/The Concert/AllTicket; payment gate self-reported; shifts risk to honest sellers |
| G2-B02 | Standby Window | IF-13 Idle-capacity matching (new) | HOLD (weak) | Klook next-day booking; spa flash-sale apps | No evidence of empty-slot demand; tiny revenue; two-sided (RF-04) |
| G2-A02 | Hedge Booking | IF-8 Free-cancellation hedge (new) | **REJECT** | Kiwi.com Guarantee; Hopper/HTS missed-connection | Hedge covers a hotel night, not the missed flight; zero commission when the hedge "works"; buffer day does the same for free |
| G2-A05 | Meter-Plus Card | IF-11 Open incentive bridge (new) | **REJECT** | DLT taxi QR (2026), 1584 | No evidence tips change behaviour; no revenue path |
| G2-B04 | Concert Exit Pool | IF-15 Post-event pooling (new) | **REJECT** | Grab/Bolt, organiser shuttles | Evidence misquoted (400 THB, not 4,000); pooling doesn't add supply or fix surge |

## Dedup notes
- G2-B01 × G1-B02 (Tranche Unlock): Problem 1 · Mechanism 2 (gradual/gated release tied to delivery) · Workflow 2 · Value 1 → **CLOSE VARIANT** (different object & direction: ticket transfer vs file delivery). Both HOLD.
- G2-A04 × G2-B02, G2-A01 × G1-A01 (rejected PactLink): mechanisms differ (A01 uses an independent channel — explicitly built to pass RF-09) → DISTINCT.

## New Rejection Fingerprints
| ID | Fingerprint | Source |
|---|---|---|
| RF-14 | Hedge that protects a cheap component (hotel night) while the expensive loss (missed flight) stays uncovered; revenue only when the hedge is used | G2-A02 |
| RF-15 (soft) | Behaviour-change "cards"/scripts for street encounters without evidence they change behaviour and without a payer | G2-A05 |
| RF-16 | Pooling demand after events without adding supply or fixing price surges | G2-B04 |
| RF-17 (conditional) | Out-of-band verification via a registry that doesn't publish contact data | G2-A01 (if DOT has no contacts) |

## Cross-generation patterns (HYPOTHESIS)
1. **Survivors so far are narrow and legally anchored:** G1-A03 (dorm legal gap) and G2-B03 (verified visa rule change). Ideas tied to a **specific, verifiable rule/gap** survive more often than generic trust/coordination tools.
2. **Most HOLDs fail on one untested assumption** (adoption by the paying actor, registry data, demand) → team interviews can resolve them faster than more desk research.
3. **"Thai + PromptPay + no custody" over a foreign product** recurs as the only difference (PolyTrip, Reveald, Record360, bSafe) → localisation, not mechanism novelty.
4. Strong-evidence problems still without a survivor: **PM-28 ticket scams**, PM-03 pay-first trust, PM-04 transport overcharging.

## What Generation 3 must explore (§10: Gen 3+)
1. **Unexplored families / alternative causal models** for strong-evidence problems without survivors (PM-28, PM-03, PM-04): e.g., treat the **mule account** (supply of scam infrastructure) or the **organiser/platform rules** as the leverage point instead of buyer verification.
2. **Mechanism substitution & counter-intuitive approaches** (e.g., making scams unprofitable rather than detectable; making honest sellers cheaper to prove than to fake).
3. **Rule-change / legal-gap pattern** (from survivors): look for other **new or changed Thai rules in 2025–26** that create fresh, unserved compliance pain (rental rule 2025, 30-day visa cut, TDAC, anti-mule freezes, e-Tax) — but avoid licence-requiring services.
4. **Recombination that adds a mechanism** (not features) among HOLDs, e.g., G1-A03 × G1-B01 (condition record + tariff) only if it adds a new mechanism.
5. Keep IF-1 ≤ 2; Track B with new domains/operators; dedupe vs `07-idea-memory.md`.
