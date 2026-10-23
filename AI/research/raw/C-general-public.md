# C — General Public, Everyday Life (Non-Travel): Existing Solutions + Problem Mining

Researcher slice: C (general public, everyday life, non-travel). Compiled 2026-10-22.
Method: about 30 WebSearch/WebFetch calls in Thai and English. Sources dated 2020 or later only.

**Evidence-status rules used in this file**
- **FACT** means I opened the page with WebFetch and read the figure there.
- **SNIPPET** means the figure was seen only in a search-result summary and the page was not opened. Treat it as a HYPOTHESIS until someone opens the page.
- "Single source" marks a number backed by only one opened source.
- Personal details from forum and Q&A cases have been removed.

**Blocked or failed sources**
- reddit.com: WebFetch is blocked.
- `site:pantip.com` searches returned no Pantip pages. Pantip content was reached only second-hand, through news and LINE Today.
- hfocus.org returned 403.
- The prd.go.th scam-check page returned 404.

---

## Existing Solutions

| ID | Existing Solution | Type | Target User | Problem Addressed | Mechanism | Limitations | Evidence | Source URL (+date) | Evidence Status | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| ES-C-01 | Blacklistseller (scammer lookup website) | direct app (web) | Online buyers in Thailand | Paying a fraudulent seller | Users search a seller's name, bank account or phone number against reports filed by past victims | Reactive: an account appears only after it has already hurt someone. Scammers rotate mule accounts, so a new account comes back clean (inferred from the AOC/BOT data on mass account suspensions). No protection at the moment of payment. | A government PR page reportedly recommends it; a legal blog describes it as working from victim reports | https://www.prd.go.th/th/content/category/detail/id/9/iid/253273 (returned 404); https://legardy.com/blogs/how-to-check-the-name-of-scammers-online (no date) | SNIPPET | Medium |
| ES-C-02 | Checkgon, Whoscall, Truecaller | direct or partial app | Online buyers; phone users | Identifying scam sellers and callers | Crowd-reported blacklists of phone numbers and accounts | Same weakness as ES-C-01: blacklists lag behind fresh accounts | Mentioned in a search summary of a legal blog | https://legardy.com/blogs/how-to-easy-check-scammer-guide (no date) | SNIPPET | Low–Medium |
| ES-C-03 | Marketplace escrow (Shopee, Lazada: buyer pays the platform, seller is paid after delivery) | direct app (other context) | Platform buyers and sellers | Non-delivery; item not as described | The platform holds the money until the buyer confirms receipt | Does not cover social commerce (Facebook, LINE, TikTok chat sales) or person-to-person used-goods deals, where the buyer transfers by PromptPay straight to the seller. Fake "escrow" sites are themselves a known scam. | Fake-escrow scam pattern documented abroad (escrow.com FAQ; Korean case 2020). Facebook and LINE named as leading social-commerce channels in Thailand. | https://www.escrow.com/support/faqs/how-does-a-fraudulent-escrow-site-defraud-sellers ; https://www.krungsri.com/en/research/research-intelligence/social-commerce-21 (snippets) | SNIPPET (mechanism); HYPOTHESIS (gap) | Medium |
| ES-C-04 | AOC 1441 hotline with bank-account suspension | non-app (government) | Fraud victims | Stopping money after a scam | Victim calls 1441; the money trail is traced and accounts are frozen | After the fact. Freeze rate 47.86% of the amount requested, 1 Nov 2023 to 31 Mar 2024 (8.19 bn baht requested, 3.92 bn frozen). Chain freezes also hit innocent account holders (see P-C-04). | 523,297 calls and 102,925 accounts suspended, 1 Nov 2023 to 5 Apr 2024 | https://www.thaipost.net/criminality-news/567384/ (2024-04-09) | FACT (single source for the freeze rate) | High |
| ES-C-05 | ETDA 1212 Online Complaint Center | non-app (government) | Online consumers | Complaints about online buying and selling | Takes complaints and refers them on | Volume only; no prevention at the point of sale | 35,358 complaints in 2024, down 21.74% from 45,190 in 2023. Online buying and selling was 15,050 complaints (42.56%). | https://www.thansettakij.com/technology/618896 (2025-02-06) | FACT | High |
| ES-C-06 | Office of the Consumer Protection Board (สคบ.) complaints: hotline 1166 and online filing | non-app (government) | Consumers and tenants | Disputes with merchants, landlords and contractors | Mediation, then legal action | Slow, case by case. The tenant or consumer must assemble the evidence. Online shopping is the No.1 complaint category in fiscal 2025. | Category ranking for FY2568 | https://policywatch.thaipbs.or.th/article/government-303 (2026-03-08) | FACT | High |
| ES-C-07 | 2025 Contract Committee announcement making residential rental a contract-controlled business (ประกาศคณะกรรมการว่าด้วยสัญญา พ.ศ. 2568) | non-app (regulation) | Tenants of landlords with 3 or more units | Unfair deposit forfeiture; utility markups | Deposit plus advance rent capped at 3 months. Deposit returned within 7 days if there is no damage, or within 14 days with only actual damage deducted. Utilities charged at state rates. | **Dormitories and hotels governed by other laws are excluded**, so student dorms fall outside it. Enforcement still depends on the tenant complaining. | In force 4 Sep 2025 | https://www.dailynews.co.th/news/5552432/ (2026-01-30); https://www.mitihoon.com/2026/05/28/645897/ (2026-05-28) | FACT (2 sources) | High |
| ES-C-08 | Small Claims Court (under 300,000 baht) plus demand letter | non-app (legal) | Tenants, freelancers, sellers | Recovering small debts and deposits | Civil claim | Time and effort usually exceed the amount at stake. A demand letter is the main practical lever. | Legal guide | https://www.superagent.co/en/blog/what-to-do-when-your-bangkok-landlord-wont-return-your-deposit (undated, site © 2026) | FACT (guide, not official) | Medium |
| ES-C-09 | Legardy free lawyer Q&A | other | General public | Legal triage for deposits, cash-on-delivery refusals, unpaid freelance fees, contractors | Lawyers answer public questions | Advice only. The many repeat questions point to a recurring, unresolved need (inferred). | Opened case: dorm deposit of 11,800 baht with only 2,080 offered back | https://legardy.com/free-qna/7894 (lawyer reply dated 2024-04-12) | FACT | Medium |
| ES-C-10 | Splitwise | direct app | Friends, roommates, groups | Shared expenses and IOUs | Ledger of who owes whom; reminder emails | User reviews describe a free-tier cap of 3–4 expenses per day from late 2023, with Pro paywalled (reported at £40/year or "$8/user/month"). No PromptPay. Reminders still come from the person owed. | Trustpilot reviews and a competitor's page | https://ie.trustpilot.com/review/splitwise.com?page=2 ; https://www.kittysplit.com/en/splitwise-alternative | SNIPPET (not opened) | Low–Medium |
| ES-C-11 | Split Bill – Pay Friends (Thai, iPhone only) | direct app | Thai friend groups | Splitting a bill and collecting payment | Generates a PromptPay QR code for each person; tracks who has paid; data stays on the device | iPhone only. Device-local data means the debtor cannot see the ledger. | App Store listing | https://apps.apple.com/us/app/split-bill-pay-friends/id6756707606 | SNIPPET | Medium |
| ES-C-12 | Spliit, Lightsplit, Tricount | direct app | Groups and trips | Shared expenses | Shared ledger (Lightsplit runs on the web and LINE) | PromptPay support not confirmed | Search summary | https://alternativeto.net/software/splitwise/?p=10 | SNIPPET | Low |
| ES-C-13 | Polite debt-reminder captions published by banks and retailers (Krungsri, KTC, Shopee blog) | user workaround | Lenders among friends | The social cost of asking for money back | Scripted wording to avoid conflict | The burden stays with the creditor. That banks publish this content suggests real demand (inferred). | Search results | https://www.krungsri.com/th/plearn-plearn/five-techniques-to-claim-your-money-back ; https://www.ktc.co.th/article/lifestyle/misc/how-to-debt-collection | SNIPPET | Medium |
| ES-C-14 | Home-service platforms (Fixzy, Seekster, Q-CHANG, ServisHero, HomePro Home Service) | direct app | Homeowners | Finding vetted technicians | Platform-screened pool of technicians; fixed-price small jobs. Seekster offers a damage guarantee of up to 20,000 baht within 30 days for air-conditioner cleaning. | Covers standard small jobs. Large renovations, built-in furniture and house construction (where deposits are big) mostly happen off-platform. Seekster requires booking at least 3 days ahead. | Comparison articles | https://www.checkraka.com/house/article/125879/ ; https://www.checkraka.com/house/article/119115/ | SNIPPET | Medium |
| ES-C-15 | NHSO 1330 hotline; no-referral-slip policies (inpatients since 1 Jan 2022; "cancer care anywhere") | non-app (government) | Gold Card (UCS) patients | Being bounced between facilities over referral slips | Policy plus hotline complaints | Facilities still call patients back for slips. In May 2026 the NHSO Secretary-General reportedly said the problem has lasted 23+ years. | Matichon (2024-03-21); The Standard (2025-11-17) | https://www.matichon.co.th/local/news_4485219 ; https://thestandard.co/nhso-bma-referral-crisis/ | FACT (problem persists); SNIPPET (the 23-year quote, hfocus 403) | Medium–High |
| ES-C-16 | Jobsdb/SEEK fraud scanning | partial app | Job seekers | Fake job listings | Scans all listings; escalates 8% for review; blocks employers | Covers only listings on its own platform. Fake jobs spread through social media and direct messages (per DE Ministry warnings, snippet). | Region-wide (Jul 2024–Jun 2025): about 4.3M listings scanned, over 3,600 employers blocked, over 22,000 listings reported by users | https://www.brandbuffet.in.th/2025/11/seek-insights-job-application-scams-targeting-vulnerable-groups/ (2025-11-18) | FACT | High |
| ES-C-17 | Bank of Thailand mule-account measures: temporary freezes; 1441 "press 2" unlock; 4-hour unlock target | non-app (regulation) | All bank users | Mule accounts | Banks suspend accounts along the money trail. Innocent holders call 1441 to be unlocked. | Collateral freezes of innocent accounts; unlocks used to take 3–7 days (see P-C-04) | BOT (2025-09-15); Thai PBS Verify (2025-09-21) | https://www.bot.or.th/th/news-and-media/news/news-20250915.html ; https://www.thaipbs.or.th/verify/article/content/5536 | FACT | High |
| ES-C-18 | Cash on delivery (COD) | other / workaround | Social-commerce buyers | Buyers not trusting sellers | The buyer pays the courier on delivery | Moves the risk onto the seller: refused parcels cost the seller shipping both ways, and recourse is civil only (see P-C-03) | Legardy Q&A | https://legardy.com/free-qna/639 | SNIPPET | Medium |

