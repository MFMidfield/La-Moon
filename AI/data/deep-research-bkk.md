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

Places (50) — format: id | Thai name | English name | province | missing fields
- wat-arun | วัดอรุณราชวราราม | Wat Arun | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-pho | วัดพระเชตุพนวิมลมังคลาราม | Wat Pho | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- grand-palace-bangkok | พระบรมมหาราชวัง | Grand Palace | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-saket | วัดสระเกศและภูเขาทอง | Wat Saket and Golden Mount | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-suthat | วัดสุทัศนเทพวราราม | Wat Suthat | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-benchamabophit | วัดเบญจมบพิตรดุสิตวนาราม | Wat Benchamabophit | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-ratchanatdaram | วัดราชนัดดารามวรวิหาร | Wat Ratchanatdaram | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-traimit | วัดไตรมิตรวิทยาราม | Wat Traimit | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-paknam-bhasicharoen | วัดปากน้ำภาษีเจริญ | Wat Paknam Bhasicharoen | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-kalayanamitr | วัดกัลยาณมิตรวรมหาวิหาร | Wat Kalayanamitr | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- bangkok-art-and-culture-centre | หอศิลปวัฒนธรรมแห่งกรุงเทพมหานคร | Bangkok Art and Culture Centre | กรุงเทพฯ | best_time, visit_minutes
- museum-siam | มิวเซียมสยาม | Museum Siam | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- bangkok-national-museum | พิพิธภัณฑสถานแห่งชาติ พระนคร | Bangkok National Museum | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- jim-thompson-house | พิพิธภัณฑ์บ้านจิม ทอมป์สัน | Jim Thompson House | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- moca-bangkok | พิพิธภัณฑ์ศิลปะไทยร่วมสมัย | MOCA Bangkok | กรุงเทพฯ | best_time, visit_minutes
- bangkokian-museum | พิพิธภัณฑ์ชาวบางกอก | Bangkokian Museum | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- national-museum-of-royal-barges | พิพิธภัณฑสถานแห่งชาติ เรือพระราชพิธี | National Museum of Royal Barges | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- lumphini-park | สวนลุมพินี | Lumphini Park | กรุงเทพฯ | entry_fee_thb, closed_days, best_time, visit_minutes
- benjakitti-park | สวนเบญจกิติ | Benjakitti Park | กรุงเทพฯ | image, entry_fee_thb, closed_days, best_time, visit_minutes
- chatuchak-park | สวนจตุจักร | Chatuchak Park | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- queen-sirikit-park-bangkok | สวนสมเด็จพระนางเจ้าสิริกิติ์ฯ | Queen Sirikit Park | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wachirabenchathat-park | สวนวชิรเบญจทัศ (สวนรถไฟ) | Wachirabenchathat Park | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- suan-luang-rama-ix | สวนหลวง ร.9 | Suan Luang Rama IX | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- nong-bon-water-sports-center | ศูนย์กีฬาทางน้ำบึงหนองบอน | Nong Bon Water Sports Center | กรุงเทพฯ | image, entry_fee_thb, closed_days, visit_minutes
- santiphap-park | สวนสันติภาพ | Santiphap Park | กรุงเทพฯ | entry_fee_thb, closed_days, best_time, visit_minutes
- santichaiprakarn-park | สวนสันติชัยปราการ | Santichaiprakarn Park | กรุงเทพฯ | image, entry_fee_thb, closed_days, visit_minutes
- rommaninat-park | สวนรมณีนาถ | Rommaninat Park | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- chatuchak-weekend-market | ตลาดนัดจตุจักร | Chatuchak Weekend Market | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- or-tor-kor-market | ตลาด อ.ต.ก. | Or Tor Kor Market | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- pak-khlong-talat | ปากคลองตลาด | Pak Khlong Talat | กรุงเทพฯ | image, entry_fee_thb, closed_days, visit_minutes
- taling-chan-floating-market | ตลาดน้ำตลิ่งชัน | Taling Chan Floating Market | กรุงเทพฯ | image, entry_fee_thb, best_time, visit_minutes
- khlong-lat-mayom-floating-market | ตลาดน้ำคลองลัดมะยม | Khlong Lat Mayom Floating Market | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- khwan-riam-floating-market | ตลาดน้ำขวัญเรียม | Khwan Riam Floating Market | กรุงเทพฯ | entry_fee_thb, best_time, visit_minutes
- wang-lang-market | ตลาดวังหลัง | Wang Lang Market | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- talat-noi | ตลาดน้อย | Talat Noi | กรุงเทพฯ | entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- kudi-chin | ชุมชนกุฎีจีน | Kudi Chin | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-suwannaram-bangkok | วัดสุวรรณารามราชวรวิหาร | Wat Suwannaram | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- sam-phraeng | ย่านสามแพร่ง | Sam Phraeng | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- nang-loeng-market | ตลาดนางเลิ้ง | Nang Loeng Market | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- wat-ratchabophit | วัดราชบพิธสถิตมหาสีมาราม | Wat Ratchabophit | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- yaowarat-road | ถนนเยาวราช | Yaowarat Road | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- khaosan-road | ถนนข้าวสาร | Khaosan Road | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- song-wat-road | ถนนทรงวาด | Song Wat Road | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- grand-postal-building-bangkok | อาคารไปรษณีย์กลาง บางรัก | Grand Postal Building | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- iconsiam | ไอคอนสยาม | ICONSIAM | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- asiatique-the-riverfront | เอเชียทีค เดอะ ริเวอร์ฟร้อนท์ | Asiatique The Riverfront | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- king-power-mahanakhon | คิง เพาเวอร์ มหานคร | King Power Mahanakhon | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- rajadamnern-stadium | สนามมวยราชดำเนิน | Rajadamnern Stadium | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- queen-saovabha-memorial-institute | สถานเสาวภา สภากาชาดไทย | Queen Saovabha Memorial Institute | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
- erawan-shrine | ศาลท้าวมหาพรหมเอราวัณ | Erawan Shrine | กรุงเทพฯ | image, entry_fee_thb, opening_hours, closed_days, best_time, visit_minutes
