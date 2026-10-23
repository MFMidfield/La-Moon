# B — Travel & Tourism in Thailand: Existing Solutions + Problem Mining

- Researcher slice: B (travel/tourism, Thailand). Compiled 2026-10-22.
- Method: about 30 WebSearch/WebFetch calls in Thai and English. No app ideas are proposed here.
- **Evidence labels used in this file:**
  - **[OPENED]**: I fetched the page and read it.
  - **[SNIPPET]**: the claim comes only from a search-engine summary. I did not open the page, so per the rules it is **not FACT**. It is graded HYPOTHESIS or "Reported" until someone verifies it.
  - **Blocked or empty fetches:** khaosodenglish.com (HTTP 403); kasikornbank.com travelscam page (returned empty).
  - **Pantip:** `site:pantip.com` searches returned almost no Pantip threads, so Pantip voice-of-customer is **missing** from this slice (see Limitations).

---

## Existing Solutions (ES-B-xx)

| ID | Existing Solution | Type | Target User | Problem Addressed | Mechanism | Limitations | Evidence | Source URL (+date) | Evidence Status | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| ES-B-01 | Grab (ride-hailing) | direct app | Foreign tourists, locals | Taxi meter refusal / overcharging | Upfront fixed price, driver identity, ratings | Reported to cost more than taxis. It does not cover every pickup point or island. It runs into local taxi groups (Phuket/Samui turf conflicts are reported). It solves car rides only, not tuk-tuks, boats or jet-skis | "Travelers are increasingly using Grab… costs more than taxis, but passengers see it as more reliable and transparent" (paraphrase of The Nation) | https://asianews.network/?p=204969 (The Nation via ANN, 2025-05-26) [OPENED] | FACT (that the shift is reported) | Med |
| ES-B-02 | Bolt / InDriver | direct app | Tourists, locals | Same as above | Upfront price, lower fees than Grab | A 2023 notice reportedly listed Bolt and InDriver as **uncertified** by the DLT, and drivers have faced crackdowns (Phuket News) | Phuket News "crackdown on Bolt, InDriver taxi app drivers" | https://mail.thephuketnews.com/crackdown-on-bolt-indriver-taxi-app-drivers-continues-87706.php (date unclear) [SNIPPET] | HYPOTHESIS | Low |
| ES-B-03 | Police crackdowns on illegal taxis (e.g. Phuket, 26 Dec 2025: 9 checkpoints, 237 arrests) | non-app (enforcement) | Tourists | Unlicensed, overpriced transport | Periodic checkpoints and arrests | Episodic. The ATTA president attributes the problem to "weak law enforcement and a culture of impunity" | Enforcement figures | https://aseannow.com/topic/1382967-phuket-police-arrest-237-in-illegal-taxi-crackdown/ [SNIPPET]; impunity quote from https://asianews.network/?p=204969 [OPENED] | Crackdown: HYPOTHESIS; quote: FACT | Med |
| ES-B-04 | Tourist Police hotline 1155 + "i lert u" app | non-app + partial app | Foreign tourists | Scams, safety | Multilingual hotline and an incident-report app | Reactive, after the loss has happened. Short-stay tourists rarely pursue cases (The Nation notes drivers target tourists "unlikely to pursue legal action") | Hotline in 7 languages; Chiang Rai alone handled 47 complaints in Oct 2025 (3x YoY) | https://www.chiangraitimes.com/news/tourist-police-warn-over-scams/ (likely late 2025; page has no explicit date) [OPENED] | FACT | Med |
| ES-B-05 | Official TDAC site (tdac.immigration.go.th), free | direct (gov web) | Foreign arrivals | Mandatory arrival card | Free online form | Fake look-alike sites charge US$10–90 and reportedly rank or advertise above the official site in Google | MOTS warning, Oct 2025; earlier warning May 2025 (US$10 fee) | https://www.khaosodenglish.com/tourism/2025/10/17/thailand-warns-tourists-of-fake-arrival-card-websites-charging-fees/ (403 when fetched) ; https://www.malaymail.com/news/world/2025/05/01/thailand-warns-travellers-of-fake-digital-arrival-card-website-charging-us10-for-free-entry-form/175225 [SNIPPET] | HYPOTHESIS (two independent snippets agree) | Med |
| ES-B-06 | Cyber Check app, Police Care app, thaipoliceonline.go.th, hotline 1441 | partial app (gov) | Thai travelers booking tours/stays | Fake tours ("ทัวร์ทิพย์") | Lets users check whether a bank account is suspicious and report scams | Works only on accounts that have already been reported (inferred). It cannot verify a brand-new scam page | Cyber Police advice: check the operator licence, make sure the account is in the company's name, search for complaints | https://www.bangkokbiznews.com/news/news-update/1245209 (article undated; page context ~Jul 2026) [OPENED] | FACT (that the tools exist); limitation = HYPOTHESIS | Med |
| ES-B-07 | Department of Tourism tour-operator licence check | non-app (gov registry) | Thai/foreign travelers | Fake or unlicensed tour operators | Public registry lookup | Manual. Covers licensed tour companies only, **not homestays or freelance local guides** (inferred) | Recommended by Cyber Police and KBank | bangkokbiznews (above) [OPENED] | FACT | Med |
| ES-B-08 | Agoda / Booking.com / Airbnb (OTAs) | direct app | Accommodation SMEs, travelers | Discoverability and distribution for small stays | Marketplace plus commission | Commission is the largest variable cost for independent stays (SmartOrder, a vendor). Agoda's cash-advance-for-higher-commission offers were criticised in Australia (AccomNews) | SCB article: >50,000 SME accommodations, ~788,000 rooms; ~50% booked via OTAs "all owned by foreign enterprises" | https://www.scb.co.th/en/personal-banking/stories/business-maker/robinhood-travel.html (2021) [SNIPPET]; https://www.smartorder.ai/resources/th/blog/how-to-reduce-ota-commission-fees-th/ [SNIPPET] | HYPOTHESIS (numbers come from a single snippet and a source with an agenda) | Low-Med |
| ES-B-09 | Robinhood (SCB/Purple Ventures): zero-commission food + hotel/travel booking | **failed-abandoned** | Thai SME hotels, Thai travelers | OTA commission burden | Zero commission, cross-subsidised by the bank (SCB) | Shut down at 8 p.m. on 31 Jul 2024. Purple Ventures lost **2.1 bn baht** in 2023 on revenue of 724 m baht. Shows that a zero-commission marketplace cannot sustain itself without a subsidy | Quote: "losses deepened to 2.1 billion baht, triggering the decision to shut down" | https://www.pattayamail.com/thailandnews/robinhood-thai-food-delivery-and-hotel-bookings-app-to-cease-operation-amid-mounting-losses-464133 (2024-06-27) [OPENED] | FACT | High |
| ES-B-10 | Direct-booking engines / "commission-free" PMS (e.g. SmartOrder) | partial app | Independent stays | OTA dependence | Own-website booking | Hotels still need traffic. "Direct booking must be as smooth as an OTA or guests return to the OTA" (vendor claim) | Vendor blog | https://www.smartorder.ai/resources/th/blog/commission-free-hotel-booking-system-th/ [SNIPPET] | HYPOTHESIS | Low |
| ES-B-11 | Government homestay certification (มาตรฐานโฮมสเตย์ไทย) + CBT promotion | non-app (policy) | Rural communities | Rural income via tourism | Certify supply and promote the CBT label | **45.3% of the 53 certified homestay communities in Northeast Thailand were "completely inactive" (no tourist visits)**. Only 5.7% practise real CBT | Peer-reviewed study | https://journal.unhas.ac.id/index.php/fs/article/view/34796 (Forest and Society 9(1), 2025-04-13) [OPENED] | FACT | High |
| ES-B-12 | Cross-border QR linkages (9 countries; China via UnionPay/Alipay/WeChat since Oct 2025) | partial (payment rail) | Foreign tourists, vendors | Paying QR-only Thai merchants | Home-country wallet scans a Thai QR code | Linked countries account for only **29% of arrivals**. Cross-border QR was **0.2%** of tourist transaction value in 2024 | BoT and Visa paper, Dec 2025 | https://fintechnews.sg/124222/thailand/top-payment-trends-among-tourists-visiting-thailand/ (2026-01-09) [OPENED] | FACT (single primary source) | Med-High |
| ES-B-13 | TAGTHAi Easy Pay, TrueMoney, KBank PAY&TOUR card | partial app | Foreign tourists | No access to PromptPay | Tourist e-wallets and cards | Reported registration hurdles (TrueMoney QR may need a work visa). PAY&TOUR is a card, but many vendors don't accept cards | Forum/blog | https://www.tagthai.com/explore/p/payment-for-foreign-tourist-in-thailand ; https://ask.in.th/question/what-are-the-main-criticisms-of-the-paytour-tourist-bank-card-from-kasikornbank [SNIPPET] | HYPOTHESIS | Low |
| ES-B-14 | "2PriceThailand" Facebook page (crowd-shaming dual pricing) | user workaround | Foreign residents/tourists | Dual pricing opacity | Crowd-sourced photo evidence | No enforcement power. Old (Bangkok Post opinion piece predates 2020) | Bangkok Post opinion | https://www.bangkokpost.com/opinion/opinion/722652/two-tiered-pricing-turns-tourists-off (pre-2020; **outside the date window**, context only) [SNIPPET] | SPECULATION for current relevance | Low |
| ES-B-15 | "เราเที่ยวด้วยกัน" government co-pay scheme (via the เป๋าตัง app / Krungthai) | other (gov subsidy) | Thai domestic travelers, hotels | Stimulating domestic travel | State co-pays room and voucher costs | Phase 3 fraud: brokers recruited registrants to book high-priced rooms without staying, some hotels were not yet open, and check-ins were made from off-site locations. Police flagged 11 hotels and 5 suspects | Thai PBS, 18 Nov 2021 | https://www.thaipbs.or.th/news/content/309862 [OPENED] | FACT | High |
| ES-B-16 | Ferry operator T&Cs (e.g. Phuket Ferry): full refund if cancelled ≥24h ahead; not liable for accommodation or alternative transport on weather cancellations | non-app (policy) | Island-hopping tourists | Ferry cancellation risk | Pushes the risk onto the traveller | Stranded travellers bear the hotel and rebooking cost. Compensation for lost luggage was reportedly hard to obtain (Gulf News, undated) | Operator page text | https://www.phuketferry.com/de/koh-phi-phi-to-phuket-andaman-wave-master-amw0016.html [SNIPPET] | HYPOTHESIS | Low |
| ES-B-17 | Splitwise / Tricount / shared kitty (เงินกองกลาง) | other-industry / user workaround | Friend-group trips | Splitting shared costs | Expense ledger | Not localised for Thai PromptPay settlement (inferred). No Thai evidence collected | Guide article | https://www.going.com/guides/how-to-plan-a-trip-with-friends [SNIPPET] | SPECULATION (Thai relevance) | Low |

