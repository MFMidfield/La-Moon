# Gen-2 Track A: Internal Critique

**Internal Critique, not independent validation.** The critic is the same model family as the generator. Date: 2026-10-22.
Method: Targeted Scan, about 25 WebSearch/WebFetch calls in total (about 5 per card). I read only the Track A cards, `raw/G-legal-verification.md` and `raw/K-gen2-everyday-trustanchors.md`.
Labels: **FACT** means I opened the page. **(snippet)** means the claim comes from a search-result summary only and is unverified. **UNVERIFIED** means I looked and could not confirm it.
The critic attacks ideas and does not rewrite them.

## Verdict summary

| Card | Verdict | Novelty confidence | Main reason |
|---|---|---|---|
| G2-A01 Callback Confirm | **HOLD** (becomes REJECT if the registry shows no contact) | Medium | The "registry contact" anchor is probably not exposed, and the fallback has no way to verify control of a contact. |
| G2-A02 Hedge Booking | **REJECT** | Low | The hedge does not protect the costly loss (the flight), and commission is structurally zero when the hedge works. |
| G2-A03 Field-Trip Pipeline | **HOLD** | Low-Med | There is prior art and the licence question is unresolved. No institutional-buyer evidence exists. |
| G2-A04 Desk Guardian | **HOLD** (highest risk of the five) | Medium | Liability, night-time staffing, and a problem frequency the card itself calls unproven. |
| G2-A05 Meter-Plus Card | **REJECT** | Low | No evidence that a tip changes behaviour, the revenue path is admitted weak, and the official QR/complaint channel already exists. |

SURVIVE: none. Each card still carries an unfalsified key assumption.

---

## G2-A01: Callback Confirm

**Targeted Scan findings**
- **Does the DOT licence search expose a contact phone or email?** UNVERIFIED, and probably not.
  - An opened Bangkok Biznews how-to describes the search as a box taking company name or licence number. A match shows status "ปกติ" (normal). The article says nothing about address, phone or email (FACT that it is silent).
  - The dot.go.th home page fetch returned only a splash page, so I could not inspect the search itself.
  - data.go.th holds only aggregate counts of licensed tour businesses by district, plus guide statistics (snippet). No per-company contact dataset turned up.
  - The Thai DOT hotline 02-401-1111 is the official "verify the licence" channel (FACT per article; snippet on the Thairath page).
- **Does impersonation of licensed tour operators occur?**
  - I found no Thai report of a fake page impersonating a *licensed tour operator*. The Thai Verify results were hotel and resort cases (a Koh Si Chang resort clone, a Krabi hotel).
  - In the Koh Si Chang case, the real resort said the phone and email on the fake page were identical to the real ones. Only the payment account and page name differed (snippet).
  - Most Thai tour-fraud reporting concerns *unlicensed* "ทัวร์เถื่อน" operators, such as the Thai PBS arrest in raw G. A callback to a registry contact cannot help when no licensed entity exists.
- **Existing "verify via official contact" practice:**
  - The advice to call a number found independently is standard consumer guidance.
  - B2B callback verification is a mature discipline (Trustpair, JPMorgan, state auditor forms). Its own sources say the number must come from your own records or the registry, "never from the request".
  - The same sources warn that fraudsters call first to pre-empt the callback, and that manual callback does not scale.
  - The DOT hotline already acts as a free callback line to the regulator, though not to the operator.

**Mechanism attack**
1. If the DOT record gives no contact, the card's fallback is an "operator's pre-registered contact verified once via the registry". But the registry cannot verify who controls a contact. Anyone can sign up to the app as "operator X" with a licence number copied from the public search, which is exactly the "entity exists vs this person is that entity" gap the card claims to close. This fails the card's own RF-09 test unless there is a manual KYC step, and a 1-dev team cannot offer one at scale.
2. Squatting: a scammer registers first for a real licence number, receives the confirmations, and clicks "confirm".
3. "Confirmed by registered contact" proves nothing unless the confirmation message carries the **payee account and amount**. The card does not say it does. The real operator may confirm "yes, we have a booking for you" while the money goes to the scammer's account.
4. A traveller already holds an equivalent free path: the DOT licence check, then calling the number on the operator's own website or Google listing. Chat-commerce friction (the traveller must leave the chat, use a new app, and wait) is the same cost.
5. Coverage is narrow: licensed tour operators only. Homestays, hotels, tickets and unlicensed tours are all out of scope (raw K and G).

