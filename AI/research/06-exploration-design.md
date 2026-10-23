# Phase 5 — Exploration Design

- **Created:** 2026-10-22 ~22:58 +07
- **Config (user, 2026-10-22):** 3 Generations × 10 candidate ideas (target, not quota) → Finalists ≤ 5. Independent review = **team (human)**. Subagents = Sonnet 5.5; main thread = Opus 5.5. Stack = React + Tailwind + Supabase + Vercel. Generation runs in this session.

## Candidate budget per Generation (10)

| Operator family (Master Prompt default %) | Slots | Track |
|---|---:|---|
| Problem Fusion (30%) | 3 | A |
| Cross-domain Mechanism Transfer (20%) | 2 | B |
| Constraint Inversion (15%) | 1 (+1 in A as Remove Dependency) | A |
| Hidden Stakeholder / Second-order (15%) | 1–2 | A |
| Single-problem / Alternative Mechanism (20%) | 2 | A/B |
| Temporal Transformation | 1 | B |
| Human–Machine Boundary Shift | 1 | B |

- **Track A — Memory-Guided (6 ideas, main thread):** uses Problem Memory, Existing Solution Memory, RFs, Coverage, Problem Graph.
- **Track B — Blind (4 ideas, separate Sonnet subagent):** receives only constraints, objective, assigned domains, operators. No Idea Memory, no RFs, no Problem Memory. Limitation: the subagent still has general prior knowledge (blind ≠ no knowledge); separation is by context isolation.

## Mandatory coverage per Generation (checked at Generation Report)
- [ ] changes the mechanism · [ ] reduces a dependency · [ ] no AI · [ ] no new platform · [ ] single problem solved deeply · [ ] changes workflow or incentive · [ ] high-risk but reasoned

## Practical Gate (applied at card level, from user rule ก)
1. Demo-able core flow by 1 dev in ~1.5 days on React/Tailwind/Supabase/Vercel free tiers.
2. Does not hold/pass through third-party money (P2P PromptPay only) — FACT-backed constraint (raw G).
3. Single-user/single-party value on day 1 (no hard two-sided cold start for the demo).
4. Explicit revenue path (who pays, why).

## Critic setup
- **Quick Critic (Internal Critique):** separate Sonnet subagent gets only Idea Cards + pointers to evidence files, not the generator's reasoning. Targeted prior-art scan per idea. Verdict REJECT / HOLD / SURVIVE. Labelled "Internal Critique — not independent validation" (same model family).
- **Independent review:** team review of the Generation Report.

## Generation plan
- **Gen 1:** Tier-1 problems + densest graph region (RC-A/RC-B) + RC-C.
- **Gen 2:** low-coverage areas (Coverage Memory): hidden stakeholders (drivers, car owners, homestay leaders, front desks), Tier-2 problems, non-scanned domains (events, freelance payments); Track A + Track B; dedupe vs global memory.
- **Gen 3:** unexplored families, alternative causal models (e.g., driver-side fare cause of PM-04), mechanism substitution, counter-intuitive approaches.