---

## Problems (P-B-xx)

### P-B-01: Taxi, tuk-tuk and rental fares are opaque and enforcement is weak, so foreign tourists get overcharged
- **Who:** short-stay foreign tourists in Bangkok, Pattaya, Phuket and Samui. Honest drivers suffer the reputational spillover.
- **Trigger:** arriving at an airport or pier, or hailing a cab or tuk-tuk on the street.
- **Proximate cause:** drivers refuse the meter, quote a flat inflated fare, take long routes, or add charges mid-trip (The Nation).
- **Possible root cause (mechanism):** a one-shot game plus information asymmetry. The tourist does not know the fair price or the route, will not return, and is "unlikely to pursue legal action." Enforcement is weak ("culture of impunity", ATTA). Local taxi groups keep apps out of some zones.
- **Current workaround:** use Grab or Bolt, negotiate before riding, take a bus.
- **Harm:** money lost and damage to Thailand's reputation. The Nation reports Chinese travellers shifting to Vietnam partly over taxi frustrations.
- **Where current solutions fail:**
  - Grab costs more and is not available everywhere.
  - Bolt and InDriver had uncertain legal status (snippet).
  - Crackdowns are episodic.
  - Hotlines only act after the loss.
- **Who benefits from the status quo:** overcharging drivers, cartel-style queue controllers, commission-paying shops. **Who loses:** tourists and metered drivers.
- **Frequency/severity:**
  - A Mastercard report (cited by The Nation) puts Bangkok among the world's top 4 cities for tourist scams, with **48% of cases involving taxis or rental cars** (single source).
  - Older official data (Jan–Oct 2018) recorded 3,408 meter-refusal cases. That is pre-2020 and only context.
