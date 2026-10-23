# Preliminary Idea Analysis Report

## Executive summary

- Inputs inspected: 3 files (2 Markdown, 1 PDF)
- Ideas validated: **300** (MDA=100, MDB=100, PDF=100)
- Qualified IDs: 300 unique; original IDs are intentionally repeated across sources and preserved
- A — SHORTLIST: **57**
- B — RESERVE: **219**
- C — LOW PRIORITY: **24**
- Selection was threshold- and risk-based; the shortlist count was not forced to 60

## Duplicate review

Idea-level classifications: NEAR_DUPLICATE=10, RELATED=4, UNIQUE=286.

Pair/review rows: NEAR_DUPLICATE=5, RELATED=2, UNIQUE=286. Similarity is field-aware lexical comparison across Target User, Core Problem, Solution Mechanism and Business Model. Character n-gram Jaccard and sequence similarity were combined; no semantic embedding service was available, so every EXACT/NEAR result is a review candidate rather than an automatic merge. Near-duplicates were not merged.

## Cluster counts

Multi-label counts (totals exceed 300): C01=83, C02=67, C03=82, C04=20, C05=52, C06=80, C07=48, C08=108, C09=55, C10=118, C11=9, C12=61, C13=13. See `clusters.md` for assumptions, IDs and differences.

## Rubric and scoring

The input includes an apparent competition rubric, so the default prompt weights were replaced with: Problem & Opportunity 20, Completeness & Usability 30, Business Feasibility & Impact 30, Pitch & Q&A 20. Tourism relevance is retained as a separate field and **not added to the 100-point score**, because the input explicitly says the bonus weight is unconfirmed.

All scores are **INFERENCE**, not judging outcomes. FACT means copied from an input field. UNKNOWN marks missing evidence. NEEDS_VERIFICATION marks external facts such as current API access, prices, licences, legal requirements, datasets or payment eligibility.

## Screening logic

- SHORTLIST: score >=77, business score >=18, no LOW source feasibility and no extracted critical dependency.
- RESERVE: promising but medium scope, critical dependency, near-duplicate differentiation, or monetization evidence needs verification.
- LOW PRIORITY: low feasibility, total below 67, or a non-canonical exact duplicate.
- Score was not the sole gate: dependency risk, source feasibility and duplicate status can override it.
- Category diversity was preserved through uniform criteria rather than fixed quotas.

## Frequent critical risks

- Real-time reliability and cold-start risk: 59
- Legal/safety/privacy dependency: 34
- External API/data availability unverified: 33

Other recurring uncertainties are customer willingness-to-pay, cold start for two-sided marketplaces, current API/data availability, payment/KYC eligibility, privacy and legal liability.

## Validation and traceability

- Every source contains IDEA-001 through IDEA-100 exactly once.
- Every normalized record has a source-qualified ID (`MDA-`, `MDB-`, or `PDF-`), original ID, source file, source location and full extracted Original Text.
- `checkpoints/raw_ideas.jsonl` preserves the extracted source record before normalization.
- Source SHA-256: MDA=f539cfc7fd0d988f942a0a80e54fb2c71c6f397d2e6e2669583d02ebfd32ef46, MDB=a633c04746880d66132cb1ce486c2b2cb34d0d07c6a4f39845e656b581fe8abe, PDF=aa70bb00e3d3db7f82a0089d2ca8720cd60c6ebec9e152cfc428d96658731afa
- Output partition check: 57 + 219 + 24 = 300.

## Limitations

- PDF Thai text uses embedded glyph positioning; extraction preserves content but may contain visible spacing/word-splitting artifacts. Page ranges are retained for audit.
- Duplicate detection is not semantic embedding analysis and may miss paraphrases or flag lexically similar concepts. Human review is required for EXACT/NEAR rows.
- No live web verification was performed. Claims copied from the source remain claims-from-input, not independently verified facts.
- Scores estimate hackathon fit from written cards; they do not validate demand, implementation skill, access rights, legal compliance or real-world unit economics.

## Recommended next round

1. Human-review all EXACT_DUPLICATE and NEAR_DUPLICATE pairs, choosing a canonical card without deleting source records.
2. For shortlisted ideas, run 3-5 target-user interviews and one payer interview; record willingness-to-pay separately from interest.
3. Verify the exact API/dataset licence, quota and fallback before selecting a build.
4. Reduce each candidate to one end-to-end demo workflow and use sample data/mock payment when real integrations are not verified.
5. Re-score the strongest candidates after technical spikes, competitor verification and a two-minute pitch rehearsal.
