# K — Gen2 Everyday Problems + Trust Anchors (desk research)

Date: 2026-10-22. Researcher: desk agent. No app ideas here (problem mining only).
Labels: FACT = I opened the page and the claim is on it. HYPOTHESIS = from search snippet/summary only, or inference from FACT. SPECULATION = my guess.
Tool note: WebSearch returned model-written summaries, not raw snippets; anything only seen there is HYPOTHESIS. ~33 tool calls used (cap ~25 exceeded slightly).

---------------------------------------------------------------------
## PART 1 — PROBLEM FINGERPRINTS
---------------------------------------------------------------------

### P-K-01  "Hired-to-press" (จ้างกดบัตร) concert ticket fraud — pay deposit to a middleman before tickets exist
- **Who:** Young fans (students, teens) who failed to get tickets in the 3-minute sell-out and hire a "กดบัตร" account on X/IG/LINE.
- **Trigger:** Mass-demand on-sale (e.g. BTS "Arirang in Bangkok", on-sale 9–11 Jun 2026) + sell-out in minutes.
- **Proximate cause:** Victim wires deposit + fee (300–700 THB/order) to a stranger's account; stranger disappears.
- **Root-cause mechanism:** (1) Scarcity + no official transfer/resale channel (organizer admits it "cannot fully control resale") -> grey market is the only route. (2) Trust signals used by buyers are faked cheaply: follower count (scammers acquire X accounts with >2,000 followers, rename them), screenshot "track records", and mule bank accounts (incl. shell-company accounts). (3) No escrow / no verifiable counterparty between "I pay" and "you deliver".
- **Workaround:** Ask in fan groups, check seller's past posts, ask for ID card photo / video call, pay deposit only; after loss, form LINE OpenChat to pool evidence.
- **Harm:** Cases: ~120 victims / ~1.23M THB in one BTS case (OpenChat >700 members) [Thai PBS 12 Jun 2026, FACT]; police-announced network: >350 X accounts, 739 online complaints, ~3.7M THB, arrests 10 Jun 2026 [Matichon/Naewna via search summary; HYPOTHESIS on exact figures, headline says "nearly 4M"]. Reseller VIP markup: 7,800 -> 85,000–180,000 THB (reported) [Thai PBS, FACT that article says so].
- **Current solutions & why they fail:**
  - Bank/SCB/BBL warning pages (advice only): https://www.scb.co.th/th/personal-banking/fraud-fighter/update-fraud/fake-ticket-concert.html ; https://www.bangkokbank.com/th-TH/Personal/Grow-Club/Concert-Ticket-Scams (page fetch timed out; HYPOTHESIS content).
  - Organizer controls: per-purchase ticket limits + national-ID registration (The Standard, 21 Jan 2026, FACT) — reduces bots, does not create a transfer channel; organizer concedes resale cannot be fully controlled.
  - Police reporting: thaipoliceonline.go.th / AOC 1441 — after-the-fact; victims "waiting for updates" (Thai PBS, FACT).
  - House consumer-protection committee reviewing purchase limits, KYC, anti-bot (Thai PBS, FACT) — policy-in-progress, not a tool.
  - checkgon.com (check account before transfer) mentioned by Thai PBS Now (FACT that it is mentioned; I did not open it).
  - Fail reasons: mule accounts are legitimate-looking (including real registered companies/partnerships, Thai PBS Now 22 Mar 2024, FACT); name check at transfer only shows the account owner, not the seller's reputation.