---

## Problems

### P-C-01 — Pay-first fraud in social commerce and person-to-person used-goods deals (Facebook, LINE, TikTok chat)
- **Who is affected:** Members of the public who buy through chat or social posts and pay by direct bank or PromptPay transfer, including buyers of used goods.
- **Trigger:** The buyer has to transfer money before receiving the item, to a stranger, with no intermediary.
- **Proximate cause:** No escrow in chat commerce. The seller's identity is just a bank account.
- **Possible root cause:** A trust gap combined with information asymmetry. Marketplace escrow (ES-C-03) has no counterpart in chat sales. Mule accounts are cheap to recruit (ties to P-C-07), so blacklists are always behind.
- **Current behavior and workarounds:** Checking Blacklistseller, Checkgon or Whoscall; paying cash on delivery; asking for more photos; reporting to 1441 afterwards.
- **Harm:** Money lost. Low recovery: the freeze rate was 47.86% of the amount requested, Nov 2023 to Mar 2024 (FACT, single source).
- **Where current solutions fail:** Blacklists are reactive (ES-C-01/02). Platform escrow does not reach chat deals (ES-C-03). Cash on delivery pushes the risk onto honest sellers (P-C-03). Fake escrow sites turn the remedy into a new scam.
- **Who benefits or loses from the status quo:** Scammers and mule recruiters benefit. Buyers and honest small sellers lose: they face a "lemons" discount, because buyers distrust everyone.
- **Frequency and severity (all from opened sources):**
  - ETDA 1212: online buying and selling was 15,050 of 35,358 complaints in 2024 (42.56%), the largest category. The most common methods were items not matching the listing and payment taken with no delivery.
  - AOC 1441: fake buying and selling of goods and services was the largest category of suspended accounts, 30,858 of 102,925 (29.98%), from 1 Nov 2023 to 5 Apr 2024. A search snippet gives 193,192 accounts (31.78% of the top five categories) up to 18 Apr 2025.
  - สคบ.: online shopping is complaint category No.1 for FY2568.
  - Three independent sources agree this is the top category.
