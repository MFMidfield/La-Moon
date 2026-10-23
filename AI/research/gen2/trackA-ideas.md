# Generation 2 — Track A (Memory-Guided) Idea Cards

- **Created:** 2026-10-22 ~23:25 +07 · Generator: main thread (Opus 5.5)
- **Inputs:** Problem Memory (PM-xx), new Gen-2 research `raw/J-gen2-travel-lowcoverage.md` (P-J-xx), `raw/K-gen2-everyday-trustanchors.md` (P-K-xx, trust anchors), Global Idea Memory `07-idea-memory.md` (RF-01…13)
- **Gen-2 rules applied:** new problems from low-coverage areas first; IF-1 slots ≤2 (used: 0); every trust mechanism must pass **RF-09** (anchor must be something a scammer cannot produce); no platform cut of third-party payments (**RF-10**).
- **Count:** 5 cards (target 6). One slot left unfilled: candidates for the 6th were close variants of Gen-1 HOLDs or of Track B cards (festival transport ≈ G2-B04; group event money ≈ G1-A02) — not generated to avoid padding (§18).
- Status of every card: Prior-art NOT VERIFIED (Critic pending) · NOT VALIDATED.

---

### G2-A01 — Callback Confirm: out-of-band confirmation through the registry contact
- **Operator:** Cross-domain Mechanism Transfer (corporate payment-fraud "callback verification": before paying a changed bank account, call back on a number from an independent source, never the one in the email) · **Problems:** PM-03, P-K tour/ticket scams · **New family:** IF-7 Out-of-band verification
- **Problem:** Fake tour/stay pages take deposits; every free anchor (DBD, DOT licence search, payee name shown by PromptPay) proves an entity/account **exists**, not that the person chatting **is** that entity (raw K). RF-09: scammers control their own channels.
- **Target User:** Travellers about to pay a deposit to a tour company found on social media; licensed tour operators (DOT licence) who are impersonated.
- **Core Mechanism:** The traveller pastes the business name/licence no. and booking details. The app finds the operator's **contact from the official registry** (DOT licence record / operator's pre-registered contact verified once via the registry), and sends a confirmation request **to that contact, not to the chat**. The booking shows "confirmed by registered contact" only if the reply comes back through that out-of-band channel. A scammer chatting from a fake page cannot receive messages at the licensed operator's registered contact. → The trust anchor becomes a channel the scammer does not control (passes RF-09).
- **Closest existing approach:** DOT licence search (manual existence check), bank payee-name display, Cyber Check (reported accounts). Difference: verification of **this specific booking** through an independent channel.
- **Expected Value:** Travellers can confirm a deposit request is real; licensed operators get a way to prove "it's really us". **Key assumption:** (1) registry contacts are accessible and current; (2) operators answer confirmation requests fast enough for chat-commerce speed.
- **Revenue path (HYPOTHESIS):** Operators pay a subscription for a "callback-confirmed" badge + fast confirmation inbox (they are the frequent actor and the impersonation victim — raw I cases). Free for travellers.
- **Feasibility:** Medium-High. Demo: seeded registry entry (manual copy of a licence record), traveller request → email/LINE notify to registered contact (free tiers) → confirm → booking marked. Registry scraping not needed for demo.
- **Limits:** Homestays have no public registry (raw G/K) → scope = licensed tour operators (+ hotels if registry exists). Legal: app holds no money.
- **Uses AI:** No.

### G2-A02 — Hedge Booking: free-cancellation fallback for ferry/flight connections
- **Operator:** Mechanism Substitution (replace "insurance after loss" with an "option bought for free before the risk") · **Problems:** PM-22 / P-J-06 · **New family:** IF-8 Free-cancellation as a hedge
- **Problem:** Island ferries cancel for weather; operators' terms exclude responsibility for missed onward flights/connections (Lomprayah terms — raw J); travellers bear extra nights and rebooking.
- **Target User:** Island-hopping tourists with a flight or ferry connection on the same/next day (Andaman/Gulf, monsoon season).
- **Core Mechanism:** For a risky leg (season × route × buffer), the app recommends and helps place a **free-cancellation fallback** in advance — a refundable mainland/pier hotel night or a later flexible ticket — with a **cancel-by reminder**: if the ferry runs, the traveller cancels the fallback at zero cost; if it doesn't, the fallback is already secured before prices surge and rooms sell out. → Converts an uninsured tail risk into a free option, without the app selling insurance (licensed) or holding money.
- **Closest existing approach:** Travel insurance (claim after loss; exclusions), operator refunds (ticket only), weather apps. Difference: pre-emptive, zero-cost hedge using existing free-cancellation inventory.
- **Expected Value:** Fewer stranded nights and missed flights. **Key assumption:** free-cancellation inventory exists near piers in peak/monsoon periods, and travellers remember/act on cancel-by reminders.
- **Revenue path (HYPOTHESIS):** Affiliate commission when a fallback is actually used (Agoda pays after stay — M-01) + affiliate on flexible fares; weak in non-cancellation cases. Possibly B2B: island resorts/dive shops pay to offer it to guests.
- **Feasibility:** High for demo: route/season risk table (curated from operator notices), buffer rule, fallback search deep-links, reminder (email). No live data needed.
- **Uses AI:** No.