- **Who benefits / loses:** Scam rings and resellers benefit; fans (mostly minors/students) lose; organizers lose trust; banks absorb mule-account compliance cost.
- **Frequency (sourced):** Event-driven spikes. 739 online police reports tied to one X-network (HYPOTHESIS—summary of Matichon). ≥50 cash-outs / >200k THB by a single cash-out mule in early 2025 case (HYPOTHESIS). No national annual ticket-scam statistic found (searched; none).
- **Problem type:** Trust deficit / counterparty verification at payment time (with scarcity-driven demand).
- **WTP signal:** Victims already pay 300–700 THB service fees and 10x resale markups (Thai PBS, FACT) -> strong willingness to pay for *access*; no evidence of WTP for *verification tools* per se.
- **Evidence status:** FACT (Thai PBS 12 Jun 2026; The Standard 10 Jun & 21 Jan 2026) + HYPOTHESIS (police figures). **Confidence: High** that problem is real/large and recurring; Medium on exact scale.
- **Sources:** https://thestandard.co/concert-ticket-scam-victims/ ; https://www.thaipbs.or.th/news/content/507010 ; https://thestandard.co/resale-tickets-thai-concert-problem/ ; https://www.matichon.co.th/local/crime/news_5755227 ; https://www.khaosodenglish.com/life/entertainment/2026/06/10/seven-arrested-in-thai-concert-ticket-scam-network/ ; https://www.thaipbs.or.th/now/content/962
- **Uncertainty:** No official ACSC/AOC dataset opened; whether Thai Ticket Major has any official transfer/name-change feature NOT verified (no source found either way); TTM market share 90–95% is from old English sources (HYPOTHESIS).
- **Build feasibility (1-dev React/Supabase ~1.5 days):** A *record/evidence* tool (seller ledger, group-shared scam-check, receipt log) is feasible. Anything that verifies *ticket validity* is NOT feasible (no TTM API found). Can't hold money.
- **Legal flags:** App must not hold funds or act as escrow (payment-service licensing under Thai Payment Systems Act — HYPOTHESIS, verify). Naming/shaming sellers = defamation risk (Criminal Code s.326–328) and PDPA exposure for personal data/ID cards (HYPOTHESIS). Resale: no Thai statute found in my searches; do not assume legal or illegal.

---

### P-K-02  Reseller/"รีเซล" market with no safe peer-to-peer transfer (structural cousin of P-K-01, buyer side without a middleman)
- **Who:** Fans who missed the sale; also people who can't attend and want to resell at face value (SPECULATION about the sell-side need; no source found).
- **Trigger:** Sell-out; installment buyers (>50% of buyers pay in 3–4 monthly instalments for GMM SHOW events — The Standard 21 Jan 2026, FACT) creating drop-outs.
- **Proximate cause:** Buyer pays seller before receiving a verifiable ticket.
- **Root cause:** Organizers do not offer (per sources I found) an official face-value transfer; resale is uncontrolled ("ยอมรับว่ายังไม่สามารถควบคุมการนำบัตรไปขายต่อได้ทั้งหมด").
- **Workaround:** Meet-and-swap, pay-after-entry, screenshot QR (QR may be duplicated — SPECULATION).
- **Current solutions & failure:** Organizer asks consumers not to buy at inflated prices (FACT) — demand-side moral appeal only.
- **Frequency / WTP:** VIP 7,800 -> 85k–180k reported (Thai PBS). Strong WTP for access.
- **Type:** Missing infrastructure (transfer channel) + trust deficit.
- **Evidence/Confidence:** FACT for existence; Medium for "no official transfer channel" (absence of evidence).
- **Feasibility/Legal:** Same as P-K-01; ticket-validity check impossible without organizer cooperation.

---