- **Problem type:** Observed in official statistics.
- **Willingness-to-pay signal:** Indirect. People already pay a premium through marketplace fees for protection. No direct evidence that buyers or sellers would pay for a third-party verification or escrow step in chat sales (HYPOTHESIS).
- **Evidence status:** FACT for scale; HYPOTHESIS for the escrow-gap mechanism. Confidence: High for scale, Medium for mechanism.
- **Sources:**
  - https://www.thansettakij.com/technology/618896 (2025-02-06)
  - https://www.thaipost.net/criminality-news/567384/ (2024-04-09)
  - https://policywatch.thaipbs.or.th/article/government-303 (2026-03-08)
- **Uncertainty:**
  - No figure separates person-to-person used-goods deals from merchant scams.
  - Holding money in escrow may need a Bank of Thailand e-payment licence. This is a legal unknown and a risk for any money-holding design.
- **Build feasibility (HYPOTHESIS):** A web app is feasible in about 1.5 days if it does not hold money, for example a seller-verification or deal-record link: a timestamped listing snapshot, seller ID check, and shared deal terms. Real escrow is not feasible at zero budget or without a licence.
- **Link to travel:** Possible but unverified. Fake accommodation and tour bookings sold through Facebook would follow the same pay-first mechanism. No source was opened for this (SPECULATION).

