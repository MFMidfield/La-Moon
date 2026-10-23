# Track B (Blind Exploration) - 4 Idea Cards - 2026-10-22

Search budget used: 8 searches/fetches. Evidence labels: FACT = page opened and read; HYPOTHESIS = search snippet only; SPECULATION = no source.

---

## G1-B01 - Handover Tariff (pre-agreed damage price list + counter-signed condition record)
**Operator:** Cross-domain Mechanism Transfer. Two mechanisms combined:
(a) Insurance "schedule of benefits": the price of each loss type is fixed in a table BEFORE the loss, so the claim is looked up and not negotiated.
(b) Logistics chain-of-custody / proof-of-delivery: both parties sign the item's condition at each handover.

**Problem:** Tourist rents a jet ski / scooter in Pattaya or Phuket. On return the operator points to scratches and demands thousands of baht. There is no shared record of the condition at pickup, no agreed price per type of damage, and the tourist is under pressure (sometimes with a held passport). Current fix is "take photos yourself", which the shop can dismiss because it is one-sided and the price is still open.
**Evidence:**
- FACT (opened): Pattaya Mail, 13 Jul 2026, https://www.pattayamail.com/?p=557300 - tourist recalls an operator pointing to scratches after a 15-minute rental and demanding 5,000 THB. The account is unverified. The article does not say the tourist had any pre-rental record, which is the gap this idea targets.
- HYPOTHESIS (snippet only): Pattaya Mail reports a 4,000 THB demand on two Italian tourists and Tourist Police mediation. No year was visible, so treat it as undated.
- Pre-2020 context only (not counted): Khaosod English, 2015, police watchlist of 30 Pattaya jet-ski operators.

**Target user:** (1) Foreign and domestic renters of jet skis, scooters and kayaks on tourist beaches. (2) Honest small rental shops who lose customers to the "scam" reputation.

**Core mechanism:**
1. Shop picks a damage tariff template (e.g. scratch under 5 cm = 200 THB, cracked mirror = 400 THB, ...). The renter sees it before paying.
2. Guided walk-around capture, zone by zone. The shop scans a QR from the renter's phone to counter-sign. The record is sealed (SHA-256 hash plus server timestamp) and sent to both parties by LINE or link.
3. On return, the shop marks new damage on the same zone diagram. The total is a lookup from the tariff, so it is capped and predictable. The renter accepts or disputes each line. Accepted total becomes a PromptPay QR from renter to shop (peer-to-peer, no money held).
4. Disputed lines produce a shareable, sealed before/after page for Tourist Police 1155 or mediation.

Why it changes the outcome: it moves the argument from "did you do this and how much" to "is this zone different from the sealed record", and the price is already settled. Closest existing approach: rental-company inspection apps and "take your own photos" advice. Those are one-sided, give no price schedule, and do not settle. This differs by shifting price-setting to before the rental and requiring both sides to sign.

**Expected value + key assumption:** Cuts disputes and gives honest shops a "Tariff-verified" QR sticker that tourists can look for. Key assumption: at least honest shops will adopt it because it protects them and attracts tourists. If shops refuse, the renter-only mode (timestamped self-capture) is only a weak photo app.

**Revenue (HYPOTHESIS):** Shops pay 199 THB/month or 5 THB per rental for the sticker, templates and records. Optional affiliate from tourist insurance. The tourist side is free.

**Feasibility (React/Supabase, ~1.5 days):** Demo: pick tariff, take 4-6 zone photos (Supabase Storage), second phone scans QR to counter-sign, hash stored in a row. Then mark a new scratch on return, see the auto total, and show a PromptPay QR (EMVCo payload built client-side). Seed data is enough. No user base needed.

**Uses AI?** No. It works the same without AI.

**Self-critique:** The dishonest operators this targets will not adopt it, so the benefit depends on tourists choosing shops with the sticker (a discovery and cold-start problem). The seal proves "when", not that the photos are of the right vehicle.

---