**Novelty: UI/localisation only?** Partly. The mechanism (out-of-band callback) is well-known B2B practice. The only new element is a two-sided inbox for consumer-to-operator booking confirmation, and no such Thai consumer product was found (negative, not proof).

**Hidden costs, cold start, distribution**
- Operators are the paying side, but they are only valuable once travellers use the app. Travellers only discover it if they already doubt a chat partner who is impersonating that operator. Both sides start at zero.
- Operators have to answer within minutes to keep pace with chat commerce. This is untested.
- The Thai tour-operator population sits in the thousands (snippet: 1,962 inspected in H1 2026). Onboarding even one operator is a sales call.

**Privacy, security, abuse, legal**
- Booking details and traveller identifiers sent to third parties raise PDPA exposure.
- The app can be used to harass a named operator with spam "confirmation" requests.
- A "confirmed" badge that a fraud later exploits creates reputational and legal liability for the team.

**Stakeholder harm:** a false sense of security for travellers; operators bear spam and fraud blame.

**Counter-evidence:** In the one close case found (Koh Si Chang), the phone and email were real. Calling the page's own number would have reached the real owner and exposed the fraud, so a standard phone call already works without the app.

**Top 3 failure reasons**
1. The registry contact is probably not public, so the anchor collapses to operator self-registration, which cannot be verified.
2. Impersonation of licensed operators is not shown to be a frequent Thai fraud type.
3. The paying side has no demand until the other side exists, and operators' willingness to pay is unvalidated.

**Closest alternative**
- DOT licence check plus hotline: https://www.dot.go.th (hotline 02-401-1111; per https://www.bangkokbiznews.com/lifestyle/travel/1060555).
- Callback verification practice: https://trustpair.com/gb/?p=23762

**Mechanism Differentiation:** only the consumer-facing, per-booking automation of an old B2B control. Whether this is different "in kind" depends on a registry contact that is not shown to exist.

**Fastest falsifying experiment (under 1 day)**
1. Search 10 operators on the DOT licence search and record every field returned. If no phone or email appears, the card's key assumption fails and the verdict becomes REJECT.
2. Count Thai reports (Thai PBS Verify, Pantip, police statements) over 12 months of fake pages that impersonated a *DOT-licensed tour operator*. Fewer than 5 means the problem is unproven.

Prior-art Status: Targeted Scan. Novelty Confidence: Medium.

---

## G2-A02: Hedge Booking

**Targeted Scan findings**
- **Connection-protection products exist.**
  - Kiwi.com Guarantee is an optional add-on for self-transfer trips that fills the gap carriers leave. Compensation is typically Kiwi credit or an assisted refund. One review reports pricing around 25% of the ticket (snippet).
  - Hopper/HTS sells a "Disruption Guarantee" (missed connection plus delay). A Thai platform, Gother, launched it as "Flight Disruption Care" (snippet, Spanish-language press release). Its Premium Disruption Assistance covers rebooking on any airline up to $2,000 (snippet).
  - These cover flights. For ferries, I found no dedicated protect-your-connection product in the scan.
  - For ferry cancellations, Ferryhopper and Ferryscanner describe full refund or rebooking at no extra cost when the operator cancels (snippet). 12Go says it is a booking intermediary and the operator decides the remedy (snippet). Bookaway reviews are mixed (snippet).
- **Frequency evidence is weak.** The scan found episodic events (Gulf storm closures such as Jan 2019 and Aug 2020; Surat Thani to Koh Tao halts) but **no annual cancellation statistic**. A forum traveller loses about a day per missed sailing. The ferry-to-flight frequency is UNVERIFIED.
- **Free-cancellation hedging is common advice** (book a refundable night at the pier town, buffer day before a flight). I found no document that it is a specific product; it is a travel-hacker habit.

**Mechanism attack**
1. **The hedge does not protect the costly loss.** If the ferry is cancelled, the money at stake is the missed flight and rebooking. A refundable hotel night near the pier does not fix that. It only saves the scramble for a room.
2. **The simpler dominant fix already exists.** Buffer a day before the flight, or book a flexible onward ticket. That is common guidance and costs no app.
3. **Revenue contradiction.**
   - The card's own description: if the ferry runs, the traveller cancels at zero cost. In that state, commission is zero. Affiliate programmes (the card says Agoda pays after stay) pay when the stay happens.
   - So the app earns only in the rare bad state, and earns nothing in the frequent good state. The app's income therefore depends on traveller misfortune, which also means few paying events.