- **Problem type:** Reported.
- **WTP signal:** tourists choose Grab even though it "costs more than taxis". Willing to pay a premium for price certainty (FACT, The Nation).
- **Evidence Status:** FACT for the mechanism quotes. Confidence: **High**.
- **Sources:**
  - https://asianews.network/?p=204969 (2025-05-26) [OPENED]
  - https://www.pattayamail.com/news/karma-catches-up-expats-say-no-to-thai-taxis-as-fare-cheating-persists-with-or-without-meters-in-bangkok-and-pattaya-503944 [SNIPPET]
- **Uncertainty:** no 2025 national complaint count was found.
- **Build feasibility (HYPOTHESIS):** a reference-price lookup for a route, pier or tuk-tuk ride is feasible as a static or crowd-sourced web page. The hard part is accurate price data and getting the page in front of tourists before they hail a ride.

### P-B-02: Fake TDAC (arrival card) websites charge a fee for a free mandatory form
- **Who:** every foreign arrival. TDAC became mandatory in 2025.
- **Trigger:** googling "Thailand arrival card".
- **Proximate cause:** look-alike sites charge US$10–90, and user reviews mention up to about US$240 (unverified).
- **Root cause (mechanism):** information asymmetry made worse by search ads and SEO. The government form is free but has no marketing, while scammers pay for top placement. A new mandatory rule creates a fresh search demand that scammers capture first.
- **Workaround:** official warnings that tell travellers to use tdac.immigration.go.th only.
- **Harm:** fees paid for nothing, and personal and passport data exposed (identity-theft risk, per officials).
- **Where current solutions fail:** warnings are published reactively, in news, which tourists don't read before they google.
- **Who benefits:** fake-site operators and the ad platforms that carry them.
- **Frequency:** warnings were repeated in May 2025 and Oct 2025, and Trustpilot complaints continued into 2026 (snippet).
- **Problem type:** Reported.
- **WTP:** victims *did* pay US$10–90, which shows they will pay for perceived convenience and reassurance.
- **Evidence Status:** HYPOTHESIS. Two independent snippets agree (Malay Mail May 2025; Khaosod Oct 2025), but the Khaosod page returned 403. Confidence: **Med-High**.
- **Uncertainty:** victim counts are unknown.
- **Build feasibility (HYPOTHESIS):** very high for a pre-arrival checklist or guide page. Charging money for a free government form would replicate the harm, so monetisation must come from something else.

