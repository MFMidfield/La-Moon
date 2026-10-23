# Gen 2 Track B - Internal Critique (not independent validation)
Date: 2026-10-22. Critic = same model family as generator. Scope: G2-B01..B04 in trackB-ideas.md, plus G-legal-verification.md.
Prior-art Status for all cards: **Targeted Scan** (about 23 tool calls in total, 3 of them failed: 404/403/403; this is 1 over the 22 cap). "(snippet)" = seen only in a search-result summary, page not opened. "(opened)" = page fetched and read. I did not re-verify the generator's own news citations (Khaosod scam stories) except the tuk-tuk one and the visa one.

## Summary table
| Card | Verdict | Novelty Confidence | Closest alternative |
|---|---|---|---|
| G2-B01 Pay-After-It-Lands | **HOLD** | Med-Low | Eventpop official e-ticket transfer + Tixel Eventpop resale |
| G2-B02 Standby Window | **HOLD** (weak; leans REJECT if 10-operator test fails) | Med | Klook/KKday next-day booking, Thai spa flash-sale apps (Riwigo, Loft Thai) |
| G2-B03 30-Day Cliff Planner | **SURVIVE** (conditional) | Low-Med | Nomada Thailand DTV day tracker; OpenVan Thailand days-of-stay calculator |
| G2-B04 Concert Exit Pool | **REJECT** | Med (nothing found) but mechanism fails | GrabHitch/GrabShare (2016-17) + Grab/Bolt app hail |

---

## G2-B01 - Pay-After-It-Lands Ticket Deal Room
**Verdict: HOLD.** The key assumption (in-account transfer) is only PARTLY true, and the mechanism is weaker than claimed.

