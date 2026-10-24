You are doing careful, verified research for a Thai travel-planning app (LaMoon). Today is 2026-10-24. Find NEW tourist attractions, restaurants and places to stay in the 5 southern provinces. Collect AS MANY AS YOU CAN while staying accurate — targets are minimums: ≥ 10 new attractions per province (≥ 50 total); restaurants ≥ 25 (≥ 5 per province); stays ≥ 15 (≥ 3 per province).

Rules
- Province ids to use: krabi, phang-nga, phuket, surat-thani, nakhon-si-thammarat.
- NOT a duplicate of the existing places listed at the bottom (same real place = duplicate even if the name is written differently). No duplicates inside your own list either.
- Mix famous, less-known and local spots; cover all 7 moods; for Bangkok spread across many districts. Skip anything permanently/temporarily closed.
- Cross-check key facts (still open, location, price, hours) with ≥ 2 independent sources: official site/page, Google Maps, TAT, Wikipedia/Wikidata, Michelin Guide, Wongnai, Agoda/Booking/Traveloka. Use the newest information.
- Never guess: unknown → null and add the field name to "uncertain_fields". Descriptions are your own short Thai sentences.
- Coordinates must point at the place itself (Google Maps/OSM/official) and lie inside the stated province.

OUTPUT: a single JSON file (save/download as `more-south.json`), nothing else:
{"generated_at": "2026-10-24", "researcher": "your name", "places": [ ... ], "restaurants": [ ... ], "stays": [ ... ]}

PLACE (attraction) object (all keys present):
{
  "id": "slug-from-english-name", "province": "province id",
  "name_th": "", "name_en": "", "district_th": "",
  "description_th": "1–2 short original Thai sentences",
  "lat": 0, "lng": 0, "coords_source": "url", "coords_uncertain": false,
  "tags": ["2–4 Thai tags"],
  "moods": ["1–3 of: beach mountain food temple quiet photo adventure"],   // beach = ชิลริมน้ำ (sea/river/lake), mountain = ธรรมชาติ/ภูเขา, food = สายกิน, temple = วัด/เมืองเก่า/ประวัติศาสตร์/วัฒนธรรม, quiet = เงียบสงบ, photo = ถ่ายรูปสวย, adventure = กิจกรรม/ผจญภัย/ไนท์ไลฟ์
  "mood_reason": "short Thai reason",
  "stats": {"chill": 0, "adventure": 0, "photo": 0, "food": 0, "budget": 0},   // 0–5; budget 5 = free/cheap
  "popularity": "ดัง | พอรู้จัก | ลับ",
  "best_time": "Thai month range like 'พ.ย.-เม.ย.', 'ตลอดปี', or time of day",
  "opening_hours": "HH:MM-HH:MM | 24 ชั่วโมง | text", "closed_days": null,
  "entry_fee_thb": {"min": 0, "max": 0},           // Thai adult; 0 = free
  "visit_minutes": 90,
  "nearby_booking_hint": "Thai hint",
  "image_url": null, "image_page_url": null, "image_author": null, "image_license": null,   // Wikimedia Commons (free licence, 1280px thumb) or Unsplash only, verified
  "sources": ["urls"],
  "uncertain_fields": []
}

RESTAURANT object (all keys present):
{
  "id": "slug-from-english-name",
  "province": "bangkok",
  "name_th": "", "name_en": "",
  "kind": "restaurant | street_food | cafe | market | bakery | bar",
  "cuisine_th": ["ไทยใต้","ซีฟู้ด"],
  "signature_dishes_th": ["2–4 dishes it is known for"],
  "meals": ["breakfast","lunch","dinner","snack"],
  "area_th": "", "lat": 0, "lng": 0, "coords_source": "url",
  "description_th": "1 short original Thai sentence",
  "price_per_person_thb": {"min": 0, "max": 0},  // typical spend per person
  "opening_hours": "HH:MM-HH:MM | text", "closed_days": "Thai text or null",
  "awards": ["e.g. Michelin Bib Gourmand 2026", "Wongnai Users' Choice 2026"],   // only if verified on the awarding site
  "rating": {"score": 0, "out_of": 5, "count": 0, "source": "url"},
  "dietary": ["halal","vegetarian","vegan"],       // only verified
  "moods": ["food + up to 2 more"],
  "website": "official url/social page or null",
  "image_url": null, "image_page_url": null, "image_author": null, "image_license": null,   // free-licensed only, as above
  "official_image_url": null,                      // from its own website/official page, only if clearly this place
  "sources": ["urls"],
  "uncertain_fields": []
}

