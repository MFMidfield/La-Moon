Bangkok food and stays verification — 2026-10-25

Implemented 8 restaurants and 5 stays. Three source records were excluded because their identities could not be established. The source `places` array was not imported or modified.

**Files changed**

- `AI/data/bangkok-food-stays.verified.json`: verified source-shaped research, field uncertainties, item sources, image attribution/licences and HEAD results, plus excluded-record audit.
- `frontend/src/data/realFoodStays.js`: app-shaped `REAL_RESTAURANTS` and `REAL_STAYS`, English names for booking search, `is_mock: false`, no booking URL override.
- `frontend/src/lib/api/restaurants.js` and `frontend/src/lib/api/stays.js`: province lists use only real records when available; other provinces retain mocks. ID lookup covers both datasets for existing trips.
- `frontend/src/components/cards/CardParts.jsx`: attribution overlay with source link, illustrative-image alt text, and optional rating counts. Absolute positioning preserves card geometry.
- `frontend/src/components/cards/RestaurantCard.jsx` and `StayCard.jsx`: pass image metadata and omit ratings that could not be confirmed.
- `AI/data/bangkok-food-stays.report.md`: this review report and the proposed PROJECT_MAP edits.

**Common corrections and implementation decisions**

All original numerical ratings and review counts were removed because they could not be verified. Fake booking URLs were removed entirely; existing Agoda/Booking.com search builders receive the verified English property names. All imported kinds/types, tiers, meals and amenities use existing app values. All mock-badge uses were audited and already depend on `is_mock`, so real records do not show the mock badge.

All prices are THB planning estimates rather than live quotes; each unresolved range is explicitly listed in `uncertain_fields`. A dish price is not treated as a verified per-person meal budget. Hotel prices use private double rooms per night, including Lub d rather than its cheaper dorm-bed rates. Lub d is classified `mid` after that correction. Optional paid breakfast was removed from amenities because the app otherwise assumes breakfast is included and budgets it at zero. Unknown or conflicting hours/closed days retain the best supported value with an uncertainty flag. Awards retain only source-supported distinctions/years.

**Per-item results**

**เจ๊ไฝ — `jay-fai`**

Verified identity/address and Wed–Sat hours against MICHELIN; corrected closed days to Sunday–Tuesday, crab-omelette typo and replaced unsupported 2026-labelled award with one-star distinction without an unverified year. Coordinates come from geotagged Commons photo explicitly of Jay Fai, consistent with 327 Maha Chai Road. Price is a planning estimate, widened to allow costly crab dishes; not a verified per-person menu quote. Removed fabricated MICHELIN numerical rating.

