# G — Thai Legal / Regulatory Verification (for a zero-budget student web app)

**Date of research:** 2026-10-22
**Researcher:** verification agent (WebSearch + WebFetch, plus local text extraction of PDFs downloaded from official sources)

> **NOT LEGAL ADVICE.** This file summarises public sources for product-scoping purposes only. Anything marked HYPOTHESIS is the researcher's own reading and has not been confirmed by a lawyer or regulator. Before launching any money-handling, data-publishing, or listing feature, get a Thai lawyer, a university legal clinic, or the regulator (BOT / PDPC / OCPB / DOT) to confirm.

**Status key**
- **FACT:** stated in a source that was actually opened and read (official gazette, regulator page, law-firm explainer, or named news/academic source).
- **HYPOTHESIS:** inference, or a claim seen only in a search snippet whose page was not opened.

---

## Q1. Payment Systems Act B.E. 2560 (2017): escrow vs PromptPay QR coordination

### Answer (short)
- **Escrow (the platform holds the buyer's money until delivery):** very likely a **regulated payment service that needs a licence**. Two categories fit:
  - **"การให้บริการรับชำระเงินแทน"** (accepting payment on behalf of sellers). This is a licensed category, with no volume threshold for small operators.
  - **"การให้บริการโอนเงินด้วยวิธีการทางอิเล็กทรอนิกส์"**, defined as receiving money from a user in order to transfer it on to a payee.

  The only routes short of a full licence that I found are:
  - registration while testing inside the **BOT Regulatory Sandbox** (ข้อ 3.2);
  - the "own business" exception, which covers collecting payment for your *own* goods or services only.
- **PromptPay QR coordination (the platform never touches funds; it only renders a QR code for the seller's own PromptPay ID and records who said they paid):** the definitions above all assume the operator **receives money** or **sends payment data** as an agent appointed by the merchant. A pure "display the payee's QR + keep a ledger" tool does not seem to fit any of them, so it **probably needs no BOT licence** (HYPOTHESIS, not confirmed by BOT).
- **Thresholds:** the only numeric exemption (outstanding float under THB 50M) applies to **limited-purpose e-money** (e-money usable only at defined merchants or within one place). It does not apply to escrow, acquiring, payment facilitation or collection agency.

### Evidence table
| Claim | Source URL + date | Opened? | Status |
|---|---|---|---|
| The PSA 2017 was published 18 Oct 2017 and took effect 16 Apr 2018. It has three tiers: highly important systems, designated payment systems, and designated payment services. | Tilleke & Gibbins, "Thailand's New Categories of Payment Systems and Services: A Practical Guide" (2018), https://www.tilleke.com/wp-content/uploads/2018/09/Practical-Guide-to-Thailands-New-Categories-of-Payment-Systems.pdf | Yes (PDF text extracted) | FACT |
| Designated payment services that need a BOT/MoF licence or registration: cards, e-money, e-payment acceptance (acquiring, payment facilitation, "authorised payment reception service"), and e-fund transfer/remittance. | Same Tilleke guide; BOT "Oversight according to Payment Systems Act", https://www.bot.or.th/en/our-roles/payment-systems/payment-act-oversight.html (accessed 2026-10-22) | Yes | FACT |
| Official definition: **"การให้บริการรับชำระเงินแทน"** = receiving electronic payment on behalf of a seller, service provider or creditor, where that party has a contract appointing or hiring the operator to collect payment on its behalf. | MoF Notification "การกำหนดบริการการชำระเงินภายใต้การกำกับ", Royal Gazette Vol. 135 Special Part 86 Ng, 17 Apr 2561 (2018), ข้อ 1. https://www.bot.or.th/content/dam/bot/fipcs/documents/FPG/2561/ThaiPDF/25610195.pdf | Yes (gazette PDF text extracted) | FACT |
| Official definition: **"การให้บริการโอนเงินด้วยวิธีการทางอิเล็กทรอนิกส์"** = a service where the operator receives money from the user in order to transfer it on to the payee. ข้อ 2.4 makes this a **licensed** category, both for account-to-account transfers and for money remittance. | Same MoF notification, ข้อ 1 and ข้อ 2.4 | Yes | FACT |
| Under ข้อ 2.3, e-payment acceptance needs a **licence** (acquiring, payment facilitating, รับชำระเงินแทน). The only exceptions are: (1) collecting payment within one's own business; (2) acquiring cards one issued oneself; (3) NBTC-regulated digital content. | Same MoF notification, ข้อ 2.3 | Yes | FACT |
| E-money is exempt when it is single-merchant, used in a food court, or digital content. Multi-merchant limited-purpose e-money is exempt only while the 6-month average outstanding float is **under THB 50M**. At THB 50M or more it must be **registered** (ข้อ 3.1). | Same MoF notification, ข้อ 2.2 and ข้อ 3.1 | Yes | FACT |
| **Sandbox:** a service that would otherwise need a licence or registration is registration-only while it is being tested under BOT Regulatory Sandbox rules (ข้อ 3.2). | Same MoF notification, ข้อ 3.2 | Yes | FACT |
| An amending notification (ฉบับที่ 2), published in the Royal Gazette on 16 Sep 2569 (2026), concerns "White-label Smart Machine" (ATM/CDM/CRM-type machines). It does not appear to change the categories above. | BOT PDF https://www.bot.or.th/content/dam/bot/fipcs/documents/FPG/2569/ThaiPDF/25690207.pdf | Yes, but the text extracted with broken Thai font encoding; only keywords were readable | FACT (topic); HYPOTHESIS (that nothing else changed) |
| BOT's notifications index lists the MoF and BOT notifications under the PSA. It shows no separate sandbox notification on that page. | https://www.bot.or.th/th/our-roles/payment-systems/payment-act-oversight/Notification-and-Circulars-under-Payment-Systems-Act-BE-2560.html | Yes | FACT |
| Tilleke (10 Sep 2024) lists "payment facilitation and receipt of payment on behalf of others" as regulated e-payment services. | https://www.tilleke.com/insights/fintech-insights-e-payments-in-thailand/3/ | Yes | FACT |
| Fund-transfer licensees need at least THB 10M paid-up capital. | KPMG Legal News Update #23 (Mar 2023), https://kpmg.com/th/en/home/insights/2023/03/legal-news-update-issue-23.html | No (search snippet only) | HYPOTHESIS |
| Where a **digital platform performs payment processing for a residential lessor**, the CCC agency provisions apply under the 2025 rental notification. | One Asia Lawyers newsletter, 9 Dec 2025, https://oneasia.legal/en/wp-content/themes/standard_black_cmspro/img/Newsletter_Notification_on_Residential-lease_contracts_EN.pdf | Yes | FACT |
| PromptPay became the first designated "systemically important retail payment system" on 21 Feb 2026. This regulates the PromptPay system operator, not apps that display QR codes. | Search snippet (BOT) | No | HYPOTHESIS |

### Implications for app mechanisms (all HYPOTHESIS)
- **Escrow / "we hold the money until delivery" is not viable for a zero-budget student team.** If sellers appoint the app to collect for them, it is "รับชำระเงินแทน" (licensed). If buyers send money to the app for onward transfer, it is "โอนเงิน" (licensed). Neither category has a small-volume exemption. The sandbox is a BOT-run admission process, not a self-declared exemption.
- **Coordination-only PromptPay QR probably does not need a licence**, because:
  - the money moves directly from the buyer's bank to the seller's own PromptPay account, inside licensed bank rails;
  - the app never receives, holds or remits funds;
  - the app is not appointed to collect on the seller's behalf;
  - the QR code is only a formatted string that carries the payee ID and amount.

  To stay on that side of the line:
  - never use a pooled account or the founders' personal account as an intermediary;
  - do not take a cut of the payment itself (charge any fee separately);
  - label payment status as "self-reported / slip uploaded", not "confirmed by [app]".
- **To offer "protected payment" later, plug in a licensed PSP** (for example, a licensed payment-gateway or e-wallet partner) rather than holding funds yourself. Check that the partner is on BOT's licensed provider list.
- "Group bill split" where one member collects from others into their own account and pays the vendor is ordinary P2P between individuals. That is probably fine as long as the app is not the collector.
- If the app is used for dorm or apartment rent, the 2025 rental notification says a platform that processes payment for a lessor takes on agency duties under the CCC. Coordination-only avoids this.

### Unknowns
- Whether BOT treats a "QR generator + payment-confirmation ledger" as "การรับส่งข้อมูลการชำระเงิน" (transmitting payment data) under the payment-facilitating definition. That definition is card-specific, which suggests no, but this is not confirmed.
- The full text of the 2026 amendment (the Thai font encoding was broken in extraction).
- BOT's current sandbox intake rules and timelines for 2026.
- Capital and other requirements for each licence type (not opened).

---

## Q2. PDPA (B.E. 2562): blacklists, self-verification badges, timestamped room photos

### Answer (short)
- **(a) Public "scammer/blacklist" database that names individuals or bank accounts: HIGH risk.** Exposure comes from three directions:
  - **Criminal defamation:** Criminal Code s.326, and s.328 for defamation by publication, carrying up to 2 years' imprisonment and a THB 200,000 fine. The s.329 good-faith defences exist, but they are fact-specific and are argued case by case after a complaint.
  - **PDPA:** naming people without consent, with only a contested legitimate-interest basis. Allegations of crime border on "criminal records", which are sensitive data needing explicit consent or a specific legal basis.
  - **Computer Crime Act:** where a post is alleged to be false.

  I found no specific Thai court ruling about a scammer-shaming page in the time available. Thai media do show active PDPA and defamation suits over Facebook pages that post individuals' personal data.
- **(b) Consent-based self-verification (the seller verifies their own ID or licence and shares a badge link): LOW to moderate risk if designed well.**
  - Consent from the data subject is the default lawful basis.
  - Risk concentrates in storing **ID card images**, where a breach means fines.
  - **Biometric data** (face-match) is sensitive data and needs explicit consent.
  - Mitigations: minimise and delete raw documents after checking, and show only "verified ✓ + date + what was checked".
- **(c) Timestamped room photos for tenant–landlord records: LOW risk, and it matches the regulator's own model.**
  - The 2025 rental notification expects a move-in **condition report signed by both parties, which may include photos**, attached to the lease.
  - The PDPA basis is contract or legitimate interest.
  - Care is needed if photos capture people, ID documents or other personal belongings.

### Evidence table
| Claim | Source URL + date | Opened? | Status |
|---|---|---|---|
| Criminal Code s.326 (defamation): up to 1 year and/or THB 20,000. s.328 (by publication): up to 2 years and THB 200,000. s.329 good-faith defences cover protecting a legitimate interest and fair comment on a matter open to public criticism. | Formichella & Sritawat via Legal500, "Criminal Defamation Litigation in Thailand", 2 Dec 2024 (current to Jun 2023), https://www.legal500.com/developments/?p=45928 | Yes | FACT |
| The Computer Crimes Act criminalises uploading false information that can cause public damage. | Same Legal500 article | Yes | FACT |
| The 2017 CCA amendment states that s.14(1) is not to be used for defamation. | Search summary of thailawonline.com | No | HYPOTHESIS |
| Under the PDPA, consent is the default basis. Other bases include legitimate interest, which must be balanced against data subjects' rights. | Tilleke & Gibbins / OneTrust DataGuidance, 1 Nov 2022, https://www.tilleke.com/insights/thailand-operationalising-pdpa-lawful-basis-sensitive-personal-data-and-data-processing-safeguards/4/ | Yes | FACT |
| Sensitive data under the PDPA includes **criminal records** and **biometric data** (as well as health, religion and others). It generally needs explicit consent, with narrower exemptions. | Same Tilleke article | Yes | FACT |
| March 2026: a Facebook fan page posted a journalist's personal data and urged harassment. Her employer announced legal action for PDPA violation and defamation. This shows such page-based exposure is litigated in Thailand. | Thansettakij, 10 Mar 2026, https://www.thansettakij.com/general-news/653513 | Yes | FACT |
| A lawyer's Q&A view: posting someone's ID card on a public page may breach the PDPA, and with damaging text may be s.328 defamation. | Legardy Q&A, https://legardy.com/free-qna/57227 | No (search summary) | HYPOTHESIS |
| PDPC fined a company THB 7M for data leakage linked to call-centre gangs. | Search summary | No | HYPOTHESIS |
| PDPA s.4 exempts personal/household use and journalism/artistic public-interest use. | getterms.io summary | No | HYPOTHESIS |
| The 2025 rental notification requires a move-in condition report, signed by both parties and possibly including photos, attached to the lease. | Tilleke, "Thailand Strengthens Controls on Residential Lease Contracts", 26 Aug 2025, https://www.tilleke.com/insights/thailand-strengthens-controls-on-residential-lease-contracts/14/ | Yes | FACT |

### Implications for app mechanisms (all HYPOTHESIS)
- **Do not build a public named blacklist.** Safer alternatives:
  - a **"check before you pay" lookup** that returns only aggregate signals (for example, "this account/phone has N reports in the last 90 days"), without publishing names, photos or narrative;
  - reports visible only to the reporter, plus a referral to official channels: police online reporting (thaipoliceonline.go.th) and the 1441 hotline;
  - a takedown and dispute process, logged.
- **Prefer positive verification (opt-in badges) over negative listing.**
  - The seller consents.
  - The app checks the document and then deletes the raw image (or never stores it, for example by checking it in the client).
  - The app stores a hash, the check type and the date, and shows the badge publicly.
  - The privacy notice must be in Thai and state the purpose and retention period.
  - Avoid face-biometric matching, which is sensitive data and needs explicit consent plus stronger security.
- **Room-photo records should be:**
  - jointly acknowledged by tenant and landlord (both tap "agree");
  - timestamped server-side;
  - private to the two parties;
  - retained for a fixed period after the lease ends;
  - shot with guidance to avoid capturing people and documents.

  This mirrors the regulator's condition-report model, so it is a natural feature.
- Hosting data offshore (for example, on a US cloud) raises PDPA cross-border transfer rules. Use standard contractual safeguards and disclose the transfer in the privacy notice.

### Unknowns
- No specific Thai court judgment on "scammer exposure" pages was found. Supreme Court databases (deka.supremecourt.or.th) were not searched.
- The exact PDPA sections (24, 26, 28) were not opened from the official text.
- How PDPC treats bank-account numbers alone (personal data when linked to a person: likely yes).
- Whether platform operators, as distinct from posters, would be named defendants for user reports (likely yes as controller).

---

## Q3. Dormitory deposits: Dormitory Act B.E. 2558 vs the 2025 Contract Committee rental notification

### Answer (short)
- **Dormitory Act 2558, standard dorm lease:**
  - The **mandatory standard dorm lease form** (gazette, 9 Sep 2559/2016) contains **blank fields** for advance rent (ข้อ 3) and deposit (ข้อ 4).
  - It sets **no deposit cap and no deposit-return deadline**.
  - It requires a minimum stay of **one academic term**.
  - The dorm must **notify parents within 3 days** if the tenant breaches the contract.
  - Deposit return therefore falls back on general CCC lease rules and the contract terms. **No statutory day-count was found for dorms.**
- **Scope of the Act:** it covers only accommodation for **"ผู้พัก" = students at or below bachelor's level, aged up to 25** (s.4, per a law journal). Many off-campus "หอ" are legally apartments, not registered dormitories.
- **2025 rental notification (ประกาศคณะกรรมการว่าด้วยสัญญา … พ.ศ. 2568): CONFIRMED.**
  - Published 6 Jun 2025, effective 4 Sep 2025. One Asia says 5 Sep 2025; Tilleke and Thai press say 4 Sep.
  - Applies to lessors with **3 or more residential units**, down from 5.
  - **Excludes dormitories and hotels.**
  - Advance rent plus deposit is capped at **3 months** (short-term or monthly-paid leases) or 1 year (long-term with annual rent).
  - **Deposit return:** due immediately at lease end. If an inspection is needed, within **7 days if there is no damage** or **14 days if there is damage** (after deducting repair costs).
  - Penalty: up to 1 year and/or THB 200,000.

### Evidence table
| Claim | Source URL + date | Opened? | Status |
|---|---|---|---|
| The Dormitory Promotion Committee notification "แบบสัญญาเช่าหอพักระหว่างผู้ประกอบกิจการหอพักและผู้พัก" was signed 29 Jul 2559 and published in the Royal Gazette Vol. 133 Special Part 202 Ng, 9 Sep 2559. Its terms: minimum stay of 1 academic term (ข้อ 3); notify parents within 3 days of a tenant breach (ข้อ 5); use the attached form (ข้อ 6). | https://ratchakitcha.soc.go.th/documents/2081983.pdf | Yes (gazette PDF text extracted) | FACT |
| The form's ข้อ 3 (advance rent) and ข้อ 4 (deposit) are amount blanks only. ข้อ 7 sets a return-of-premises period in days as a blank. There is no deposit cap and no deposit-refund deadline anywhere in the form. | Same gazette PDF | Yes | FACT |
| Dormitory Act s.4 defines "ผู้พัก" as a person studying at or below bachelor's level and aged no more than 25. A dorm lease must be in writing in the prescribed form, and there are penalties for failing to do so. Many dorms near the University of Phayao are unregistered or skip the written form. | Univ. of Phayao Law Journal, Vol. 4 No. 1 (Jan–Jun 2568), "ปัญหาทางกฎหมายเกี่ยวกับพระราชบัญญัติหอพัก พ.ศ. 2558", https://so07.tci-thaijo.org/index.php/UpLawJournal/article/view/8213 | Yes (PDF text extracted) | FACT (as reported by the journal) |
| Dormitory Act s.57 requires insurance for residents, and OIC is developing a policy for it. | Bangkok Biznews, https://www.bangkokbiznews.com/business/732133 | No | HYPOTHESIS |
| The 2025 notification was published 6 Jun 2025, is effective 4 Sep 2025, covers 3 or more units, excludes hotels and dormitories, and covers online-platform leases. | Tilleke, 26 Aug 2025, https://www.tilleke.com/insights/thailand-strengthens-controls-on-residential-lease-contracts/14/ | Yes | FACT |
| Deposit return is due immediately. Where inspection is required, it is due within **7 days (no damage)** or **14 days (damage, after deducting repair costs)**. | Same Tilleke article | Yes | FACT |
| Advance rent plus deposit is capped at 3 months (short-term) or 1 year (long-term with annual rent). A move-in condition report is signed by both parties. The penalty is up to 1 year and/or THB 200,000. | Tilleke (above); One Asia Lawyers, 9 Dec 2025 (says effective 5 Sep 2025 and cites CPA s.47 for the penalty) | Yes | FACT |
| Excludes "หอพักและโรงแรมที่มีกฎหมายเฉพาะกำกับ"; effective 4 Sep 2568; 3 or more units. | Thansettakij, https://www.thansettakij.com/real-estate/650793 | Yes | FACT |
| The 2019 (2562) notification had a 5-unit threshold, and contracts made under it stay valid until they expire. | Tilleke; One Asia | Yes | FACT |

### Implications for app mechanisms (all HYPOTHESIS)
- **Deposit-tracker messaging must branch by property type:**
  - **Apartment or condo with 3 or more units, not a registered dorm:** the app can cite the legal 7/14-day return rule and the 3-month cap. This is a strong, legally grounded "your rights" feature.
  - **Registered dormitory (Dormitory Act):** there is no statutory day-count. The app should show the contract terms plus general CCC rules and suggest OCPB (1166) or the provincial dorm registrar.
- Add a **"Is this a registered dorm?"** step: ask the tenant whether the contract is on the gazette dorm form and whether the building displays the dorm licence and sign. Many places called "หอ" are legally apartments, so the 2025 rules may still apply.
- A dual-signed, timestamped condition report plus a deposit-return countdown (7/14 days) maps directly onto the 2025 notification.

### Unknowns
- Any ministerial regulation (กฎกระทรวง) under the Dormitory Act on deposits. None was found, and only the standard form was verified.
- Whether a later (2560–2569) amendment to the dorm form added deposit rules. Not searched exhaustively.
- The official gazette text of the 2025 notification was not opened directly; it was verified via Tilleke and One Asia.

---

## Q4. Tour/van operators and homestay registries

### Answer (short)
- **Day tours and van trips sold on Facebook:** operating a tour business requires a **Tourism Business licence** under the Tourism Business and Guide Act B.E. 2551 (amended 2559). The relevant sections are s.15 (licence required) and s.80 (penalty: **up to 2 years and/or THB 500,000**).
  - Enforcement explicitly reaches operators who **advertise on Facebook**. An arrest in Surat Thani was reported in May 2026.
  - DOT reportedly offers a public online licence check and online applications at dot.go.th (seen in search results; the page was not opened).
- **Homestays:**
  - Under the Hotel Act B.E. 2547 ministerial regulation, small "สถานที่พักที่ไม่เป็นโรงแรม" are exempt from the hotel licence. The limit was 4 rooms and 20 guests in 2551, and was **raised to 8 rooms and 30 guests in 2566**. They still require local notification and registration.
  - DOT runs a voluntary **Thai Homestay Standard** certification.
  - **I could not confirm a public online registry** for homestays or non-hotel accommodation.

### Evidence table
| Claim | Source URL + date | Opened? | Status |
|---|---|---|---|
| An unlicensed operator ("บ ทราเวล"), whose licence had been revoked 13 Jul 2568, advertised tours via **Facebook** and was arrested. The charge was operating a tour business without a licence under the Tourism Business and Guide Act 2551 (amended 2559), **s.80 with s.15**. The penalty is up to 2 years' imprisonment and/or a THB 500,000 fine. | Thai PBS, 5 May 2026, https://www.thaipbs.or.th/news/content/505522 | Yes | FACT |
| DOT lets the public check tour-operator licence status on dot.go.th, and accepts licence applications online 24/7. | Thansettakij / Prachachat search summaries (https://www.thansettakij.com/business/tourism/667006) | No | HYPOTHESIS |
| Guides must be licensed Thai nationals. Working as a guide without a licence carries up to 1 year or THB 100,000. | Pattaya Mail; TCI journals (search summary) | No | HYPOTHESIS |
| The 2551 ministerial regulation allowed homes with up to 4 rooms and 20 guests as non-hotel accommodation. A **2566 amendment raised this to 8 rooms and 30 guests**. The study states homestay operators renew every 5 years. | Thai Int'l Journal of Tourism, Vol. 22 No. 1 (22 Jun 2026), https://so02.tci-thaijo.org/index.php/jitt/article/view/280049 | Yes (abstract page) | FACT (as reported) |
| A DOT "มาตรฐานที่พักสัมผัสวัฒนธรรมชนบท" (2nd ed., 2018) exists in the journal's references. | Same | Yes | FACT (existence only) |
| A public online homestay or non-hotel registry exists. | Not found | n/a | UNKNOWN |

### Implications for app mechanisms (all HYPOTHESIS)
- **A trip-listing or marketplace app should not let unlicensed individuals sell packaged tours.** The safer setups are:
  - (i) require a **DOT licence number** for "tour" listings and link users to the DOT licence check;
  - (ii) restrict the app to **cost-sharing among friends** (no profit, organiser travelling with the group), which may fall outside "ธุรกิจนำเที่ยว" (needs confirmation).

  Van transport for hire also raises Land Transport Act (public/private-hire vehicle) issues, which were not researched here.
- The app itself, as a listing/coordination tool rather than the tour operator, is probably not "operating a tour business". Facilitating unlicensed operators could still bring complaints and reputational risk, so build a "licence number field + verified badge" mechanism.
- **Homestays:** the app cannot rely on a government online registry to verify homestays. Use self-declared registration documents (non-hotel notification certificate or Thai Homestay Standard certificate) with photo and upload checks, labelled "document seen", not "government-verified".

### Unknowns
- The exact DOT licence-check URL and whether it has an API or is scrape-friendly (not opened).
- Whether informal "ทริปหารค่าใช้จ่าย" (expense-sharing trips) organised by students count as a tour business.
- The Land Transport Act requirements for vans carrying paying passengers.
- Whether non-hotel accommodation notifications are published by local administrations or DOPA online.

---

## Cross-cutting summary for product decisions (HYPOTHESIS)
1. **Money:** use coordination only (PromptPay QR to the payee's own ID plus a self-reported ledger). Never escrow; no pooled accounts.
2. **Trust:** use opt-in, consent-based verification badges with minimal data retention. Avoid public named blacklists; use aggregate report counts and send users to official reporting channels.
3. **Rentals:** offer the condition-report and deposit-countdown features for 3+ unit apartments (7/14-day rule). Dorms get a softer "contract terms + where to complain" path.
4. **Tours:** require a DOT licence number for paid tour listings. Homestays get a document-seen badge, not a "government-verified" claim.

*Again: not legal advice. Confirm with a Thai lawyer or the regulator before launch.*
