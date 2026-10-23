# Gen 2 - Track B (Blind Exploration) - Idea Cards
Date: 2026-10-22. Domains: (1) Events/festivals/concerts, (2) Long-stay and solo travel in Thailand.
Operators: Failure Reversal, Resource Recombination, Second-order Effects, Mechanism Substitution (one each).
Search budget used: 12 web searches. Labels: FACT = found in a search result; HYPOTHESIS = reasoned, untested; SPECULATION = no source found.
No idea holds or passes through anyone's money; all payments are peer-to-peer PromptPay QR or to the operator's own QR, plus our own small fee QR.

---

## G2-B01 - "Pay-After-It-Lands" Ticket Deal Room
**Operator used:** Failure Reversal (domain 1)

**Problem.** Who: Thai/foreign fans buying sold-out concert tickets from strangers on X/Facebook. Trigger: on-sale sells out in minutes, so people turn to "ticket booking services" and resellers. Why the current way fails: the standard defence is reactive (check the seller's name/account after complaints, police advice "buy only official"), but a single ring ran 350+ disposable X accounts, so identity-based checks always lag; buyers pay in full before anything is verified.
Evidence:
- FACT: June 2026 - 7 arrested, 350+ X accounts, ~1,000 victims, ~4M baht losses. https://www.khaosodenglish.com/life/entertainment/2026/06/10/seven-arrested-in-thai-concert-ticket-scam-network/
- FACT: July 2026 - BTS scam ring, 105 victims, avg ~17,700 baht each, >1.8M baht; police say buyers transfer money before verifying sellers. https://www.khaosodenglish.com/news/crimecourtscalamity/2026/07/13/five-arrested-over-bts-concert-ticket-scam-worth-1-8-million-baht/
- FACT: July 2026 - Consumer Protection minister ordered a probe into advance-payment ticket "services". https://www.khaosodenglish.com/featured/2026/06/11/thai-parliament-hears-bts-ticket-scam-complaints-damages-exceed-1-23-million-baht/

**Target user.** Fans aged 16-35 buying 1-2 tickets from a stranger; secondary: honest sellers (friend dropped out) who want proof they delivered.

**Core mechanism.** Failure being reversed: blacklists/identity checks fail because the cause is "identity is free to fake, and payment comes first". Reverse the cause: stop judging the person, gate the *sequence*. A deal link (made by buyer or seller) walks both sides through: (1) seller starts an official in-app ticket transfer, buyer sees it pending in THEIR OWN official ticket account; (2) app reveals the seller's PromptPay QR for 50%; (3) buyer accepts transfer, ticket now sits in buyer's account; (4) app reveals QR for remaining 50%. Max loss for each side is capped at half, no money is held. Timestamped shared log is evidence for police/consumer complaints. A scammer cannot pass step 1 (no real ticket to transfer) so the protocol itself is the filter; refusing it is the red flag. Tickets that cannot be transferred into the buyer's own account (screenshot QR, "booking service" with no ticket yet) are labelled "cannot be made safe - do not pay".
Closest existing approach: scam-account lookups / police advice / marketplace escrow (Viagogo-type). Difference: no identity list (so no PDPA/defamation issue), no escrow (no licence), mechanism = payment-reveal gating tied to the ticket's real location.

**Expected value + key assumption.** Avg loss ~17,700 baht vs a 29 THB fee: strong value if used. KEY ASSUMPTION (unverified): the main Thai ticketing platforms allow an in-account transfer that shows as pending/received. My search could not confirm any official transfer feature; organisers also restrict transfer (Live Nation warned a Bangkok reseller in 2022; a 2025 Thai law-journal paper argues such clauses may be unfair - https://so08.tci-thaijo.org/index.php/MFULJ/article/view/4648). If transfer is not possible for most tickets, the idea collapses to a checklist.

**Revenue path (HYPOTHESIS).** Buyer pays 29-49 THB per deal room via our own PromptPay QR; optional 99 THB/month "serial buyer" plan. Sellers free. Later: organiser/fan-club sponsorship of "official-channel" education.

**Feasibility (React/Supabase, ~1.5 days).** Supabase table deals(id, event, step, seller_promptpay, amount, split), two-party link with realtime step updates, client-side PromptPay EMVCo QR generation, event seeded list, shareable evidence log page. Demo (2 min): open link as buyer on phone, simulate seller on second tab, watch QR #1 unlock then QR #2; show the "cannot be made safe" verdict on a screenshot-only offer.

**Uses AI?** No. Fully deterministic; no AI needed.

**Quick prior-art check.** One search for a Thai safe-resale/check-before-transfer app: none found in 1 search (only news about scams). Not verified: blacklist-style sites likely exist (from memory only, unverified); I did not find a payment-reveal-gating tool.

**Self-critique.** The whole idea hinges on ticket transferability that I could not confirm, and a determined scammer can fake the "pending transfer" screenshot in step 2, so the buyer must be told to check their own official account (user education, not enforcement).

---

## G2-B02 - Standby Window (flex-traveller reverse offers)
**Operator used:** Resource Recombination (domain 2)

**Problem.** Who: long-stay travellers/nomads/retirees in Chiang Mai-type towns (time-rich, price-sensitive, flexible any weekday) AND small operators (cooking classes, Muay Thai gyms, tours, massage/spa, coworking day-passes) with empty off-peak slots. Trigger: low-season and weekday slots go unsold; long-stayers cannot signal "I'm free any weekday morning for cheap". Current way fails: platforms (fixed-price, pick-a-slot) show a price per slot and ignore the traveller's flexibility; operators discount blindly or not at all.
Evidence:
- FACT (indicative, figures unsourced in article): Chiang Mai 2026 season weak, bookings down. https://www.chiangraitimes.com/news/chiang-mai/chiang-mai-tourism-crushed/
- FACT (earlier year, date unclear): occupancy fell to ~50% in a low season. https://thethaiger.com/hot-news/tourism/flooding-devastates-chiang-mai-tourism-occupancy-drops-to-50
- HYPOTHESIS: small operators have empty weekday slots and would accept a discount to fill them; no source found for class-level utilisation.

**Target user.** Long-stay travellers (nomads, retirees, solo backpackers, 2+ weeks in one town); supply side: independent operators with a PromptPay QR.

**Core mechanism.** Invert the booking direction. The traveller posts a *flex window* ("any weekday 9-12 next two weeks, I'd pay up to 400 THB, activity: Thai cooking"). Operators with an empty slot see a ranked feed of flex requests and click "I can fill Tuesday 10:00 at 350". Traveller accepts, then pays the operator's own PromptPay QR directly. Oversupplied time meets undersold capacity without a price list. Closest approach: Klook/KKday/WAUG fixed-price slot booking (found no standby feature), and restaurant time-slot discount apps. Difference: demand-side flexibility is the listed asset and the operator chooses to bid down; long-stay travellers (hundreds of hours free) are the only segment for whom this is a fit.

**Expected value + key assumption.** For traveller: 20-40% savings plus activities fitted to schedule; for operator: incremental revenue on a zero-marginal-cost seat. KEY ASSUMPTION: enough operators will check a feed daily (we need ~10 onboarded by hand through LINE OA before judging).

**Revenue path (HYPOTHESIS).** Operators pay 199-299 THB/month (own QR) or 20 THB per accepted fill; traveller free. Traveller-paid "priority window" later.

**Feasibility.** Supabase tables requests/offers/operators, simple feed, accept flow, operator PromptPay QR displayed on acceptance, seeded 6 operators + 1 traveller. Demo: post a window, 3 offers arrive (simulated by second tab), accept one, QR appears, confirmation card to add to calendar.

**Uses AI?** No. Without AI it is identical.

**Quick prior-art check.** One search: KKday and WAUG list Chiang Mai classes at fixed prices with app codes only; no standby/reverse-offer feature seen in 1 search. Not verified: similar "name your price" and restaurant time-slot discount apps (e.g. Eatigo) exist from memory only.

**Self-critique.** Two-sided cold start, with operators who are busy and not app-first; the savings story may be too small to matter, and operators may simply prefer to post a Facebook discount.

---

## G2-B03 - 30-Day Cliff Stay Planner
**Operator used:** Second-order Effects (domain 2)

**Problem.** Who: foreigners from the ~60 countries who used to get 60 days visa-free and plan 1-4 month stays. Trigger: visa-exempt stay cut to 30 days (cabinet May 2026, Royal Gazette 31 Aug 2026, effective 15 Sep 2026), extension of up to 30 more days at immigration discretion, DTV needing 500k baht funds. New pain created by the rule: which combination (exempt + extension + exit/re-entry with entry caps + DTV) fits MY nationality, MY desired days and MY budget, and what are the dated actions? Current way fails: blogs and agents give generic text; sources conflict on dates and details.
Evidence:
- FACT: 30-day cut effective 15 Sep 2026; Gazette 31 Aug 2026. https://www.khaosodenglish.com/politics/2026/09/01/thailand-reduces-visa-free-stay-from-60-to-30-days/
- FACT: sources conflict on details (extension, two entries/year cap); DTV: 180 days, THB500,000 funds for three months, THB10,000 fee. https://freakingnomads.com/news/thailand-officially-cuts-visa-free-stay-to-30-days/ and https://visasnews.com/en/thailand-30-day-visa-free-stay-can-be-extended-by-another-30-days/
- HYPOTHESIS: immigration extension offices become crowded as every exempt arrival now needs one by day ~25; no 2026 queue evidence found (only 2020 Bangkok queues: https://www.khaosodenglish.com/featured/2020/03/31/long-lines-continue-at-immigration-despite-extra-venue/).

**Target user.** Digital nomads, retirees, backpackers, snowbirds planning stays of 31-180 days; also Thai property/hostel owners wanting to tell guests.

**Core mechanism.** Backward planning, not information. User enters nationality, arrival date, wanted last-day and monthly budget; a rules engine (editable config of cited rules) enumerates legal sequences (exempt + extension; border exit and re-entry within entry caps; DTV with funds-seasoning start date; tourist visa), prices each (fees, funds to park, flights), flags rule-conflict where sources disagree, and outputs a dated timeline (extension window opens day X, funds must be in bank by date Y) as an .ics calendar plus an "office-day" pick, with aggregated anonymous crowd reports of wait time per immigration office (no individuals). Closest approach: visa blogs, embassy pages, agents. Difference: the output is a personal dated, costed action plan generated from constraints, and the rule set is a living, versioned dataset.

**Expected value + key assumption.** Saves a day of reading plus an overstay risk (500 baht/day, cap 20,000, possible re-entry ban per source above) and can avoid agent fees. KEY ASSUMPTION: we can keep rules accurate (few rules, one maintainer) and users trust a non-official planner; wrong advice has real harm so disclaimers and source links per rule are mandatory.

**Revenue path (HYPOTHESIS).** 149 THB one-off full plan with .ics, or free plan + paid "re-plan if rules change" 49 THB/mo; paid referral from licensed visa agents (agent pays per lead, traveller pays agent directly) and insurance affiliates. No LINE Notify (shut down 2025); use email/ICS.

**Feasibility.** Pure front end plus Supabase for rule versions and office reports; ~12 rules in JSON; plan generator is ~150 lines. Demo: pick UK passport, 75 days, see 3 ranked routes with cost and timeline, download .ics, add an office wait report.

**Uses AI?** No. The deterministic engine is the point; AI would only add error risk.

**Quick prior-art check.** One search for a visa planner/calculator: none found in 1 search (only news and blogs). Not verified: Thai visa agents and some free calculators may exist.

**Self-critique.** Rule details are still contested in current sources, legal-advice liability is real, and the market is time-boxed to the policy shock (though DTV and extensions will persist); an official Thai immigration site update could make it redundant.

---

## G2-B04 - Concert Exit Pool
**Operator used:** Mechanism Substitution (domain 1)

**Problem.** Who: fans leaving big venues (Rajamangala, Impact Arena, etc.), especially foreign tourists, at 22:00-01:00. Trigger: tens of thousands exit at once; on-demand dispatch (Grab/Bolt/taxi hail/tuk-tuk) means gouging or no cars. Current way fails: whoever is nearest a driver pays whatever is asked.
Evidence:
- FACT: Oct 2026 - tuk-tuk driver charged two foreign tourists 4,000 baht from Rajamangala to Sukhumvit Soi 4 after The Weeknd concert; police fined him. https://www.khaosodenglish.com/news/2026/10/14/tuk-tuk-driver-faces-backlash-over-4000-baht-fare-after-the-weeknd-concert/
- SPECULATION: fan pools of 3-4 per destination zone are feasible; no source found on typical egress demand per zone.

**Target user.** Concert-goers heading to the same zone (Sukhumvit, Silom, Ari, Don Mueang area) and foreign fans unfamiliar with fares.

**Core mechanism.** Substitute on-demand dispatch with *pre-committed pooling*. Before the show, fans enter venue + destination zone + earliest leave time. The app forms groups of 2-4, names a rendezvous point away from the main crowd, and computes each person's share from a metered-fare estimate. One member (the "caller") hails a metered taxi or Bolt/Grab; the others pay the caller their share by PromptPay QR peer-to-peer. The app dispatches nothing and touches no money. Closest approach: Grab/Bolt/inDrive on-demand and Facebook "share a ride" posts (none found for concert pooling in 1 search; Korea's Banban Taxi shares fares but is not in Thailand). Difference: demand is aggregated BEFORE the surge moment, price anchored to meter not to scarcity.

**Expected value + key assumption.** 4,000 baht gouge vs a ~300-450 baht metered ride split by 3; safer exit for solo travellers. KEY ASSUMPTION: >=3 fans per zone sign up pre-event (needs pre-sale promotion through fan-club pages); caller trust is acceptable (rating of the caller, share shown up-front).

**Revenue path (HYPOTHESIS).** 15 THB per rider via our own QR; organiser/venue sponsors pay for egress dispersal (promoters care about exits - unvalidated); Bolt/Grab referral link.

**Feasibility.** Supabase tables events/venues/zones/pools, matching on zone+time window, fare estimator from Thai metered-taxi rate formula (flagfall + per-km), client-side PromptPay QR per rider. Demo: pick a seeded concert, choose zone, join a pool of 3 simulated riders, see each share and QR, show a comparison line "tuk-tuk quote 4,000 vs pool 380".

**Uses AI?** No. Without AI it is identical.

**Quick prior-art check.** One search: no Bangkok concert-pooling app found in 1 search; Korea's Banban Taxi found (not Thai). Not verified: Grab shared-ride modes may exist from memory.

**Self-critique.** Strict cold start (a pool of one is useless), strangers sharing a cab at midnight raise safety/gender-split concerns, and most fans can simply take BTS/MRT or Bolt, so the real addressable group (foreigners at a few mega events) may be small.
