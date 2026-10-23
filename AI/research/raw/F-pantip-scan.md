# F — Pantip Direct Scan (Thai voice-of-user)

- **Run:** 2026-10-22 ~22:35 +07
- **Method:** Script fetched `pantip.com/search?q=<keyword>` HTML → topic IDs → each topic's `og:title` / description / date. (Pantip JSON search API returned "access denied"; HTML search worked.) Script: scratchpad `pantip_scan.py`. Raw: scratchpad `pantip/scan1.jsonl`, `scan2.jsonl`.
- **Privacy:** no usernames recorded; titles/descriptions paraphrased.
- **Evidence meaning:** each row is FACT that the post exists with that topic (Observed/Reported problem by one person). It is **not** evidence of frequency. Pantip search relevance is weak — many off-topic hits were discarded.

## Relevant threads (2020+)

| Ref | Topic ID | Date | Keyword | Paraphrased content | Signal |
|---|---|---|---|---|---|
| PT-01 | 44079488 | 2026-05-06 | หารค่าทริป | Trip of 4 (incl. poster's partner) in poster's car; fuel ~3,000 THB; poster wants to split by 3 not 4 → asks if wrong | Fairness rule for splitting is contested, not just arithmetic |
| PT-02 | 44091655 | 2026-05-16 | หารค่าทริป | Friend's car trip: should passengers pay fuel or the owner's meals, or both? | Norms for car-owner compensation unclear |
| PT-03 | 43375892 | 2025-04-08 | หารค่าทริป | ~2h round trip with café stops: how much fuel money should passengers contribute? | Same — recurring question |
| PT-04 | 43138287 | 2024-12-12 | หารค่าทริป | 5 friends, poster's car & driving: should the driver also be counted in the fuel split? | Same — 4 threads in 2024–26 on one norm |
| PT-05 | 43670815 | 2025-07-08 | หารค่าทริป | Friends order food together often; discount codes/service fees make splitting annoying; asks for fast method | Split complexity with discounts/fees |
| PT-06 | 42650924 | 2024-04-18 | วางแผนเที่ยว | Asks for a bill-sharing app that handles VAT + service charge | Explicit tool demand; existing apps not known/adequate |
| PT-07 | 44021189 | 2026-06-14 | เพื่อนเท ทริป | Acquaintance cancelled a planned Udon Thani trip 12 hours before departure; poster blocked them | Dropout/commitment failure in group trips |
| PT-08 | 41727830 | 2022-11-12 | ยกเลิกทริป มัดจำ | Group paid 1,000 THB van deposit for Chanthaburi trip; day before, van says it's far away / changes plan | Deposit to small operator; unreliability; no recourse |
| PT-09 | 43028303 | 2024-10-17 | ยกเลิกทริป มัดจำ | Paid ~15% tour deposit; tour later changed details materially; can deposit be refunded? | Deposit refund disputes |
| PT-10 | 41172497 | 2021-12-24 | ยกเลิกทริป มัดจำ | Tour company refused to return New Year tour deposit despite advance cancellation | Same |
| PT-11 | 43904707, 43991740, 43783869, 43937153, 43945120, 43968938 | 2025-10 → 2026-02 | ทวงเงินเพื่อน / เพื่อนยืมเงินไม่คืน | ≥6 threads in ~5 months on friends not repaying loans (amounts from <100 THB to 1,000+ THB); how to ask without losing friendship | High recurrence of the social cost of asking |
| PT-12 | 43989490, 43869219, 43985412 | 2025-11 → 2026-02 | ทวงเงินเพื่อน | Content pieces (incl. a ลงทุนแมน repost) on how to ask friends to repay legally/politely | Media treats it as a mass-interest topic |
| PT-13 | 44214246 | 2026-08-31 | แอปวางแผนเที่ยว | Post about road trips with friends always ending in arguments over route/plan, then recommends using planning apps | Group decision conflict (post may be promotional) |

## Scan 3 (2026-10-22 22:45) — Tier-1 voice (raw: `raw/pantip/scan3.jsonl`)

| Ref | Topic ID | Date | Paraphrased content | Links to |
|---|---|---|---|---|
| PT-14 | 44154874 | 2026-07-08 | Left dorm 2 months early, accepted losing deposit, but dorm still bills water/electricity/cleaning | PM-09 |
| PT-15 | 42975130 | 2024-09-20 | Moved out early Aug; by Sep 20 dorm still hadn't transferred deposit back | PM-09 |
| PT-16 | 44116694 | 2026-06-06 | Sudden move-out; dorm charges electricity at 10 THB/unit + cleaning; can deposit offset last bill? | PM-09 (utility markup) |
| PT-17 | 44121579 | 2026-06-10 | News-style post: tenant's 3,000 THB deposit fully deducted (AC cleaning, broken bulb, faded wall from stickers) | PM-09 (itemised deductions disputed) |
| PT-18 | 42710670 | 2024-05-15 | Move-in cash 8,000–10,000 THB for a 3,800–4,400 THB room; will it come back? | PM-09 (size of money at stake) |
| PT-19 | 42769294, 41830601 | 2024-06, 2023-01 | Notice-period disputes; dorm refuses move-out even when tenant forfeits deposit | PM-09 |
| PT-20 | 43992456 | 2026-02-23 | Repost of foreign-media story: Thailand ranked 3rd in world for taxi overcharging of tourists | PM-04 (ranking differs from Mastercard "top 4" — different report?) |
| PT-21 | 43378366 | 2025-04-09 | Warning: taxi at Ekkamai demanded inflated flat fare for ~2 km | PM-04 (locals affected too) |
| PT-22 | 43442376 | 2025-05-04 | Opinion: falling tourist numbers; ads can't fix meter refusals, tuk-tuk overcharging, overpriced food → tourists won't return | PM-04, RC-C |
| PT-23 | 43547156 | 2025-06-08 | Asks typical taxi fare Mo Chit 2 → Siam before riding | PM-04 (fair-price reference demand, Thai locals too) |
| PT-24 | 43927120 | 2026-01-03 | Rented car on trip gets fine/accident: should driver pay alone or split with group? | PM-01 (fairness rules) |
| PT-25 | 42467974 | 2024-01-19 | Two cars on a friend trip — how to split fuel/car costs fairly? | PM-01 |
| PT-26 | 40136021 | 2020-08-17 | Organizer collected 1,700 THB each for a 3-day trip; friends said too expensive | PM-01 (organizer burden, pre-collection) |
| PT-27 | 43934501 | 2026-01-08 | Friend on Korea trip didn't help plan; poster did all the planning | PM-02 |

## Takeaways (HYPOTHESIS)
1. Thai group-trip money friction is about **fairness rules and commitment**, not only arithmetic (PT-01–05, PT-07).
2. **Deposits to small operators (vans, tours)** are a recurring dispute point (PT-08–10) — links to B's P-B-03 trust problem.
3. **Asking friends to repay** is a high-frequency Pantip topic in 2025–26 (PT-11/12) — supports C's P-C-05.
4. **Dorm deposits** (PT-14–19): disputes are about itemised deductions, utility markups, refund delays and notice periods — i.e., **what condition/obligation was agreed and recorded**, matching RC-B.
5. **Taxi overcharging** is felt by Thai locals too (PT-21, PT-23), not only foreign tourists → potential frequent-user segment (HYPOTHESIS).
6. **Group-trip fairness disputes** extend to fines/accidents and multi-car trips (PT-24/25).

## Limitations
- ~12 keywords, top 6 results each; Pantip relevance ranking unknown; no comment-level reading; no frequency estimate possible.
- Keywords for homestay owners, hidden fees, taxi scams returned off-topic results.
