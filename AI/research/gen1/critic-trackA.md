# Internal Critique — not independent validation

- **Critic:** same model family as the generator. This is a Targeted Scan (about 22 WebSearch/WebFetch calls), not a full prior-art search.
- **Date:** 2026-10-22
- **Reviewed:** `research/gen1/trackA-ideas.md`, cards G1-A01 to G1-A06. Context checked in `raw/G-legal-verification.md`, `raw/H-fact-verification.md` and `raw/I-supply-side.md`.
- **Prior-art Status for all cards:** Targeted Scan. Not finding a competitor is not evidence that none exists.
- **Evidence tags:** "(snippet)" means I only saw it in a search-result summary and did not open the page. "(fetch)" means a WebFetch of the page, summarised by a small model. "(raw X)" means I read it in the project's raw files.

## Verdict table

| Card | Verdict | Mechanism differentiation | Novelty confidence | Closest alternative |
|---|---|---|---|---|
| G1-A01 PactLink | **REJECT** | Low | Low | Facebook Page verification (existing control) |
| G1-A02 QuorumTrip | **HOLD** | Low-Med | Low | PolyTrip (https://polytrip.co) |
| G1-A03 TwoKey Room Record | **SURVIVE** (weak) | Med | Low-Med | Inventory Hive / Property Inspect / HelloReport / Chapps Rental Inspector |
| G1-A04 Fair-Fare Pledge Card | **HOLD** | Low-Med | Med | DLT taxi QR program (snippet) |
| G1-A05 Trust Relay | **REJECT** | Low | Low | Informal referral and commission practice |
| G1-A06 Arrive-Right | **HOLD** | Low | Low | Unofficial TDAC guide sites and the official TDAC portal |

---

## G1-A01 PactLink — REJECT (mechanism does not solve the stated problem)

**Closest alternative:** Facebook's own Page verification, which gives a gray badge so a missing badge signals an imposter page (snippet: https://www.socialmediaexaminer.com/how-to-verify-facebook-page-for-local-business/). Thai authorities already tell travellers to check Page Transparency, admin countries, reverse-image search, a call or video call to the owner, and the recipient account name (snippet: https://www.thaipbs.or.th/now/content/218, https://www.prd.go.th/th/content/category/detail/id/31/iid/505789). I found no Thai "verified booking link" product, but the search was shallow. Meta Verified and Meta One pricing in Thailand is unclear: one 2023 headline says 280 baht, and a snippet claims a 2026 "Meta One" plan from 27 baht. The card's 280-330 THB benchmark is therefore unconfirmed.

**Mechanism attack (fatal).**
- The handshake proves control of a page, not that the page belongs to the real business. A scammer controls the fake page, so they can sign up as an "operator", post the one-time code and receive a valid, bound pact link.
- The pact page then shows a genuine-looking "this pact is bound to the page you are chatting with" screen. The tool would give scammers a trust badge.
- The card's defence is "the pact shows which page it is bound to; risk remains if travellers don't compare". But comparing is exactly what victims fail to do today, and they cannot tell which page is real (fake page 11k followers vs real 425, raw I).
- The "registered business-name PromptPay QR" depends on checking the name against a registry the app does not have. Mule accounts are the norm in scams. Thai bank apps already show the recipient name before a transfer (snippet: Thai PBS advice to check the account name).
- Without an independent anchor such as DBD business registration, a licence number, or a traveller starting from a registry, the loop is closed on the attacker's own channel.
- Adding such an anchor turns the product into a directory or marketplace, which means cold start and OTA-style trust building. That is a different idea, so I am not proposing it.

**Novelty:** the pre-payment mutual-terms part is a template/UI feature (a booking T&C page). The trust part is not new and does not work.

**Hidden costs and behaviour assumptions.**
- Operators must pay for something that does not stop the fake page from copying them.
- Travellers must click an extra link and understand "bound page" semantics.
- Honest small operators already struggle with follower-count heuristics (raw I).

**Privacy, abuse and legal.**
- Scammers can abuse it by cloning the pact flow, using a lookalike domain, or sending a fake "pact link" through the fake page.
- Liability: if a "pact-verified" operator turns out to be a scammer, the app has implied verification it cannot back.
- Collecting operator ID or business documents raises PDPA duties (raw G Q2).
- Slip upload is self-reported, so the app cannot confirm payment. That is consistent with the no-custody rule but weakens the "enforceable" claim.

**Stakeholder harm.**
- Honest operators who do not adopt are implicitly marked "unverified".
- Travellers get false confidence.

**Counter-evidence.**
- The no-show/deposit side (lawyers say deposits must be stated in booking terms beforehand, raw I) is real.
- But a signed T&C page does not need this product, and suing is "not worth it" per the lawyer in raw I, so enforceability is overstated.

**Top 3 failure reasons.**
1. Control of a fake page passes the handshake, so the trust claim is false.
2. Travellers must compare the bound page against a page they cannot judge, so the behaviour assumption defeats the mechanism.
3. A PromptPay name check adds little over what bank apps already show, and "enforceable" deposits remain impractical to litigate.

**Quickest falsifying experiment (about 1 hour).** Take a real homestay's public photos, create a throwaway Facebook page, and run it through the operator onboarding flow with the card's design. If it gets a valid pact, the mechanism is dead. Then show 10 Thai users one genuine and one scammer-issued pact link and see whether they can tell them apart.

---

## G1-A02 QuorumTrip — HOLD (close prior art; differentiator is thin and unverified)

**Closest alternative: PolyTrip, https://polytrip.co (fetch, small-model summary, exact wording not independently confirmed).** The page says:
- "The trip only launches when enough people commit. No fake trips."
- A refundable "Dynamic Deposit" is paid to hold a spot.
- "If your trip doesn't reach its minimum participant threshold, all deposits are refunded in full."
- "PolyTrip takes a platform fee on successful bookings only."
- It lists friend groups ("Organize a trip with friends - without the chaos"), community leaders, companies and tour operators as users.
- Payments are via Stripe, prices in "$", and no mention of PromptPay or Thailand.

A WebSearch for "PolyTrip" returned nothing relevant, so its traction is unknown. Other group-trip tools seen (snippets): TRIPTI.ai, CrewTrip, Takeoff, Launchtrip (a startup reported with a pre-seed round) and PollTrip. Operator-side minimum-headcount features are also common (WeTravel, Tripworks, Flash Pack; snippets). A thin, Thai-language assurance-contract consumer app is plausible but I found none; that is not proof of absence.

**Mechanism attack.**
- The core assurance-contract logic (all-or-nothing on a threshold) already exists in PolyTrip.
- The claimed differences are: (a) no custody, with PromptPay QR paid to the organizer; (b) auto-release of unpaid pledges to a waitlist; (c) fairness templates.
  - (a) is mainly a legal workaround. The organizer still holds the group's money, so the "organizer fronts and chases" pain stays at the payment stage.
  - (b) PolyTrip's page does not say what it does about unpaid spots (fetch), so (b) is unverified as a difference, and the feature is easy to copy.
  - (c) is a UI feature.
- Pledges before money are free "cheap talk". The Pantip pattern in the card (dropouts 12 hours before departure) is dropouts after commitment, usually after paying. A pre-payment pledge does not stop that, and refunds from the organizer's personal account become the new dispute.
- For vans, villas and group fares the per-head price depends on final headcount. A threshold-then-QR flow assumes the price is known at pledge time.

**Hidden costs and behaviour assumptions.**
- A friend group's coordination tool is LINE. This needs the organizer to push every friend to a new link, which is the same social cost the card says it removes.
- Single-use, with no retention loop.
- The organizer must manually confirm payments, because slip upload is unverified.

**Revenue.**
- Affiliate commission is tiny and paid late (card admits M-01).
- Agoda/Klook payouts need many bookings, and a student demo has none.
- Judges will see this as the weakest money model of the batch except A06.

**Privacy, abuse and legal.**
- Low risk.
- An organizer could run a fake trip and collect QR payments. This is a new fraud vector for the app: a "pledge → QR" flow with no custody check is a ready-made scam template.

**Stakeholder harm.** Auto-releasing a friend's slot publicly may cause social friction. Minor.

**Counter-evidence.**
- Splitwise and KhunThong already handle the after-money stage.
- I found no data in the card or raw files that threshold-style commitment is what Thai groups lack. The 82.5% organizer-burden figure is single-source (card).

**Top 3 failure reasons.**
1. PolyTrip already implements the threshold and min-headcount logic; the differentiator is localisation and no custody.
2. Free pledges do not stop post-payment dropouts, which is the evidenced pain.
3. The affiliate model is too small and too late, and the app is single-use.

**Quickest falsifying experiment (about 1 day).** Interview 8-10 Thai trip organizers about their last dropout. Ask whether it happened before or after payment, and ask them to choose between a LINE poll and a pledge-link flow. Falsify if most dropouts occurred after payment or fewer than 3 of 8 prefer the flow. In parallel, check PolyTrip's FAQ on unpaid spots and non-USD payment.

---

## G1-A03 TwoKey Room Record — SURVIVE (weak; passes preliminary check only)

**Closest alternatives (all non-Thai unless stated).**
- Inventory Hive (360-degree capture and tenant feedback), Imfuna Let Lite (tenant-side), Property Inspect, HelloReport (tenant signatures and audit trail), Housemate (Shelter Scotland): all snippets from one search, much of it vendor marketing.
- RentCheck (US): both tenant and landlord log time-stamped photos (snippet).
- Chapps Rental Inspector: move-in and move-out reports (snippet, https://www.capterra.com.sg/reviews/150450/chapps-rental-inspector).
- Thai dorm management software: Horganice Owner (https://apps.apple.com/app/id1099572463, snippet), Dormlander (a Mahidol paper, snippet), Livinsoft (snippet). They cover meters, billing and rooms; I did not see a bilateral condition record in them, but I did not verify their full feature sets.
- A Thai search found no dedicated Thai dorm condition-report app. Search quality in Thai is limited, so this is weak evidence.

**Mechanism attack.**
- A dated, photographed check-in report that the tenant can comment on is the standard defence in deposit disputes (snippet synthesis), so the mechanism is credible.
- Weak points:
  - The landlord holds the deposit. The app cannot enforce "only allow deductions on changed items"; it can only display a diff. A landlord can ignore it.
  - Wear and tear versus damage is a judgment, not a photo diff.
  - Dorms under the Dormitory Act are excluded from the 2025 rental notification (raw G), so the "7/14 day" return rule does not apply to registered dorms. Apartments with 3+ units are covered, and for them the notification already requires a move-in condition report signed by both parties (raw G, Tilleke). So there is a legal tailwind for apartments, but a competitor or a landlord can satisfy it with a PDF or a LINE photo album.
  - The "auto-drafted overdue letter" is a document, not leverage.
- Adoption selection effect: owners with the dispute problem (bad actors) do not adopt; honest owners have fewer disputes and may not pay. Owners who pay for dorm software value billing and meter reading first.

**Novelty:** the idea is a Thai-localised version of a mature UK/US category. The bilateral co-sign plus diff-constrained deduction is the only extra and is mostly UX. Novelty is Low-Med.

**Hidden costs.**
- Photo storage on Supabase (free tier limits).
- Time to photograph about 20 items per room.
- "Immutable once both sign" needs hashing and timestamps. A normal database row is not tamper-proof; claims of legal weight are not tested in Thai courts.

**Privacy, abuse and legal.**
- Room photos can include tenants' belongings and faces, and the app collects ID/contact (PDPA; raw G Q2).
- Cross-border storage if hosted offshore (raw G).
- Either side could manipulate photos (staged or old images); EXIF/metadata is easily stripped.
- Branding like "certified dorm" implies a certification the team cannot give.

**Stakeholder harm.** A tenant who refuses to co-sign may be pressured; a tenant who signs a baseline of "no damage" while hiding existing issues loses protection.

**Counter-evidence.**
- Complaints data supports the problem: 1,655 residential-rental complaints, with deposit forfeiture the top issue (raw H C4, two sources).
- But OCPB complaints are mostly under general rental law, and the 2025 rules now give apartments a legal route.
- Free alternatives (photos in LINE, Superagent's move-in checklist, snippet) exist.

**Top 3 failure reasons.**
1. Owners with the problem will not adopt, and owners who adopt may not pay beyond what existing dorm-management software or free LINE photos give them.
2. The app cannot enforce deductions, and a photo diff cannot judge wear and tear.
3. The strongest legal hook (7/14-day return and signed report) applies to apartments, not registered dorms, so the card's dorm target is mismatched.

**Quickest falsifying experiment (about 1-2 days).** Visit or call 10 dorm or apartment owners and offer to run their next 3 move-ins on the flow for free. Falsify if fewer than 3 will do it, or none would pay a per-room fee. Check separately whether Horganice or similar tools already include a check-in checklist.

---

## G1-A04 Fair-Fare Pledge Card — HOLD (cold start and revenue unproven; government is moving into the same space)

**Closest alternative: the Department of Land Transport taxi QR program (snippet: https://asianews.network/thailands-taxi-qr-codes-go-live-track-trips-report-issues-estimate-fares/, https://www.travelmole.com/news/thailand-qr-code-monitoring-taxis).**
- It covers metered taxis only: about 70,000 taxis, with scan-to-see driver info and past ratings; drivers who fail to scan face a 1,000 baht fine; tuk-tuk expansion is "under consideration" (snippets).
- Other related items (snippets): MuvMi tuk-tuk app with distance-based fares (2023), Grab tuk-tuk in Phuket (2023), a 2015 government cab-rating app (DLTCheckin), and Phuket's 2013 official maximum tuk-tuk rate schedule, with a note that bargaining is allowed (Bangkok Post and related articles).
- I found no driver-owned fixed-fare QR card scheme for tuk-tuk/boat/songthaew in Thailand. The search was only 3 queries.

**Mechanism attack.**
- The self-bound published fare is a commitment device. But the driver chooses the number, so a driver can post a high "fixed" fare and still be "fair" by definition. The "reference range" is a static list with the same freshness problem as the official rate cards the card dismisses. Phuket's 2013 schedule has uncertain current legal status (snippet).
- "Fare matched / didn't match" is a self-report by a tourist who leaves the next day. Drivers or hotels can seed positive taps.
- The scam-prone drivers simply do not adopt. A tourist who sees a driver with no card cannot tell an honest driver without a card from a scammer, so the filter only helps if tourists refuse non-card drivers, which needs critical density (unlikely in a demo).
- It does nothing for Grab-style app-hailed cars, which are most of the Bangkok complaint load (48% taxi/rental fraud, raw H C1).

**Hidden costs and distribution.**
- Requires drivers (often low digital literacy, a language barrier, and local cooperatives or "queue" systems) to publish prices that bind them.
- Tourists must scan before boarding, in noisy curbside situations. The adoption evidence comes from the DLT program, which uses a 1,000 baht fine to force driver participation. A voluntary scheme has no such lever.
- Revenue: "hotels pay for vetted drivers" or "drivers pay a monthly fee" is flagged by the card itself as weak. I found no income data for tuk-tuk drivers (raw I notes no tuk-tuk economics).

**Legal and ethics.**
- Fixed fares for tuk-tuks are not clearly illegal; the Phuket schedule and bargaining rule suggest posted maximums and negotiated fares coexist (snippets). Metered taxis must use the meter, as the card says. Boat fares may be set by local pier or provincial rules (snippet), so a published driver fare could conflict with local regulation. Exact rules are not verified.
- Local driver groups and cooperatives may object to a public price record. I did not find evidence either way, so this is a risk to test, not a fact.
- A public per-driver "didn't match" record is personal data and defamation-prone (raw G Q2 on naming individuals).
- Scammers could print their own cards, or copy an honest driver's QR.

**Stakeholder harm.** Honest drivers with a bad-faith "didn't match" tap get a public mark, and drivers without smartphones are excluded.

**Counter-evidence.**
- The official taxi QR rollout and the tuk-tuk hailing apps show that platforms and government are already attacking the problem on the main routes.
- The remaining gap is informal boats, songthaews and island transfers, where I found real overcharging anecdotes (blog snippets: Koh Phangan boat taxi demanding 400 baht per person; Krabi pier fares) but no statistics.
- Pattaya Mail reports an "overpricing crisis" (snippet), but I did not verify the numbers.

**Top 3 failure reasons.**
1. Cold start: value exists only when many drivers publish fares and tourists scan.
2. The driver-set fare and self-reported "matched" signal are easy to game, and the scam-prone drivers opt out.
3. Revenue is unproven, and the DLT taxi QR and tuk-tuk apps are already moving into the verified-driver space.

**Quickest falsifying experiment (about 1 day).** Go to one tuk-tuk or boat stand, ask 10 drivers to write down their fixed fares for 3 routes and agree to display them on a QR. Falsify if fewer than 3 agree. Then ask 10 tourists, before boarding, whether they would scan.

---

## G1-A05 Trust Relay — REJECT (revenue mechanism unenforceable; does not reach the invisible operators)

**Closest alternatives.**
- Informal word-of-mouth and commission kickbacks (card).
- The Thailand CBT Network and its operator partnership handbook (https://mekongtourism.org/library/community-based-tourism-partnerships-handbook-for-tour-operators/, snippet).
- Thai platforms for micro-entrepreneurs, studied in a 2020 paper (https://ro.uow.edu.au/balpapers/34, snippet).
- Robinhood Travel, a zero-commission app aimed at small Thai operators (https://www.scb.co.th/en/personal-banking/stories/business-maker/robinhood-travel, snippet). The card itself says it failed (raw I/H).
- I found no signed-referral network among small Thai tourism operators, but my search returned only general results.

**Mechanism attack.**
- The platform's cut is of a fee paid operator-to-operator "directly". The platform cannot see or enforce that payment. After the first introduction the two operators can drop the platform, which is classic disintermediation. The only protection would be to hold or route the money, which is ruled out by the no-custody and licensing constraints (raw G Q1).
- A referral fee on a "this van driver is who we use" recommendation is the paid-steering problem the card itself lists (PM-06). Disclosure does not remove the incentive; the traveller cannot tell whether the recommendation is quality or commission.
- The mechanism only transmits trust from an operator who has already served the traveller. The stated problem is invisible operators (45.3% of certified Isan homestay communities with zero tourists, raw card citation). Operators with no tourists have nothing to refer from. The network does not create demand; it redistributes it among operators who already have it.
- The "signed referral" proves the referrer's identity, but the referred operator's quality is only as good as the referrer's honesty. It is no more verified than a Facebook recommendation.

**Hidden costs.** Severe cold start in a local cluster of at least 3-4 operator types. Operators need to self-report completion honestly. The demo needs fully seeded fake profiles, which will look staged to judges.

**Privacy, abuse and legal.**
- Referral-fee flows between businesses can be treated as brokerage or kickback arrangements. Not verified.
- Scammers could infiltrate the network as "operators".
- Traveller-linked tokens raise PDPA questions.

**Stakeholder harm.** Operators outside the network are shut out further, which recreates an OTA-style gatekeeper at local scale.

**Counter-evidence.** The Robinhood Travel zero-commission app failed to gain traction among the same operator group (card, raw I), which suggests operator platforms struggle even without fees.

**Top 3 failure reasons.**
1. The platform cannot capture value from direct operator-to-operator payments.
2. Paid referrals reintroduce the steering conflict the card wants to avoid, and do not prove quality.
3. It helps only operators who already have travellers, so it does not address invisibility, and cold start is severe.

**Quickest falsifying experiment (about half a day).** Ask 8 homestay, van and guide operators in one area what they already do (LINE group, informal commission). Ask whether they would pay or accept a disclosed fee through a third party and report completions honestly. Falsify if most already refer for free or say they would bypass the platform.

---

## G1-A06 Arrive-Right — HOLD (problem real; distribution and defensibility unproven)

**Closest alternatives.**
- The official portal (tdac.immigration.go.th) plus government warnings (https://www.mots.go.th/mots_en/news/3764, search result).
- Unofficial guide pages that disclaim any government link and mention paid add-ons (snippet: https://sites.google.com/view/thailand-digital-arrival-card).
- Other travel blogs and embassy pages.
- I found no dedicated URL-verification tool (snippet from the search itself, which says so). One traveller review suggested pasting a URL into an AI assistant (snippet), so a free-form checker is nearly a commodity.

**Mechanism attack.**
- The problem is real: at least 10% of arrivals used fake sites (Immigration, March 2026; Khaosod Thai English; snippet in H and in my search). Fees US$10 up to US$20-90 (raw H C3).
- The mechanism is an SEO and content play. Scam sites reportedly win at search time, with paid ads in one traveller report and "black hat" ranking manipulation (snippets). A zero-budget new domain will not outrank them or buy ads. The card admits this as a "major distribution risk".
- The "verify this URL" checker is a whitelist of one domain; its value is trivial and available to any reader of the government warning.
- Lookalike risk: a third-party site with "arrival" in its name, with a deep link to the official form, looks like the sites it opposes. Users may read it as another fake. The honest-affiliate positioning requires clear disclosure.

**Hidden costs and behaviour assumptions.**
- Traffic is the entire business. Seasonal, single visit, and the TDAC is accepted only up to three days before arrival (snippet), so the site's window with a given user is short.
- Affiliates (Klook eSIM at "up to 20%" is a snippet in the card) pay only after sales, and a student site has no audience.

**Privacy, abuse and legal.**
- Low risk if no data is collected.
- Claiming "official-only" while earning from adjacent products invites scrutiny.
- Using official logos or government names could look like impersonation.

**Stakeholder harm.** Minimal. Possible harm if the checklist goes stale (form changes, fee rules) and sends users to wrong links.

**Counter-evidence.** The government is already coordinating with agencies and airlines to shut fake sites (snippet: Thailand Business News), and warnings are repeated. Fake-site share may fall. I did not find data on how much traffic honest helper sites get.

**Top 3 failure reasons.**
1. Zero budget cannot win search visibility against paid or manipulated scam results.
2. The checker has little standalone value and the affiliate revenue depends on traffic that does not exist.
3. A lookalike third-party site invites the same distrust as the sites it targets.

**Quickest falsifying experiment (about 1 hour).** Search "TDAC", "Thailand arrival card" and "Thailand digital arrival card" from a non-Thai browser or VPN in 3 countries, and record the first page of results and ads. Falsify if the top results are all official or already-established guide sites with no room, or if there is no way to reach this audience without ad spend.

---

## Cross-card notes

- The card set is concentrated on trust and money-flow ideas where the app has no way to verify identity (A01) or enforce outcomes (A03, A05), so deliverables risk being "records" that carry no leverage.
- Cards rely on the no-custody rule (raw G Q1), which is correct as a legal safeguard but removes the enforcement lever in A01, A02 and A05.
- None of the six has a demonstrated paying customer yet. A03 (owners) is the most plausible payer; A02 and A06 depend on affiliate revenue that judges may find weak.