### G2-A03 — Field-Trip Pipeline: institutional demand for inactive certified homestay communities
- **Operator:** Hidden Stakeholder + Resource Recombination (idle certified supply × institutions that must run field trips/CSR) · **Problems:** PM-07 (45.3% of certified Isan homestay communities had zero tourists — FACT) · **New family:** IF-10 Institutional demand aggregation
- **Problem:** Certified homestays sit idle; the binding constraint looks like **demand shortage**, not booking tools (raw K inference from the 45.3% study). Individual tourists are hard to attract to remote villages; OTAs bury them.
- **Target User:** Paying side = institutions with recurring, scheduled group demand (schools' study trips/ค่ายอาสา, universities, companies' CSR days). Supply = certified community homestays.
- **Core Mechanism:** Instead of chasing individual tourists, package a community's certified capacity into **ready-to-approve group programmes** (itinerary, per-head cost, safety info, learning outcomes/CSR outputs) that a teacher or HR officer can submit for internal approval; requests are routed to the community leader; payment flows direct from institution to the community account (no custody). → Shifts the demand side from many fickle tourists to few repeat institutional buyers with budgets and calendars.
- **Closest existing approach:** CBT Thailand directories, DOT promotion, tour companies running school trips. Difference: approval-ready programme packaging for institutional buyers; direct-to-community payment.
- **Expected Value:** Recurring bookings for idle communities; easier procurement for institutions. **Key assumption:** institutions have budget and willingness to choose community homestays (needs interviews); tour-licence rules — **selling packaged tours may require a DOT licence (raw G)** → must operate as a listing/request tool, or partner with a licensed operator.
- **Revenue path (HYPOTHESIS):** Listing/subscription paid by institutions or a licensed tour partner's fee; community pays nothing upfront. Uncertain.
- **Feasibility:** Medium-High (programme pages, request form, PDF approval pack, community dashboard). Demo with 1–2 seeded communities.
- **Uses AI:** No.

### G2-A04 — Desk Guardian: hostel/hotel front desk as the safety contact for solo travellers
- **Operator:** Hidden Stakeholder (front desk) + Human–Machine Boundary Shift (give a human on site the alerting role apps give to distant contacts) · **Problems:** P-J-01 (solo/female travellers; unvetted late-night rides and one-on-one tours) · **New family:** IF-9 Institutional guardian check-in
- **Problem:** Solo travellers take street-hailed rides/private tours with no persistent identity; existing safety apps alert friends far away (other time zones) who can't act locally; police help is reactive (raw J). Evidence of frequency is weak (no official statistic).
- **Target User:** Paying side = hostels/boutique hotels marketing to solo & female travellers. Users = their guests.
- **Core Mechanism:** Before going out, the guest logs "where/with whom/back by" (plate or guide photo) to **their hostel's desk**; if the guest misses the check-back time, the **desk staff nearby** are alerted first with the logged details, and can call the guest, the guide's company, or local police in Thai. → Uses a local, Thai-speaking, already-trusted human as the responder instead of a distant contact or a platform.
- **Closest existing approach:** bSafe/Life360/Noonlight/Grab trip share (alerts distant contacts or a call centre — prior art to be checked). Difference: responder = property staff on site.
- **Expected Value:** Faster local response; a safety selling point for hostels. **Key assumption:** desk staff accept the responsibility (liability!) and hostels see marketing value.
- **Revenue path (HYPOTHESIS):** Hostel subscription ("Guardian-certified" badge for booking pages).
- **Feasibility:** High (trip log, timer via Supabase cron/edge function, desk dashboard, notifications).
- **Risks:** Liability if staff fail to act; privacy of logged data (PDPA consent).
- **Uses AI:** No.

### G2-A05 — Meter-Plus Card: open, pre-committed top-up in exchange for meter + direct route
- **Operator:** Incentive Redesign using an **alternative causal model** of PM-04 (drivers refuse meters partly because regulated fares are below their perceived cost — FACT: +25% asked, +7% granted, 2023) · **Problems:** PM-04 · **Family:** IF-11 Open incentive bridge
- **Problem:** Meter refusal and flat inflated quotes; the tourist-side view (information asymmetry) ignores the driver-side cause (fare pressure). Locals face it too (PT-21).
- **Target User:** Tourists and locals hailing metered taxis at hotspots.
- **Core Mechanism:** The passenger shows a Thai-language card/screen: "Meter on + direct route → I add a fixed +X THB tip at the end" (X set by distance band). The card is a **public, pre-committed offer** that meets the driver's incentive legally (meter used; tips are legal) instead of a hidden negotiation; after the ride the passenger can log "meter used/not" to build an aggregate refusal map by location/time. → Replaces adversarial haggling with a transparent side-payment that aligns incentives at small cost.
- **Closest existing approach:** Grab (higher fixed price), haggling, DLT QR complaint system. Difference: bilateral, legal incentive bridge without a platform.
- **Expected Value:** Higher meter acceptance at a small predictable premium. **Key assumption:** a modest tip changes driver behaviour at hotspots (behavioural test needed).
- **Revenue path (HYPOTHESIS):** **Weak** — possible hotel/hostel white-label cards, or tourism-partner sponsorship. Included as a single-problem, no-platform, non-AI coverage card; revenue is its main weakness.
- **Feasibility:** Very high (static card generator + simple log).
- **Uses AI:** No.

---

## Track A coverage self-check (Gen 2)
- Mechanism change: A01, A02, A05 ✓ · Reduces dependency: A02 (no insurer), A01 (no platform trust) ✓ · No AI: all ✓ · No new platform: A05 (card), A02 (uses existing inventory) ✓ · Single problem deep: A05 ✓ · Workflow/incentive change: A03, A05 ✓ · High-risk reasoned: A04 (liability), A03 (licence/demand) ✓
- IF-1 slots used: 0 (Gen-1 concentration addressed).