## G1-B02 - Tranche Unlock (gradual-release delivery with deemed acceptance for freelancers)
**Operator:** Cross-domain Mechanism Transfer. Two mechanisms combined:
(a) Cryptographic fair exchange by gradual release: each side's risk at any step is at most one small piece.
(b) Construction progress billing with "deemed practical completion": silence after an agreed number of days counts as acceptance.

**Problem:** A Thai freelancer (designer, video editor, translator) delivers via LINE, then the client goes quiet or keeps asking for edits. Thai law practice treats delivery and acceptance as different things, and silence is not automatic acceptance. Sending files before payment weakens the freelancer's position.
**Evidence:** FACT (opened): Legardy / LawLink, 4 Sep 2026, https://legardy.com/blogs/freelance-hire-of-work-unpaid-disputes-thailand. It says that delivering is not the same as acceptance, that silence does not equal acceptance, and that disputes over the brief and revision rounds delay payment. Evidence listed includes the agreement, delivery per version with dates, and payment/dunning messages. No Thai prevalence statistic was found (the 58% unpaid figure from PayPal 2018 covers only SG/PH/ID/VN, so it is not used).

**Target user:** Thai freelancers and small creative sellers who work through LINE or Facebook and get paid by PromptPay.

**Core mechanism:**
1. Freelancer splits the job into 3-4 tranches. The app suggests a schedule that caps the freelancer's unpaid exposure and the client's prepayment (e.g. 30/30/40, with the last tranche being the final high-resolution or source files).
2. The client opens one link with the agreed terms, including "no objection within N days after a tranche = deemed accepted" (the client taps "agree" once, so a timestamped record exists).
3. Each tranche is delivered as a preview/watermarked version, with the clean file locked. The client pays that tranche's PromptPay QR directly to the freelancer. The freelancer taps "received" (their own bank app is the proof), and the clean files plus the next tranche's preview unlock.
4. An exportable evidence pack (agreement, versions with timestamps, acceptance clock) is produced for a demand letter.

Closest existing approach: milestone payments on platforms such as Fastwork (which hold the money in escrow) and plain invoice apps. This differs in that no money is held. Risk is limited by tranche sizing, and the acceptance clock is agreed up front.

**Expected value + key assumption:** Converts "client ghosts after full delivery" into "at most one tranche at risk". Key assumption: clients will accept a tranche workflow from an individual freelancer (they accept it from Fastwork-like platforms, but not necessarily from a link).

**Revenue (HYPOTHESIS):** Freelancer subscription of 99 THB/month beyond 2 free projects. Paid evidence-pack export, 49 THB.

**Feasibility:** Supabase Storage with a signed-URL lock; a Postgres row per tranche; client agree timestamp; client page with blurred preview; PromptPay QR per tranche. Demo is a two-tab flow: freelancer and client.

**Uses AI?** No.

**Self-critique:** Weakest point: payment confirmation is a freelancer tap, so a freelancer could abuse it (client-side trust gap), and technically it is "a delivery portal with sequenced invoices". The differentiator is the exposure cap plus the agreed acceptance clock, which may feel too small for judges.

---

## G1-B03 - Next Payer (prospective payer assignment during a group trip)
**Operator:** Temporal Transformation. Settling moves from after the trip (retrospective ledger) to during the trip, where each expense is pre-assigned to the person with the biggest deficit.

**Problem:** Friends on a trip pay unevenly: one person ends up fronting hotel, fuel and meals. Afterwards the "treasurer" has to chase the others, which is socially awkward, and some avoid answering the group chat.
**Evidence:** HYPOTHESIS (snippet only, could not open; US data, date unknown): Scripps News (KSHB/WXYZ), "Friends owe you money? Gen Z goes into debt covering group expenses", citing a Zelle survey that about 20% of young adults cancelled plans or hid from the group chat to avoid repaying someone. Thai-language results were generic articles on pooling and Splitwise, with no Thai statistic. The Thai pain itself is therefore partly SPECULATION.

**Target user:** Groups of 3-8 Thai friends or families on domestic road trips or island trips.

