# Internal Critique — not independent validation

Critic: same model family as the generator. Date: 2026-10-22. Scope: Track B cards G1-B01 to G1-B04.
Prior-art status for all cards: **Targeted Scan** (about 5 searches or fetches per card, 20 calls in total). Not finding a competitor is not proof that none exists.
Labels: (fetched) = page opened. (snippet) = search-result text only, not opened. (vendor) = vendor's own marketing claim, unverified. (own knowledge) = from my background knowledge, not checked in this session.

Summary table

| Card | Verdict | Closest alternative | Mechanism differentiation | Novelty confidence |
|---|---|---|---|---|
| G1-B01 Handover Tariff | HOLD | Record360 | Medium | Medium |
| G1-B02 Tranche Unlock | HOLD | Reveald (and Fastwork escrow) | Low | Low |
| G1-B03 Next Payer | REJECT | WhoPays | Low | Low (the "next payer" feature already exists) |
| G1-B04 Satang-ID Pay | HOLD (weak) | SlipOK / EasySlip, plus bank alerts | Low | Low |

---

## G1-B01 Handover Tariff — HOLD

**Closest alternative.** Record360, https://record360.com/uk/?p=31891 (snippet, vendor pages). The vendor describes guided photo and video capture of every angle at check-out and check-in. It describes customer sign-off with signed copies emailed to both parties, time-stamped records, touch notation of damage, and offline use. Its figures (75% fewer disputes, up to 100% higher damage-claim recovery) are vendor claims and unverified. The 2015 Auto Rental News article (snippet) shows the category is over 10 years old. I did not find a Thai tourist-facing rental check-in app (a negative result from one search only).

**Thai context that already exists.**
- Pattaya Mail, 16 Jan 2013 (fetched): a city committee approved mandatory insurance for jet skis. The minimums are 50,000 THB for craft damage and 25,000 THB for third-party property damage. Insured craft must display a sticker visible to renters, and uninsured operators are barred from the beaches. The article says nothing about price lists or damage-assessment procedure. This shows a "sticker for compliant operators" is an old idea, and also that earlier official schemes did not end the problem.
- Pattaya Mail and Bangkok Post items, undated (snippet): proposals for mandatory operator registration, a negotiator team for disputes, and expert inspection before damages are set. One deputy mayor reportedly called it a civil matter.
- Khaosod English, 16 Jul 2026 (snippet): Phuket fined 23 operators the maximum 10,000 THB for operating without valid boat licences. Enforcement is active, but the item concerns licensing and not rental damage disputes.

**Mechanism attack.**
1. The honest/dishonest split is the central problem. The card admits dishonest operators will not adopt it. Honest shops are the ones that rarely run the "pointing at scratches" scam, so the tool serves the group with the least need. A tool-using operator who is dishonest can still adopt it and use the "Tariff-verified" sticker as a credibility shield. A sticker is a trust signal that a bad operator can buy for 199 THB a month. This is an abuse path, and it harms the tourists the sticker is meant to protect.
2. The tariff fixes the price of a damage type but not whether the damage is real or caused by the renter. Press coverage says the claimed damage is often on the underside of the craft, obscured by water (snippet). A zone-by-zone photo walk-around probably will not capture it. A hash and timestamp prove "when", not "this craft" or "that spot".
3. Step 4 sends disputes to Tourist Police 1155. One snippet reports that a Tourist Police commander barred officers from joining such disputes, and a deputy mayor called it civil. So the escalation path may not exist in practice (snippet, undated).
4. Passport-as-collateral is the real lever in many cases, and the app does not touch it.
5. The tourist-side cold start: a tourist on a beach who has already walked up to a stall will not download or open a "find a sticker shop" tool beforehand. The card concedes the discovery problem and offers no channel.

**Novelty.** Capture, counter-sign and time-stamp is a feature of existing rental inspection apps (Record360). The new part is the pre-agreed damage price table (the insurance "schedule of benefits"). That is a real, though small, mechanism change. The tariff is also the weakest piece legally and commercially. A fixed fee table is in effect a liquidated-damages or penalty clause, and a court may reduce an excessive one, and consumer-protection rules on unfair contract terms could apply (HYPOTHESIS, own knowledge, not verified).

**Hidden costs and behaviour.** Shops must fill in and maintain a tariff. Many beach shops in Pattaya and Phuket are small and do not use apps. Shops get the lowest benefit from a low-value tariff, because a high tariff scares tourists and a low one loses margin. The card's revenue (199 THB a month or 5 THB per rental) is unvalidated.

