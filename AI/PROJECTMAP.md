# PROJECTMAP — AFOU (All for One University · Software track "Make Me Money")

> Entry point for any new session. Read this first, then follow "How to resume".

## Status
| Item | Value |
|---|---|
| Last updated | 2026-10-22 22:50 +07 (v2 — verification round done) |
| Current stage | **Generation 2 done** (Gen1: 1/6/3, Gen2: 1/5/3 SURVIVE/HOLD/REJECT, Internal Critique). Next: Generation 3 |
| Next stage | Team review of `research/gen1/generation-report.md` → Generation 2 (plan in that report) → Gen 3 → Shortlist ≤5 → Deep Audit |
| Hard deadline | Submit 2026-10-25 12:00–13:30 (+07) — prototype link + 2-min .mp4 |
| Method | Master Prompt "Novel App Idea Engine" (Mode B, Execution) |

## How to resume (new session)
1. Read `research/CHECKPOINT-phase4.md` (config, Tier-1 problems), then the latest `research/genN/generation-report.md` and `research/07-idea-memory.md` (latest state).
2. Read `research/03-problem-memory.md` and `research/04-problem-graph.md`.
3. Check Open Questions in the checkpoint — ask the user any that are unanswered.
4. Run Phase 5 → 6 per Master Prompt. Track B (blind) gets only constraints/domains/operators.
5. After each phase, write a new `research/CHECKPOINT-phaseN.md` and update this map.

## File map
```
AFOU/
├── PROJECTMAP.md                      ← you are here
└── research/
    ├── 00-calibration.md              Phase 0: config, judging criteria, exploration brief, plan
    ├── 01-existing-solutions.md       Phase 1: Existing Solution Memory (consolidated) + monetization lessons
    ├── 02-common-baseline.md          Phase 2: common AI/hackathon ideas + Rejection Fingerprints RF-01…08
    ├── 03-problem-memory.md           Phase 3: Problem Memory PM-01…26, practical filter, Tier 1/2/3
    ├── 04-problem-graph.md            Phase 4: causal chains, root-cause families, graph, maps, conflicts
    ├── 05-coverage-memory.md          Coverage Memory: explored vs missing
    ├── CHECKPOINT-phase4.md           Hand-off checkpoint (problem landscape)
    ├── 06-exploration-design.md       Phase 5: operator mix, Track A/B, critic setup, gen plan
    ├── 07-idea-memory.md              Global Idea Lineage, Families, Rejection Fingerprints (NOT for Track B)
    ├── gen1/                          Generation 1: trackA/B ideas, dedupe-families, critic A/B, generation-report
    ├── gen2/                          Generation 2: trackA/B ideas, critic A/B, generation-report (incl. dedup)
    └── raw/                           Evidence (do not edit; cite IDs)
        ├── A-travel-global.md         ES-A, P-A (global travel)
        ├── B-travel-thailand.md       ES-B, P-B, Thai tourism stats
        ├── C-general-public.md        ES-C, P-C (everyday life)
        ├── D-failures-workarounds.md  failed startups, workarounds, monetization M-01…08
        ├── E-social-signal.md         last30days run (HN only; Reddit blocked)
        ├── F-pantip-scan.md           Pantip thread scan PT-01…27
        ├── G-legal-verification.md    payments licence, PDPA, dorm/rental law, tour licences
        ├── H-fact-verification.md     re-check of key numbers (+ corrections)
        ├── I-supply-side.md           operators, drivers, landlords (hidden stakeholders)
        ├── pantip/scan1–3.jsonl       raw Pantip scan output
        └── social/L1–L5.md            last30days raw outputs
    └── tools/pantip_scan.py           Pantip search scraper (titles/descriptions/dates)
```

## ID conventions
- `PM-xx` consolidated problems · `P-A/B/C-xx` raw problems · `ES-*` existing solutions · `PT-xx` Pantip threads · `M-xx` monetization evidence · `RF-xx` rejection fingerprints · `RC-X` root-cause families · `BL-*` baseline ideas
- Evidence labels: FACT (source opened) · HYPOTHESIS (snippet/inference) · SPECULATION

## Key decisions log
| Date | Decision | By |
|---|---|---|
| 2026-10-22 | Domain open, travel bonus; target general public; Thailand primary + global scan | User |
| 2026-10-22 | Novelty = Strong Mechanism Novelty + Practical Gate | User |
| 2026-10-22 | Judging criteria override Master Prompt weights; filter from Phase 3 (option ก) | User |
| 2026-10-22 | Zero budget; team = idea 1 + full-stack dev 1 + tester 1 | User |
| 2026-10-22 | Research tools: Chrome + last30days (no cookies, no paid keys); subagents allowed | User |
| 2026-10-22 | Do not git commit until user asks | User |
| 2026-10-22 | Stack: React + Tailwind + Supabase + Vercel | User |
| 2026-10-22 | Independent review = team (human) review | User |
| 2026-10-22 | Subagents run on Sonnet 5.5; main thread Opus 5.5 | User |
| 2026-10-22 | Generation: 3 Gens × 10 ideas, in this session | User |

## Tooling notes
- last30days installed at `~/.agents/skills/last30days` (security audit: Gen Agent Trust Hub FAIL, Socket/Snyk WARN). Used without cookies/keys. Reddit keyless path returns 403; YouTube needs `yt-dlp`.
- Claude in Chrome: not connected during Phase 0–4.
- Pantip: HTML search works via `research/tools/pantip_scan.py "<keyword>" ...` (run with `python3 -I`); raw output in `research/raw/pantip/`. JSON API denied.
