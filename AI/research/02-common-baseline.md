# Phase 2 — Common Idea Baseline & Initial Rejection Fingerprints

- **Phase:** 2
- **Created:** 2026-10-22 22:40 +07
- **Purpose:** List the ideas an AI (or a typical hackathon team) usually proposes for "money-making app for the general public / travel", so the Generation session can detect high-duplication outputs. This is a **baseline, not a ban**: an idea in the same category survives if its **Core Mechanism** differs significantly (Master Prompt §7).
- **Evidence status of this list:** SPECULATION/HYPOTHESIS — built from model prior knowledge of common hackathon/AI outputs, not from a measured survey. Existence of real competitors for each pattern is verified (or not) in `01-existing-solutions.md`.

---

## A. Baseline patterns — Travel

| ID | Common idea | Typical "feature answer" | Why it's high-duplication |
|---|---|---|---|
| BL-T01 | AI trip planner / itinerary generator | Chat → day-by-day plan | Very crowded since 2023 (many GPT wrappers); mechanism = generate text; no change to booking, coordination, or trust |
| BL-T02 | Group trip expense splitter | Add expenses, compute who owes | Splitwise/Tricount-type apps exist widely; mechanism = ledger after the fact |
| BL-T03 | Travel social network / find travel buddies | Profiles + matching + chat | Cold start; safety; many shut-downs (to verify in D) |
| BL-T04 | Local hidden-gem recommender | Map + reviews + AI recs | Google Maps / TikTok already dominate discovery |
| BL-T05 | Tour/experience marketplace for local guides | Listing + booking + commission | Klook/GetYourGuide/Airbnb Experiences; two-sided cold start |
| BL-T06 | Packing list / checklist app | Templates + reminders | Feature, not product; weak revenue |
| BL-T07 | Translation / phrasebook for tourists | Camera/voice translate | Google Translate free and better |
| BL-T08 | Scam alert / tourist safety map | Crowd reports + map | Moderation + cold start; fragmented info |
| BL-T09 | Price comparison (flights/hotels) | Aggregator | Requires paid APIs/affiliate approvals; Google Flights, Skyscanner, Agoda dominate |
| BL-T10 | Travel journal / memory book | Photos + timeline | Low WTP; Polarsteps etc. exist |
| BL-T11 | Gamified travel (badges, check-ins) | Points, leaderboards | Gamification alone ≠ novelty (§1) |
| BL-T12 | Chatbot concierge for hotels | LLM chatbot on LINE | Commodity; needs hotel partners |

## B. Baseline patterns — General public (non-travel)

| ID | Common idea | Typical "feature answer" | Why it's high-duplication |
|---|---|---|---|
| BL-G01 | Task manager / to-do with AI | Lists + AI prioritise | Saturated |
| BL-G02 | Habit tracker | Streaks + reminders | Saturated; low retention |
| BL-G03 | Expense / budget tracker | Categorise spending + charts | Saturated; bank apps do it |
| BL-G04 | Smart reminder | Time-based notifications | Feature, not mechanism |
| BL-G05 | Marketplace for X (secondhand, tutors, services) | Listings + chat | Cold start; FB Marketplace/Shopee dominance |
| BL-G06 | Dashboard of X | Charts | Not a mechanism |
| BL-G07 | Community / forum for X | Posts + comments | Cold start; Facebook groups/Pantip exist |
| BL-G08 | Recommendation engine for X | ML recs | Needs data; feature-level |
| BL-G09 | AI chatbot for X (health, law, finance) | LLM Q&A | Commodity; liability risk |
| BL-G10 | Mental-health / mood journal with AI | Journaling + sentiment | Crowded; sensitive data |
| BL-G11 | Queue booking app | Book slot online | Exists for many hospitals/clinics/banks |
| BL-G12 | Food-waste surplus marketplace | Discounted leftovers | Too Good To Go-type exists; logistics heavy |

---

## C. Repeated "ready-made feature answers" (feature ≠ novelty)
AI chatbot · AI summary · Gamification/points/badges · Dashboard/analytics · Push reminders · Social feed · Ratings/reviews · Map pins · QR code · Blockchain/NFT · "Super-app" bundling · Subscription paywall

Rule for Generation: if removing the AI / gamification / dashboard leaves the same mechanism as an existing product → treat as Close Variant or Duplicate (Innovation Gate Q5).

---

## D. Initial Rejection Fingerprints (RF)

Each RF describes a *structure* to flag, not a category to ban.

| ID | Fingerprint (Problem structure × Mechanism) | Flag as | Unless… | Evidence status |
|---|---|---|---|---|
| RF-01 | Planning info overload × LLM generates itinerary text | DUPLICATE-risk | Mechanism changes a downstream outcome (commitment, booking, coordination) not just text generation | HYPOTHESIS |
| RF-02 | Shared costs × post-hoc ledger of who owes whom | DUPLICATE-risk | Mechanism changes *when/how* money or commitment moves (before, conditional, enforced) | HYPOTHESIS |
| RF-03 | Discovery × crowd reviews/map | DUPLICATE-risk | Solves trust/incentive of the information source itself | HYPOTHESIS |
| RF-04 | Two-sided matching (buddies, guides, tutors) × listings + chat | HIGH cold-start risk for 62h demo | Single-sided value exists from day 1, or supply already exists elsewhere | HYPOTHESIS |
| RF-05 | Any problem × "add AI chatbot" | Not novelty by itself | AI changes the human-machine boundary in a way that alters the outcome | Master Prompt rule |
| RF-06 | Any problem × gamification only | Not novelty by itself | Incentive redesign tied to verifiable behavior/outcome | Master Prompt rule |
| RF-07 | Aggregation needing paid APIs (flights/hotels price) | Infeasible under zero budget | Free/affiliate data access verified | HYPOTHESIS |
| RF-08 | Mechanism requiring the app to hold/escrow user funds | Regulatory risk (Thai e-money/payment rules) | Funds flow peer-to-peer (e.g., PromptPay) and the app only coordinates | **FACT** that escrow needs a licence (raw G); coordination-only = HYPOTHESIS |

---

## E. Open questions for Generation
- Which RFs should be hard rejects vs soft flags? (Decide with team.)
- Are judges likely to penalise "AI planner" type ideas? UNKNOWN — no information on judges' preferences beyond the rubric.