### P-C-02 — Rental and dorm deposits forfeited without valid grounds; tenants carry the burden of proof
- **Who is affected:** Tenants of dorms, apartments and condos, especially students and young workers.
- **Trigger:** Moving out. The landlord deducts or keeps the deposit, often citing procedure (such as late move-out paperwork) or wear and tear.
- **Proximate cause:** The landlord already holds the money. The tenant has to start a dispute to get it back.
- **Possible root cause:**
  - Incentive misalignment: keeping the deposit costs the landlord nothing unless the tenant complains.
  - Information asymmetry: tenants do not know the 7/14-day rule. Room-condition evidence at move-in and move-out is rarely recorded.
  - Regulatory gap: the 2025 announcement covers landlords with 3 or more units but **excludes dormitories and hotels governed by other laws**, so many student dorms fall outside the clearest rule.
- **Current behavior and workarounds:** Keeping LINE chats, taking photos, sending a demand letter, filing with สคบ. (free, online) or in Small Claims Court.
- **Harm:**
  - Deposit plus advance rent can reach up to 3 months' rent.
  - In one opened case, a dorm offered back only 2,080 baht of an 11,800-baht deposit, citing late paperwork. The tenant could not obtain a copy of the contract.
- **Where current solutions fail:** Regulation (ES-C-07) still relies on the tenant to enforce it. สคบ. and the courts are slow (ES-C-06/08). The tenant has no move-in record.
- **Who benefits or loses from the status quo:** Landlords who forfeit deposits benefit. Tenants, and honest landlords who suffer from general distrust, lose.
- **Frequency and severity:** สคบ. received 1,655 residential-rental complaints from 2025 to May 2026. The most common was unfair deposit forfeiture, followed by water and electricity charged above state rates (FACT, **single source**: Mitihoon 2026-05-28). A DDproperty survey figure (34–35% of renters reporting deposit disputes) appears only in secondary blogs that contradict each other, so it is not used.
- **Problem type:** Observed (official complaint count plus a documented case).
- **Willingness-to-pay signal:** Weak for tenants per incident. A HYPOTHESIS: honest landlords and condo agents might pay for a neutral move-in/move-out record to cut disputes. No direct evidence.
- **Evidence status:** FACT for the rules (2 sources) and the case; FACT single-source for the complaint count. Confidence: High.
- **Sources:**
  - https://www.dailynews.co.th/news/5552432/ (2026-01-30)
  - https://www.mitihoon.com/2026/05/28/645897/ (2026-05-28)
  - https://legardy.com/free-qna/7894 (2024)
  - https://www.superagent.co/en/blog/what-to-do-when-your-bangkok-landlord-wont-return-your-deposit (undated)
- **Uncertainty:**
  - The exact law for dorms (likely the Dormitory Act 2015, พ.ร.บ.หอพัก พ.ศ. 2558) was not verified.
  - No share of complaints by amount.
- **Build feasibility (HYPOTHESIS):** High. A web app for a timestamped room-condition checklist with photos at move-in and move-out, which both parties acknowledge, plus an auto-generated demand letter citing the 7/14-day rule, a deadline countdown and an สคบ. filing guide.
- **Link to travel:** None found.

### P-C-03 — COD refusals: risk moved onto small online sellers
- **Who is affected:** Small online sellers (แม่ค้าออนไลน์) who offer cash on delivery to win buyer trust.
- **Trigger:** The buyer orders by cash on delivery, then refuses the parcel or does not pick it up.
- **Proximate cause:** Cash on delivery means no commitment from the buyer. The seller pays outbound and return shipping.
- **Possible root cause:** A second-order effect of the buyer-side trust gap (P-C-01). Cash on delivery solves buyer distrust by moving the risk onto the seller. Enforcement is civil only; criminal action is possible only if intent to defraud from the start can be shown.
- **Current behavior and workarounds:**
  - Legal Q&A (snippet).
  - Possible seller-side buyer blacklists in Facebook groups (SPECULATION, not sourced).
  - Asking for a partial deposit.