4. **Timing.** Sailing cancellations are typically announced the evening before or the same morning (snippet). Last-minute free-cancel rooms near piers may be available outside peak, which weakens the need to reserve in advance. Peak-season inventory shortage is a card assumption that is UNVERIFIED.

**Novelty: UI/localisation only?** Yes, largely. It is a checklist plus deep links around an existing traveller habit, with a curated risk table.

**Hidden costs, cold start, distribution**
- The curated route-and-season risk table needs ongoing manual upkeep from operator notices. A student team cannot keep it fresh.
- Distribution: reaching island-hoppers before they book. SEO competes with Ferryhopper/12Go/OTAs and blogs.

**Privacy, security, abuse, legal**
- Low privacy risk.
- Affiliate terms: repeated reserve-then-cancel flows may breach OTA affiliate rules or be flagged as low-quality traffic (HYPOTHESIS; terms not read).

**Stakeholder harm:** Hotels carry blocked inventory and cancellation churn. Travellers who hold a hedge without understanding it may assume they are "covered" for the flight and not buffer.

**Counter-evidence:** Operators and OTAs already refund or rebook the sailing at no extra cost on operator cancellation. The residual uncovered loss is the onward flight, which the hedge does not cover.

**Top 3 failure reasons**
1. The hedge covers lodging, not the missed flight, which is the dominant loss.
2. Revenue arrives only when the user is unlucky and is zero in the success path.
3. A "buffer day" rule achieves the same outcome at no cost and is already widespread advice.

**Closest alternative**
- Kiwi.com Guarantee: https://www.kiwi.com/en/help/self-transfer-and-layovers-151/article/connections-covered-by-the-carriers-134/
- Hopper/HTS missed-connection guarantee: https://hts.hopper.com/legal/hts-connect-missed-connection-guarantee-flair-customers
- Ferryhopper weather-cancellation help: https://help.ferryhopper.com/en/articles/8925565-what-happens-if-my-ferry-is-canceled-due-to-weather-conditions

**Mechanism Differentiation:** "Option bought for free" instead of an insurance product is a genuine framing difference, but it is generic travel-hacker advice, and the structure leaves the flight loss uncovered.

**Fastest falsifying experiment (about 2 hours)**
1. Read the Agoda affiliate terms on commission for cancelled bookings. If cancelled bookings pay nothing, the success path earns zero.
2. Check refundable-room availability near Donsak/Chumphon piers for a past stormy date (for example 4 Jan 2019, per the Thai PBS snippet) or the next forecast storm night, to test the "rooms sell out" assumption.

Prior-art Status: Targeted Scan. Novelty Confidence: Low.

---

## G2-A03: Field-Trip Pipeline

**Targeted Scan findings**
- **Existing players serving institutional or CSR demand:**
  - **Local Alike**: Bangkok social enterprise running community-based tourism. By 2015 it had 660 bookings including corporate clients with CSR plans (snippet, TTG Asia). A 2019 Okayama University report describes study visits (snippet). Current school-trip product: UNVERIFIED.
  - **CBT-I** (Chiang Mai): a 2014 interview says CBT communities have "great potential" to host school and university students (snippet). No operating school-booking product was confirmed.
  - **DASTA**: has a "CBT Thailand" web application and "Smart DASTA" for community products (snippet). No school-trip booking function was found. A student team's "WithinThai" one-click booking prototype won a 30,000 THB DASTA pitch in 2021 (snippet).
  - School-run models exist, for example Traidhos (Chiang Mai) and Ban Nawanoi School Stay in Loei (snippets).
  - TourKrub is an outbound package marketplace, not schools (snippet).
- **Licence question:** my search could not resolve whether a platform that packages and sells community trips needs a DOT licence. No official text turned up that exempts non-profit or school activity (snippet). The raw G file states unlicensed tour operations are prosecuted, including via Facebook adverts. Section 80 carries up to 2 years and/or 500,000 THB (FACT per Thai PBS in raw G). Whether a "request routing" tool is itself a tour business is **UNKNOWN**.
- **Thai school field-trip procurement rules:** UNVERIFIED. I did not find them in this scan.