**Privacy and legal (using G-legal-verification.md).**
- A two-party signed, timestamped condition report is low risk and mirrors the regulator's own model for residential leases (FACT in the legal file). That model is for leases, not tourist rentals, so the analogy is partial.
- PromptPay QR from renter to shop with no money held is probably outside the PSA licence (HYPOTHESIS in the legal file). Label the payment as self-reported.
- Photos may capture people and passports, so guide the capture and keep the record private to the two parties.

**Stakeholder harm.** A shop could exploit the scheme by listing inflated tariffs. A tourist could be pressured to counter-sign a record at pickup and later find the shop disputes the zone diagram. Tourists with no data connection or no shared language will do worse.

**Counter-evidence the problem is small or solved.** The problem is real and recurring (Pattaya Mail, 13 Jul 2026, cited in the card). Official countermeasures have existed for over a decade, and general advice is already to photograph the craft first. That the scam persists suggests the bottleneck is enforcement and operator behaviour, not the lack of a photo app.

**Top 3 failure reasons.**
1. The target dishonest operators refuse, and the sticker becomes a trust signal they can buy.
2. Underside or invisible damage and passport leverage are not addressed by the mechanism.
3. No tourist discovery channel, so the sticker earns nothing.

**Fastest falsifying experiment.** Visit or phone 10 rental shops (scooter and jet ski) in one beach area and ask whether they would counter-sign a pre-rental condition record and publish a damage price table. Separately, show 10 tourists a mock sticker and ask whether it changes their choice of shop. Fewer than 3 shops in 10 saying yes, or no tourists changing choice, kills it. This is a few hours' work and needs no code.

---

## G1-B02 Tranche Unlock — HOLD

**Closest alternatives.**
- Reveald, https://www.producthunt.com/products/reveald (fetched). A client portal for freelance designers. Clients see watermarked previews until payment, and full files are released when a Stripe payment goes through. It also has revision limits, invoices, and change requests that need approval and pricing. The page lists the launch as 2026, probably 22 Oct 2026. It has a free tier and a Pro tier, and a very small following (5 followers on the listing, snippet). This is nearly the same mechanism as the card's step 3, with automatic payment confirmation, which the card lacks.
- Fastwork, https://apps.apple.com/app/id1154830520 (snippet, vendor's App Store text). It describes holding client funds in escrow until the client is satisfied, and a money-back guarantee. I could not confirm how Fastwork handles milestones or disputes (Thai-language search returned only general articles). Fastwork is the incumbent Thai default for clients who want protection.
- Generic escrow services (Escrow.com milestones, snippet) are also in this space.

**Mechanism attack.**
1. Payment confirmation is a freelancer tap on "received". This is the weakest link. The freelancer can lie in either direction, and the app has no way to check. Reveald-style tools verify payment through the payment processor. Thai slip APIs could verify, but this card does not use them.
2. Who does the mechanism protect? The freelancer's exposure is capped. The client's exposure is not. A client who prepays 30% for a watermarked preview from an unknown freelancer is exposed to the same exit scam. Clients already have Fastwork escrow, so a client asked to use an individual freelancer's link has little reason to accept it. The card admits this.
3. The "deemed accepted after N days" clause only helps if it is enforceable. The Legardy article (fetched, per the card) says silence is not acceptance in Thai practice. A clicked "agree" may help evidence the clause, but whether a court would honour deemed acceptance is untested (HYPOTHESIS). The app cannot enforce it. It only creates a record.
4. The first tranche paid before any delivery is already the standard cure for client ghosting, and needs no app: a freelancer can ask for a deposit by PromptPay. Watermarking previews is already an ordinary practice among designers (own knowledge). The card's value over a LINE message plus PromptPay is the structure and the evidence pack.

**Novelty.** Low. The gradual-release idea is old (fair-exchange protocols, construction progress billing), and the product form (watermarked preview, unlock on payment, tranches) already exists in Reveald and similar portals. What remains different is the Thai PromptPay P2P payment, the exposure-cap schedule suggestion, and the deemed-acceptance clock. Those are feature-sized. The card's own self-critique says "a delivery portal with sequenced invoices".

**Hidden costs and behaviour.** Freelancers must convince each client to use a link. Clients must tap "agree" and pay in tranches. Watermarking and previews differ by file type. Video and translation work are hard to preview meaningfully without giving the product away. The evidence pack has no proven value in Thai small-claims practice.

