You are doing deep research to complete a dataset of tourist places in Thailand for a travel-planning app. Today is 2026-10-24. Use the most recent information available and cite every fact.

For EACH place listed below, find the missing fields shown after it. Do not change places, ids or other fields. Never invent anything: if you cannot verify a value from a reliable source (official site, Tourism Authority of Thailand, national park/department pages, Wikipedia/Wikidata, Google/OSM listings, reputable recent travel guides), output null and explain briefly in "notes".

Field rules
- image: ONLY a free-licensed photo that really shows this place. Allowed sources: Wikimedia Commons (licences CC0, Public Domain, CC BY, CC BY-SA — give the 1280px thumbnail URL from upload.wikimedia.org, the File: page URL, the author as plain text and the short licence name) or Unsplash (Unsplash License — give https://images.unsplash.com/photo-<id>?w=1200&q=80&fit=crop, the unsplash.com/photos page URL and the photographer name). You must open the file page to confirm licence and author. No Google Images, no stock sites, no social media photos.
- entry_fee_min / entry_fee_max: entrance price in THB for a Thai adult visitor (min = cheapest ticket, max = most expensive regular ticket; 0 = free). If foreigners pay more, mention it in notes.
- opening_hours: "HH:MM-HH:MM" (24h), "24 ชั่วโมง", or a short Thai text if it varies.
- closed_days: Thai text like "ปิดวันจันทร์" or null if open every day.
- best_time: Thai month range using abbreviations ม.ค. ก.พ. มี.ค. เม.ย. พ.ค. มิ.ย. ก.ค. ส.ค. ก.ย. ต.ค. พ.ย. ธ.ค., written like "พ.ย.-เม.ย.", or "ตลอดปี", or a time of day such as "เย็น ช่วงพระอาทิตย์ตก".
- visit_minutes: typical time a visitor spends (integer minutes).
- sources: list of URLs you used for this place.

Output
Return ONE JSON array only (no prose before or after), one object per place, exactly these keys:
{"id": "", "image_url": null, "image_page_url": null, "image_author": null, "image_license": null, "entry_fee_min": null, "entry_fee_max": null, "opening_hours": null, "closed_days": null, "best_time": null, "visit_minutes": null, "sources": [], "notes": ""}
Include every place below, even if all values stay null.

Places (60) — format: id | Thai name | English name | province | missing fields
- tiger-cave-temple-krabi | วัดถ้ำเสือ | Tiger Cave Temple | กระบี่ | image, opening_hours, closed_days, best_time, visit_minutes
- tha-pom-khlong-song-nam | ท่าปอมคลองสองน้ำ | Tha Pom Khlong Song Nam | กระบี่ | image, closed_days, visit_minutes
- than-bok-khorani-national-park | อุทยานแห่งชาติธารโบกขรณี | Than Bok Khorani National Park | กระบี่ | image, closed_days
- khao-phanom-bencha-national-park | อุทยานแห่งชาติเขาพนมเบญจา | Khao Phanom Bencha National Park | กระบี่ | image, closed_days, best_time, visit_minutes
- ban-koh-klang-community | ชุมชนบ้านเกาะกลาง | Ban Koh Klang Community | กระบี่ | image, opening_hours, closed_days, best_time, visit_minutes
- dragon-crest-mountain | จุดชมวิวเขาหงอนนาค | Dragon Crest Mountain Viewpoint | กระบี่ | image, closed_days, visit_minutes
- wat-kaew-korawaram | วัดแก้วโกรวาราม | Wat Kaew Korawaram | กระบี่ | image, closed_days, best_time, visit_minutes
- krabi-walking-street | ถนนคนเดินเมืองกระบี่ | Krabi Walking Street | กระบี่ | image, visit_minutes
- mud-crab-sculpture-krabi | ลานปูดำ | Krabi Mud Crab Sculpture | กระบี่ | image, closed_days, best_time, visit_minutes
- wat-maha-that-wachiramongkol | วัดมหาธาตุวชิรมงคล | Wat Maha That Wachiramongkol | กระบี่ | image, closed_days, best_time
- wat-khlong-thom-museum | พิพิธภัณฑ์วัดคลองท่อม | Wat Khlong Thom Museum | กระบี่ | image, best_time, visit_minutes
- ban-thung-yi-pheng-community | ชุมชนบ้านทุ่งหยีเพ็ง | Ban Thung Yi Pheng Community | กระบี่ | image, opening_hours, closed_days, best_time, visit_minutes
- khao-lak-lam-ru-national-park | อุทยานแห่งชาติเขาหลัก-ลำรู่ | Khao Lak-Lam Ru National Park | พังงา | image, closed_days, best_time, visit_minutes
- khao-lampi-hat-thai-mueang-national-park | อุทยานแห่งชาติเขาลำปี-หาดท้ายเหมือง | Khao Lampi-Hat Thai Mueang National Park | พังงา | image, opening_hours, closed_days, best_time, visit_minutes
- si-phang-nga-national-park | อุทยานแห่งชาติศรีพังงา | Si Phang Nga National Park | พังงา | image, closed_days, best_time, visit_minutes
- koh-yao-noi | เกาะยาวน้อย | Koh Yao Noi | พังงา | image, opening_hours, closed_days, visit_minutes
- koh-panyee | เกาะปันหยี | Koh Panyee | พังงา | image, opening_hours, closed_days
- takua-pa-old-town | ย่านเมืองเก่าตะกั่วป่า | Takua Pa Old Town | พังงา | image, closed_days, visit_minutes
- little-amazon-takua-pa | คลองสังเน่ห์ ลิตเติลแอมะซอนตะกั่วป่า | Little Amazon Takua Pa | พังงา | image, closed_days, best_time, visit_minutes
- bang-phat-village | หมู่บ้านบางพัฒน์ | Bang Phat Village | พังงา | image, closed_days, visit_minutes
- wat-bang-riang | วัดบางเหรียง | Wat Bang Riang | พังงา | image, closed_days, visit_minutes
- sa-nang-manora-waterfall | น้ำตกสระนางมโนราห์ | Sa Nang Manora Waterfall | พังงา | image, closed_days, visit_minutes
- ban-nam-khem-tsunami-memorial | อนุสรณ์สึนามิบ้านน้ำเค็ม | Ban Nam Khem Tsunami Memorial | พังงา | image, closed_days, visit_minutes
- phang-nga-city-museum | พิพิธภัณฑ์เมืองพังงา | Phang Nga City Museum | พังงา | image, best_time, visit_minutes
- khao-khad-views-tower | หอชมวิวเขาขาด | Khao Khad Views Tower | ภูเก็ต | image, closed_days, visit_minutes
- karon-beach | หาดกะรน | Karon Beach | ภูเก็ต | image, opening_hours, closed_days, best_time, visit_minutes
- kata-beach | หาดกะตะ | Kata Beach | ภูเก็ต | image, opening_hours, closed_days, visit_minutes
- nai-harn-beach | หาดในหาน | Nai Harn Beach | ภูเก็ต | image, opening_hours, closed_days, best_time, visit_minutes
- phuket-thai-hua-museum | พิพิธภัณฑ์ภูเก็ตไทยหัว | Phuket Thai Hua Museum | ภูเก็ต | image, closed_days, best_time, visit_minutes
- thalang-national-museum | พิพิธภัณฑสถานแห่งชาติถลาง | Thalang National Museum | ภูเก็ต | image, best_time, visit_minutes
- chillva-market | ตลาดชิลล์วา | Chillva Market | ภูเก็ต | image, best_time, visit_minutes
- naka-weekend-market | ตลาดนัดนาคา | Naka Weekend Market | ภูเก็ต | image, best_time, visit_minutes
- bang-pae-waterfall | น้ำตกบางแป | Bang Pae Waterfall | ภูเก็ต | image, closed_days, best_time, visit_minutes
- wat-phra-thong | วัดพระทอง | Wat Phra Thong | ภูเก็ต | image, closed_days, best_time, visit_minutes
- khao-rang-viewpoint | จุดชมวิวเขารัง | Khao Rang Viewpoint | ภูเก็ต | image, closed_days, visit_minutes
- ban-tha-chat-chai-community | ชุมชนบ้านท่าฉัตรไชย | Ban Tha Chat Chai Community | ภูเก็ต | image, opening_hours, closed_days, best_time, visit_minutes
- suan-mokkh | สวนโมกขพลาราม | Suan Mokkh | สุราษฎร์ธานี | image, closed_days
- phra-that-si-surat | พระธาตุศรีสุราษฎร์ | Phra That Si Surat | สุราษฎร์ธานี | image, closed_days
- na-muang-waterfall | น้ำตกหน้าเมือง | Na Muang Waterfall | สุราษฎร์ธานี | image, closed_days, best_time, visit_minutes
- bo-phut-beach | หาดบ่อผุด | Bo Phut Beach | สุราษฎร์ธานี | image, opening_hours, closed_days, visit_minutes
- wat-khao-phang-hanging-bridge | สะพานแขวนวัดเขาพัง | Wat Khao Phang Hanging Bridge | สุราษฎร์ธานี | image, opening_hours, closed_days, visit_minutes
- koh-lamphu-public-park | สวนสาธารณะเกาะลำพู | Koh Lamphu Public Park | สุราษฎร์ธานี | image, opening_hours, closed_days, visit_minutes
- chaiya-national-museum | พิพิธภัณฑสถานแห่งชาติไชยา | Chaiya National Museum | สุราษฎร์ธานี | image
- phum-riang-village | หมู่บ้านพุมเรียง | Phum Riang Village | สุราษฎร์ธานี | image, closed_days, visit_minutes
- khlong-phanom-national-park | อุทยานแห่งชาติคลองพนม | Khlong Phanom National Park | สุราษฎร์ธานี | image, opening_hours, closed_days, visit_minutes
- tai-rom-yen-national-park | อุทยานแห่งชาติใต้ร่มเย็น | Tai Rom Yen National Park | สุราษฎร์ธานี | image, closed_days, best_time, visit_minutes
- hin-phat-viewpoint | หินพัด | Hin Phat Viewpoint | สุราษฎร์ธานี | image, closed_days, visit_minutes
- sala-athit-garden | สวนสละอาทิตย์ | Sala Athit Garden | สุราษฎร์ธานี | image, closed_days, best_time, visit_minutes
- suchart-supsin-shadow-puppet-museum | บ้านหนังตะลุงสุชาติ ทรัพย์สิน | Suchart Supsin Shadow Puppet Museum | นครศรีธรรมราช | image, closed_days, best_time
- nakhon-si-thammarat-old-city-wall | กำแพงเมืองเก่านครศรีธรรมราช | Nakhon Si Thammarat Old City Wall | นครศรีธรรมราช | image, opening_hours, closed_days, best_time
- ligor-floating-market | ตลาดน้ำเมืองลิกอร์ | Ligor Floating Market | นครศรีธรรมราช | image
- pak-phanang-retro-market | ตลาดย้อนยุคปากพนัง | Pak Phanang Retro Market | นครศรีธรรมราช | image
- nai-phlao-beach | หาดในเพลา | Nai Phlao Beach | นครศรีธรรมราช | image, opening_hours, closed_days
- laem-talumphuk | แหลมตะลุมพุก | Laem Talumphuk | นครศรีธรรมราช | image, opening_hours, closed_days
- khao-wang-thong-cave | ถ้ำเขาวังทอง | Khao Wang Thong Cave | นครศรีธรรมราช | image, closed_days
- phrom-lok-waterfall | น้ำตกพรหมโลก | Phrom Lok Waterfall | นครศรีธรรมราช | image, closed_days, visit_minutes
- wat-chedi-ai-khai | วัดเจดีย์ไอ้ไข่ | Wat Chedi Ai Khai | นครศรีธรรมราช | image, closed_days, best_time, visit_minutes
- khao-sun-viewpoint | จุดชมวิวเขาศูนย์ | Khao Sun Viewpoint | นครศรีธรรมราช | image, closed_days, visit_minutes
- ban-than-khun-nakhon-si-thammarat | บ้านท่านขุน | Ban Than Khun | นครศรีธรรมราช | image, closed_days
- khao-kha-archaeological-site | โบราณสถานเขาคา | Khao Kha Archaeological Site | นครศรีธรรมราช | image, closed_days, visit_minutes