**Mechanism attack**
1. **The card contradicts itself on the licence.** It says to package itinerary + per-head cost, which is the definition-risk language for a tour business, while claiming to operate "as a listing/request tool". If it falls back on a licensed partner, that partner is the Local Alike type of operator, and the app is only a lead-gen widget for them.
2. **Demand side is asserted, not shown.** The 45.3% inactive figure shows supply idle. It does not show that institutions want to buy from those communities. Inactive communities may be inactive for reasons such as distance, capacity, standards or lack of safety readiness for children (HYPOTHESIS, not tested). Institutions also buy through teachers or HR staff who already use known operators.
3. **"No money custody, direct payment to the community account."** Consistent with RF-10 but leaves the revenue path with nothing to take a cut from. The card says "uncertain".
4. **Seeded demo is not a signal.** Two seeded communities show UI feasibility, not that a teacher will approve a trip.

**Novelty: UI/localisation only?** Mostly. The approval-ready PDF pack is the only differentiator against Local Alike, CBT-I and the DASTA app, which are not shown to lack it (I did not check their sites).

**Hidden costs, cold start, distribution**
- Two-sided cold start with institutional sales cycles tied to school terms and budgets. A 1.5-day build cannot generate any institutional customer.
- Content upkeep per community: itineraries, safety information, prices.
- Reaching teachers needs school-by-school outreach or ministry channels.

**Privacy, security, abuse, legal**
- Trips for minors: duty of care, parental consent, insurance and transport standards are likely required (HYPOTHESIS, not researched).
- Student data (names, health conditions) enters the app; PDPA for children's data.
- Possible violation of the Tour Business Act if the app is treated as the arranger.

**Stakeholder harm:** Communities may over-invest in capacity for programmes that never arrive. Visiting school groups can strain households without a revenue split policy.

**Counter-evidence:** Local Alike has operated since at least 2015 with corporate CSR clients (snippet), so institutional demand for community trips exists but has an incumbent. The 45.3% inactive figure also says the communities lack customers *despite* DOT and CBT directories, which suggests the problem is distribution, not packaging.

**Top 3 failure reasons**
1. The Tour Business Act licence question is unresolved and sits directly on the packaged-trip mechanism.
2. Institutional demand is an untested assumption, and the sales cycle is slow for a student team.
3. Existing incumbents (Local Alike, CBT-I, DASTA) already target the same CSR and study-group niche.

**Closest alternative**
- Local Alike: https://fathomaway.com/giving-back-local-alike-thailand/ (snippet-level description)
- DASTA CBT Thailand digital tools: https://www.dasta.or.th/en/article/422
- WithinThai (student prototype): https://mahidol.ac.th/2021/muic-withinthaiproject

**Mechanism Differentiation:** the audience framing (institutions as the paying buyer, community paid directly, approval-pack output) is new relative to what was found. The underlying packaged community-trip mechanism is not.

**Fastest falsifying experiment (under 1 day, calls and messages)**
1. Call the DOT hotline (02-401-1111) or the licensing office with the exact scenario: "a platform lists community programmes with itinerary and per-head price and forwards requests to community leaders; does it need a tour-business licence?"
2. Ask 10 school field-trip coordinators or CSR officers: how do you book today, do you require a licensed operator, would you pay anything for an approval pack? Fewer than 3 positives means the demand assumption fails.

Prior-art Status: Targeted Scan. Novelty Confidence: Low-Med.

---

## G2-A04: Desk Guardian

**Targeted Scan findings**
- **Safety apps.**
  - bSafe has a "Guardian Alert" that notifies contacts if you do not check in within a set time (snippet). So the **timer-and-alert mechanic is prior art**.
  - Noonlight dispatchers are alerted if you do not cancel with a PIN; AAA says it works only in the US (snippet).
  - Life360 is family location sharing and is not an emergency dispatcher (snippet).
  - Grab "share my ride": my searches returned nothing on it, so I make no claim.
- **Hostel-side safety service.** No hostel app or Hostelworld feature that alerts staff when a guest is overdue was found. Hostelworld offers women-only dorm filters and social chat; its advice is to pick hostels with 24/7 reception (snippet). That is a negative finding after limited search, so it is not proof of absence.
- **Staffing reality.** One guide describes a hostel with no staff on site at night (TripProf snippet). The moment a check-back is missed is most often late at night.
- **Thai-law liability (snippet only).**
  - Civil and Commercial Code s.420 is liability for wilful or negligent wrongful acts. S.425 makes an employer jointly liable for an employee's wrongful act done "in the course of employment", without needing employer fault (snippet from a thailawonline-type page and a Legardy Q&A).
  - If staff undertake a safety role and fail to act, a negligence claim against the hostel (and arguably the app) is plausible. I found no Thai case law on this exact scenario (UNVERIFIED).

