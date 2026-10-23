# J - Gen2 Problem Mining: Low-Coverage Travel Areas (T1-T6)

Researcher: desk research agent. Date: 2026-10-22. No app ideas generated; "Build-feasibility" notes only assess whether a hypothetical tool in the problem space fits 1 dev / zero budget / React+Supabase / ~1.5 days / must not hold money.
Method: ~28 tool calls (WebSearch + WebFetch). Reddit/Pantip not reachable. Evidence labels:
- FACT = I opened the page (WebFetch) and the claim is in it.
- HYPOTHESIS = only seen in a search-result snippet/summary, or inferred from FACT.
- SPECULATION = my reasoning, no source.

Coverage honesty: T1, T3, T4, T6 have solid opened sources. T2 (abroad) and T5 (staff) are thin. T5 is mostly unvalidated.

---

## P-J-01 - Solo/female travellers: unvetted last-mile rides and private one-on-one tours (T1)

- **Who affected:** Foreign women travelling alone (also solo men to a lesser degree) in Thailand; examples are in Phuket and Koh Chang.
- **Trigger:** Late-night return to hotel (street-hailed motorcycle taxi) or booking a solo private guide/tour that ends in an isolated place.
- **Proximate cause:** FACT - 37-year-old German woman street-hailed a motorcycle taxi at ~00:45 in Phuket Old Town on 26 Feb 2024; driver allegedly kissed/groped her, she jumped off and was injured; driver fled, police tracing the phone number he used to ask the hotel address; she reported at ~04:26, via a Good Samaritan and tourist police. Source: https://www.pattayamail.com/news/german-tourist-assaulted-and-molested-by-motorbike-taxi-in-phuket-453538 (published 2024-02-27). FACT - 24-year-old German cruise worker booked a tour with a local guide on Koh Chang; allegedly taken to an isolated beach and assaulted; she waited several days before reporting; guide sentenced to 2y8m (per article quoting Daily Mail). She says "travel with companions". Source: https://thethaiger.com/hot-news/crime/german-tourist-speaks-out-about-rape-ordeal-on-koh-chang (2023-12-07).
- **Possible root cause (mechanism):** Information asymmetry + trust: the traveller cannot verify the identity/record of an informal driver or one-person guide; no persistent identity is tied to the ride (street hail, no booking trail). Timing: the harm window is late-night/isolated. Coordination: no one knows where she is. (HYPOTHESIS - inference from two cases.)
- **Current behavior/workaround:** Use Grab/ride-hailing (World Nomads guide, via search summary only, recommends Grab; HYPOTHESIS), travel in groups, share location with friends (SPECULATION), call Tourist Police 1155 (search-summary source; HYPOTHESIS).
- **Harm:** Sexual assault, physical injury, loss of trust in the destination (victim: "I no longer trust people in Thailand").
- **Current solutions & where they fail:** Grab (https://www.grab.com/th/) - covers app-hailed rides but not street moto-taxis/guides and drivers can still be the offender (FACT only that the Phuket ride was not app-booked; no source that app rides are safer, HYPOTHESIS). Tourist Police 1155 - reactive, after the fact; in both cases reporting happened hours/days later. Generic location sharing (Google Maps/WhatsApp) - requires the traveller to remember to start it, SPECULATION.
- **Who benefits/loses from status quo:** Unvetted drivers/guides benefit from anonymity; victims lose; destination reputation loses.
- **Frequency/severity:** Severity high; frequency unknown. I found NO official statistic on assaults against foreign women (Unknowns). One search-summary source says Thai media reported "multiple cases" of women abducted/assaulted by taxi drivers "in recent years" and "not widespread" (World Nomads, HYPOTHESIS, page not opened with that content). Khaosod English 2025-03-09 on a Russian tourist assaulted in a Phuket taxi (snippet only; HYPOTHESIS): https://www.khaosodenglish.com/news/2025/03/09/russian-tourist-seeks-justice-after-assault-in-phuket-taxi/
- **Problem type:** Reported (individual news incidents), pattern is Inferred.
- **WTP signal:** None found.
- **Evidence status + confidence:** FACT for the two incidents; pattern = HYPOTHESIS. Confidence: incidents high; "systemic frequency" low.
- **Uncertainty:** Two cases are not a base rate. Both are anecdotes via English-language tabloid-ish outlets. No survey of what solo female travellers actually do or want. Unknown whether Grab/Bolt adoption already addresses most risk.
- **Build-feasibility (1-dev, 1.5d):** A "timed check-in / share-trip-with-contact" PWA is technically trivial but it duplicates Google Maps/WhatsApp live location and cannot send SMS at zero budget. A vetted-guide/driver directory needs data you do not have. Low differentiation. Safety-critical: false sense of security risk.
- **Legal flags:** PDPA (location data, sensitive); cannot imply emergency service; defamation risk if naming drivers/guides; liability disclaimer. No money held.

---

## P-J-02 - Provider-side English confidence in secondary cities (เมืองรอง) (T2a)

- **Who affected:** Foreign tourists in non-resort provinces (Ayutthaya, Khon Kaen, Sukhothai, Chiang Mai signage studies) AND the small service providers (tuk-tuk, restaurant, homestay, souvenir) who cannot confidently talk to them.
- **Trigger:** Ordering, price negotiation, directions, understanding product/ingredients, transport at a moment with no tourist-trained staff.
- **Proximate cause:** FACT - Ekkaphon Wingwon & Weerapon Noikhlai (2025), Ayutthaya Rajabhat Univ. journal, n=50 service providers (public transport, restaurants, lodging, tours, souvenirs, facilitation): English communication problems rated "high"; top issues = confusing similar-sounding words (mean 3.98), ungrammatical speech (3.96), lack of confidence (3.94); most favoured fix = practising real conversations with tourists (4.30). Abstract only. Source: https://so03.tci-thaijo.org/index.php/husoarujournal/article/view/284545
- HYPOTHESIS (snippet only, not opened): a Khon Kaen walking-street study reports ~86% of foreign tourists want English information on local products; a survey of 408 foreigners in Khon Kaen municipality found English info insufficient but not heavily disruptive to daily life. Source list: ThaiJO search results (https://so01.tci-thaijo.org/index.php/HUSO/article/download/207204/164968/ and others).
- **Possible root cause:** Skill/confidence gap on the supply side (not on tourist side); low incentive to invest for low-volume secondary destinations; signage quality (Chiang Mai study notes many errors; snippet only).
- **Current behavior/workaround:** Google Translate / pointing (SPECULATION - not sourced here), providers ask younger relatives (SPECULATION).
- **Harm:** Lost sales, misunderstandings, price disputes, poor reviews; tourist skips secondary city. Magnitude not quantified.
- **Current solutions & where they fail:** Google Translate (https://translate.google.com) - generic, camera/voice mode needs data and tourism-specific phrases; TAT guidance/English-training programs (no concrete program verified). I could not verify any specific provider-facing tool.
- **Who benefits/loses:** Main-tourist-area businesses benefit (staff already trained); secondary-city micro-businesses lose.
- **Frequency/severity:** Study = 50 respondents, abstract means only. No national figure.
- **Problem type:** Reported (academic, small-sample, self-assessed).
- **WTP signal:** None found. Providers' purchasing power likely low (SPECULATION).
- **Evidence + confidence:** FACT for Ayutthaya abstract (confidence medium that problem exists; low for size/WTP). Khon Kaen figures HYPOTHESIS.
- **Uncertainty:** Self-reported academic studies; did not find any tourist-voiced "failure moments" (reviews, complaints) in secondary cities. This is the biggest gap: the stated T2 "concrete failure moments" were NOT found.
- **Build-feasibility:** A merchant-side QR phrase-card page (scan -> menu/price/directions in tourist's language) is feasible in 1.5 days with static content + Supabase; but adoption depends on shop owners, no revenue from them.
- **Legal flags:** None significant; translation accuracy disclaimer. No money held.

---

## P-J-03 - Thai travellers refused entry/interrogated at South Korean immigration (T2b)

- **Who affected:** Thai tourists to South Korea (and likely Japan, unverified).
- **Trigger:** Immigration interview at arrival (itinerary, past travel questions).
- **Proximate cause:** FACT - The Standard (2023-11-03): many Thais refused entry and sent back; travellers report detailed itinerary/past-trip questioning and refusal despite round-trip tickets and prepaid hotel; ~250,000 Thai visits in first 8 months of 2023 (KTO); ~100,000 undocumented Thai workers ("ผีน้อย") estimated. The article does NOT mention any language barrier and gives no count of rejections. PM Srettha said he'd raise it with the deputy foreign minister. Source: https://thestandard.co/korean-immigration-rejects-thai-people/
- HYPOTHESIS (snippet): Japanese media cited 727+ Thais refused (per a Thai search summary); Korean Ministry of Justice said tighter scrutiny needed because of Thai illegal stayers; "35% of overstayers are Thai" (infoquest.co.th/?p=409041, not opened); Korean embassy said unclear purpose of travel was the reason in two Thai women's case (Thai PBS, not opened).
- **Possible root cause:** Incentive/risk-screening asymmetry: destination screens by nationality-level overstay risk; individual honest tourists cannot see criteria (information asymmetry); no appeal path at the airport (timing).
- **Current behavior/workaround:** Carry proof (tickets, hotel, bank statement, itinerary), apply for K-ETA/Q-Code (SPECULATION - not verified in these pages), join tours, avoid Korea (a poster's opinion in The Standard).
- **Harm:** Lost flight/hotel/tour money, detention, deportation, stress.
- **Current solutions:** Official MFA/embassy notices (not verified); LINE/Facebook groups sharing "how to answer" (SPECULATION). Gaps: no authoritative, up-to-date, per-case checklist.
- **Who benefits/loses:** Korean authorities benefit (lower overstay); honest Thai travellers and Thai tour agents lose.
- **Frequency/severity:** Unverified counts (see HYPOTHESIS). Severity medium-high per case.
- **Problem type:** Reported.
- **WTP signal:** None found.
- **Evidence + confidence:** FACT that problem was reported in 2023 and became diplomatic; HYPOTHESIS for numbers. Confidence medium for 2023, low for 2026 relevance (no 2025-26 data found). Note: this is NOT a language-barrier problem per the evidence; user's T2 framing of "language failure moments abroad" was not supported.
- **Uncertainty:** Is it still active in 2026? Could be Korean policy-driven change. No Japan evidence at all.
- **Build-feasibility:** A document-checklist generator (print-ready itinerary + proof pack) is feasible, but it's of unclear effect on officers' decisions; risk of promising outcomes it can't deliver.
- **Legal flags:** Must not give "immigration advice that guarantees entry"; no money held.

---

## P-J-04 - DTV holders can't get Thai bank accounts, and local health insurance depends on one (T3)

- **Who affected:** Long-stay foreigners incl. DTV holders (DTV introduced 2024).
- **Trigger:** Trying to open a Thai bank account; buying Thai health insurance; paying rent/utilities.
- **Proximate cause:** FACT - Pattaya Mail, 2025-08-17: Opening a Thai bank account as a tourist is "virtually impossible" as banks clear mule accounts; DTV bond (500,000 THB) can be held in a foreign bank; no medical insurance required for DTV; >120,000 DTVs issued by ~70 posts in first year (no official figures published); holders need other banking routes. Source: https://www.pattayamail.com/latestnews/news/thai-banking-issues-leading-to-dtvs-increasing-popularity-514344
- FACT (anecdotal forum thread, ask.in.th, posted 2026-05-06): DTV holder says agent told him rules changed 7 April and Thai account now required to apply for insurance; Bangkok Bank staff said DTV holders can't open accounts; commenters say Thai insurers pay claims into Thai accounts (disputed), Allianz and AXA reportedly work around it (AXA pays hospitals directly), Krungthai reportedly opened accounts for some; suggested Wise, home-country insurance, banks outside tourist areas, local brokers. Conflicting, unverified. Source: https://ask.in.th/question/can-i-buy-health-insurance-in-thailand-without-a-thai-bank-account-on-a-dtv-visa
- **Possible root cause:** Regulatory/AML de-risking after mule-account crackdowns (incentive: banks bear penalties for mule accounts, bear no cost for refusing foreigners) + inconsistent branch-level policy (information asymmetry: no published rule, varies by branch/staff/date) + insurer payout rails assumed to be Thai accounts.
- **Current behavior/workaround:** Use agents (search summary: agents commonly used; and a commenter says agents' illegitimate account-opening is why banks tightened; HYPOTHESIS), try multiple branches/banks, Wise/foreign accounts, home-country or expat insurers (Allianz, AXA), TrueMoney-type wallets (a Q&A asks whether DTV can open TrueMoney without driving licence/condo: https://ask.in.th/question/can-dtv-holders-open-a-truemoney-account-without-a-thai-driving-license-or-condo-ownership, snippet only).
- **Harm:** Cannot pay local bills/receive money, no local insurance, time wasted (branch hopping), fees to agents.
- **Current solutions & where they fail:** Wise (https://wise.com) - works for foreign-side funding, not a Thai account; Allianz Thailand / AXA Thailand (named in thread; not verified by me); HelloSafe (https://hellosafe.com/travel-insurance/thailand-dtv) - lists DTV insurance from "$2.62 a day" (snippet) - travel insurance, not local health plans; agent services (unnamed). Failure: rules are inconsistent and undated; forum advice contradicts itself.
- **Who benefits/loses:** Fixers/agents benefit; banks avoid risk; DTV holders lose; Thailand loses long-stay spend.
- **Frequency/severity:** Unknown share of DTV holders affected; the "virtually impossible" quote is a columnist's claim, not data. Severity moderate (money-flow friction), high for those needing insurance.
- **Problem type:** Reported (news column + forum), partly Inferred.
- **WTP signal:** Weak-positive: HelloSafe insurance priced from $2.62/day (snippet: price existence, not WTP); agents exist (unquantified). Otherwise none found.
- **Evidence + confidence:** FACT (two pages opened) but one is anecdotal and conflicting. Confidence medium that bank-account friction exists in 2025-26; low on exact rules.
- **Uncertainty:** Rules could change monthly; unverified "7 April" rule change; I did not find official bank/OIC statements. No TM30-specific DTV data (see P-J-05).
- **Build-feasibility:** A dated, crowd-reported "what worked where" tracker (bank/branch/insurer/outcome/date) with source moderation is feasible in 1.5 days (Supabase table + forms + filters). Cold-start and spam/misinformation risk; stale data is the main failure mode.
- **Legal flags:** Don't give financial/insurance advice or broker insurance (Thai insurance brokerage is licensed by OIC - SPECULATION on exact licence rule, verify); affiliate links to insurers may need disclosure; avoid defaming named bank staff; no money held.

---

## P-J-05 - TM30 / address reporting friction for long-stay renters (T3)

- **Who affected:** Foreigners renting condos/houses and Thai landlords.
- **Trigger:** Moving into a new address or returning from travel; landlord must notify immigration within 24 hours (per search summary).
- **Proximate cause:** HYPOTHESIS (all from search snippets, 2019-2020): 2019 Bangkok Post forum - queues up to 300 people, online system/app dysfunctional, weeks-to-months to get online credentials; landlords reluctant, some "no foreigners" signs; tenant risk of being fined; from 30 Jun 2020 only arrival reports required; fine figures inconsistent across sources (800-2,000 vs up to 10,000 THB). Sources: https://www.bangkokpost.com/thailand/special-reports/1732599/confusion-reigns-in-tm30-palaver ; https://www.bangkokpost.com/learning/easy/1724855/anger-over-immigration-tm30-forms ; https://mondaq.co.uk/general-immigration/983654/tm30-reporting-rule-on-foreigners-eased
- **Possible root cause:** Compliance burden placed on landlord (incentive mismatch: landlord bears fine and effort, tenant bears consequence), poor digital onboarding, enforcement variability.
- **Current behavior/workaround:** Agents/visa-runners/condo juristic office file for them (SPECULATION); hotels file automatically (a commenter, HYPOTHESIS).
- **Harm:** Refused visa extensions/delays at immigration (SPECULATION); housing discrimination (HYPOTHESIS from Bangkok Post).
- **Current solutions:** Immigration TM30 online (https://tm30.immigration.go.th - URL from memory, not verified). Failure: onboarding delays reported in 2019.
- **Who benefits/loses:** Agents benefit; landlords/tenants lose.
- **Frequency/severity:** None found for 2025-26.
- **Problem type:** Reported (2019-20), current status Unknown.
- **WTP:** None found (agent fees not sourced).
- **Evidence + confidence:** HYPOTHESIS, low confidence for 2026 (data is 6+ years old, system likely changed).
- **Uncertainty:** High. Not verified that the pain persists; DTV holders' TM30 problems not found.
- **Build-feasibility:** Reminder/checklist for landlords is trivial but low value; do not pursue without fresh evidence.
- **Legal flags:** Do not file on behalf of users (data protection, immigration submissions); PDPA on passport data.

---

## P-J-06 - Island ferry weather cancellations: connection risk falls on the traveller (T4)

- **Who affected:** Tourists connecting ferry <-> flight/bus/ferry on Gulf (Samui/Phangan/Tao) and Andaman islands in monsoon/storm periods; also the operators and island hosts.
- **Trigger:** Wind/wave-driven cancellation announced shortly before or on the day.
- **Proximate cause:** FACT - Pattaya Mail 2025-11-20: operators suspended Surat Thani <-> Koh Tao services 19-20/21 Nov 2025 because of wind and waves; Lotus Ferry, Lomprayah, others cancelled/changed sailings; operators told passengers "check updated schedules directly with each company"; article gives no passenger count, refund, compensation or accommodation info (headline says "hundreds"). Source: https://www.pattayamail.com/thailandnews/samui-tao-ferry-services-halted-as-rough-seas-disrupt-travel-for-hundreds-526765
- FACT - Lomprayah terms (via reseller phuketferry.com): operator "reserves the right to cancel" for weather or government orders; weather cancellation -> can rebook or "Cancel & refund" after team confirms; refunds 7-15 days to original method, 2-21 days bank transfer, or instant voucher valid 12 months; "The company does not take responsibility for delays or missed onward connections, including flights"; check-in 60 min before. Source: https://www.phuketferry.com/phuket-to-phangan-island-lomprayah-high-speed-ferries-co-ltd-lmpo0020.html
- HYPOTHESIS (snippets, dates unknown): Navy evacuated ~730 tourists from Koh Tao after storm cancelled ferries, sleeping on mats on HTMS Chakri Naruebet (Matichon, news_4343768 - 403 on fetch); local municipality and operators provided clothes/food. 2019 Tropical Storm Pabuk: Bangkok Airways cancelled all Samui flights, authorities prepared shelters (SBS, Kuwait Times snippets). Bangkok Post Aug 2020: suspended Koh Tao-Phangan ferries ~2 days (https://www.bangkokpost.com/thailand/general/1961827/ferry-services-suspended-in-surat-thani).
- **Possible root cause:** Coordination across independent carriers (ferry operator liability explicitly stops at its own leg); information asymmetry (traveller doesn't know cancellation likelihood or safe buffer; cancellations posted day-before); incentive: operator keeps right to cancel without paying consequential costs.
- **Current behavior/workaround:** Keep a day's buffer before flights (SPECULATION), buy flexible flights/travel insurance (SPECULATION; check insurance weather exclusions - not researched), call operator, rebook next day.
- **Harm:** Missed flights, extra hotel nights, lost tour/hotel prepayment, evacuation in extreme cases. Cost allocation: by the operator's own terms the traveller bears connecting costs (FACT as per Lomprayah terms); other operators not checked.
- **Current solutions & where they fail:** Lomprayah (https://www.lomprayah.com), Raja Ferry (not verified), resellers like phuketferry.com (opened) - show terms but not risk; Thai Marine Dept / Samui radio notices (sources of announcements); weather apps. Failure: no one aggregates "will this sailing run?" and "how much buffer do I need before my flight?"
- **Who benefits/loses:** Operators/resellers benefit (no liability, voucher float); travellers lose; insurers collect premiums (SPECULATION).
- **Frequency/severity:** No count of affected passengers found. Severity per event: moderate (hundreds of THB to tens of thousands), tail risk high.
- **Problem type:** Observed (events) + Reported (terms).
- **WTP signal:** None found directly. Voucher/refund processing time suggests money friction. Travel insurance market exists (SPECULATION).
- **Evidence + confidence:** FACT for terms and Nov 2025 event; HYPOTHESIS for scale/other operators. Confidence medium-high that the connection-risk gap exists; low on cost magnitudes.
- **Uncertainty:** Didn't check Andaman operators, Raja terms, Thai law on carrier liability (Dept of Marine, Consumer Protection), or insurance weather exclusions.
- **Build-feasibility:** A "ferry-to-flight buffer checker" (enter flight time + route + season -> recommended buffer, links to official notices, checklist of what to ask operator) is feasible on static curated data; no live ferry API found, so manual curation. Moderate fit.
- **Legal flags:** Don't give guarantees about sailings; not a booking agent (no money held); if linking to insurance, disclose affiliate/not licensed advice.

---

## P-J-07 - Concert/fan-event ticket scams and surge costs for fan travel (T6a)

- **Who affected:** Mostly young Thai fans (students) buying face-value/resale tickets for K-pop-scale concerts; fans travelling abroad for shows.
- **Trigger:** Sell-out of an on-sale; fan seeks a ticket or "ticket-buying service" via X/Facebook/LINE.
- **Proximate cause:** FACT - The Standard (2026-06-10): >400 victims, ~1.22 million THB lost (initial 1.1M); seller account "sumsum" offered to procure tickets for the BTS Arirang Bangkok concert; buyers pre-paid to two bank accounts later believed to be money-mule accounts; no tickets at delivery date, seller vanished; victims organised via a LINE OpenChat (400 members); a People's Party MP to pass evidence on. Source: https://thestandard.co/concert-ticket-scam-victims/
- HYPOTHESIS (snippets): Scam script - scammer poses as fellow fan, builds rapport, arranges handover on event day so victim learns late (Thai PBS Verify, SCB Fraud Fighter: https://www.scb.co.th/th/personal-banking/fraud-fighter/update-fraud/fake-ticket-concert/ ; Bangkok Bank: https://www.bangkokbank.com/th-TH/Personal/Grow-Club/Concert-Ticket-Scams ; Matichon: https://www.matichon.co.th/lifestyle/news_1356947). Korea Times 2023 quoting Thai Consumer Protection: "we do not have any law to regulate the ticket prices for concerts"; average K-pop ticket ~5,270 THB (https://www.koreatimes.co.kr/www/art/2023/05/398_350521.html - snippet). Abroad: Taiwan News - Kaohsiung fined 4 of 12 hotels NT$50,000 each for price gouging around Coldplay concerts (https://www.taiwannews.com.tw/en/news/5038111, snippet); MustShareNews - Philippines->Singapore fares jumped 20k->30k PHP after BTS ticket sale (https://mustsharenews.com/bts-concert-singapore-airfare/, snippet). No Thai-fan-specific travel surge data found.
- **Possible root cause:** Scarcity + no legal framework for resale/price (HYPOTHESIS, from snippet), no official verified resale channel (unverified), pay-first with unverifiable counterparty (trust), mule accounts (banks' KYC failure), delayed delivery date hides fraud (timing).
- **Current behavior/workaround:** Victims self-organise (LINE OpenChat, screenshots, police report). Fans buy only from known friends/"verified" sellers in fan communities (SPECULATION). Police advice: don't transfer to strangers; keep evidence.
- **Harm:** FACT: 1.22M THB across 400+ mostly young people (avg ~3,000 THB each by simple arithmetic).
- **Current solutions & where they fail:** Banks' awareness pages (Bangkok Bank, SCB) - education only; Police online reporting (https://www.thaipoliceonline.go.th - from memory); official ticketing (Thai Ticket Major https://www.thaiticketmajor.com, Ticketmelon https://www.ticketmelon.com - existence from memory, resale features NOT verified); seller-blacklist sites (SPECULATION: exist). Failure: victims are identified only after the event, no pre-payment check on payee account, no public register.
- **Who benefits/loses:** Scammers and mule-account operators benefit; fans lose; official promoters/ticketing benefit from scarcity (SPECULATION on motives).
- **Frequency/severity:** FACT single case: 400+ victims. Repeated pattern per Thai PBS/Matichon/SCB (HYPOTHESIS).
- **Problem type:** Observed (a documented case) / Reported (pattern).
- **WTP signal:** None found (victims lost money; no evidence they'd pay for a verification tool).
- **Evidence + confidence:** FACT for the case; HYPOTHESIS for pattern. Confidence high that problem exists; medium on "no existing solution" (blacklist groups likely exist, not checked).
- **Uncertainty:** I did not verify existing seller-blacklist services or official resale; did not check whether T6 "abroad" fans face distinct problems (no Thai-specific evidence).
- **Build-feasibility:** A payee-account/handle report-and-search registry with evidence screenshots is feasible in ~1.5 days (Supabase). Moderation and legal risk dominate. Escrow is explicitly out (cannot hold money).
- **Legal flags:** Defamation (Thai Criminal Code ss.326/328 and Computer Crimes Act s.14 - SPECULATION on citation, verify with lawyer); PDPA for names/bank account numbers; anything resembling escrow/payment holding is prohibited by the brief; scalping/resale law absent per snippet.

---

## P-J-08 - Hired-transport price surge at festivals (Songkran) and hotel-quoted transfers (T6b + T5)

- **Who affected:** Tourists (foreign and Thai) at Songkran/festival sites; guests who rely on hotel desks for airport/transfer prices.
- **Trigger:** Event end / people avoid driving in event areas / arrival at airport and asking the hotel desk for a transfer price.
- **Proximate cause:** FACT - Thairath English, 2026-04-16: a well-known influencer posted a video of a tuk-tuk driver charging 2,000 THB for ~700 m from a Songkran festival site; article says gouging becomes more severe when people most rely on hired transport; no official response/penalty reported; no complaint statistics. Source: https://en.thairath.co.th/plus/politics&society/106197
- HYPOTHESIS (snippet, 2021): A US tourist posted that a Patong hotel quoted 900 THB for an airport pickup; the land transport office said that was an old rate, hotel standard 600-700, official Patong rate normally 800 reduced to 650 during pandemic; Governor ordered an investigation (Bangkok Post https://bangkokpost.com/thailand/general/2143939/taxi-rip-off-old-news-phuket-officials and https://bangkokpost.com/thailand/general/2033999/phuket-tackles-overpriced-taxi-fares-for-tourists). One travel blog anecdote that a hotel wanted nearly double for a car vs another hotel (loyaltylobby, 2020; SPECULATION level). Airport scam taxi 1,500-2,000 vs legitimate 250-400 THB at Bangkok (universal-traveller.com guide; not verified/dated, HYPOTHESIS).
- Adjacent (FACT, bluewin 2025-07-23): thieves used drones to scout tourist-rented houses/apartments on Koh Phangan; 4 Myanmar nationals aged 25-30 arrested; 60+ meth pills seized. Source: https://www.bluewin.ch/en/news/thieves-in-thailand-spy-on-tourists-with-drones-li.2796489 (tangential to Full Moon travel; not a ticket/transport problem).
- **Possible root cause:** No price transparency for informal transport (information asymmetry), demand spikes with few substitutes (timing), unclear who is responsible for hotel-quoted price (hotel desks may be passing through a driver rate or adding margin - SPECULATION; no evidence found of commission).
- **Current behavior/workaround:** Grab/Bolt, walking away from festival site, agreeing price first (all SPECULATION/inferred).
- **Harm:** Overpay (e.g., 2,000 THB for 700 m), disputes, bad destination image.
- **Current solutions & where they fail:** Grab, Bolt (apps; surge pricing also exists - unverified), Airport official taxi counters; Thai official fare tables. Failure: none shows "expected fare for this route during this event".
- **Who benefits/loses:** Drivers/informal operators benefit at peak; tourists lose; hotels' role unknown.
- **Frequency/severity:** No stats found; social-media virality is the only evidence of frequency.
- **Problem type:** Observed (viral case) / Reported (Phuket 2021).
- **WTP signal:** None found.
- **Evidence + confidence:** FACT for one 2026 viral case; HYPOTHESIS for 2021 case. Low-medium confidence as systemic.
- **Uncertainty:** T5 hidden-stakeholder angle is essentially UNVALIDATED: I found no source on hotel/hostel front-desk commission, wages or workload (search returned nothing). Treat any claim about hotel-desk incentives as SPECULATION until interviews.
- **Build-feasibility:** A crowd-reported "fair fare" reference (route, event, price paid, date) is feasible in 1.5 days; low revenue and cold-start.
- **Legal flags:** Defamation if naming drivers; no money held.

---

## T5 note (P-J-09, SPECULATIVE ONLY): front-desk staff as hidden stakeholders

- **Status:** SPECULATION. Zero opened sources on how Thai hotel/hostel front desks are paid, incentivised, or what scam/transport/booking issues they absorb. One search returned only tourist-scam listicles (universal-traveller.com, thaiest.com) with nothing on staff. Only tangential FACT-adjacent item: hotel-quoted airport transfer price dispute in Phuket 2021 (see P-J-08).
- **What would be needed:** 5-10 interviews with front-desk/hostel staff (Chiang Mai, Phuket, Bangkok), JobsDB wage ranges (a JobsDB listing page appeared in search but wasn't opened), and Pantip threads (unreachable here).

---

## Cross-cutting patterns (all HYPOTHESIS unless tagged)
1. Several problems share "rules/prices/facts exist but are unpublished, dated, or inconsistent" (DTV bank policy; ferry cancellation buffers; fair fares).
2. The strongest-evidenced victim group by count is young Thai fans (P-J-07, FACT). Strongest by severity is solo women (P-J-01, FACT but n=2).
3. In 4 of 8 problems the realistic business model is affiliate/lead-gen in regulated sectors (insurance), which adds licensing/disclosure issues.

## Ranking (evidence x mechanism-failure x buildability x revenue plausibility)
1. P-J-04 DTV bank/insurance tracker
2. P-J-07 Ticket-scam payee registry (high evidence, weak revenue, high legal risk)
3. P-J-06 Ferry-to-flight buffer checker
Lower: P-J-08, P-J-01 (safety liability), P-J-02, P-J-03, P-J-05 (stale), T5 (unvalidated)

## Unknowns & Limitations
- Reddit/Pantip/X not searched effectively; no first-person traveller voices except news-quoted ones. Many "workarounds" are therefore SPECULATION.
- The WebSearch tool returns synthesized summaries; claims tagged HYPOTHESIS come from those summaries and were not confirmed on the source page. Several snippet URLs were not opened.
- Matichon 403; Thai PBS World homepage fetch returned a homepage, so the Jeju Thai-tourist overcharge story (50 Thais, extra guide fees/deposit) is only a search-summary claim (HYPOTHESIS) and was excluded from the problem set.
- No official statistics found for: assaults against foreign women; DTV banking refusals; ferry-cancellation volumes; hotel-desk wages/commission; Thai travellers' language failures in Japan (zero Japan evidence).
- T2 "concrete failure moments" in secondary areas and abroad were NOT found; only provider-side survey data and an immigration-interview issue that isn't linguistic.
- Dates: Koh Chang case (Feb, 2023 presumed), Matichon Koh Tao evacuation (date unknown), Phuket taxi cases 2021.
- WTP: none sourced for any problem except price existence of travel insurance (HelloSafe snippet).
- Legal statements (Thai law citations, OIC licensing) are SPECULATION; require lawyer verification.