### Targeted scan findings
- Eventpop DOES have an in-account transfer: owner enters recipient email, recipient must accept within 48h, new E-ticket is issued to the recipient, original is cancelled, accepted transfer cannot be reversed; owner can cancel before acceptance. BUT only "if the organizer allows it"; otherwise offline transfer with a power of attorney + ID. https://support.eventpop.me/en/how-to-transfer-e-ticket (opened). So the generator's "could not confirm any transfer feature" was wrong for Eventpop, and right/unknown for others.
- Eventpop also ran an official resale market for S2O 2025 (sellers need account; payout after platform fee) https://eventpop-help-center-en.helpscoutdocs.com/article/1089-how-to-sell-tickets-s2o-2025-resale-market (snippet; fetch returned 404). A third-party, Tixel, says you can list Eventpop tickets from your Eventpop account and the ticket is released to the buyer only after Tixel receives payment https://tixel.com/sell/Eventpop (opened; page does not say if Tixel operates in Thailand).
- Thai Ticket Major: no official fan-to-fan transfer/resale found. The only statement is from a competitor (Ticket Fairy) comparison page (snippet): no resale/transfer in public docs, 95% market share claim from an old Bangkok Post piece (snippet). The Concert, AllTicket, Ticketmelon, Ticketmaster TH: nothing found either way (Ticketmelon: only a virtual queue mentioned, snippet). **Unknown, not "no".**
- Thai-language search for safe middlemen ("ตัวกลาง"): no verified safe service found; only bank/SCB/Thai PBS warnings and lawyer advice (snippet). Absence of a safe service is weak evidence of a gap (could also mean no one makes money).
- Law: no Thai statute capping concert resale prices; a draft law on bot-buying and minimum ticketing-system standards was reported by Matichon (snippet). Organiser terms are the real barrier (MFU Law Journal paper on enforceability, snippet, https://so08.tci-thaijo.org/index.php/MFULJ/article/view/4648).
- Global: Twickets (face-value cap, transfer details only from forum anecdotes, snippet), Tixel (scan/verify listing, price cap +10% or 20%, fees about 5% seller / 6% buyer, snippet; "funds held until 3 days after event" is an unconfirmed blog claim), StubHub/Viagogo (escrow-style, licensed in their markets). These are escrow or hold-funds models; B01's "no funds held" is the real difference.

### Mechanism attack
1. **The gate is self-reported.** The app cannot see the buyer's ticket account. "Pending transfer" is a click by the seller and a claim by the buyer. The generator admits a faked screenshot works; so the "protocol is the filter" claim is false. What remains is a checklist + QR timing + log. The QR "reveal" is a UI nicety: a buyer can pay any QR any time.
2. **It moves risk onto honest sellers.** After the buyer accepts (irreversible on Eventpop), the seller has lost the ticket and is owed the second half. A dishonest buyer pays 50% then stops. Honest sellers (the supply side, needed for any deal to exist) get a worse deal than "cash first". Sellers have no reason to enter, and the product needs seller adoption (a seller must start the room).
3. **Wrong scam class.** The cited rings (350+ X accounts, "booking service", advance payment) mostly sell tickets that do not yet exist or are screenshot QR. The tool's answer for those is "cannot be made safe - do not pay", i.e. a warning. That is not a mechanism; it is what Bangkok Bank/SCB/police already say.
4. **Real tickets can still defraud.** Scammer transfers a genuine cheap-zone/low-value ticket against an expensive-zone deal, or transfers a ticket the organiser later voids (Live Nation 2022 warning: resale tickets may be cancelled without refund). Buyer carries 50% exposure plus cancellation risk.
5. **Novelty is mostly choreography.** Split payment around an official transfer is a known manual practice (many fans already ask "transfer first, pay after" in X threads (hypothesis, no source)). The app is UI + realtime state + QR generation. Difference from escrow = lack of enforcement, not added safety.

### Hidden costs / cold start / distribution
- Two parties must both leave X/LINE DMs and use our link; every deal is a 2-user cold start; scalpers with high volume are the likeliest repeat users (which we then facilitate).
- Buyers who are already being pressured ("last ticket") will not add a 20-minute two-step protocol. 29 THB fee on top of a 17,700 THB average is trivial in cost, but distribution is the issue (reach fans before the scam, via fan-club accounts that have little reason to promote).
- Seeded demo is easy; real transfer is only testable on Eventpop events where organiser allows it.

### Privacy / security / abuse / legal
- Storing seller PromptPay IDs + event + amount + chat of reselling = personal data, PDPA notice needed, cross-border (Supabase US) disclosure (legal file Q2).
- "Evidence log" as proof for police is reasonable; any "cannot be made safe" label on a named seller/account approaches the blacklist risk in the legal file (defamation s.326/328). Keep labels about the offer type, not the person.
- Facilitating resale above face value in breach of organiser terms: likely not criminal for a coordination tool (not verified), but organiser takedown/legal letters are possible.
- PromptPay coordination-only is probably licence-free (legal file Q1, HYPOTHESIS); a "pay 50% then 50%" reveal is fine only if our 29 THB fee is a separate QR - the generator already specifies that. Do not describe the log as "payment confirmed".

### Stakeholder harm
- Honest sellers (risk shift); buyers given a false sense of safety ("used the protocol" while on a faked screenshot); organisers (more secondary trade); false positives on genuine sellers flagged "cannot be made safe".

### Counter-evidence
Eventpop transfer is irreversible and organiser-gated, and Tixel/Eventpop integration shows the safer route already exists where it exists; where transfer is not available (TTM likely), the tool collapses to a checklist.

**Closest alternative:** Eventpop official transfer + Tixel resale listing for Eventpop tickets (https://tixel.com/sell/Eventpop, opened).
**Mechanism Differentiation:** (a) no-escrow staged payment gated on account transfer vs. Tixel/StubHub escrow + scan; (b) self-reported rather than platform-verified gating. The differentiation exists but removes the verification that makes the alternatives safe.
**Novelty Confidence:** Med-Low (Thai-specific staged-payment room not found in scan; the practice is likely informal).
**Top 3 failure reasons:** (1) gate unverifiable and transfer unavailable on Thai Ticket Major/The Concert (unknown); (2) risk shifted to sellers, so no supply; (3) targets "ticket doesn't exist" scams that it can only warn about.
**Fastest falsifying experiment (under a day):** check the actual transfer/name-change options on the 5 biggest upcoming concerts across Thai Ticket Major, The Concert, AllTicket, Eventpop (read terms/FAQ pages, screenshot); then ask 10 resellers/buyers in 2 fan groups whether they would accept "transfer, then 50/50". If <50% of upcoming big shows allow in-account transfer or sellers refuse, drop.

---

## G2-B02 - Standby Window
**Verdict: HOLD** (problem unproven; economics thin; a failed 10-operator test should turn this into REJECT).

### Targeted scan findings
- Klook shows Chiang Mai cooking classes (e.g. Lanna Smile about US$29.7, Mama Noi about US$29.4, 40K+ booked) as "book now for tomorrow", instant confirmation, free cancellation; GetYourGuide same-day availability with a 3% sale coupon (snippet). Slots are already easy to get at last minute; no standby/flex-request feature seen (snippet).
- Last-minute inventory sales for spas exist: Riwigo app claims up to 80% off Bangkok spas and 50% off non-peak (marketing claim, snippet); Loft Thai flash-sale vouchers and 10% weekday discount (snippet); Thai Odyssey weekday discounts (snippet). Region-wide last-minute apps were hotels (HotelQuickly, CheckInTonight; current status unknown, snippet). I found no Thai Muay Thai/class slot marketplace (snippet-level, one search).
- Evidence of empty slots: only unsourced Chiang Mai tourism-down articles (chiangraitimes, thethaiger flood-year occupancy 50%); nothing on class/gym utilisation. The card itself marks the key claim HYPOTHESIS. Not re-verified by me.

### Mechanism attack
- Reverse-auction/"name your price" demand posting is long-established (hotel last-minute, spa flash apps). The inversion adds friction: operators must check a feed daily to win a 350 vs 400 THB booking. A WhatsApp/LINE message "I'm free Tuesday, any discount?" does the same in 30 seconds without an app.
- Economics: class at about 1,000 THB; 20-40% saving about 300 THB to traveller; platform take 20 THB per fill or 199-299 THB/month. 10 operators x 199 = about 2,000 THB/month at best. "Clear money-making model" is nominal.
- The listed asset (hundreds of free hours) is true of the traveller but most Chiang Mai classes already have morning/afternoon seats open via Klook/KKday, so "flex" is not scarce; the pain is price, and price comparison already exists (KKday/WAUG/Klook cross-listing).

### Hidden costs / cold start / distribution
- Classic two-sided cold start: operators are the scarce side, LINE-OA hand-onboarding, no distribution to long-stayers except Facebook/Reddit nomad groups.
- Offers to a single traveller feed means low liquidity; a demo with simulated offers (as the card plans) will not show real willingness.

### Privacy / security / abuse / legal
- Day-tours/van trips sold by individuals need a DOT tourism licence (Tourism Business and Guide Act s.15/s.80, arrests for Facebook-advertised tours, legal file Q4). The feed can list tours; require licence number field or restrict to classes/spa/gym. Muay Thai gym and cooking classes likely not "tour business" but unconfirmed.
- Traveller location/time-window requests disclose pattern of life (where a foreigner is free, alone, at what hours) to unvetted operators: low-grade safety issue. PDPA notice needed.
- Operators can collude/spam; no-shows (traveller accepts then skips) hurt operator trust; app cannot enforce since no deposit (deposit would breach "no third-party money").

### Stakeholder harm
Operators trained to discount (price anchoring below Klook price, platform-listing conflict with Klook contracts that require price parity, hypothesis); small operators bear unpaid time.

### Counter-evidence
Flash-sale spa apps and operators' own promos exist; Klook next-day availability exists; no demand-side evidence for "I need standby" among long-stayers.

**Closest alternative:** Klook last-minute "book now for tomorrow" (https://www.klook.com/activity/18123-lanna-smile-cooking-class-chiang-mai/?aid=17620, snippet) and Riwigo spa deals (https://apps.apple.com/us/app/id1120738530, snippet).
**Mechanism Differentiation:** demand-side flex-window request with operator bids vs. operator-posted discounts / fixed price lists. Real but small.
**Novelty Confidence:** Med (no Thai standby/reverse offer found; 1-2 searches only).
**Top 3 failure reasons:** (1) operators will not monitor a feed for 20 THB fills; (2) savings and fee too small to fund a business; (3) the empty-slot premise is unproven.
**Fastest falsifying experiment:** message 15 Chiang Mai cooking schools/gyms/spas on LINE/WhatsApp: "traveller free any weekday morning, will you give X% for a same-week booking?" Need >=5 yes with a stated discount; also ask how many seats are empty on a weekday. If <5 yes, drop.

---

## G2-B03 - 30-Day Cliff Stay Planner
**Verdict: SURVIVE (conditional; passes preliminary check, not proof of quality).**

### Claim verification: 15 Sep 2026 cut to 30 days = TRUE
- TAT News (Tourism Authority of Thailand notice dated 1 Sep 2026): new 30-day (60 countries/territories) and 15-day (Seychelles, Mauritius) exemption categories effective 15 Sep 2026, replacing the 60-day exemption; Ministry of Interior announcements published in the Royal Gazette 31 Aug 2026; notice first posted 21 May 2026, updated 16 Jul 2026 https://www.tatnews.org/2026/09/thailand-introduces-new-30-day-and-15-day-visa-exemption-rules-from-15-september/ (opened). Corroborated by Khaosod English https://www.khaosodenglish.com/politics/2026/09/01/thailand-reduces-visa-free-stay-from-60-to-30-days/ (snippet), TTG Asia, EIG Law, VisasNews (snippets). I did not retrieve the Gazette or MFA/Immigration pages directly; the TAT notice is an official-agency source.
- Entry cap correction: TAT says the "no more than twice per calendar year" limit applies to **land-border** entries under the exemption (with exceptions for Malaysia, Brunei, Indonesia, Singapore nationals), not to all re-entries (opened). The card's "exit/re-entry within entry caps" route is therefore partly mis-specified: air re-entry is not capped by that rule per TAT.
- Extension: TAT notice does not mention it (opened). Royal Thai Embassy Washington reportedly says one extension of up to 30 more days at officer discretion (snippet via search summary; embassy page not opened). A forum thread disputes day-counting (aseannow, snippet). So the extension and counting are exactly the contested rules the engine needs and cannot settle.
- Previously known: Canberra embassy page says the exemption days are not extra stay (snippet).

### Prior art
- Nomada Thailand DTV day tracker: free, browser-only log, DTV 180/360 days, **not updated for 30-day exemption** (opened); likely affiliate-funded (inference) https://nomada.tools/tools/visa-tracker/thailand-dtv
- OpenVan Thailand visa calculator / days-of-stay journal (exit & visa-run dates) https://openvan.camp/en/tools/thailand-visa-calculator (snippet); EveryCalculators visa-type/cost estimator (snippet). These are the "Schengen calculator" equivalents and they exist. None found that enumerates and costs alternative routes (exempt+extension vs DTV vs tourist visa) - one search only.
- Generator claimed "none found in 1 search"; that is false (OpenVan/Nomada), though they are day counters, not planners.

### Mechanism attack
- The value proposition ("legal sequences enumerated and costed") depends on rules that are discretionary (extension "at officer discretion") and contradictory across sources. The engine would output false certainty. Liability grows exactly when users rely on it (500 THB/day overstay fine, possible ban).
- DTV is the main alternative route and its rules (500k baht funds, 180 days) are stable and already well covered; the new part is only the 30-day + extension, which is two or three branches. Value over a blog table is small for most nationalities.
- "Crowd reports of immigration office wait times": needs users; cold start; abuse (fake reports).

### Hidden costs / distribution / revenue
- Rule maintenance by one student indefinitely; policy shock peaks around the 15 Sep change and is already 5+ weeks past; SEO against ThaiVisa, Reddit, agent blogs, and established calculators.
- **Payment mismatch:** target users are foreigners; PromptPay QR payment (149 THB) requires a Thai bank/e-wallet or specific foreign-bank PromptPay support - many tourists/nomads cannot pay it (hypothesis, not verified). The revenue path may not reach the audience.
- Visa-agent referral: the legal file does not cover visa-agent licensing; paying/being paid per lead from visa agents is unverified legally. Affiliate to insurance is plausible.

### Privacy / security / abuse / legal
- Nationality + arrival date + passport details + immigration status = sensitive-ish personal data; store minimal, avoid account (use local state + hashed ID). Cross-border transfer disclosure. Do not ask for passport numbers.
- Unlicensed legal/visa advice risk: present as "information with sources", not advice; show rule version date and conflict flags (the card does).

### Stakeholder harm
Users who rely on wrong output and overstay; Thai immigration offices get misinformed queries; real visa agents lose leads (minor).

### Counter-evidence
Day-tracking tools exist; official sources (TAT, embassies) now publish clear 30-day rules; the card's own "sources conflict" concerns the narrow extension/counting questions.

**Closest alternative:** Nomada Thailand DTV day tracker https://nomada.tools/tools/visa-tracker/thailand-dtv (opened); OpenVan https://openvan.camp/en/tools/thailand-visa-calculator (snippet).
**Mechanism Differentiation:** goal-driven backward planning with cost/timeline/.ics vs forward day counters. Real but modest.
**Novelty Confidence:** Low-Med (differentiation is in plan generation; core data is public).
**Top 3 failure reasons:** (1) rule accuracy/discretion makes output unreliable and creates liability; (2) willingness to pay and ability to pay via PromptPay among foreigners unproven; (3) shock window fading and free competing tools/blogs.
**Fastest falsifying experiment:** post a free mock plan (UK passport, 75 days) to r/ThailandTourism, Thailand nomad Facebook groups and ThaiVisa; ask "would you pay 149 THB / USD 4?" and offer a Wise/PayPal-free test link. Verify the extension rule with the Immigration Bureau site or 2 embassy pages. Fail if <10 paid-intent replies or the extension rule cannot be sourced to an official page.

---

## G2-B04 - Concert Exit Pool
**Verdict: REJECT.** The evidence is overstated, the mechanism does not address the actual failure (supply/wait), and the cold start is near-fatal.

### Targeted scan findings
- The 4,000 THB incident (Khaosod English, 14 Oct 2026 https://www.khaosodenglish.com/news/2026/10/14/tuk-tuk-driver-faces-backlash-over-4000-baht-fare-after-the-weeknd-concert/): article fetch returned 403; per search summary (snippet), a tuk-tuk driver posted a video of a dispute over a 4,000 baht demand for Rajamangala to Sukhumvit Soi 4 (about 15 km); **the two tourists paid 400 baht and refused the rest**; driver reportedly offered to accept 2,000. Other outlets disagree on police involvement: MustShareNews says Hua Mak police received no formal complaint; Chiang Rai Times says law enforcement came to the driver (snippets). The card's "FACT: ... police fined him" is **not supported** by what I could find, and "tourists charged 4,000" is wrong: they paid 400 and the driver was the one criticised online. One anecdote does not establish systematic gouging.
- Wait times: Traveloka guide (BTS show) says post-concert Grab pickups can take 30+ minutes; advice is to walk a block or two before booking (snippet). No source found on taxi refusal/gouging patterns at Rajamangala. Nothing on organiser shuttles or carpool (snippet).
- Prior art in Thailand: GrabHitch beta (fixed 50 THB carpool, 2016) and a 2016 carpooling app (Khaosod) https://www.bangkokpost.com/thailand/general/1149493/grab-beta-launches-carpool-service (snippet), https://www.khaosodenglish.com/news/transpo/2016/12/02/get-free-rides-make-new-friends-new-carpooling-app/ (snippet). GrabShare confirmed for Jakarta/Malaysia/Philippines but not found for Thailand; nothing on Bolt shared rides in Bangkok. Whether any is live in 2026 is unknown. Korea's Banban Taxi is a different market.

### Mechanism attack
1. **Pooling does not fix the shortage.** If the pain is 30+ minute waits and surge pricing, the "caller" still hails from the same congested Grab/Bolt/taxi pool at the same moment. Fare is anchored to the meter only if the caller finds a metered taxi that accepts the fare; the generator's premise that price is "anchored to meter not scarcity" breaks the moment the caller uses Grab/Bolt (surge applies).
2. **Counterfactual is ~400 THB, not 4,000.** The tourists in the cited incident paid 400. Pool saving = 400 to about 130 each. Meaningful but small; and MRT Yellow Line (Hua Mak) + short hop is a well-documented alternative (snippet).
3. **Critical mass.** Needs >=3 strangers per zone and time window within a 50k crowd who pre-registered; a pool of 1 is useless; deterministic matching must be done before the show, which is when no one is thinking about the exit.
4. **Caller bears all risk** (fare, no-shows, refund of shares); the app has no way to enforce payment, and peer QR requests to strangers invite non-payment.

### Hidden costs / cold start / distribution
- Needs fan-club/organiser cooperation each concert; 1.5 build days gets only a simulated demo; a pilot needs a live concert (next Bangkok mega-shows are outside our control).
- Revenue 15 THB/rider x a few hundred riders per event is negligible; organiser sponsorship "unvalidated" (the card says so).

### Privacy / security / abuse / legal
- Collects real-time location/destination zone and departure time of strangers, many teens (fans 16-35 includes minors): stalking, harassment, gender-safety risks at midnight. Meet-points "away from the crowd" can be unsafe/dark.
- Legal: organising paid rides among strangers with a per-person charge could be viewed as unlicensed transport/ride-hailing (Land Transport Act, not researched by the legal file; unknown). Thai taxis are not allowed to charge per head in many contexts (hypothesis). The app being non-carrier probably helps; not verified.
- Cost-sharing among passengers is ordinary P2P; PromptPay coordination only: OK under the legal file.

### Stakeholder harm
Taxi/tuk-tuk/motorcycle-taxi drivers (framed as gouging villains, based on one video; the drivers are a vocal political group in Bangkok); risk to women/minors in pools; a driver doxxed through our comparison line ("tuk-tuk quote 4,000") - defamation/PDPA exposure if naming.

### Counter-evidence
The key FACT cited is contradicted by the sources (tourists paid 400); no systemic gouging report found; official guides already advise MRT + short hop and walking away from the exit; earlier Thai carpool attempts (GrabHitch) did not become established (status unknown).

**Closest alternative:** Grab app-hail with GrabHitch/GrabShare history (https://www.bangkokpost.com/thailand/general/1149493/grab-beta-launches-carpool-service, snippet) and MRT Yellow Line + hail guides (https://www.traveloka.com/en-th/explore/activities/how-to-get-to-rajamangala-national-stadium/1008412, snippet).
**Mechanism Differentiation:** pre-event pooling with PromptPay P2P splits vs. on-demand dispatch. Genuine but does not remove the supply bottleneck.
**Novelty Confidence:** Med (no concert-pool app found; one search plus a Grab-share search).
**Top 3 failure reasons:** (1) no pool reaches critical mass; (2) does not fix supply/wait and doesn't beat surge; (3) safety/legal exposure with strangers, minors, and live location.
**Fastest falsifying experiment:** post a pool sign-up form in 3 fan groups for the next Bangkok stadium concert a week before; kill if <15 sign-ups per major zone, or ask 20 Rajamangala attendees what they paid/waited (Reddit/X). Also check the Khaosod article text for the actual police outcome.

---

## Cross-card notes
- Ranking by robustness: B03 > B01 > B02 > B04.
- B01 and B04 both rely on peer PromptPay with unverifiable payment; keep wording "self-reported".
- Generator labels to correct before any downstream use: B01 "no official transfer found" (Eventpop has one); B03 "no prior art in 1 search" (Nomada, OpenVan exist) and entry-cap scope (land-border only per TAT); B04 "police fined him / charged 4,000" (tourists paid 400; police outcome conflicting).