Recorded: ฿600.00–2,000.00/person; Hours: 09:00-19:30; closed: วันอาทิตย์-อังคาร. Coordinates: [13.752606, 100.504769](https://commons.wikimedia.org/wiki/File:Jay_Fai,_bangkok_20180406.jpg).

Photo: **Exact place** — [Streets of Food / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bangkok_street_food_-_Jay_Fai.jpg), CC BY 2.0. File page explicitly identifies Raan Jay Fai in Bangkok and credits Streets of Food.

Uncertain fields: `price_per_person_thb`.

Sources: [source 1](https://guide.michelin.com/th/en/bangkok-region/bangkok/restaurant/jay-fai), [source 2](https://www.tourismthailand.org/Restaurant/jay-fai), [source 3](https://www.thailandtravel.or.jp/jay-fai-restaurant/), [source 4](https://commons.wikimedia.org/wiki/File:Bangkok_street_food_-_Jay_Fai.jpg), [source 5](https://commons.wikimedia.org/wiki/File:Jay_Fai,_bangkok_20180406.jpg).

**ทิพย์สมัย ผัดไทยประตูผี — `thipsamai-pad-thai`**

Official contact page confirms Pratoopee branch, Thai/English name, 313–315 Maha Chai Road, hours09:00–midnight and Tuesday closure; added lunch eligibility. Google Maps pin from official contact link resolves13.7528325,100.5047875. Removed unsupported Bib Gourmand2026 and numerical rating. Retained original THB75–150/person as unconfirmed estimate, not current menu price. Removed unsupported80-year restaurant claim (official says Thipsamai name since1966; longer experience refers to family recipe).

Recorded: ฿75.00–150.00/person; Hours: 09:00-24:00; closed: วันอังคาร. Coordinates: [13.7528325, 100.5047875](https://goo.gl/maps/vXBm4TvH3BT2).

Photo: **Exact place** — [LWYang from USA / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Thipsamai_(September_2016).jpeg), CC BY 2.0. File title and description explicitly identify Thipsamai, the pad thai restaurant in Bangkok.

Uncertain fields: `price_per_person_thb`.

Sources: [source 1](https://thipsamai.com/), [source 2](https://thipsamai.com/contact-us/), [source 3](https://goo.gl/maps/vXBm4TvH3BT2), [source 4](https://commons.wikimedia.org/wiki/File:Thipsamai_(September_2016).jpeg).

**สมบูรณ์โภชนา บรรทัดทอง — `somboon-seafood-ban-thad-thong`**

Official site confirms Bantadthong branch at895/6–21 Soi Chulalongkorn8, original fried curry crab, and11:00–22:00 opening with21:30 last order. Corrected coordinates from official Google Maps link; source pin was about700m south. Removed unverified Wongnai award2026 and rating. THB300–600/person remains a planning estimate, no current priced menu confirmed. Official page gives hours but no explicit regular closure policy; closed_days:null is unknown, not a guarantee of daily opening.

Recorded: ฿300.00–600.00/person; Hours: 11:00-22:00 (รับรายการสุดท้าย 21:30); closed: not explicitly stated / daily where confirmed (see note). Coordinates: [13.745208, 100.523898](https://maps.app.goo.gl/PrRhT6YyPhUJqEd19).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [You Le / Unsplash](https://unsplash.com/photos/a-bowl-of-soup-with-a-spoon-in-it-JTTxGQaFZKw), ภาพประกอบ · Unsplash License. Illustrative Thai crab curry with betel leaf, photographed at The Rice by Larnkhao, Satun, Thailand, per description/location. Not Somboon or its yellow curry crab. Free Unsplash License, not Unsplash+.

Uncertain fields: `price_per_person_thb`, `closed_days`.

Sources: [source 1](https://www.somboonseafood.com/en/location), [source 2](https://www.somboonseafood.com/en/about), [source 3](https://maps.app.goo.gl/PrRhT6YyPhUJqEd19), [source 4](https://unsplash.com/photos/a-bowl-of-soup-with-a-spoon-in-it-JTTxGQaFZKw).

**เฮียให้ ข้าวผัดโคตรปู — `here-hai`**

MICHELIN confirms112/1 Sukhumvit63, split sessions10:00–15:00/16:00–17:30 and Monday closure; removed dinner eligibility because app dinner starts18:00. Corrected pin via named Google Maps listing (13.7302655,100.586342), original about350m west. Confirmed Bib Gourmand listing but removed unsupported2026 year and fabricated MICHELIN rating. THB225–450/person kept as unconfirmed sharing-meal estimate. Replaced wrong Facebook handle with herehaifoods, consistent with business listing.

Recorded: ฿225.00–450.00/person; Hours: 10:00-15:00, 16:00-17:30; closed: วันจันทร์. Coordinates: [13.7302655, 100.586342](https://maps.app.goo.gl/yXRweJzjzutmnWNT9).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [Ali Kazal / Pexels](https://www.pexels.com/photo/authentic-thai-fried-rice-on-rustic-table-31029445/), ภาพประกอบ · Pexels License. Illustrative Thai fried rice photographed in Phuket, Thailand, per photo description; not Here Hai and not verified as crab fried rice.

Uncertain fields: `price_per_person_thb`.

Sources: [source 1](https://guide.michelin.com/th/en/bangkok-region/bangkok/restaurant/here-hai), [source 2](https://guide.michelin.com/pl/en/bangkok-region/restaurants/bib-gourmand), [source 3](https://maps.app.goo.gl/yXRweJzjzutmnWNT9), [source 4](https://www.pexels.com/photo/authentic-thai-fried-rice-on-rustic-table-31029445/).

**เจ๊โอว — `jeh-o-chula`**

MICHELIN2025 article establishes name, Bib Gourmand and tom-yum instant noodles/crispy pork; changed nonsense dish names. No2026 award asserted. Google Maps listing confirms113 Soi Charat Mueang and pin13.7424996,100.5225179, about200m northeast of source. Retained16:30–midnight daily schedule documented in AACSB guide, but current owner-issued schedule not obtained; hours and closure remain uncertain. PriceTHB125–250/person is an unconfirmed shared-meal estimate. Replaced unsubstantiated Facebook handle with linked address in AACSB guide. Removed fabricated MICHELIN rating.

Recorded: ฿125.00–250.00/person; Hours: 16:30-24:00; closed: not explicitly stated / daily where confirmed (see note). Coordinates: [13.7424996, 100.5225179](https://maps.app.goo.gl/5vwqYLm8VfqEfiZ39).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [Augustinus Martinus Noppé / Pexels](https://www.pexels.com/photo/tom-yum-soup-in-white-ceramic-bowl-12561892/), ภาพประกอบ · Pexels License. Illustrative Thai tom yum soup photographed in Thailand per photo page; not Jeh O and not its Mama noodle dish.

Uncertain fields: `price_per_person_thb`, `opening_hours`, `closed_days`.

Sources: [source 1](https://guide.michelin.com/th/en/article/dining-out/5-must-try-bib-gourmand-restaurants-in-bangkok-from-the-michelin-guide-thailand-2025), [source 2](https://www.aacsb.edu/-/media/documents/events/aacsb-guidebook_.pdf?hash=3B3D6A9CE13C18FD9D910CAF50803037&rev=1e144447b58f4c46bbc6888264bb8384), [source 3](https://maps.app.goo.gl/5vwqYLm8VfqEfiZ39), [source 4](https://www.pexels.com/photo/tom-yum-soup-in-white-ceramic-bowl-12561892/).

**วัฒนาพานิช ก๋วยเตี๋ยวเนื้อ — `wattana-panich`**

Tourism Authority of Thailand page confirms Wattana Panich,336–338 Ekkamai and09:00–19:30. Its linked Google Maps listing gives13.7341699,100.5876494; fixed original pin about340m west. Retained original75–150/person but current numerical range not verified (owner-labelled Wongnai listing says101–250 category); retained hours because first-party tourism page supports them, but current opening/closed-days conflict with owner-labelled Wongnai(10–19, last Monday monthly closed), so flagged both. Removed unverified halal claim (no certification), Wongnai2026 award and rating.

Recorded: ฿75.00–150.00/person; Hours: 09:00-19:30; closed: not explicitly stated / daily where confirmed (see note). Coordinates: [13.7341699, 100.5876494](https://goo.gl/maps/DAgFgUCK8vv).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [นิรมล บุญเทพ / Pexels](https://www.pexels.com/photo/traditional-thai-noodle-dish-in-rich-broth-35283658/), ภาพประกอบ · Pexels License. Illustrative traditional Thai noodle soup in rich dark broth, photographed in Thailand per photo page. Not Wattana Panich; meat type not confirmed and no claim this is beef. No freely licensed exact-place photo established.

Uncertain fields: `price_per_person_thb`, `opening_hours`, `closed_days`.

Sources: [source 1](https://www.thailandtravel.or.jp/wattana_panich/), [source 2](https://goo.gl/maps/DAgFgUCK8vv), [source 3](https://www.wongnai.com/restaurants/wattanapanich), [source 4](https://www.pexels.com/photo/traditional-thai-noodle-dish-in-rich-broth-35283658/).

**มนต์ นมสด เสาชิงช้า — `mont-nomsod-sao-chingcha`**

Tourism Authority of Thailand Korean guide confirms Mont Nomsod at160/1–3 Dinso Road and13:00–22:00. Named Google Maps link resolves13.7541542,100.501137; source coordinate was about145m west, within tolerance but replaced with listing pin. Removed unverifiable vegetarian label, Wongnai2026 award and rating. THB40–80/person kept as unconfirmed snack estimate. Website retained from original/TAT guide but TLS certificate failed, so usability uncertain; regular closures not explicitly confirmed.

Recorded: ฿40.00–80.00/person; Hours: 13:00-22:00; closed: not explicitly stated / daily where confirmed (see note). Coordinates: [13.7541542, 100.501137](https://goo.gl/maps/Gi6jvAMpGsam7Kn19).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [Ana Dolidze / Pexels](https://www.pexels.com/photo/rustic-breakfast-with-milk-and-toast-35751487/), ภาพประกอบ · Pexels License. Illustrative toast and milk by dish type; not Mont Nomsod. Commons File:Mont nomsod.jpg identifies brand only, not Sao Chingcha branch, so not used.

Uncertain fields: `price_per_person_thb`, `closed_days`, `website`.

Sources: [source 1](https://www.visitthailand.or.kr/1/tourdata/2024bangkok.pdf), [source 2](https://goo.gl/maps/Gi6jvAMpGsam7Kn19), [source 3](https://www.corner.inc/place/pz7embLfx7hi), [source 4](https://www.pexels.com/photo/rustic-breakfast-with-milk-and-toast-35751487/).

**โรงรส — `rongros`**

MICHELIN confirms Rongros at392/16 Maha Rat Road, Thai cuisine, green curry with ribeye and split sessions11–15/17–22 daily. Removed unsupported Southern Thai categorisation and beach mood, kept food/photo. Coordinates from exact-restaurant geotagged Commons photo13.744320,100.491630, consistent with Michelin address and source within50m. MICHELIN listing verified; removed unproven2026 year and fake numerical rating. THB250–500/person kept as unconfirmed shared-meal estimate; no exact current menu quote confirmed.

Recorded: ฿250.00–500.00/person; Hours: 11:00-15:00, 17:00-22:00; closed: not explicitly stated / daily where confirmed (see note). Coordinates: [13.74432, 100.49163](https://commons.wikimedia.org/wiki/File:Lunch_at_Rongros,_Bangkok_(Jan_2021)_-_img_01.jpg).

Photo: **Exact place** — [Chainwit. / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lunch_at_Rongros,_Bangkok_(Jan_2021)_-_img_01.jpg), CC BY-SA 4.0. Geotagged photograph explicitly taken during lunch at Rongros in Bangkok.

Uncertain fields: `price_per_person_thb`.

Sources: [source 1](https://guide.michelin.com/th/en/bangkok-region/bangkok/restaurant/rongros), [source 2](https://commons.wikimedia.org/wiki/File:Lunch_at_Rongros,_Bangkok_(Jan_2021)_-_img_01.jpg).

**โรงแรมแมนดาริน โอเรียนเต็ล กรุงเทพฯ — `mandarin-oriental-bangkok`**

ยืนยันชื่อและย่านจากเว็บไซต์โรงแรมและ Wikipedia; ขยับพิกัดให้ตรงอาคารริมแม่น้ำ เปลี่ยนเช็กอิน 14:00 เป็น 15:00; ตัด beach เพราะเป็นโรงแรมริมแม่น้ำ ไม่ใช่ชายหาด และเพิ่ม luxury; แก้ราคาเดิม12000–14000เป็นค่าเฉลี่ยห้องมาตรฐานที่เว็บทางการเผยแพร่26953.30–30484.30บาท; ตัดคะแนน/จำนวนรีวิว250ที่ยืนยันไม่ได้; รูปจริง Authors Wing จาก Commons; ไม่ใส่ breakfast เพราะอัตราที่แสดงไม่ได้ยืนยันรวมอาหารเช้า

Recorded: ฿26,953.30–30,484.30/private double room/night; Check-in/out: 15:00 / 12:00. Coordinates: [13.72361, 100.51444](https://en.wikipedia.org/wiki/Mandarin_Oriental,_Bangkok).

Photo: **Exact place** — [Chainwit. / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mandarin_Oriental_Bangkok_Authors_Wing_-_01.jpg), CC BY-SA 4.0. Exact hotel: file description identifies Mandarin Oriental Bangkok Authors Wing, with GPS 13.723533,100.513908. Exterior photograph, not a claim about current guestrooms.

Price basis: Public average rates for Deluxe Premier, Chao Phraya and Deluxe Balcony standard guestrooms: THB26953.30 /28718.80 /30484.30 per room/night on official site; not a universal minimum/maximum or date-specific quote. Taxes/inclusions not explicitly confirmed. No breakfast inclusion assumed.

Uncertain fields: `price_per_night_thb`, `price_per_night_thb.taxes_and_fees`.

Sources: [source 1](https://www.mandarinoriental.com/th/bangkok/chao-phraya-river), [source 2](https://www.mandarinoriental.com/en/bangkok/chao-phraya-river/stay), [source 3](https://en.wikipedia.org/wiki/Mandarin_Oriental,_Bangkok), [source 4](https://guide.michelin.com/th/en/article/travel/all-the-key-hotels-thailand-michelin-guide), [source 5](https://commons.wikimedia.org/wiki/File:Mandarin_Oriental_Bangkok_Authors_Wing_-_01.jpg), [source 6](https://creativecommons.org/licenses/by-sa/4.0/).

**โรงแรมสยามเคมปินสกี้ กรุงเทพฯ — `siam-kempinski-hotel-bangkok`**

ยืนยันชื่อและที่อยู่991/9พระราม1จากเว็บทางการ; แก้พิกัดเป็น geo ในข้อมูลเว็บไซต์ทางการ13.748514,100.534829; แก้เช็กอินเป็น15:00; เพิ่ม luxury; คงช่วงราคา8500–10500เป็นประมาณการที่ยังไม่ยืนยัน จึงใส่uncertain_fields; ตัดratingและจำนวนรีวิว250ที่ไม่ตรงรายการปัจจุบัน; ตัดbreakfastเพราะไม่ได้รวมทุกอัตรา รวมทั้งworkspace/familyที่ไม่อยู่ในชุดแอป; ภาพประกอบสระว่ายน้ำกรุงเทพฯจากUnsplash

Recorded: ฿8,500.00–10,500.00/private double room/night; Check-in/out: 15:00 / 12:00. Coordinates: [13.748514, 100.534829](https://www.kempinski.com/en/siam-hotel/overview/hotel-information/location).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [note thanun / Unsplash](https://unsplash.com/photos/a-swimming-pool-with-lounge-chairs-and-trees-in-the-background-XYIWp9_48H8), ภาพประกอบ · Unsplash License. Illustrative Bangkok hotel swimming pool; photo page identifies Bangkok, Thailand but not Siam Kempinski. Not represented as an image of this property.

Price basis: Original THB8500–10500 per room/night retained as unconfirmed planning estimate. Official offer has percentage discount, no absolute THB quote; Agoda listing average displayed in USD only. No exchange-rate conversion or invented THB quote. Breakfast available at surcharge unless selected package includes it.

Uncertain fields: `price_per_night_thb`, `price_per_night_thb.taxes_and_fees`.

Sources: [source 1](https://www.kempinski.com/en/siam-hotel/overview/hotel-information/location), [source 2](https://www.kempinski.com/en/siam-hotel/overview/hotel-information/prepare-your-stay), [source 3](https://www.kempinski.com/en/siam-hotel/overview/offers/advance-booking-offer), [source 4](https://www.agoda.com/siam-kempinski-hotel-bangkok/hotel/bangkok-th.html), [source 5](https://unsplash.com/photos/a-swimming-pool-with-lounge-chairs-and-trees-in-the-background-XYIWp9_48H8), [source 6](https://unsplash.com/license).

**เดอะ สแตนดาร์ด แบงค็อก มหานคร — `the-standard-bangkok-mahanakhon`**

เติมcommaในชื่ออังกฤษให้ตรงแบรนด์และยืนยันที่อยู่114ถนนนราธิวาสฯ; แก้พิกัดไปอาคารKingPowerMahanakhonจริงซึ่งเดิมคลาดไปทางเหนือราว230เมตร; แก้เช็กอินเป็น15:00จากFAQโรงแรม; เปลี่ยนราคาเริ่มต้น6500เป็น6900ตามโปรทางการ แต่max8500ยังยืนยันไม่ได้; ไม่เหมาว่าbreakfastรวมทุกราคา; ตัดrating250รีวิว; ระบุห้องพักชั้น8–18ตามFAQเพื่อไม่สื่อว่าอยู่บนยอดตึก; ภาพประกอบสระบนดาดฟ้าในสาทรจากUnsplash

Recorded: ฿6,900.00–8,500.00/private double room/night; Check-in/out: 15:00 / 12:00. Coordinates: [13.72361, 100.52833](https://en.wikipedia.org/wiki/King_Power_Mahanakhon).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [bartosz wojciechowski / Unsplash](https://unsplash.com/photos/rooftop-pool-overlooking-a-modern-cityscape-with-skyscrapers-bBn-2dwNly0), ภาพประกอบ · Unsplash License. Illustrative rooftop swimming pool in Sathorn, Bangkok, Thailand, per photo page. Exact property is not identified; not represented as this hotel.

Price basis: Official ongoing advance-purchase LOCKIT promotion starts THB6900 per room/night with breakfast, 7 days advance and non-refundable. Upper THB8500 retained original estimate, unconfirmed. This range is not a universal room rate; taxes/inclusions outside this specific promotion unconfirmed. Breakfast not assumed for every booking.

Uncertain fields: `price_per_night_thb`, `price_per_night_thb.taxes_and_fees`, `price_per_night_thb.max`.

Sources: [source 1](https://www.standardhotels.com/bangkok/properties/bangkok/), [source 2](https://www.standardhotels.com/bangkok/properties/bangkok/faqs), [source 3](https://www.standardhotels.com/bangkok/specials/lock-it-in-room-promotion), [source 4](https://www.hyatt.com/the-standard/en-US/bkksb-the-standard-bangkok), [source 5](https://en.wikipedia.org/wiki/King_Power_Mahanakhon), [source 6](https://unsplash.com/photos/rooftop-pool-overlooking-a-modern-cityscape-with-skyscrapers-bBn-2dwNly0), [source 7](https://unsplash.com/license).

**โรงแรมหัวช้าง เฮอริเทจ — `hua-chang-heritage-hotel`**

ยืนยันชื่อ/ที่อยู่400ถนนพญาไทจากเว็บโรงแรม; ขยับพิกัดตามGoogleMapsที่เว็บโรงแรมลิงก์โดยตรง; เช็กอิน14:00/เอาต์12:00ตรงfactsheetทางการและBooking; ตัดtempleเพราะไม่มีเหตุผลว่าเป็นที่พักเชิงวัด; ราคาเดิม2800–4800ยังยืนยันเป็นTHBไม่ได้จึงเก็บเป็นประมาณการไม่ใช่ราคาเสนอ; ไม่รวมbreakfastอัตโนมัติ; ตัดratingและรีวิว250เดิม; ภาพประกอบห้องโรงแรมในกรุงเทพฯจากPexels

Recorded: ฿2,800.00–4,800.00/private double room/night; Check-in/out: 14:00 / 12:00. Coordinates: [13.7487888, 100.5307151](https://www.google.com/maps/place/Hua+Chang+Heritage+Hotel/@13.7487888,100.5285264,17z/data=!3m1!4b1!4m8!3m7!1s0x30e2991328f94051:0x14dced4ecbc602d1!5m2!4m1!1i2!8m2!3d13.7487888!4d100.5307151).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [thiha soe / Pexels](https://www.pexels.com/photo/modern-hotel-bedroom-interior-5883725/), ภาพประกอบ · Pexels License. Illustrative contemporary hotel bedroom photographed in Bangkok, Bangkok, Thailand per Pexels location and description; not identified as Hua Chang Heritage.

Price basis: Original THB2800–4800 per room/night retained as unconfirmed planning estimate. Booking listing confirms hotel/room type but snippets quote date-dependent USD only; no invented conversion. Breakfast package-dependent, not assumed included.

Uncertain fields: `price_per_night_thb`, `price_per_night_thb.taxes_and_fees`.

Sources: [source 1](https://www.huachangheritagehotel.com/contact.php), [source 2](https://www.huachangheritagehotel.com/location.php), [source 3](https://www.huachangheritagehotel.com/download/2019-HCH-Factsheet-Final-Purple.pdf), [source 4](https://www.booking.com/hotel/th/hua-chang-heritage.en-gb.html), [source 5](https://goo.gl/maps/Lm9UbZEA7UFsY8eA9), [source 6](https://www.google.com/maps/place/Hua+Chang+Heritage+Hotel/@13.7487888,100.5285264,17z/data=!3m1!4b1!4m8!3m7!1s0x30e2991328f94051:0x14dced4ecbc602d1!5m2!4m1!1i2!8m2!3d13.7487888!4d100.5307151), [source 7](https://www.pexels.com/photo/modern-hotel-bedroom-interior-5883725/), [source 8](https://www.pexels.com/license/), [source 9](https://www.agoda.com/th-th/hua-chang-heritage-hotel/hotel/bangkok-th.html).

**หลับดี กรุงเทพฯ สยาม — `lub-d-bangkok-siam`**

แก้ชื่อไทยลูบดีเป็นหลับดีตามเว็บไซต์ภาษาไทยของแบรนด์; ยืนยัน925/9พระราม1วังใหม่ปทุมวัน; พิกัดจากGoogleMapsที่เว็บทางการลิงก์โดยตรง; เช็กอิน14:00/เอาต์12:00ตรงเว็บ; แก้ช่วง750–2750ที่ปนราคาต่อเตียงเป็นห้องส่วนตัว2คน1635–2239ตามfrom-pricesที่หน้าเว็บปัจจุบัน; เว้นworkspaceซึ่งไม่ใช่amenityที่แอปรองรับ; ตัดratingเดิม; ภาพประกอบห้องส่วนตัวกรุงเทพฯจากPexels; ปรับ tier เป็น mid ตามราคาห้องส่วนตัวที่เริ่มเกิน 1,200 บาท แทน saver ของราคาเตียงรวม

Recorded: ฿1,635.00–2,239.00/private double room/night; Check-in/out: 14:00 / 12:00. Coordinates: [13.7468712, 100.52869](https://www.google.com/maps/place/Lub%2Bd%2BBangkok%2BSiam/@13.7468712,100.52869,17z/data=!4m10!3m9!1s0x30e29932a4e57d73:0x8b6cd47e3b1b5e8a!5m3!1s2025-07-28!4m1!1i2!8m2!3d13.7468712!4d100.52869).

Photo: **Illustrative (explicitly labelled ภาพประกอบ)** — [Raymond Aquila / Pexels](https://www.pexels.com/photo/airbnb-in-bangkok-27313198/), ภาพประกอบ · Pexels License. Illustrative simple private bedroom in Bangkok, Bangkok, Thailand, per photo page. Fits private-room rate basis; this is not a photograph of Lub d or its dormitories.

Price basis: Official page retrieved2026-10-25 shows private ensuite rooms for2adults: Compact1635,Sidekick1721,Upgrade1935,Duo2239 THB from-prices/night. Use private-room subset1635–2239, NOT381/375THB dorm-bed rates and not whole4-bed dorm. Earlier indexed snippets show other from-prices, so dates/taxes/fees need confirmation. No breakfast inclusion assumed.

Uncertain fields: `price_per_night_thb`, `price_per_night_thb.taxes_and_fees`.

Sources: [source 1](https://lubd.com/destination/bangkok-siam/), [source 2](https://lubd.com/th/จุดหมายปลายทาง/กรุงเทพ-ประเทศไทย/ติดต่อ/), [source 3](https://www.booking.com/hotel/th/lub-d-bangkok-siam-square.en-gb.html), [source 4](https://www.google.com/maps/place/Lub%2Bd%2BBangkok%2BSiam/@13.7468712,100.52869,17z/data=!4m10!3m9!1s0x30e29932a4e57d73:0x8b6cd47e3b1b5e8a!5m3!1s2025-07-28!4m1!1i2!8m2!3d13.7468712!4d100.52869), [source 5](https://www.pexels.com/photo/airbnb-in-bangkok-27313198/), [source 6](https://www.pexels.com/license/).

**Left out**

- `guay-jub-wang-lang` — ศิริราช โภชนา (ก๋วยจั๊บวังหลัง): Could not establish a real restaurant named ศิริราช โภชนา (ก๋วยจั๊บวังหลัง)/Guay Jub Wang Lang. Searches return differently named Khun Daeng Vietnamese-noodle business, which is not this claimed crispy-pork clear-broth shop; no substitution made.
- `talat-noi-tea-house` — โรงชา ตลาดน้อย: Could not establish a real business named โรงชา ตลาดน้อย/Talat Noi Tea House or the supplied Facebook handle. Searches identify other businesses (Chaidim Tea House and Citizen Tea Canteen), not this claimed shop; no substitution made.
- `luxe-boutique-hotel-silom` — ลักซ์ บูทีค โฮเทล สีลม: ไม่พบหลักฐานยืนยันโรงแรมชื่อนี้ในสีลมจากการค้นชื่ออังกฤษตรงตัว ชื่อไทย และชื่อ+Booking/Agoda; ชื่อคล้ายโรงแรมอื่นไม่ใช่หลักฐานว่าเป็นแห่งเดียวกัน จึงตัดออกแทนการเดาชื่อใหม่ ไม่อ้างว่าปิดถาวร

No record was asserted permanently closed. These exclusions mean identity is unconfirmed, not proof that a business cannot exist. No similarly named business was substituted. Full unresolved fields and search evidence are in the JSON audit.

**What works and validation**

- `cd frontend && npm run lint && npm run build`: passed.
- Scripted integration checks passed for real-only Bangkok lists, mock fallback in every other mock province, mixed real/mock ID lookup (including saved-trip IDs), absent IDs and duplicate lookup order.
- Real restaurants/stays work through meal planning, single/multiple stay assignment, serialized saved IDs, and budget calculations using private double rooms (3 travellers require 2 rooms).
- Every real stay produces Agoda and Booking.com searches by `name_en`, with check-in/out dates, nights, adults and room count checked.
- All 13 distinct image URLs passed a fresh HEAD request: HTTP 200 and image/jpeg. Wikimedia images use upload.wikimedia.org 1280px thumbnail URLs. Four images are exact place photographs; nine are labelled illustrations. Authors/licences were checked on the linked file/photo pages; no Unsplash+ image is used.
- Existing dependencies were installed with `npm ci`; no package manifests or lockfiles were changed.

Browser interaction/layout testing remains with the user under AGENTS.md. No browser, screenshots, database access, SQL, migrations, commit or push was used. Incomplete confirmation is limited to the fields listed per item, chiefly date-specific prices, several restaurant schedules and the Mont website. This is static frontend data; no DB work is needed for this task.

**PROJECT_MAP edits for Claude after merge**

Replace the existing row beginning `frontend/src/lib/api/stays.js, restaurants.js + data/mock/` with:

```md
| frontend/src/data/realFoodStays.js + lib/api/restaurants.js, stays.js + data/mock/ | ร้านจริงกรุงเทพฯ 8 แห่ง + ที่พักจริง 5 แห่ง แทน mock เฉพาะจังหวัดที่มีข้อมูลจริง; จังหวัดอื่นใช้ mock, lookup id รองรับทั้งจริงและ mock เพื่ออ่านทริปเดิม | เพิ่มข้อมูลจริง |
| AI/data/bangkok-food-stays.verified.json + bangkok-food-stays.report.md | ผลตรวจร้าน/ที่พักกรุงเทพฯจาก more-bangkok.json: แหล่งอ้างอิงรายที่, uncertain_fields, เครดิต/ใบอนุญาตรูป 4 รูปจริง + 9 ภาพประกอบ, HEAD ผ่าน 13 รูป; ตัด 3 รายการที่ยืนยันตัวตนไม่ได้ | ตรวจ/อัปเดตข้อมูล |
```

Add this log row:

```md
| 2026-10-25 | ข้อมูลร้าน/ที่พักจริงกรุงเทพฯ 8+5 แห่งจาก research ที่ตรวจแล้ว (ไม่แตะ DB); ตัด 3 ชื่อที่ยืนยันไม่ได้, ลบ rating/ลิงก์จองปลอม, ใช้รูปมีใบอนุญาตพร้อมเครดิตบนการ์ด, API ใช้จริงแทน mock ตามจังหวัดและอ่าน id เก่าได้ |
```

PROJECT_MAP itself was left unchanged as required for this review worktree. No changes to other restricted files are required.