- **Harm:** Shipping lost both ways; stock tied up; pre-ordered goods unsold.
- **Where current solutions fail:** Courier cash-on-delivery terms do not compensate refusals. Legal action costs more than the loss.
- **Who benefits or loses from the status quo:** Couriers are paid either way (inferred). Sellers lose.
- **Frequency and severity:** No sourced numbers.
- **Problem type:** Reported (individual cases).
- **Willingness-to-pay signal:** Sellers already pay for shipping and tools. Plausible willingness to pay for a cross-seller buyer-reliability check (HYPOTHESIS). Privacy and PDPA risk.
- **Evidence status:** HYPOTHESIS. Confidence: Medium–Low.
- **Sources:** https://legardy.com/free-qna/639 ; https://legardy.com/free-qna/57482 (snippets, not opened)
- **Uncertainty:** Scale unknown; legality of shared buyer blacklists under the PDPA.
- **Build feasibility:** Medium. The tool is technically easy, but legal and abuse risks are high.

### P-C-04 — Innocent people's bank accounts frozen by anti-mule measures (a second-order effect)
- **Who is affected:** Ordinary account holders who sit on a scam money trail, such as small vendors paid with stolen money or people further along a chain of transfers. Small vendors lose working capital.
- **Trigger:** The bank temporarily suspends the account under the 2025 Royal Decree on technology crime (amendment No.2, sections 6–7).
- **Proximate cause:** Freezes spread "in a chain" along money trails. Tracing the trail more widely hits more honest people.
- **Possible root cause:** Policy designed for speed against scammers; the cost is shifted onto honest people (hidden stakeholders). Unlocking requires proving innocence.
- **Current behavior and workarounds:** Calling 1441 and pressing 2 with name, account number and 13-digit ID; some people withdrew cash out of fear.
- **Harm:** Loss of access to money. Unlocks previously averaged 3–7 days, or 72 hours to 7 days under the decree. The new target is 4 hours after the cyber-police centre (ศปอท.) sends data, three batches a day.
- **Where current solutions fail:** Notification to frozen holders was unclear. The Bank of Thailand itself committed to clearer, standardized notices, which implies earlier notices were inadequate.
- **Who benefits or loses from the status quo:** Fraud victims and the system benefit. Innocent holders and small vendors lose.
- **Frequency and severity:** About 10,000 accounts temporarily suspended per week on average, 1 Jul to 11 Sep 2025, counting both innocent and scam accounts (FACT, **single source**: Thai PBS citing the Bank of Thailand). The 4-hour unlock target is in 2 sources.
- **Problem type:** Observed.
- **Willingness-to-pay signal:** None found.
- **Evidence status:** FACT. Confidence: High for the mechanism; Medium for the 10k/week figure (single source).
- **Sources:**
  - https://www.thaipbs.or.th/verify/article/content/5536 (2025-09-21)
  - https://www.bot.or.th/th/news-and-media/news/news-20250915.html (2025-09-15)
- **Uncertainty:**
  - The share of innocent accounts is unknown.
  - Whether the 4-hour target is met in practice is unverified; the situation may have changed by Oct 2026.
- **Build feasibility:** Low for a fix. A guidance or checklist tool is feasible but hard to monetize.

### P-C-05 — Informal IOUs and shared expenses among friends and family: the person owed bears the social cost of asking
- **Who is affected:** Friends, roommates, families and colleagues who lend small sums or split bills.
- **Trigger:** A loan or shared payment. The debtor forgets or stalls.
- **Proximate cause:** Only the person owed can ask, and asking risks the relationship. Example: a 500-baht loan led to the reply "friends don't ask back for this little money" and an argument; the story went viral from Pantip.
- **Possible root cause:** Social-norm friction (the cost of asking falls on the wrong party) plus no shared, visible ledger. Existing ledger apps keep the reminder with the person owed or keep the data on one device.
- **Current behavior and workarounds:**
  - Polite or joking reminder captions published by banks and retailers (ES-C-13).
  - PromptPay QR codes in LINE groups (inferred).
  - Splitwise and the Thai iPhone-only Split Bill app.
  - Posting debts publicly on TikTok (a 2023 case of 150,000 baht between former friends, snippet).
- **Harm:** Money lost, damaged relationships, and avoidance of lending, which pushes people toward informal lenders (inferred).
- **Where current solutions fail:**
  - Splitwise: free-tier cap of 3–4 expenses per day reported by users since late 2023; no PromptPay (SNIPPET).
  - Split Bill: iPhone only; data on the device.
  - None of them neutralizes the social cost of asking.