**Privacy and legal.** Low PDPA risk if files are private and signed URLs are used. The PSA position is fine if no money is held. The "unlock after received" logic means the app's own label could be read as "confirmed", so use "self-reported". An evidence pack presented as legal proof could mislead users. A freelancer-controlled "received" button also lets a bad freelancer or client claim the other party broke the terms.

**Stakeholder harm.** Clients bear the prepayment risk of a bad freelancer. An unsophisticated client may click "agree" to a deemed-acceptance term they do not understand, which could be an unfair-term issue (HYPOTHESIS, own knowledge).

**Counter-evidence the problem is small or solved.** The Legardy article confirms the disputes exist, but no Thai prevalence figure was found. Fastwork exists for the clients who want protection, and individual freelancers already use deposits.

**Top 3 failure reasons.**
1. Very close prior art (Reveald), which also verifies payment automatically, and Fastwork's escrow for protection.
2. Unverifiable "received" tap makes the trust model one-sided, and clients get no protection.
3. Deemed acceptance has uncertain legal force, and the idea is feature-sized for judges.

**Fastest falsifying experiment.** Ask 8 Thai freelancers who have been unpaid in the past year whether a deposit plus watermarked preview would have prevented it, and what stopped them doing that already. Also show 8 clients a mock "tranche link" and ask whether they would pay a stranger's first tranche through it instead of using Fastwork. If most freelancers say a plain deposit would have worked, or most clients say they would refuse, kill it. Half a day.

---

## G1-B03 Next Payer — REJECT

**Closest alternative.** WhoPays: Split Bills & Trips, https://apps.apple.com/app/whopays-split-bills-trips/id6754236656 (fetched). It has a "Next payer banner" that "always shows who should pay next", it aims to keep balances roughly even, and it is free. Its languages are English, German, Portuguese and Spanish, with no Thai and no PromptPay. It has too few ratings to show a score, so it is small.

Also:
- Settle Up (snippet): shows who should pay next to keep the balance. It has a free ad-supported tier, and paid features include reminders.
- Splitwise (snippet, listing text): says it can keep track of who should pay next.
- Split.rest (snippet): a roulette to decide whose turn it is.
- Whose Turn To Pay (snippet): for recurring lunches.

**Mechanism attack.** The card calls its approach "prescriptive, unlike Splitwise". That is not true on the evidence. Three or more existing apps advertise a "who pays next" feature. The only remaining differences are PromptPay residual QR, Thai language, and weights for kids or people who skip meals. Beyond duplication, the behaviour assumption is weak: the person holding the card or cash usually pays at the till, and a group will not wait for an app to name the payer, particularly for fuel, tolls and parking where the driver pays. Hotel and car costs are pre-paid and excluded by the card itself, which removes the largest expenses from the mechanism.

**Novelty.** Low. This is a feature, and it is already present in the category.

**Hidden costs and behaviour.** Entering every expense live in a group chat is the same effort as Splitwise. Free tools set a low willingness to pay, and the revenue line (a 29 THB trip pass) is the card's own admission of weakness. A "money-making model for judges" is the hardest requirement here.

**Privacy and legal.** Low risk: P2P PromptPay between friends is probably outside the PSA licence (HYPOTHESIS in the legal file), provided the app never collects.

**Stakeholder harm.** Little. A mild social-pressure risk if the app names a person who cannot afford to pay next.

**Counter-evidence.** The pain evidence is a US Zelle survey cited from a snippet (20% hid from the group chat), and the Thai pain is partly speculation per the card. Existing free apps already serve the need.

**Top 3 failure reasons.**
1. The headline feature already exists in WhoPays, Settle Up and Splitwise.
2. Real groups do not defer to an app at the till, and large costs are excluded.
3. No credible revenue.

**Fastest falsifying experiment.** Install WhoPays and Settle Up, run a seeded 4-person trip in each, and list what Next Payer would do that they do not. If the list is only "Thai UI and PromptPay QR", it is a localisation and not a new mechanism. About 30 minutes.

---

## G1-B04 Satang-ID Pay — HOLD (weak, leaning reject)