### P-B-03: Fake tours and stays on social media ("ทัวร์ทิพย์ / ที่พักทิพย์") erode trust in small direct-selling operators
- **Who:** Thai domestic travellers booking via Facebook, LINE or TikTok with a bank transfer, and legitimate small operators (homestays, local tours) who rely on the same channels.
- **Trigger:** a cheap package or stay advertised on social media, with payment by transfer to a personal account.
- **Proximate cause:** scammers copy pages, take deposits, then disappear (Cyber Police).
- **Root cause (mechanism):**
  - There is no trusted, low-cost verification layer for micro-operators. The licence registry covers tour companies only, not homestays or freelance guides.
  - Escrow exists only inside OTAs, and those charge commission.
  - So the market splits into "safe but expensive" (OTA) or "cheap but unverifiable" (FB plus transfer). A lemons problem follows: honest small operators are discounted along with the scammers.
- **Workaround:** police advise checking the licence, insisting the account is in the company's name, googling for complaints, and using the Cyber Check app.
- **Harm:** lost deposits for travellers, and lost conversions for honest operators (inferred).
- **Where current solutions fail:**
  - Checks are manual and post-hoc.
  - Cyber Check only knows accounts that have already been reported.
  - The licence registry excludes homestays.
- **Who benefits:** scammers, and OTAs, which capture trust-seeking demand.
- **Frequency/severity:** Tourist Police report **>฿1.2 bn lost by foreign visitors in Jan–Oct 2025** across all scam types. This is a single source, and it is not specific to social-media tours. The Chiang Rai Times lists "fake social media tours… homestays that do not exist" as one scam type. No Thai-victim count was found.
- **Problem type:** Reported.
- **WTP signal:** inferred only. Travellers pay OTA mark-ups for escrow and trust (no direct survey found).
- **Evidence Status:** FACT for the existence of the pattern and the official warnings. Confidence: **Med-High**.
- **Sources:**
  - https://www.bangkokbiznews.com/news/news-update/1245209 [OPENED]
  - https://www.chiangraitimes.com/news/tourist-police-warn-over-scams/ [OPENED]
- **Uncertainty:** no domestic loss statistic. Pantip threads were not retrieved.
- **Build feasibility (HYPOTHESIS):** a verification or reputation lookup page, or a deposit-escrow mock-up, can be prototyped. Real escrow needs a payment licence or partner, which is not possible in 1.5 days, so it would have to be simulated.