- **Who benefits or loses from the status quo:** Debtors who stall benefit. The people who pay first lose.
- **Frequency and severity:** No direct survey. Context: informal debt is 35% of household debt in the UTCC 2025 survey (FACT, **single source**, and it does not isolate friends and relatives).
- **Problem type:** Reported (viral cases; volume of bank content).
- **Willingness-to-pay signal:**
  - Weak to moderate. Splitwise users pay for Pro (reported pricing) and complain mainly about the daily cap, suggesting willingness to pay for "unlimited only" (single reviewer quote, SNIPPET).
  - In Thailand, willingness to pay for personal-finance apps is unproven.
- **Evidence status:** FACT for the 500-baht case; SNIPPET for app limits; HYPOTHESIS for the mechanism. Confidence: Medium.
- **Sources:**
  - https://today.line.me/th/v2/article/GgE7827 (2023-02-07)
  - https://www.thansettakij.com/economy/639796 (2025-09-25)
  - https://www.krungsri.com/th/plearn-plearn/five-techniques-to-claim-your-money-back
  - https://ie.trustpilot.com/review/splitwise.com?page=2
- **Uncertainty:** Pantip threads were not reachable directly; frequency is unknown.
- **Build feasibility (HYPOTHESIS):** Very high. A web ledger with PromptPay QR codes, a link the debtor can see without logging in, and a neutral third-party reminder (for example a scheduled message sent from the app, not from the friend) is feasible in under 1.5 days.
- **Link to travel:** Causal. Group trips create shared expenses (Tricount is marketed for trips). The same mechanism applies; the travel slice may overlap.

### P-C-06 — Gold Card referral slips: patients bounced between facilities because of how payment is designed
- **Who is affected:** Universal Coverage (Gold Card) patients, especially in Bangkok, including people with chronic conditions who have ongoing hospital appointments.
- **Trigger:** A hospital appointment needs a valid referral slip from the patient's primary clinic. Slips expire or are cancelled when payment rules change.
- **Proximate cause:**
  - In March 2024, Bangkok community clinics cancelled slips issued before 1 Mar 2024.
  - Hospitals told patients to fetch new slips before treatment.
- **Possible root cause:** Incentive misalignment.
  - Under the capitation "OP New Model 5", the clinic pays 800 baht for each referral, so referring costs it money.
  - Billing requires paper slips because facilities' data systems are not connected. The minister targeted Oct 2024 for full data linking.
  - The patient is the hidden stakeholder who absorbs the coordination cost.
- **Current behavior and workarounds:** Repeat visits to the clinic; a Facebook group of affected patients petitioning the minister (demanding slip validity of at least 3 months for non-chronic and 1 year for chronic cases); the 1330 hotline.
- **Harm:** Delayed care, lost workdays and travel costs. Patients "may be unable to reach necessary treatment" (The Standard).
- **Where current solutions fail:** No-slip policies exist (inpatients since 2022; cancer) but facilities still call patients back. In May 2026 the NHSO Secretary-General reportedly admitted the issue persists and has lasted 23+ years (SNIPPET; hfocus returned 403).
- **Who benefits or loses from the status quo:** Clinics limit their costs. Patients lose.
- **Frequency and severity:** No patient count found. FY2568: 66,100 grievances and 41,891 complaints to NHSO, all topics (SNIPPET, from a Senate debate summary).
- **Problem type:** Observed (news plus ministerial acknowledgement).
- **Willingness-to-pay signal:** None. Patients use the free system by definition.
- **Evidence status:** FACT (two opened sources: Matichon 2024-03-21, The Standard 2025-11-17). Confidence: High for existence, Low for current scale.
- **Sources:**
  - https://www.matichon.co.th/local/news_4485219 (2024-03-21)
  - https://thestandard.co/nhso-bma-referral-crisis/ (2025-11-17)
  - https://www.hfocus.org/content/2026/05/38013 (403, snippet only)
- **Uncertainty:** Status in Oct 2026 unknown.
- **Build feasibility:** Low for fixing the root cause, which needs NHSO data integration. A rights checker ("do I need a slip for X?") is feasible, but there is no clear revenue.

### P-C-07 — Fake job and part-time listings that turn job seekers into victims or mule-account holders
- **Who is affected:** Job seekers needing income fast, including students looking for side income (targeting of students not quantified).
- **Trigger:** A "high pay, no experience" listing on social media or by direct message.
- **Proximate cause:** Information asymmetry. Job boards' fraud scanning (ES-C-16) does not reach social channels.
- **Possible root cause:** A second-order legal effect. People who lend their accounts may be presumed accomplices under the 2025 decree, facing up to 10 years per DE Ministry warnings (SNIPPET). The victim becomes a suspect.
- **Current behavior and workarounds:** DE Ministry warnings; job-board reporting.
- **Harm:** Money lost; criminal exposure; frozen accounts (links to P-C-04).
- **Where current solutions fail:** Scanning is limited to each platform's own listings.
- **Frequency and severity (opened sources):**
  - "Fake side-income jobs" was the 2nd-largest AOC category: 22,001 suspended accounts (21.38%), Nov 2023 to Apr 2024.
  - SEEK (Jul 2024–Jun 2025): sales roles were 67% of fraudulent listings in Thailand, accounting 17%, media and arts 17% (single source). SEEK says Thailand's overall job-fraud volume is lower than in other Asia-Pacific markets.