**Mechanism attack**
1. **The new element is only the responder**, not the detection. A missed check-back goes to a desk worker rather than a friend. A distant friend can already call the guest and the local police, and the app alert does not give the desk any capability beyond a phone.
2. **Responder is least available when needed.** Night desks are thinly staffed or unstaffed, so this reproduces the "no one local" gap it set out to solve.
3. **Alert-fatigue and false alarms.** Every late return generates a call to staff. Staff will quickly mute it.
4. **Detection delay.** A "back by" deadline gives the scammer or aggressor hours of head start; the system is reactive.
5. **Problem frequency is unproven** (the card admits no official statistic). Safety-critical products with no incident data are hard to price.

**Novelty: UI/localisation only?** Mostly mechanism-level recombination: bSafe timer plus hostel desk as contact. The "desk as guardian" is not found in the scan but is unproven by absence.

**Hidden costs, cold start, distribution**
- Hostels must adopt a desk dashboard, train staff, and accept responsibility. For a 1-dev team, each hostel is a sales call.
- Guests must enrol per trip, a high-friction habit with no clear trigger.
- Reliability burden: Supabase cron plus push or LINE notifications must never fail silently. Safety-critical uptime on a free tier is hard to guarantee.

**Privacy, security, abuse, legal**
- The log holds a solo traveller's whereabouts, companion identity, plate and photo. PDPA consent and breach exposure. This is a data set that attracts stalkers if a desk employee misuses it.
- A "Guardian-certified" badge is a safety promise to consumers. If it fails, the team faces misrepresentation and negligence claims.
- Staff duty is created by the product, with unclear insurance cover.

**Stakeholder harm:** Desk staff receive an unpaid, unscoped duty. Guests may feel falsely protected and take more risk. Hostels may be exposed to blame after an incident.

**Counter-evidence:** Hostel guides already tell solo travellers to rely on 24/7 reception (Hostelworld). Staff at such properties informally act as check-in contacts at no cost, and no formal duty is created.

**Top 3 failure reasons**
1. Liability and misrepresentation risk from a safety promise that a student team cannot guarantee.
2. The responder (desk staff) is often absent at the critical hours, and the delay is long.
3. Frequency and willingness to pay are unproven; hostels have thin margins.

**Closest alternative**
- bSafe and similar safety apps (ranking page): https://impressivemagazine.com/best-personal-safety-apps-2026/
- Hostelworld solo-female guidance: https://www.hostelworld.com/blog/female-solo-travel-in-hostels/

**Mechanism Differentiation:** the responder is local property staff instead of remote contacts or a call centre. Detection mechanics are identical to bSafe's Guardian Alert (snippet).

**Fastest falsifying experiment (about 1 day)**
Message or visit 10 hostels in Bangkok and Chiang Mai with one question: "Would you accept being the alert contact for a guest who misses a return time, including at night, and pay 300 THB a month for a badge?" Record whether each has staff 24/7. Fewer than 3 yes answers, or fewer than 3 hostels with night staff, falsifies the key assumption.

Prior-art Status: Targeted Scan. Novelty Confidence: Medium.

---

## G2-A05: Meter-Plus Card

