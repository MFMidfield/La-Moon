# Phase 0 — Calibration & Exploration Brief

- **Phase:** 0 (Calibration)
- **Started:** 2026-10-22 22:25 +07
- **Mode:** MODE B — EXECUTION (Phase 0–4 only; no idea generation this session)
- **Source documents:** Master Prompt (Novel App Idea Engine), user answers in chat, `~/Downloads/เกณฑ์การตัดสิน All for One University.pdf` (judging rules), `~/Downloads/Research for Business Project — Retro.pdf` (workshop method)

---

## 1. Project Configuration

| Field | Value | Status / Source |
|---|---|---|
| PROJECT_NAME | AFOU — All for One University, Software track | FACT (user + rules PDF) |
| OBJECTIVE | Web or app that makes money ("Make Me Money" brief). Find real problems → mechanism-level opportunities. | FACT (rules PDF) |
| DOMAIN | Open to all domains; **bonus weight for travel/tourism** | User decision |
| TARGET_MARKET | General public (คนทั่วไป) | User decision |
| GEOGRAPHY | Global scan; Thailand = primary market | User decision |
| PLATFORM | Web or app (software only) | FACT (user + rules) |
| TEAM_CAPABILITY | 3 people: 1 idea/business, 1 full-stack dev, 1 tester | User |
| BUDGET | Zero — free tools/tiers only | User |
| TIME_CONSTRAINT | Submission 2026-10-25 12:00–13:30 (+07); ~62h from start incl. research, build, 2-min video | FACT (rules) + user |
| TECH_CONSTRAINTS | Free tiers only; must be openable by judges via website link or Google Drive installer link | FACT (rules) + derived |
| BUSINESS_MODEL | Must show a clear, plausible revenue path; specific model TBD (Generation session) | Rules + deferred |
| NOVELTY_PRIORITY | **Strong Mechanism Novelty + Practical Gate** | User decision |
| GENERATION_COUNT / CANDIDATES | Deferred to Generation session (prompt default 3×30 likely too large for time) | Deferred |
| RESEARCH_BUDGET | 90 min for Phase 0–4 (22:25–23:55) | User approved |
| INDEPENDENT_REVIEW | Deferred. This session: same model → any critique = Internal Critique only | Deferred |
| CONFLICT RULE | Judging criteria take priority; feasibility/WTP filter applied from Phase 3–4 (option ก) | User decision |

### Judging criteria (Software track, /100) — FACT from rules PDF
| Criterion | Pts | What judges look for |
|---|---:|---|
| Problem importance & understanding | 20 | Clear problem/opportunity, target group, revenue concept fits brief |
| Product completeness | 30 | Works for real, core functions complete, easy to use, fits target |
| Feasibility & impact | 30 | Clear business model, real revenue chance, costs, market demand, extensible |
| Presentation & Q&A | 20 | Clear concept + revenue model, live demo, on-point answers |

Deliverables: working prototype link (website, or Google Drive link to app installer) + 2-min .mp4 pitch on Google Drive. Late = disqualified; unopenable = not submitted; no edits after submit. Top 5 per track present 19:00–20:30 same day. Example cited: Brain.fm.

---

## 2. Phase 0 Questions

**Q1. What kind of opportunity are we looking for?**
Problems experienced by the general public (travel preferred) where current solutions fail **because of their mechanism** — coordination, trust, incentive, information-flow, or timing structure — and where a small, free web/app can change that mechanism enough to (a) deliver value in a live demo and (b) support a believable revenue model.

**Q2. Boundaries that must not be broken**
- Software only (web/app); no hardware.
- Zero budget: no paid APIs, paid data, or paid hosting.
- Must be demo-able and openable by judges via a link on 2026-10-25.
- Buildable by 1 full-stack dev (+1 tester) in roughly 1.5 days of build time.
- No idea generation in this session (Phase 0–4 only).
- No fabricated facts; FACT / HYPOTHESIS / SPECULATION separation; no "first-ever" claims.
- Avoid domains needing licences or regulated handling (e.g., holding customer funds as escrow, medical diagnosis, lending) unless the mechanism avoids the regulated part — HYPOTHESIS-level constraint, to verify per idea.

**Q3. Most important criteria (derived from judging, user rule ก)**
1. Real, evidenced problem with identifiable target user (20 pts) → evidence quality matters.
2. Working, complete core flow (30 pts) → narrow scope, demo-able mechanism.
3. Believable business model + cost + demand (30 pts) → WTP / revenue signals must be collected during research, not after.
4. "Wow" via mechanism difference (user preference) → bounded by 1–3.

**Q4. Constraints that could make ideas unusable**
- Cold-start / two-sided marketplaces: need many users on both sides to demo value → high risk in 62h. (HYPOTHESIS)
- Dependence on paid or rate-limited APIs (flights, maps at scale, LLM at scale) under zero budget. (HYPOTHESIS)
- Low-frequency use cases (e.g., travel is episodic) weaken subscription revenue claims. (HYPOTHESIS — to verify in Phase 1/D)
- Payments: real money flow needs payment gateway onboarding; a demo can use PromptPay QR or test mode. (HYPOTHESIS)
- Problems requiring data the team can't get (official databases, partner integrations).
- Problems whose value only appears over weeks (habit, long-term outcomes) are hard to show in a 2-min video.

**Q5. Facts vs assumptions**
| Item | Status |
|---|---|
| Deadline, deliverables, scoring weights | FACT (rules PDF) |
| Team size/roles, zero budget, domain/geo/novelty choices | FACT (user statements) |
| Judges reward novelty beyond the written rubric | HYPOTHESIS (user's belief; rubric has no explicit novelty line) |
| Travel is a good domain for revenue | UNKNOWN — to test in Phase 1/3 |
| 1 dev can build a complete core flow in ~1.5 days | HYPOTHESIS (depends on scope; stack not yet stated) |
| Dev stack | UNKNOWN (full-stack, specifics not given) |

---

## 3. Exploration Brief (short)

> Map problems of the general public — travel first, other daily-life domains second — where existing apps, services, or workarounds fail at the **mechanism** level. For each, capture who suffers, the trigger, causal chain, why current solutions break, who benefits from the status quo, and any willingness-to-pay signal. Use sources from 2020+. Filter (from Phase 3) by: evidence strength, mechanism-failure clarity, demo-ability in ~1.5 build days on free tools, and plausible revenue. Output memories + Problem Graph for a separate Generation session.

## 4. Research Plan (90 min)

| Slot | Work | Method |
|---|---|---|
| 22:25–22:35 | Phase 0 (this file) + Phase 2 baseline | Internal |
| 22:25–23:05 | Phase 1 + 3 desk research, parallel | 4 subagents: A travel-global, B travel-Thailand, C general-public, D failures/workarounds/monetization |
| 22:40–23:10 | Social signal | last30days (Reddit/HN/YouTube, last 30 days only), Chrome on Pantip (Thai) |
| 23:10–23:40 | Merge → Problem Memory, Existing Solution Memory, Phase 4 graph | Internal synthesis |
| 23:40–23:55 | Coverage Memory, Checkpoint, PROJECTMAP | Internal |

## 5. Known Research Limitations (declared up-front)
- last30days covers only the last 30 days; 2020+ history relies on web search and Chrome.
- Reddit skews Western/English; Pantip/Facebook coverage depends on what Chrome/web search can reach. Facebook groups mostly inaccessible.
- No field research (interviews) possible from this session — team must do Mom-Test interviews to validate.
- Critique by the same model = Internal Critique, not independent validation.
- 90-minute budget → Prior-art status at best "Preliminary Scan" for most areas.