- **Problem type:** Observed.
- **Willingness-to-pay signal:** None for job seekers. Possible for universities or job boards (HYPOTHESIS).
- **Evidence status:** FACT. Confidence: High for scale, Medium for the student angle.
- **Sources:**
  - https://www.thaipost.net/criminality-news/567384/ (2024-04-09)
  - https://www.brandbuffet.in.th/2025/11/seek-insights-job-application-scams-targeting-vulnerable-groups/ (2025-11-18)
- **Uncertainty:** No student-specific numbers.
- **Build feasibility:** Medium. A listing red-flag checker is feasible, but the accuracy and liability risk is high.

### P-C-08 — Contractors and technicians taking deposits, then delaying or abandoning work
- **Who is affected:** Homeowners hiring for built-ins, renovation or house construction.
- **Trigger:** A large upfront deposit before work starts.
- **Proximate cause:** Payment comes before verified progress. Platforms cover only small, standardized jobs.
- **Possible root cause:** Incentive misalignment: deposits not tied to milestones. The enforcement gap is that recourse is civil only and slow.
- **Current behavior and workarounds:**
  - Demand letters; complaints to สคบ.
  - The Thai Consumer Council suing on behalf of consumers.
  - Group complaints, for example 20+ households in Nakhon Pathom with unfinished houses (SNIPPET).
- **Harm:** Deposits lost; homes left unfinished.
- **Where current solutions fail:** Fixzy, Seekster and Q-CHANG (ES-C-14) cover standardized small jobs, not big deposit jobs.
- **Frequency and severity:** Real estate is สคบ. complaint category No.3 in FY2568 (houses or condos not to spec; construction delays). FACT, single source; it is not specific to independent contractors.
- **Problem type:** Reported.
- **Willingness-to-pay signal:** HYPOTHESIS. Homeowners already pay large sums, so they might pay a small fee for milestone-based contracts.
- **Evidence status:** HYPOTHESIS (mostly snippets). Confidence: Medium–Low.
- **Sources:**
  - https://policywatch.thaipbs.or.th/article/government-303 (2026-03-08)
  - https://www.thaipbs.or.th/program/People/watch/141139 (snippet)
  - https://legardy.com/free-qna/2897 (snippet)
- **Uncertainty:** Scale and frequency for small contractors (not housing developers) unknown.
- **Build feasibility:** Medium. A milestone contract with a photo-progress log is feasible; holding money is not (licensing).

### P-C-09 — Prepaid service packages (beauty clinics and similar) that cannot be refunded
- **Who is affected:** Consumers who buy prepaid courses or packages.
- **Trigger:** The consumer stops using the service, or the provider changes or closes.
- **Proximate cause:** Prepayment locks in money; refund terms are unfavourable.
- **Possible root cause:** Incentive misalignment. Providers profit from unused prepaid credit ("breakage", an inferred mechanism).
- **Current behavior and workarounds:** Complaints to สคบ.
- **Harm:** Money lost on unused services; damage from the service itself.
- **Where current solutions fail:** Regulation is case by case.
- **Frequency and severity:** Beauty services are สคบ. complaint category No.4 in FY2568. The main issues are refunds refused when services are not used, and harm from the service (FACT, single source, no counts).
- **Problem type:** Observed (category ranking).
- **Willingness-to-pay signal:** None found.
- **Evidence status:** FACT (ranking only). Confidence: Medium.
- **Sources:** https://policywatch.thaipbs.or.th/article/government-303 (2026-03-08)
- **Uncertainty:** Volume and amounts unknown.
- **Build feasibility:** Medium (for example a prepaid-package tracker with refund-letter generator). Shallow research only.

### P-C-10 — Household debt overload and default (context problem, low direct tractability)
- **Who is affected:** Most households.
- **Frequency and severity:**
  - UTCC 2025: 95.1% of households in debt; average debt 740,596.94 baht; 35% of debt informal; 74.4% missed a payment in the past year, up from 71.6% (FACT, single source; sample size not stated).
  - Household debt to GDP was 87.4% in Q1/2025 (SCB EIC) and 86.7% at end-2025 (Mitihoon) (SNIPPET).
  - NSO average household debt fell to 153,038 baht in 2025, which conflicts with UTCC's direction. The methods differ.
  - Informal-loan interest averages 10–20% per month (SNIPPET, academic journal).