**Targeted Scan findings**
- **Is tipping legal and normal in Bangkok taxis?** The search found no Thai law on tipping and none requiring a tip (snippet). Forum comments say drivers do not expect tips (Fodor's thread, 2006), and that rounding up is common (snippet). So tipping is not illegal, but it is not an instrument for enforcement either.
- **Does a tip change meter-refusal behaviour?** Only anecdotes, and they conflict (snippets).
  - A Thaiger forum poster says tip the honest driver and explain why, which rewards the *driver who used the meter*.
  - A Fodor's traveller who paid a quote at 4x meter and was "very generous" with the tip describes rewarding overcharging.
  - Nothing found shows that a *pre-committed* tip offer converts a refusing driver. The card's key assumption is untested.
- **What drives complaints?** DLT figures (Oct 2023 to Feb 2024, snippet): refusing to pick up passengers 2,291 (top), rude behaviour 1,872, reckless driving 1,285, not using the meter 1,054. A TDRI piece says refusals were 40% of complaints in 2018 (snippet). Refusal to serve is a bigger complaint category than meter avoidance, and a meter tip does not fix a destination refusal.
- **Existing official remedies.**
  - Taxi Dee Prom QR system in 2026: purple, blue and red stickers linked to the DLT GPS Notice app. Drivers who fail to verify face a 1,000 baht fine. 8,132 taxis had stickers by Feb 2026; evaluation after six months (snippet, asianews/Thairath).
  - DLT hotline 1584 and dlt.go.th/1584 for complaints. A flat fare of 760 baht led to a 2,000 baht fine and a one-month licence suspension in one reported case (undated snippet).
  - Grab/Bolt set upfront fares (snippet).
- **"Show this to the taxi driver" cards.** I found travel-blog advice to say "Meter please" and a phonetic Thai phrase, but **no dedicated printable Thai-script card or app** in this scan (snippet). The absence is plausible but weak. Such a card is trivially copyable.

**Mechanism attack**
1. **Behaviour change is unevidenced.** Drivers who refuse the meter at hotspots do so because the tourist-quoted price beats the meter; a modest fixed tip, added at the end, is a worse offer than the flat fare. The card needs the tip to exceed the driver's expected gain from flat-fare quoting, which for tourist fares may be many times the meter.
2. **Payment is deferred and non-binding.** "I add +X at the end" is a promise a driver cannot enforce, and drivers have little reason to trust it from a stranger.
3. **Rewarding illegal conduct.** Meter refusal is a punishable offence; a tip for compliance with the law turns the legal baseline into a bribe. Passengers who comply set a precedent that raises price expectations for the next tourist.
4. **The official channels now exist.** The red QR code and 1584 hotline are free, enforceable and backed by fines.
5. **The "refusal map"** needs a large amount of crowd data from a cold start; the DLT already holds complaint data.

**Novelty: UI/localisation only?** Yes. A bilingual card plus a tip suggestion, with a log.

**Hidden costs, cold start, distribution**
- Distribution reaches tourists through hotels or SEO against crowded "Bangkok taxi tips" content.
- No revenue path (the card says "weak"). The team's constraint requires a clear money-making model, which this card does not supply.

**Privacy, security, abuse, legal**
- Logging plates or drivers is personal data; naming drivers publicly risks defamation under s.326-328 (raw G).
- Encouraging a payment above the legal fare could look like encouraging a bribe or fare gouging in a complaint context (HYPOTHESIS).

**Stakeholder harm:** Honest drivers lose out relative to those who exploit the card; tourists pay more for what is already their right. The tip could normalise tipping for legal compliance across the market.

**Counter-evidence:** Forum posters give the opposite advice, which is to refuse, walk away and hail a different taxi, or use Grab (snippets).

**Top 3 failure reasons**
1. No evidence that a pre-committed tip changes meter behaviour, and the economics versus a tourist flat fare suggest it will not.
2. It rewards illegal behaviour while a free, enforceable official channel (QR plus 1584) now exists.
3. No revenue path, which breaches the explicit money-making constraint.

**Closest alternative**
- DLT taxi QR system: https://asianews.network/thailands-taxi-qr-codes-go-live-track-trips-report-issues-estimate-fares/
- Forum advice on tipping and meter: https://talk.thethaiger.com/topic/17513-news-forum-man-complains-after-23-taxi-drivers-in-bangkok-refuse-to-serve-him

**Mechanism Differentiation:** low. The only distinct element is the pre-committed tip; its effect is untested.

**Fastest falsifying experiment (half a day)**
Take 20 street-hailed rides at hotspots (hotel fronts, malls): 10 with the card shown before boarding and 10 with only "meter please". Record the meter-acceptance rate. If the difference is under about 20 percentage points, the mechanism is falsified.

Prior-art Status: Targeted Scan. Novelty Confidence: Low.

---

## Cross-card observations
- The three cards with the strongest apparent logic (A01, A03, A04) all depend on a **gate that is not verified**: registry contact exposure, the tour licence, and staff duty or night staffing. Each can be falsified in under a day by calls.
- A02 and A05 fail on revenue structure, which is an explicit project constraint.
- Several cards propose "free for travellers, B2B for suppliers" without evidence of supplier willingness to pay (A01, A03, A04).
- No card was found to be an exact duplicate of an existing Thai product, but A02, A03 and A05 each sit close to existing products or standard advice.

*This is not legal advice. Thai-law points (Tour Business Act scope, Civil and Commercial Code ss.420/425, PDPA) are snippet-level and need a lawyer or the regulator.*