**Core mechanism:** Existing apps (Splitwise, Tricount) record who paid and compute transfers afterwards. Next Payer is prescriptive. Before each purchase the app tells the group "next payer: Nok", the member whose paid total is furthest below their fair share (with weights for kids or people who skip meals). Balances stay near zero throughout the trip. At the end, only a small residual needs one PromptPay QR per person (peer-to-peer). Also shows a "turn" screen to flash at the cashier and a swap option.
Why it changes the outcome: the debt is never allowed to grow, so there is nothing to chase later, and the payer is decided by the tool rather than by whoever is socially pressured.

**Expected value + key assumption:** Removes the end-of-trip settling and the "treasurer" role. Key assumption: groups accept an app deciding who pays, and expenses come in similar-sized chunks (hotels and cars are pre-paid and handled as "fixed shares").

**Revenue (HYPOTHESIS):** Weak. Options: 29 THB "trip pass" to remove limits (trips over 6 members), sponsored "pay-with-this-card" slot, partnerships with hostels/tour sellers. A free tool with low willingness to pay.

**Feasibility:** Simple greedy algorithm; Supabase realtime for a shared trip; add expense, see next payer, final residual QR. Demo with a seeded 4-person trip takes a few minutes. Very buildable.

**Uses AI?** No.

**Self-critique:** Biggest weakness is revenue and defensibility: a Splitwise add-on feature could copy it, and "who pays next" may not matter if one person likes collecting credit-card points.

---

## G1-B04 - Satang-ID Pay (identify payments by a unique amount; ignore the slip image)
**Operator:** Human-Machine Boundary Shift. Slip verification is taken away from software (image checking, OCR, slip-verification APIs) and put back with the human reading their own bank notification, while software does something it is good at: assigning each order a unique amount so every incoming payment is self-identifying.

**Problem:** Small online sellers (Facebook live, LINE shops) get fake or edited transfer slips and ship goods without any money arriving. Even for genuine payments, with 50+ orders of the same price it is hard to tell which buyer paid.
**Evidence:** FACT (opened): Infoquest, 31 Jul 2022, https://www.infoquest.co.th/?p=221031 - DES warns that fake slips are made with programs or photo-editing apps, and advises sellers to check the actual incoming amount on their phone before shipping, and to use bank alerts. HYPOTHESIS (snippet): later pieces from Thai PBS, PRD, JIB (2023-2026) report AI-generated slips.

**Target user:** Solo sellers on Facebook/LINE/TikTok live in Thailand, including market and tour-desk sellers.

**Core mechanism:**
1. Each order gets a unique amount (e.g. 350.00 becomes 350.17 using a 0.01-0.99 THB suffix, collecting a max of 99 simultaneous orders per base price). The buyer pays via a PromptPay QR carrying that exact amount.
2. The slip image is ignored. The seller pastes the bank notification/statement text (or CSV) into the app. The app matches amounts to open orders, marks them paid, and flags amounts that match nothing.
3. A fake slip has no matching amount in the seller's own bank feed, so it cannot be confirmed.

Closest existing: slip-verification APIs (SlipOK, EasySlip) and payment gateways with reference numbers. Those check the slip image or require a gateway account (money passes through). This keeps the money direct and treats the seller's bank notification as the only trusted channel.

**Expected value + key assumption:** Faster reconciliation and no dependence on slip images. Key assumption: sellers will paste or import their bank text/statement, and buyers do not mind paying up to 99 satang extra. If sellers will not paste, the benefit disappears.

**Revenue (HYPOTHESIS):** Sellers pay 49 THB/month after 20 orders/month; a bulk statement import is a paid tier.

**Feasibility:** EMVCo PromptPay payload with CRC built client-side; order page for buyer; paste box with regex amount parsing; matching UI. About one day. The demo shows a fake slip being rejected because no matching amount arrives.

**Uses AI?** No.

**Self-critique:** The seller could just glance at their bank balance, so the added value is mostly reconciliation convenience; the tourism angle is thin; and copy-paste of bank text may be tedious without a bank API.