**Closest alternatives.**
- Slip verification services. EasySlip (snippet via GitHub n8n node, https://github.com/EASYSLIP-CO-LTD/n8n-nodes-easyslip): verifies by the slip's QR payload or uploaded image, with duplicate-slip detection. SlipOK: a third-party README gives a 100-slip monthly free tier (snippet, may be outdated). An AIS page (snippet, https://www.ais.th/consumers/package/postpaid/rsme/slip-ok) lists a 210 THB per month package with 500 slips and 0.42 THB per extra slip. RDCW Slip Verify and thai-qr-payment.js (snippet) are others. These services check the real transaction via the bank, and so address fake slips directly. The card's claim that they "check the slip image" understates them, since the slip QR is looked up through a bank API (snippet).
- Bank alerts: SCB Connect on LINE (snippet) and KBank SMS alert at 199 THB a year (snippet, bank promotion page, with no alerts 22:00-07:00). These exist and tell the seller what actually arrived.
- The unique-amount mechanism itself: the Indobe WooCommerce plugin for Indonesia (snippet, https://emoji.wordpress.org/plugins/indobe-for-woocommerce/) adds a random 3-digit code to the checkout total so the shop can match transfers in the bank statement, and its FAQ says the owner still checks the bank manually. So the mechanism is prior art outside Thailand. I did not find a Thai equivalent, which is not proof there is none.

**Mechanism attack.**
1. Fake slips are already neutralised by looking at your own bank balance, which the DES advice the card cites says. The unique amount adds only matching convenience. The card's self-critique concedes this.
2. Reconciliation depends on sellers pasting bank text or a CSV. Many sellers do not do this, and the work is tedious. The paste step is where the value disappears. A bank-notification parser would remove it, but the card does not use one.
3. Buyer friction: buyers pay 350.17 rather than 350.00. Some will round off or pay the base price, which creates "flagged, unmatched" cases for the seller to resolve by hand. Duplicate and partial payments, refunds, and more than 99 concurrent orders at one price are unsolved.
4. A buyer who pays the wrong suffix could be matched to the wrong order, which means the wrong parcel gets shipped. Seller-side confusion about which suffix was real cannot be ruled out.

**Novelty.** Low. The unique-amount approach is prior art in Indonesia (snippet), and slip APIs, bank alerts and gateways cover the Thai need. Differentiation from them is only the "no slip, no gateway, no money in transit" design, which is a design choice and not a better outcome.

**Hidden costs and behaviour.** Seller behaviour change is high (paste statements daily), and buyer behaviour change is moderate. Willingness to pay 49 THB a month is doubtful when SlipOK offers a free tier (snippet) and AIS bundles it.

**Privacy and legal.**
- Bank statement text and CSVs contain buyers' names, partial account numbers and amounts. Storing them makes the app a PDPA data processor for third-party bank-transaction data. Parse in the browser and do not store the raw text, or the team takes on a larger security duty with no budget.
- PSA: no money is held, so it is probably outside the licence (HYPOTHESIS in the legal file). The legal file advises labelling payment status as self-reported. "Marked paid" by amount match risks being read as confirmation by the app.
- Do not ask sellers for bank logins or bank-app access, which would be an extra risk.

**Stakeholder harm.** A seller who trusts a mistaken match ships goods to an unpaid order. A buyer is confused by odd amounts. Tourism angle is thin, as the card admits.

**Counter-evidence the problem is small or solved.** The fake-slip problem is real (Infoquest 2022, fetched per the card; PRD and SCB pages in the results, snippet), but there are several cheap remedies already, and the card's mechanism adds a small convenience over them.

**Top 3 failure reasons.**
1. Existing remedies (own bank alert, SlipOK/EasySlip free tiers) already neutralise fake slips, leaving only reconciliation convenience.
2. The paste-statement step is tedious, so sellers would not use it, and statement data creates a PDPA burden.
3. Unique suffix prior art outside Thailand, buyer friction, and unmatched or duplicate payments.

**Fastest falsifying experiment.** Interview 8 Facebook or LINE sellers with 20 or more orders a week. Ask how they match payments today, and whether they would paste bank text every day. Show a mock 350.17 QR to 8 buyers and ask whether they would hesitate. If most sellers say they already glance at their bank app or use a slip checker, kill it. Half a day.

---

## Cross-card notes
- G1-B01 is the only card whose mechanism (a pre-agreed price table plus counter-signature) differs from existing tools in a way that could matter. Its weakness is distribution and the honest/dishonest split, not novelty.
- G1-B03 is a duplicate. G1-B02 and G1-B04 are feature-sized against clear existing alternatives.
- None of the cards has revenue evidence. All revenue lines are the generator's hypotheses.