- **Mechanism:** Credit-card cash advances are the top source for households short of income (UTCC). Informal lending fills the gap.
- **Problem type:** Observed (macro).
- **Willingness-to-pay signal:** None for the over-indebted; low for this segment.
- **Evidence status:** FACT (UTCC); SNIPPET (debt-to-GDP). Confidence: Medium.
- **Sources:**
  - https://www.thansettakij.com/economy/639796 (2025-09-25)
  - https://www.scbeic.com/th/detail/file/product/9842/h98hvi9suy/In-focus-Household-debt-20250715.pdf (not opened)
- **Uncertainty:** Survey methods conflict.
- **Build feasibility:** Low for a meaningful fix. Shown as context for P-C-05 and P-C-07.

### P-C-11 — Elderly-care coordination among siblings (SPECULATIVE; macro only)
- **Who is affected:** Adult children sharing care for ageing parents.
- **Context (SNIPPET, NSO-based):**
  - About 20% of the population was elderly in 2024.
  - The old-age dependency ratio was 31.1% in 2024, up from 10.7% in 1994.
  - Thailand is projected to become a "super-aged society" around 2033.
- **Mechanism hypothesis:** Coordination failure. Unequal sharing of care tasks and costs among siblings, with no shared ledger or roster. No source opened supports the mechanism.
- **Evidence status:** SPECULATION. Confidence: Low.
- **Source:** https://www.naewna.com/n/?p=44712 (snippet)
- **Build feasibility:** High technically; demand unverified.

---

## Coverage

| Depth | Areas |
|---|---|
| **Deep** (several opened sources) | Online purchase fraud and social commerce (P-C-01); rental and dorm deposits (P-C-02); anti-mule account freezes (P-C-04); Gold Card referral slips (P-C-06); job scams (P-C-07) |
| **Medium** | Informal IOUs and shared expenses (P-C-05); household debt (P-C-10); สคบ. complaint categories (P-C-08, P-C-09) |
| **Shallow** (1–2 searches, mostly snippets) | Cash-on-delivery refusals and online-seller operations (P-C-03); contractors and home services (P-C-08); food waste (UNEP 2024 reportedly 86 kg per person per year for Thailand, per an academic paper snippet; a household survey found 0.228 kg per person per day excluding liquids; not developed into a problem); elderly care (P-C-11); freelance payment disputes (Legardy snippets only; no survey found) |
| **Not scanned** | Subscriptions; pet care; event and group coordination (beyond expense splitting); hospital queue times (no wait-time statistic found, only hospital finance distress: 35 hospitals at crisis level 7 in Q3 FY2568, SNIPPET); app-store review mining; Reddit threads (blocked) |

## Unknowns & Research Limitations
- **Pantip and Reddit not reached directly.** `site:pantip.com` returned no Pantip pages and Reddit is blocked for WebFetch. The voice-of-user evidence is therefore thin and second-hand (LINE Today, Legardy Q&A). Recommend manual Pantip searches for เงินประกันหอ, ทวงเงินเพื่อน, ลูกค้าไม่รับของ COD, ช่างทิ้งงาน and ใบส่งตัว.
- **Many figures are single-source:**
  - สคบ. 1,655 rental complaints
  - 10k accounts frozen per week
  - UTCC debt figures
  - SEEK category shares
  - These need a second source before being used in a pitch.
- **Snippet-only claims:** Splitwise's daily cap, the Split Bill app features, the NHSO 23-year quote and the debt-to-GDP figures. Open these before citing.
- **Willingness to pay:** No direct Thai evidence found in any area. Every willingness-to-pay statement here is a HYPOTHESIS. The strongest indirect signals:
  - Marketplace protection fees (P-C-01).
  - Splitwise Pro, where users ask for an "unlimited only" tier (P-C-05).
  - Sellers' operating costs (P-C-03).
- **Regulatory unknowns:**
  - Any design that holds third-party money (escrow) likely needs Bank of Thailand e-payment licensing (not verified).
  - Shared buyer or seller blacklists raise PDPA and defamation risk.
  - The law covering dorm deposits (the Dormitory Act 2015, likely) was not verified.
- **Time sensitivity:** The mule-account rules, NHSO referral policy and rental announcement all changed during 2024–2026. Status as of Oct 2026 may differ from these sources.
- **Dates:** Some pages show the site's current date (2569) in the header. Publication dates above were taken from the article body where available.