STAY object (all keys present):
{
  "id": "slug-from-english-name",                 // lowercase a-z0-9-
  "province": "bangkok",                          // province id given above
  "name_th": "", "name_en": "",
  "type": "hotel | resort | boutique | hostel | guesthouse | homestay | villa",
  "area_th": "ย่าน/อำเภอ เช่น อ่าวนาง",
  "lat": 0, "lng": 0, "coords_source": "url (Google Maps/OSM/official)",
  "description_th": "1 short original Thai sentence (no copying)",
  "price_per_night_thb": {"min": 0, "max": 0},   // standard double room, 2 adults, typical (non-holiday) rate; from a listing you opened
  "price_checked_on": "2026-10-xx", "price_source": "url",
  "tier": "saver | mid | comfy",                  // saver < ฿1,200/night, mid ฿1,200–3,500, comfy > ฿3,500
  "rating": {"score": 0, "out_of": 10, "count": 0, "source": "url"},
  "amenities": ["pool","breakfast","free_wifi","parking","beach_access","near_transit","family","pet_friendly","workspace"],  // only verified ones
  "moods": ["1–3 of: beach mountain food temple quiet photo adventure"],
  "check_in": "14:00", "check_out": "12:00",
  "website": "official url or null",
  "booking_urls": {"agoda": null, "booking": null, "traveloka": null},  // direct property pages you opened
  "image_url": null, "image_page_url": null, "image_author": null, "image_license": null,   // ONLY Wikimedia Commons (CC0/PD/CC BY/CC BY-SA, 1280px thumbnail) or Unsplash, verified on the file page
  "official_image_url": null,                      // the property's own og:image/hero image URL from its official website (copyrighted; app will credit it) — only if it clearly shows this property
  "sources": ["urls"],
  "uncertain_fields": []
}

Before answering, re-check: nothing duplicates the existing list or itself; every coordinate is inside its province; prices/fees have sources; JSON is valid.