### P-K-03  Collecting money & headcount for group events (friends' concert groups, งานบวช/แต่ง contributions, class reunions) — THIN EVIDENCE
- **Who:** The informal treasurer ("คนเก็บเงิน") in a friend/class/family group.
- **Trigger:** Event needing prepayment (ticket group buy, venue deposit, shared lodging).
- **Proximate cause:** Members say "yes" then drop out; treasurer fronts money.
- **Root cause (HYPOTHESIS):** Commitment is free in chat; money chasing is socially costly.
- **Workaround:** LINE group + pinned account no. + slip screenshots; spreadsheets; a Thai bill-splitting app was recommended in a Marketing Oops piece (https://www.marketingoops.com/?p=302281, HYPOTHESIS from summary).
- **Evidence found:** Only adjacent items: a funeral-society chair saying payouts were late because member dues could not be collected (https://www.thaipost.net/main/detail/75821, HYPOTHESIS—summary only). Foreign articles on RSVP no-shows (not Thailand). **No Thai survey/number found for reunion/wedding/ordination collection problems.**
- **Link to scam data:** The BTS "pay a group organizer in advance" pattern (P-K-01) shows the same structure at scale: a person pooling money for others is a trust risk.
- **Frequency/WTP:** none sourced. **Confidence: Low.**
- **Type:** Coordination/commitment friction.
- **Feasibility:** Tracking pledges and slips in a shared page is easy (1.5 days); collecting money is NOT allowed (no holding funds).
- **Legal:** Do not hold or route funds; PDPA on bank slips (contain account no./names).

---

### P-K-04  Friend road-trip cost sharing and liability (fuel, tolls, wear, accident) — THIN EVIDENCE
- **Who:** The car-owner/driver in a friend group trip.
- **Trigger:** Multi-day trip, owner's car.
- **Proximate cause:** Costs and risk fall unevenly; wear & tear and insurance excess not shared.
- **Root cause (HYPOTHESIS):** No norm for wear/insurance; owner bears the legal tail.
- **Workaround:** Split fuel + tolls by hand at the end.
- **Evidence found:** Lawyer Q&A threads only (legardy.com: https://legardy.com/free-qna/476 ; /51872) — per summaries: a driver who drives negligently is liable even when passenger rode voluntarily; owner can be liable if lending car on the owner's errand; insurer pays for at-fault party; unresolved disputes go to OIC (คปภ.). These are individual opinions, HYPOTHESIS. **No survey, no article on fuel/toll splitting, no Thai source on the legality of charging passengers in a private-plate car** (my search returned only Singapore/India/UAE/California — all say charging fares in private cars is regulated there; Thai position UNVERIFIED).
- **Frequency/WTP:** none sourced. **Confidence: Low.**
- **Type:** Money-splitting friction + latent liability risk.
- **Feasibility:** Trip cost-splitter = trivial; many exist (SPECULATION about competition, not searched).
- **Legal flags:** If a tool facilitates *paid* rides in white-plate cars, Land Transport Act exposure (UNVERIFIED for Thailand — must check before any such feature).

---

### P-K-05  Freelancers: non-payment, scope creep, 3% withholding paperwork
- **Who:** Thai freelancers (designers, writers, devs, teachers).
- **Trigger:** Delivered work -> client delays/refuses payment, or demands unlimited revisions, or pays 97% with no / late 50 ทวิ.
- **Proximate cause:** Work started on chat agreement without written scope/payment milestones.
- **Root cause:** Hire-of-work (จ้างทำของ) is a civil contract, not labour law; enforcement = demand letter -> lawsuit, disproportionate for small amounts (legardy.com Q&A, HYPOTHESIS from summary; https://legardy.com/blogs/freelance-hire-of-work-unpaid-disputes-thailand).
- **Workaround:** Keep chats, work files, transfer slips; send written demand letter; lawyer notice.
- **Withholding tax:** Krungsri example: service fee 10,000 -> 300 THB withheld at 3%; payer should give 50 ทวิ; freelancer reconciles at year-end (https://www.krungsri.com/th/krungsri-the-coach/taxes/tax-knowledge/how-withholding-tax-related-with-revenue — HYPOTHESIS, from summary). Not confirmed: whether an *individual* payer must withhold/issue 50 ทวิ (generally withholding duty sits with juristic persons/certain payers — SPECULATION, not verified).
- **Data on Thai freelancers:** SCB EIC survey exists (income/returns; 34% general contract work, 11% teaching/research) (https://thaipublica.org/?p=161521 — HYPOTHESIS). **No Thai statistic on % of freelancers unpaid found.** e-Tax invoice: not researched beyond that (UNKNOWN).
- **Frequency/WTP:** none sourced. **Confidence: Low–Medium** (problem obviously real; Thai numbers missing).
- **Type:** Contract/enforcement gap; compliance confusion.
- **Feasibility:** Contract/quote templates + 50 ทวิ calculator + evidence log = 1.5 days feasible; many incumbents likely (SPECULATION).
- **Legal flags:** Not legal advice; tax calc must cite RD sources; app must not hold money (no escrow).

---

### P-K-06  CBT/homestay community leaders: booking, rotation, revenue sharing, disputes — THIN EVIDENCE
- **Who:** Homestay group chairs / community tourism committees.
- **Trigger:** Group bookings, tour operator requests, fair allocation across member households.
- **Evidence (FACT):** Study of all 53 government-recognized homestay communities in NE Thailand, 81 key informants: 45.3% completely inactive (no visitors), only 5.7% practised genuine CBT; active ones fall into four types by organization, tourist volume and benefit-sharing (Choenkwan & Rambo 2025, Forest and Society 9(1) — https://scholarhub.unhas.ac.id/fs/vol9/iss1/12). Abstract does not itemize rotation or dispute mechanics.
- **Evidence (HYPOTHESIS, summary only):** Chiang Mai (Mon Ngo) case: conflict over resource ownership, income leakage, finance and participation (https://patrinum.ch/record/508055); community leaders "allocate" the visitor base and houses (Thai journal summary). Nothing on rotation queues, % levy to common fund, or booking software.
- **Root cause (SPECULATION):** Informal allocation by the chair via phone/LINE; opaque ledger.
- **Frequency/WTP:** 45.3% inactive implies *demand*, not allocation, is the dominant problem in NE homestays -> a coordination tool would not fix the main issue (inference from FACT). WTP: none found.
- **Confidence:** Low for the allocation-dispute problem; Medium that most homestays lack visitors.
- **Type:** Demand shortage > governance transparency.
- **Feasibility:** Rotation/booking board is feasible; value uncertain. **Legal:** no money handling.

---

## UNKNOWNS FOR PART 1
- Official national statistics (AOC/ACSC) on ticket-scam cases per year — not found.
- Whether TTM or other ticketing platforms offer official transfer/name-change (not found either way).
- Thai-language evidence for E2 (reunion/ordination/wedding collection) — essentially none; needs Pantip/FB-group scan.
- Thai legality of cost-sharing/charging passengers in private cars — unverified.
- Freelancer non-payment prevalence in Thailand; individual-payer withholding duty; e-Tax invoice relevance to individuals.
- Homestay rotation/levy mechanics — need Thai thesis search (keywords: "ระบบเวรบ้านพัก", "ข้อบังคับกลุ่มโฮมสเตย์", "ค่าส่วนกลาง") and TCI-Thaijo.

---------------------------------------------------------------------
## PART 2 — TRUST ANCHOR TABLE (Thailand)
---------------------------------------------------------------------

| # | Anchor | What it proves | What it does NOT prove | Access / cost | Source (URL, date) | Status |
|---|---|---|---|---|---|---|
| 1 | **DBD DataWarehouse+** (juristic-person lookup) | A company/partnership name or registration number exists in the DBD register; status, address, capital, filings, financial statements (service lists "juristic person info and financial statements") | That the person you are talking to is connected to the company; that the company's bank account is the one you are paying; that business is legitimate. Shell companies registered to open mule accounts exist (Thai PBS Now, 22 Mar 2024) | Web lookup free per news reports (Thansettakij, Naewna) — the DBD page itself does not state "free"/login (page opened: no fee/login mention). Warns scammers clone the site; official = datawarehouse.dbd.go.th / dbd.go.th. 84.4M visits as of 2 Aug 2026 (Matichon via summary) | https://datawarehouse.dbd.go.th/ (opened 2026-10-22) ; https://www.thaipbs.or.th/now/content/962 (opened) | Lookup exists: FACT. Free: HYPOTHESIS (news). |
| 1b | **DBD open data / API** | — | — | Open-data portal opendata.dbd.go.th has CSVs under "Open Data Common", no access restriction, but the dataset I opened (new registrations) is **aggregate counts by province, no company names/numbers**. No documented public per-company lookup API found. Government/private data linkage goes through **BDEX (bdex.dbd.go.th)** with registration and statutory fees (summary, HYPOTHESIS). A third-party tool claims openapi.dbd.go.th has WAF/rate limits (anecdotal) | https://opendata.dbd.go.th/en/dataset/dataset_12_01 (opened; updated 21 Oct 2026) | Aggregate CSV: FACT. Free per-company API: **not found / likely none**. |
| 2 | **DOT tour-operator licence search** (dot.go.th) | A tour company is licensed under the Tour Business & Guide Act 2551; status "ปกติ" = registered properly. Search by company name or licence number | That the specific Facebook page/person is that company; not any guarantee of refund; does not cover non-tour services | Online, free (article describes search box on dot.go.th) ; penalties for unlicensed operating: up to 2 yrs / 500k THB (s.80). Complaint line 02-401-1111 | https://www.bangkokbiznews.com/lifestyle/travel/1060555 (opened; original date unclear ~2023). Fields beyond name/licence no. not seen | FACT that search by name/licence no. exists per article; exact current URL/path UNVERIFIED |
| 3 | **Hotel licence (Hotel Act 2547) lookup** | Would prove licensed hotel under Hotel Act | — | **No public per-property search page found.** Officials check via DOPA e-service (staff system). data.go.th has aggregate counts (e.g. by district) not names (summary). Practical route = ask provincial registrar | search summary (HYPOTHESIS); https://gdcc.data.go.th/en/dataset/dataset_66_02_022 not opened | Public lookup: **not found** (HYPOTHESIS). |
| 3b | **Homestay standard (มาตรฐานโฮมสเตย์ไทย / มอก.เอส 185-2564)** | Passed DOT assessment (or TISI standard; 53 certified operators reported for มอก.เอส) | Not a hotel licence; small homestays (≤4 rooms, ≤20 guests under ministerial rule — SPECULATION, not verified) may not need Hotel Act licence; list is outdated (last 2020/2022-era) | Open dataset on data.go.th from Loei provincial office: Home Stay/Guest House certified list, updated 2023-02-01, annual, CSV/XLS, "Open Data Common"; district-level coverage, **column names not visible** | https://gdcc.data.go.th/en/dataset/dataset_12_152 (opened) | FACT dataset exists/stale; completeness UNKNOWN |
| 4 | **PromptPay / bank transfer — recipient name shown before confirm** | That the account (or PromptPay ID) belongs to a named owner at that bank | That the owner is the person you are dealing with; mule accounts (incl. real registered companies/partnerships and identity-theft accounts) show legitimate names (Thai PBS Now 2024; Thairath summary) | Free; built in. Official Thai guidance says check recipient name spelling + amount before confirming (MoF doc, via summary). StanChart Thailand guide: name shown after online validation (summary). **Exact format (full vs partially masked) in domestic Thai apps: NOT confirmed.** Singapore PayNow->PromptPay lookup shows partially masked name (DBS, summary) | https://www.thaipbs.or.th/now/content/962 (opened) ; PDF guide fetch failed (binary) | "Name shown before confirm": HYPOTHESIS (strong; multiple bank guides). Masking format: UNKNOWN |
| 5 | **LINE Official Account verified badge** | Account passed LINE review (badge + in-app search); applications accepted for Japan, Taiwan, Thailand (and Indonesia per Sinch) | Doesn't prove honesty or refund-ability; review criteria not published on help page opened. Reported requirements (HYPOTHESIS, Sinch/other): business registration, company description, website, admin ID/employment proof, a Premium ID; ~5–10 business days; badge colour: blue=verified, green=premium (sources conflict) | Basic OA free. **Premium ID ≈ 444 THB/yr ex-VAT** (Android/web), 459 on iOS (Brand Inside/Relevant Audience, summary, HYPOTHESIS). Review fee: none found (help page mentions no fees) | https://help.line.me/official_account/web/categoryId/20010174/3/pc?lang=en (opened) | Countries & existence: FACT. Criteria/cost: HYPOTHESIS |
| 6 | **Meta Verified (Facebook/IG business)** | Government-ID-verified account; Essential tier "includes a verified badge and impersonation protection, pending successful verification" | Not proof of legitimate business or fair dealing; scam X/IG accounts bought with followers (police case) shows follower count is not an anchor | **Meta One (Thai list prices, Marketing Oops 16 Sep 2026): Essential from 319 THB/mo, Advanced from 1,099, Expert 3,199, Max 10,990; consumer Instagram/Facebook Plus 35 each**. Old 2023 Meta Verified Thailand: 280 THB/mo web, 330 mobile (Brand Buffet, summary). | https://www.relevantaudience.com/meta/meta-one-subscription-launch-thailand-pricing/ (opened) | Prices: FACT (single trade-press source, which says they are Thai list prices) |
| 7 | **ThaID / NDID / e-KYC** | ThaID: DOPA-issued digital ID app with face comparison; NDID: bank-grade cross-institution e-KYC | n/a to app builder — access is gated | **Private small-app access NOT confirmed.** NDID: participants are financial institutions and companies on the platform acting as IdP/RP under BOT-authorised framework; per-transaction fee reported 150–200 THB in 2020 (unconfirmed estimate, Thansettakij Sept 2020 via summary, STALE). ThaID: used by DLT for plate reservation since 1 Jun 2023, and government apps; SEC accepts ThaID/Mobile ID for e-KYC. No private-sector registration steps or fee table found | summaries only: https://www.infoquest.co.th/?p=305915 ; https://publish.sec.or.th/nrs/9793s.pdf | HYPOTHESIS; likely not available to a 1-dev app without a partner/regulated entity (SPECULATION) |
| 8 | **Check-account tools (checkgon.com, Thai police "blacklist")** | Whether an account number/name/phone has been reported in prior complaints | Absence of reports != safe; new mule accounts are clean | Public, free (as referenced by Thai PBS Now). I did not open checkgon.com | https://www.thaipbs.or.th/now/content/962 (opened) | Mentioned: FACT; features/coverage UNVERIFIED |

### Reading across anchors (inference, labelled)
- Every *free, public* anchor proves **an entity or account exists**, none proves **the person chatting is that entity** (FACT-based inference from rows 1, 2, 4). The linking step (this person controls this LINE/FB page/bank account) is the gap; the paid/gated anchors that bridge it (LINE verified, Meta Verified, NDID/ThaID) cost money or are not available to a small private app.
- Shell-company mule accounts and followers-for-hire show attackers already pass the cheap anchors (rows 1, 4, and follower count) — FACT (Thai PBS Now 2024; police case 2026).
- Hotel licence is the biggest missing public lookup (HYPOTHESIS: not found, not proven absent).

## UNKNOWNS FOR PART 2
1. Whether DBD offers any free per-company API (BDEX terms/fees not opened).
2. Exact current URL and fields of DOT licence search (only a news description opened).
3. Whether any province publishes a searchable Hotel Act licence list.
4. Whether Thai bank apps show the full or masked recipient name for PromptPay (SC PDF failed to extract; no BOT document opened).
5. LINE verified review criteria and fees from LINE's own pages; Premium ID price verification.
6. ThaID/NDID onboarding for private entities (DOPA / NDID Co. documentation not found).
7. checkgon.com data source and API.

## Source list (opened = FACT-grade)
Opened: thestandard.co/concert-ticket-scam-victims ; thestandard.co/resale-tickets-thai-concert-problem ; thaipbs.or.th/news/content/507010 ; thaipbs.or.th/now/content/962 ; relevantaudience.com (Meta One TH prices) ; help.line.me OA verified page ; datawarehouse.dbd.go.th ; opendata.dbd.go.th dataset_12_01 ; gdcc.data.go.th dataset_12_152 ; bangkokbiznews.com/lifestyle/travel/1060555 ; scholarhub.unhas.ac.id/fs/vol9/iss1/12.
Snippet-only (HYPOTHESIS): Matichon 5755227, Naewna 969963, Khaosod English, SCB/BBL fraud pages, legardy.com Q&As, Krungsri WHT page, thaipublica EIC freelancer survey, Brand Inside/Relevant Audience LINE pricing, Thansettakij NDID fee, infoquest ThaID.