### P-B-04: Government-certified homestays and CBT villages get no tourists (a discoverability and distribution failure)
- **Who:** rural homestay communities, especially in the Northeast (Isan).
- **Trigger:** a community is certified and promoted under the national homestay/CBT programme.
- **Proximate cause:** **45.3% of the 53 government-recognised homestay communities in Northeast Thailand were "completely inactive because they had received no visits by tourists"**. Only 5.7% of active ones practise real CBT.
- **Root cause (mechanism):**
  - Supply-push policy. The state certifies supply but provides no demand channel (inferred).
  - OTAs make listing possible but bury small, unprofessional listings and charge commission.
  - Village operators lack digital skills (inferred; the paper's full text on causes was not read).
- **Workaround:** none documented. Some villages earn from a few individual operators rather than the whole community.
- **Harm:** wasted public investment and missed rural income. The authors call the programme a "failure" by its own development goal.
- **Where current solutions fail:** certification ≠ distribution. OTAs optimise for conversion and commission, not for remote, low-volume, low-review supply.
- **Who benefits:** a handful of well-connected operators (the paper classifies active communities by how benefits are shared). **Who loses:** the inactive majority.
- **Frequency:** 24 of 53 communities inactive (45.3%) (single peer-reviewed source; the sample is Isan only).
- **Problem type:** Observed (field study).
- **WTP:** **weak or unknown**. These operators have little cash. Revenue would have to come from the traveller side or from B2G/NGO sources (HYPOTHESIS).
- **Evidence Status:** FACT. Confidence: **High**.
- **Source:** https://journal.unhas.ac.id/index.php/fs/article/view/34796 (2025-04-13) [OPENED].
- **Uncertainty:**
  - The study does not separate "no demand at all" from "demand exists but can't find or book them".
  - No data for other regions.
- **Build feasibility (HYPOTHESIS):** a curated directory or booking-request page for a few real communities is feasible. The two-sided cold start (getting real listings within 1.5 days) is the main risk.

### P-B-05: Small accommodations depend on foreign OTAs, and a zero-commission alternative collapsed financially
- **Who:** Thai SME hotels and guesthouses.
- **Trigger:** needing bookings beyond walk-ins and repeat guests.
- **Proximate cause:** OTAs control demand. Small hotels have weaker negotiating power and pay higher commission than large ones (SCB, snippet).
- **Root cause (mechanism):**
  - Demand-side network effects plus advertising scale sit with global OTAs.
  - "Zero commission" removes the platform's revenue without removing its cost of acquiring customers.
  - Robinhood (SCB) lost 2.1 bn baht in 2023 on 724 m baht revenue and shut down at 8 p.m. on 31 Jul 2024.
- **Workaround:** direct-booking websites or LINE OA, Facebook pages, and taking a cut of rate parity (inferred).
- **Harm:**
  - Margin leakage abroad: about 50% of SME bookings go through OTAs "all owned by foreign enterprises" (snippet, a source with an agenda).
  - Agoda's cash-advance-for-higher-commission deals were criticised as luring vulnerable operators (AccomNews, Australia; not Thai evidence).
- **Where current solutions fail:**
  - Zero-commission marketplaces are not self-sustaining (Robinhood).
  - Direct-booking engines don't create demand.
- **Who benefits:** OTAs. **Who loses:** SMEs and, through prices, travellers (inferred).
- **Problem type:** Reported. The Robinhood failure is Observed.
- **WTP signal:** SMEs *already pay* OTA commission, so there is a clear budget line for customer acquisition. Precise rates were not sourced.
- **Evidence Status:**
  - Robinhood: FACT, **High** confidence.
  - SME share and commission figures: HYPOTHESIS (single snippet).
- **Sources:**
  - https://www.pattayamail.com/thailandnews/robinhood-thai-food-delivery-and-hotel-bookings-app-to-cease-operation-amid-mounting-losses-464133 (2024-06-27) [OPENED]
  - https://www.scb.co.th/en/personal-banking/stories/business-maker/robinhood-travel.html (2021) [SNIPPET]
- **Uncertainty:** whether Robinhood Travel itself (as opposed to the whole app) closed at the same moment is not explicitly confirmed. The article names hotel bookings among Robinhood's services.
- **Build feasibility (HYPOTHESIS):** a competing marketplace is not feasible in 1.5 days. A narrow tool for SMEs is feasible.

### P-B-06: Payment-rail mismatch: Thai vendors are QR/PromptPay-centric, but most tourists can't use PromptPay
- **Who:** foreign tourists, and street vendors or micro-merchants who lose sales.
- **Trigger:** a vendor shows a PromptPay QR code or has no card terminal.
- **Proximate cause:**
  - PromptPay requires a Thai bank account (snippet).
  - Cross-border QR covers only 9 countries, which make up **29% of arrivals**.
- **Root cause (mechanism):** a fragmented payment network. Each linkage is negotiated bilaterally. Card acceptance costs small merchants money, so they skip it. The BoT/Visa paper cites "limited availability of digital payment options among small businesses".
- **Workaround:** cash. It is **78% of tourist transaction value (2024)**, with ฿160 bn in ATM withdrawals that carry fees. Also tourist wallets (TAGTHAi, TrueMoney) with KYC hurdles.
- **Harm:** ATM fees, cash-handling risk, and lost sales for vendors (inferred).
- **Where current solutions fail:** the tourist wallets have friction, and cards are not accepted at small vendors.
- **Who benefits:** ATM and FX operators (inferred).
- **Problem type:** Reported (official data).
- **WTP:** tourists already pay ATM and FX fees, so there is cost tolerance (inferred).
- **Evidence Status:** FACT (BoT and Visa via Fintech News; single primary source). Confidence: **Med-High**.
- **Source:** https://fintechnews.sg/124222/thailand/top-payment-trends-among-tourists-visiting-thailand/ (2026-01-09) [OPENED].
- **Uncertainty:** no data on vendors' lost sales.
- **Build feasibility (HYPOTHESIS):** **low**. Payments are regulated. Information-only tools (for example, which wallet works for a given nationality) are feasible but shallow.

### P-B-07: Commission-steering scams (the "temple closed" line, gem shops, zero-dollar tours): the incentive structure pays touts to mislead
- **Who:** foreign tourists. Licensed Thai guides are also affected, losing work to illegal or nominee operators.
- **Trigger:** a stranger says an attraction is closed and offers a ฿200 tuk-tuk "tour". Or a "zero-dollar" package priced below cost.
- **Proximate cause:**
  - Touts earn commission from gem, jewellery and souvenir shops.
  - Zero-dollar tours recover costs through forced shopping. A guide attacked a tourist for not buying (Khaosod, Sep 2024, snippet).
- **Root cause (mechanism):**
  - Hidden **kickback incentives**: the intermediary is paid by the shop, not the traveller.
  - Nominee structures use Thai proxies to front foreign operators (ATTA, per the SCMP snippet).
  - Enforcement capacity is thin. A Bangkok Post item mentions only 5–6 staff supervising tour agents in Bangkok; that item is older.
- **Workaround:** guides say "walk away", use Grab or metered taxis, and verify TAT badges (fake TAT badges are reported).
- **Harm:**
  - The Chiang Rai Times reports pressured gem payments of US$5,000–150,000.
  - Total scam losses were >฿1.2 bn (Jan–Oct 2025, all types, single source).
- **Where current solutions fail:** advice lists are generic and not available at the point of the encounter. The licence and badge checks are not easy to use on the spot.
- **Who benefits:** touts, shops, nominee operators. **Who loses:** tourists, licensed guides, Thailand's brand.
- **Problem type:** Reported.
- **WTP:** tourists pay for guided tours, and a trusted, licensed local guide is a known paid category (inferred).
- **Evidence Status:**
  - Scam typology and loss figure: FACT (single source).
  - Zero-dollar and nominee details: HYPOTHESIS (snippets).
  - Confidence: **Med**.
- **Sources:**
  - https://www.chiangraitimes.com/news/tourist-police-warn-over-scams/ [OPENED]
  - https://www.khaosodenglish.com/news/crimecourtscalamity/crime-crime/2024/09/20/zero-dollar-tours-under-scrutiny-after-guide-attacks-tourist-for-not-buying/ [SNIPPET]
  - https://mcdn.i-scmp.com/week-asia/economics/article/3267236/thailands-zero-dollar-tour-packages-weigh-sector-despite-crackdown [SNIPPET]
- **Build feasibility (HYPOTHESIS):** a pattern-check tool ("is this a known scam?") is feasible. A licensed-guide verification feature depends on registry data that may not be accessible.

### P-B-08: Dual pricing and price opacity for foreigners at parks and attractions
- **Who:** foreign tourists and long-stay expats (some expats report paying the foreigner rate despite residency).
- **Trigger:** entrance gates at national parks and attractions.
- **Proximate cause:** an official two-tier fee schedule exists (introduced in 2018; examples of ฿300 vs ฿30 and ฿200 vs ฿20). Private businesses also apply informal mark-ups.
- **Root cause (mechanism):** posted prices are often in Thai numerals or text only (widely reported but not sourced here, so SPECULATION). Rules are applied inconsistently, which creates uncertainty rather than just a higher price.
- **Harm:** perceived unfairness and social-media backlash. The Ministry of Tourism reportedly said in 2025 it would look into "massive" complaints (snippet).
- **Where current solutions fail:** crowd-shaming pages have no power to change prices.
- **Problem type:** Reported.
- **WTP:** low. This is a fairness grievance, not a willingness-to-pay pain.
- **Evidence Status:** HYPOTHESIS for 2025 relevance; most sources found are pre-2020 or snippets. Confidence: **Low-Med**.
- **Sources:**
  - https://www.bangkokpost.com/opinion/opinion/722652/two-tiered-pricing-turns-tourists-off (pre-2020, context only)
  - https://www.m.tin.media/news/details/NTVJbVFmci9EZ2NNWS9XNlhZczI2dEQyRnVXWXpQbWZnV2N1M21HY040UT0= [SNIPPET]
- **Build feasibility (HYPOTHESIS):** a price-transparency lookup is easy to build but monetises poorly.

### P-B-09: Government travel subsidies are gamed through broker–hotel collusion (verification failure)
- **Who:** taxpayers, honest hotels and genuine Thai travellers.
- **Trigger:** state co-pay schemes such as เราเที่ยวด้วยกัน (phase 3).
- **Proximate cause:** brokers recruited registrants to book high-priced rooms without staying, in exchange for a small fee. Some hotels weren't yet open. Check-ins were made from off-site locations.
- **Root cause (mechanism):** the subsidy paid out on a booking or check-in signal, not on verified presence. The incentives for the hotel and the "traveller" both pointed toward fake stays.
- **Harm:** leakage from a 15,000 m baht budget (as reported). 11 hotels and 5 suspects were flagged.
- **Where current solutions fail:** fraud was found after the fact, and rule changes were pushed back to TAT and Krungthai.
- **Problem type:** Observed (police findings).
- **Evidence Status:** FACT. Confidence: **High** for 2021. No information found on a 2026 phase.
- **Source:** https://www.thaipbs.or.th/news/content/309862 (2021-11-18) [OPENED].
- **Build feasibility:** low relevance. The customer is the government, and B2G procurement does not fit the timeline.

### P-B-10: Last-mile transport in secondary cities (เมืองรอง) for Thai travellers without a car
- **Who:** Thai domestic travellers without a car (students, young groups, older people). This is relevant to secondary-city promotion.
- **Trigger:** arriving by bus or train in a เมืองรอง and needing to reach attractions.
- **Proximate cause:** few scheduled services, no price standard, poor links between transport modes (Thansettakij snippet). Earlier van-regulation changes led operators to cut some routes (a 2017 article, outside the window).
- **Root cause (mechanism):**
  - Thin demand cannot sustain scheduled services.
  - Informal operators (songthaew, local drivers) are not discoverable online (inferred).
  - Grab coverage is limited in small cities (unverified).
- **Workaround:** rent a car or motorbike, hire a driver through Facebook groups, or join a tour (inferred).
- **Problem type:** Reported, but weakly.
- **Evidence Status:** HYPOTHESIS. Confidence: **Low**.
- **Sources:**
  - https://www.thansettakij.com/general-news/396645 [SNIPPET]
  - https://www.thaipbs.or.th/decode/20250702-urban-transport-justice (2025-07-02) [SNIPPET]
- **Uncertainty:** no Pantip or user voice was captured, and no statistics.
- **Build feasibility (HYPOTHESIS):** a directory of local drivers and songthaew for one or two provinces is feasible. The data has to be collected by hand.

### P-B-11: Island ferry and transfer disruptions push all the risk onto travellers
- **Who:** island-hopping tourists in the Andaman (Phi Phi, Lanta) and Gulf (Samui, Phangan, Tao) areas.
- **Trigger:** monsoon or rough-sea cancellations and delays. Missed onward connections (flights, other ferries).
- **Proximate cause:** operator terms refund the ticket only. The operator "shall not be liable… for the cost of any accommodation or for any alternative means of travel".
- **Root cause (mechanism):** fragmented multi-operator itineraries. No party owns the end-to-end connection, so the risk sits with the traveller.
- **Harm:** extra hotel nights, missed flights, lost luggage. In one rough-sea Koh Tao case, compensation was reportedly hard to get; the article is undated.
- **Problem type:** Inferred (from T&Cs) plus Reported (an anecdote).
- **Evidence Status:** HYPOTHESIS. Confidence: **Low-Med**. No 2025–26 stranding report was found.
- **Source:** https://www.phuketferry.com/de/koh-phi-phi-to-phuket-andaman-wave-master-amw0016.html [SNIPPET].
- **Build feasibility (HYPOTHESIS):** a connection-risk or buffer planner is feasible. Live data access is unknown.

---

## Key Thailand Tourism Stats (FACT only)

| Metric | Value | Year | Source | Corroboration |
|---|---|---|---|---|
| Foreign arrivals | **32,974,321** (−7.23% YoY) | 2025 | MOTS via The Nation/ANN, https://asianews.network/thailand-tourism-slips-in-2025-despite-domestic-growth/ (2026-01-02) [OPENED] | Search summaries of TAT ("32.9 m, −7.2%") and Khaosod ("32 m") agree, but those pages were not opened. **Treat as single-source opened.** |
| International tourism receipts | 1,536,574 m baht (−4.71%) | 2025 | same | single source |
| Domestic Thai trips | 202.37 m (+2.70%) | 2025 | same | Single source. **Conflicts** with an SCB EIC figure of "277.1 m domestic trips 2025" (snippet, likely a different definition). Reconcile before use. |
| Domestic tourism revenue | 1,166,761 m baht (+3.69%) | 2025 | same | single source |
| Total tourism revenue | 2,703,335 m baht (−1.26%) | 2025 | same | single source |
| Top markets (arrivals) | Malaysia 4.52 m (−8.71%), China 4.47 m (−33.55%), India 2.49 m (+16.82%), Russia 1.90 m (+8.80%), S. Korea 1.56 m (−16.79%) | 2025 | same | single source |
| Foreign arrivals | 35.5 m | 2024 | BoT and Visa via Fintech News, https://fintechnews.sg/124222/... (2026-01-09) [OPENED] | A search summary also gives 35.54 m (Travel Weekly Asia/TAT, not opened). Two sources if the snippet is verified. |
| Tourism share of GDP | ~9% (THB 1.7 tn) | 2024 | same | **single source** |
| Tourist payment mix (by value) | Cash 78%, cards 20%, e-money 2%, cross-border QR 0.2% | 2024 | same (BoT and Visa paper, Dec 2025) | **single source** |
| Cross-border QR coverage | 9 countries, 29% of arrivals; ~THB 2.5 bn inbound QR | 2024 | same | single source |
| Tourist ATM withdrawals | THB 160 bn | 2024 | same | single source |
| Scam losses of foreign visitors | >฿1.2 bn | Jan–Oct 2025 | Tourist Police Division via Chiang Rai Times [OPENED] | **single source** |
| Inactive homestay communities (Isan) | 45.3% of 53 | study published 2025 | Choenkwan & Rambo, Forest and Society [OPENED] | single peer-reviewed source |
| Bangkok taxi/rental share of tourist-scam cases | 48% | report cited 2025 | Mastercard via The Nation/ANN [OPENED] | single source (secondary citation) |
| Robinhood (Purple Ventures) 2023 loss | 2.1 bn baht (revenue 724 m baht); shut down 31 Jul 2024 | 2023–24 | Pattaya Mail [OPENED] | single source |

**Not FACT (snippet only, verify before use):**
- TAT 2026 target of 36.7 m arrivals.
- KResearch 2026 forecast of 34.1 m arrivals.
- SCB EIC 2026 forecasts: 34 m arrivals, 282.6 m domestic trips.
- SCB: >50,000 SME accommodations, ~788k rooms, ~50% booked via OTAs.

---

## Unknowns & Research Limitations

1. **Pantip and Reddit voice-of-customer is missing.** `site:pantip.com` and Reddit queries returned almost no actual threads. The search tool appears to index Pantip poorly. Domestic-traveller pains need a manual Pantip or Facebook-group pass. Examples to check:
   - หารค่าทริป / เงินกองกลาง friction
   - รถตู้/รถทัวร์ booking
   - ทริปเพื่อน planning conflicts
   - โฮมสเตย์ไม่มีคนจอง from the owner's side
2. **Group-trip cost splitting (Thai friends):** I found no Thai evidence, so it is not listed as a problem. Treat it as SPECULATION until it is mined from Pantip, X or TikTok.
3. **No-shows at small Thai operators:** the search returned only foreign and generic content (UK and Taiwan restaurant studies, the Rezdy blog). No Thai data, so it is excluded.
4. **Blocked or empty:**
   - Khaosod English (HTTP 403)
   - Kasikornbank travel-scam page (empty)
   - The SCB Robinhood-travel page, SCMP, Bangkok Post and Malay Mail were seen only as snippets
5. **No primary MOTS or TAT statistics pages were opened.** The 2025 figures come via The Nation/ANN. Verify them on mots.go.th before citing them in a pitch.
6. **Domestic-trip figures conflict** (MOTS 202.37 m vs an SCB EIC snippet of 277.1 m). They probably use different definitions (trips vs visitor-trips, or including excursionists).
7. **Willingness-to-pay evidence is mostly indirect.** It comes from revealed behaviour: paying a Grab premium, paying fake TDAC fees, SMEs paying OTA commission. No survey-based WTP was found in this slice.
8. **No 2025–26 data** for ferry strandings, dual-pricing complaint counts, or a 2026 เราเที่ยวด้วยกัน phase.
9. **The causes of homestay inactivity** (no demand vs no discoverability vs product quality) were not in the abstract. The full PDF should be read: https://journal.unhas.ac.id/index.php/fs/article/download/34796/12705/138338
10. **The budget** was about 30 search/fetch calls, so coverage is broad but shallow. Snippet-derived claims are marked and should not be cited as FACT.