EXISTING PLACES — do not repeat (province | id | Thai name | English name), 88 items:
- krabi | ao-nang-beach | หาดอ่าวนาง | Ao Nang Beach
- krabi | ban-koh-klang-community | ชุมชนบ้านเกาะกลาง | Ban Koh Klang Community
- krabi | ban-thung-yi-pheng-community | ชุมชนบ้านทุ่งหยีเพ็ง | Ban Thung Yi Pheng Community
- krabi | dragon-crest-mountain | จุดชมวิวเขาหงอนนาค | Dragon Crest Mountain Viewpoint
- krabi | emerald-pool | สระมรกต | Emerald Pool
- krabi | khao-phanom-bencha-national-park | อุทยานแห่งชาติเขาพนมเบญจา | Khao Phanom Bencha National Park
- krabi | krabi-walking-street | ถนนคนเดินเมืองกระบี่ | Krabi Walking Street
- krabi | laem-sak-community | ชุมชนแหลมสัก | Laem Sak Community
- krabi | maya-bay | อ่าวมาหยา | Maya Bay
- krabi | mud-crab-sculpture-krabi | ลานปูดำ | Krabi Mud Crab Sculpture
- krabi | railay-beach | หาดไร่เลย์ | Railay Beach
- krabi | tha-pom-khlong-song-nam | ท่าปอมคลองสองน้ำ | Tha Pom Khlong Song Nam
- krabi | than-bok-khorani-national-park | อุทยานแห่งชาติธารโบกขรณี | Than Bok Khorani National Park
- krabi | tiger-cave-temple-krabi | วัดถ้ำเสือ | Tiger Cave Temple
- krabi | wat-kaew-korawaram | วัดแก้วโกรวาราม | Wat Kaew Korawaram
- krabi | wat-khlong-thom-museum | พิพิธภัณฑ์วัดคลองท่อม | Wat Khlong Thom Museum
- krabi | wat-maha-that-wachiramongkol | วัดมหาธาตุวชิรมงคล | Wat Maha That Wachiramongkol
- nakhon-si-thammarat | ban-than-khun-nakhon-si-thammarat | บ้านท่านขุน | Ban Than Khun
- nakhon-si-thammarat | khao-kha-archaeological-site | โบราณสถานเขาคา | Khao Kha Archaeological Site
- nakhon-si-thammarat | khao-sun-viewpoint | จุดชมวิวเขาศูนย์ | Khao Sun Viewpoint
- nakhon-si-thammarat | khao-wang-thong-cave | ถ้ำเขาวังทอง | Khao Wang Thong Cave
- nakhon-si-thammarat | kiriwong-village | หมู่บ้านคีรีวง | Kiriwong Village
- nakhon-si-thammarat | krung-ching-waterfall | น้ำตกกรุงชิง | Krung Ching Waterfall
- nakhon-si-thammarat | laem-homestay | บ้านแหลมโฮมสเตย์ | Laem Homestay
- nakhon-si-thammarat | laem-talumphuk | แหลมตะลุมพุก | Laem Talumphuk
- nakhon-si-thammarat | ligor-floating-market | ตลาดน้ำเมืองลิกอร์ | Ligor Floating Market
- nakhon-si-thammarat | nai-phlao-beach | หาดในเพลา | Nai Phlao Beach
- nakhon-si-thammarat | nakhon-si-thammarat-old-city-wall | กำแพงเมืองเก่านครศรีธรรมราช | Nakhon Si Thammarat Old City Wall
- nakhon-si-thammarat | pak-phanang-retro-market | ตลาดย้อนยุคปากพนัง | Pak Phanang Retro Market
- nakhon-si-thammarat | phrom-lok-waterfall | น้ำตกพรหมโลก | Phrom Lok Waterfall
- nakhon-si-thammarat | sichon-beach | หาดสิชล | Sichon Beach
- nakhon-si-thammarat | suchart-supsin-shadow-puppet-museum | บ้านหนังตะลุงสุชาติ ทรัพย์สิน | Suchart Supsin Shadow Puppet Museum
- nakhon-si-thammarat | wat-chedi-ai-khai | วัดเจดีย์ไอ้ไข่ | Wat Chedi Ai Khai
- nakhon-si-thammarat | wat-phra-mahathat-woramahawihan | วัดพระมหาธาตุวรมหาวิหาร | Wat Phra Mahathat Woramahawihan
- phang-nga | baan-sam-chong-nuea | ชุมชนบ้านสามช่องเหนือ | Baan Sam Chong Nuea
- phang-nga | ban-nam-khem-tsunami-memorial | อนุสรณ์สึนามิบ้านน้ำเค็ม | Ban Nam Khem Tsunami Memorial
- phang-nga | bang-phat-village | หมู่บ้านบางพัฒน์ | Bang Phat Village
- phang-nga | james-bond-island | เกาะตาปู (เขาตะปู) | James Bond Island
- phang-nga | khao-lak-lam-ru-national-park | อุทยานแห่งชาติเขาหลัก-ลำรู่ | Khao Lak-Lam Ru National Park
- phang-nga | khao-lampi-hat-thai-mueang-national-park | อุทยานแห่งชาติเขาลำปี-หาดท้ายเหมือง | Khao Lampi-Hat Thai Mueang National Park
- phang-nga | koh-panyee | เกาะปันหยี | Koh Panyee
- phang-nga | koh-yao-noi | เกาะยาวน้อย | Koh Yao Noi
- phang-nga | little-amazon-takua-pa | คลองสังเน่ห์ ลิตเติลแอมะซอนตะกั่วป่า | Little Amazon Takua Pa
- phang-nga | phang-nga-city-museum | พิพิธภัณฑ์เมืองพังงา | Phang Nga City Museum
- phang-nga | sa-nang-manora-waterfall | น้ำตกสระนางมโนราห์ | Sa Nang Manora Waterfall
- phang-nga | samet-nangshe-viewpoint | จุดชมวิวเสม็ดนางชี | Samet Nangshe Viewpoint
- phang-nga | si-phang-nga-national-park | อุทยานแห่งชาติศรีพังงา | Si Phang Nga National Park
- phang-nga | similan-islands | หมู่เกาะสิมิลัน | Similan Islands
- phang-nga | takua-pa-old-town | ย่านเมืองเก่าตะกั่วป่า | Takua Pa Old Town
- phang-nga | wat-bang-riang | วัดบางเหรียง | Wat Bang Riang
- phang-nga | wat-suwan-kuha | วัดสุวรรณคูหา (วัดถ้ำ) | Wat Suwan Kuha
- phuket | baan-bang-rong-community | ชุมชนบ้านบางโรง | Baan Bang Rong Community
- phuket | ban-tha-chat-chai-community | ชุมชนบ้านท่าฉัตรไชย | Ban Tha Chat Chai Community
- phuket | bang-pae-waterfall | น้ำตกบางแป | Bang Pae Waterfall
- phuket | big-buddha-phuket | พระพุทธมิ่งมงคลเอกนาคคีรี (พระใหญ่) | Big Buddha Phuket
- phuket | chillva-market | ตลาดชิลล์วา | Chillva Market
- phuket | karon-beach | หาดกะรน | Karon Beach
- phuket | kata-beach | หาดกะตะ | Kata Beach
- phuket | khao-khad-views-tower | หอชมวิวเขาขาด | Khao Khad Views Tower
- phuket | khao-rang-viewpoint | จุดชมวิวเขารัง | Khao Rang Viewpoint
- phuket | nai-harn-beach | หาดในหาน | Nai Harn Beach
- phuket | naka-weekend-market | ตลาดนัดนาคา | Naka Weekend Market
- phuket | patong-beach | หาดป่าตอง | Patong Beach
- phuket | phuket-old-town | ย่านเมืองเก่าภูเก็ต | Phuket Old Town
- phuket | phuket-thai-hua-museum | พิพิธภัณฑ์ภูเก็ตไทยหัว | Phuket Thai Hua Museum
- phuket | thalang-national-museum | พิพิธภัณฑสถานแห่งชาติถลาง | Thalang National Museum
- phuket | wat-chalong | วัดไชยธาราราม (วัดฉลอง) | Wat Chalong
- phuket | wat-phra-thong | วัดพระทอง | Wat Phra Thong
- surat-thani | bang-bai-mai-community | ชุมชนบางใบไม้ | Bang Bai Mai Community
- surat-thani | bo-phut-beach | หาดบ่อผุด | Bo Phut Beach
- surat-thani | chaiya-national-museum | พิพิธภัณฑสถานแห่งชาติไชยา | Chaiya National Museum
- surat-thani | full-moon-party-haad-rin | ฟูลมูนปาร์ตี้ หาดริ้น | Full Moon Party Haad Rin
- surat-thani | hin-phat-viewpoint | หินพัด | Hin Phat Viewpoint
- surat-thani | khao-sok-national-park | อุทยานแห่งชาติเขาสก | Khao Sok National Park
- surat-thani | khlong-phanom-national-park | อุทยานแห่งชาติคลองพนม | Khlong Phanom National Park
- surat-thani | koh-lamphu-public-park | สวนสาธารณะเกาะลำพู | Koh Lamphu Public Park
- surat-thani | koh-nang-yuan | เกาะนางยวน | Koh Nang Yuan
- surat-thani | lipa-noi-beach | หาดลิปะน้อย | Lipa Noi Beach
- surat-thani | na-muang-waterfall | น้ำตกหน้าเมือง | Na Muang Waterfall
- surat-thani | phra-that-si-surat | พระธาตุศรีสุราษฎร์ | Phra That Si Surat
- surat-thani | phum-riang-village | หมู่บ้านพุมเรียง | Phum Riang Village
- surat-thani | ratchaprapha-dam | เขื่อนรัชชประภา | Ratchaprapha Dam
- surat-thani | sala-athit-garden | สวนสละอาทิตย์ | Sala Athit Garden
- surat-thani | san-chao-market | ตลาดศาลเจ้า | San Chao Market
- surat-thani | suan-mokkh | สวนโมกขพลาราม | Suan Mokkh
- surat-thani | tai-rom-yen-national-park | อุทยานแห่งชาติใต้ร่มเย็น | Tai Rom Yen National Park
- surat-thani | wat-khao-phang-hanging-bridge | สะพานแขวนวัดเขาพัง | Wat Khao Phang Hanging Bridge
- surat-thani | wat-phra-borommathat-chaiya | วัดพระบรมธาตุไชยา | Wat Phra Borommathat Chaiya
