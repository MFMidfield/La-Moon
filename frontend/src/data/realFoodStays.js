// Verified Bangkok data; sources and uncertainties: AI/data/bangkok-food-stays.verified.json
// Prices are THB estimates per person (food) / private double room per night (stays).
export const REAL_RESTAURANTS = [
  {
    "id": "jay-fai",
    "province": "bangkok",
    "name_en": "Jay Fai",
    "lat": 13.752606,
    "lng": 100.504769,
    "moods": [
      "food"
    ],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bangkok_street_food_-_Jay_Fai.jpg/1280px-Bangkok_street_food_-_Jay_Fai.jpg",
    "image_credit": "Streets of Food / Wikimedia Commons",
    "image_license": "CC BY 2.0",
    "image_page_url": "https://commons.wikimedia.org/wiki/File:Bangkok_street_food_-_Jay_Fai.jpg",
    "website": "https://www.instagram.com/jayfaibangkok/",
    "name": "เจ๊ไฝ",
    "area": "สำราญราษฎร์ เขตพระนคร",
    "description": "ร้านอาหารสตรีทฟู้ดระดับมิชลิน 1 ดาวชื่อดังโลกริมถนนมหาไชย",
    "awards": [
      "MICHELIN 1 ดาว"
    ],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_person_thb"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "09:00-19:30",
    "closed_days": "วันอาทิตย์-อังคาร",
    "cuisine": [
      "ไทย",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "ไข่เจียวปู",
      "ราดหน้าทะเล"
    ],
    "price_per_person": {
      "min": 600,
      "max": 2000
    }
  },
  {
    "id": "thipsamai-pad-thai",
    "province": "bangkok",
    "name_en": "Thipsamai Pad Thai (Pratoopee)",
    "lat": 13.7528325,
    "lng": 100.5047875,
    "moods": [
      "food"
    ],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Thipsamai_%28September_2016%29.jpeg/1280px-Thipsamai_%28September_2016%29.jpeg",
    "image_credit": "LWYang from USA / Wikimedia Commons",
    "image_license": "CC BY 2.0",
    "image_page_url": "https://commons.wikimedia.org/wiki/File:Thipsamai_(September_2016).jpeg",
    "website": "https://thipsamai.com",
    "name": "ทิพย์สมัย ผัดไทยประตูผี",
    "area": "ประตูผี สำราญราษฎร์ เขตพระนคร",
    "description": "ร้านผัดไทยประตูผีบนถนนมหาไชย มีผัดไทยมันกุ้งห่อไข่เป็นเมนูเด่น",
    "awards": [],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_person_thb"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ],
    "opening_hours": "09:00-24:00",
    "closed_days": "วันอังคาร",
    "cuisine": [
      "ไทย",
      "ผัดไทย"
    ],
    "signature_dishes": [
      "ผัดไทยมันกุ้งห่อไข่",
      "น้ำส้มคั้นสด"
    ],
    "price_per_person": {
      "min": 75,
      "max": 150
    }
  },
  {
    "id": "somboon-seafood-ban-thad-thong",
    "province": "bangkok",
    "name_en": "Somboon Seafood (Bantadthong)",
    "lat": 13.745208,
    "lng": 100.523898,
    "moods": [
      "food"
    ],
    "image_url": "https://images.unsplash.com/photo-1716959669858-11d415bdead6?auto=format&fit=crop&w=1280&q=80",
    "image_credit": "You Le / Unsplash",
    "image_license": "ภาพประกอบ · Unsplash License",
    "image_page_url": "https://unsplash.com/photos/a-bowl-of-soup-with-a-spoon-in-it-JTTxGQaFZKw",
    "website": "https://www.somboonseafood.com",
    "name": "สมบูรณ์โภชนา บรรทัดทอง",
    "area": "บรรทัดทอง วังใหม่ เขตปทุมวัน",
    "description": "ต้นตำรับปูผัดผงกะหรี่อันลือชื่อขวัญใจนักท่องเที่ยวทั่วโลก",
    "awards": [],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_person_thb",
      "closed_days"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "11:00-22:00 (รับรายการสุดท้าย 21:30)",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "จีน-ไทย"
    ],
    "signature_dishes": [
      "ปูผัดผงกะหรี่",
      "ต้มยำกุ้ง"
    ],
    "price_per_person": {
      "min": 300,
      "max": 600
    }
  },
  {
    "id": "here-hai",
    "province": "bangkok",
    "name_en": "Here Hai (Vadhana)",
    "lat": 13.7302655,
    "lng": 100.586342,
    "moods": [
      "food"
    ],
    "image_url": "https://images.pexels.com/photos/31029445/pexels-photo-31029445.jpeg?auto=compress&cs=tinysrgb&w=1280",
    "image_credit": "Ali Kazal / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/authentic-thai-fried-rice-on-rustic-table-31029445/",
    "website": "https://www.facebook.com/herehaifoods/",
    "name": "เฮียให้ ข้าวผัดโคตรปู",
    "area": "เอกมัย คลองตันเหนือ เขตวัฒนา",
    "description": "ร้านข้าวผัดปูแน่นๆ ระดับ Bib Gourmand ย่านเอกมัย",
    "awards": [
      "MICHELIN Bib Gourmand"
    ],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_person_thb"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch"
    ],
    "opening_hours": "10:00-15:00, 16:00-17:30",
    "closed_days": "วันจันทร์",
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "ข้าวผัดปูแกะ",
      "กั้งผัดพริกสด"
    ],
    "price_per_person": {
      "min": 225,
      "max": 450
    }
  },
  {
    "id": "jeh-o-chula",
    "province": "bangkok",
    "name_en": "Jeh O Chula",
    "lat": 13.7424996,
    "lng": 100.5225179,
    "moods": [
      "food"
    ],
    "image_url": "https://images.pexels.com/photos/12561892/pexels-photo-12561892.jpeg?auto=compress&cs=tinysrgb&w=1280",
    "image_credit": "Augustinus Martinus Noppé / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/tom-yum-soup-in-white-ceramic-bowl-12561892/",
    "website": "https://www.facebook.com/RanCeXow/",
    "name": "เจ๊โอว",
    "area": "จรัสเมือง รองเมือง เขตปทุมวัน",
    "description": "ร้านต้มยำมาม่าหน้าแน่นในตำนานย่านจุฬาฯ ที่คนต่อคิวแน่นทุกคืน",
    "awards": [
      "MICHELIN Bib Gourmand 2025"
    ],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_person_thb",
      "opening_hours",
      "closed_days"
    ],
    "kind": "street_food",
    "meals": [
      "dinner",
      "snack"
    ],
    "opening_hours": "16:30-24:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "มาม่าโอ้โห",
      "หมูกรอบ"
    ],
    "price_per_person": {
      "min": 125,
      "max": 250
    }
  },
  {
    "id": "wattana-panich",
    "province": "bangkok",
    "name_en": "Wattana Panich",
    "lat": 13.7341699,
    "lng": 100.5876494,
    "moods": [
      "food"
    ],
    "image_url": "https://images.pexels.com/photos/35283658/pexels-photo-35283658.jpeg?auto=compress&cs=tinysrgb&w=1280",
    "image_credit": "นิรมล บุญเทพ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/traditional-thai-noodle-dish-in-rich-broth-35283658/",
    "website": "https://www.facebook.com/pages/Wattana-Panich/210308925676506",
    "name": "วัฒนาพานิช ก๋วยเตี๋ยวเนื้อ",
    "area": "เอกมัย คลองตันเหนือ เขตวัฒนา",
    "description": "ร้านเนื้อตุ๋นน้ำซุปเคี่ยวข้ามปีอันเป็นเอกลักษณ์ย่านเอกมัย",
    "awards": [],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_person_thb",
      "opening_hours",
      "closed_days"
    ],
    "kind": "street_food",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "09:00-19:30",
    "closed_days": null,
    "cuisine": [
      "ไทย-จีน",
      "ก๋วยเตี๋ยวเนื้อ"
    ],
    "signature_dishes": [
      "เกาเหลาเนื้อตุ๋น",
      "ก๋วยเตี๋ยวเนื้อรวม"
    ],
    "price_per_person": {
      "min": 75,
      "max": 150
    }
  },
  {
    "id": "mont-nomsod-sao-chingcha",
    "province": "bangkok",
    "name_en": "Mont Nomsod Sao Chingcha",
    "lat": 13.7541542,
    "lng": 100.501137,
    "moods": [
      "food"
    ],
    "image_url": "https://images.pexels.com/photos/35751487/pexels-photo-35751487.jpeg?auto=compress&cs=tinysrgb&w=1280",
    "image_credit": "Ana Dolidze / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/rustic-breakfast-with-milk-and-toast-35751487/",
    "website": "https://www.mont-nomsod.com",
    "name": "มนต์ นมสด เสาชิงช้า",
    "area": "ถนนดินสอ เสาชิงช้า เขตพระนคร",
    "description": "ร้านขนมปังปิ้งและนมสดโบราณชื่อดังตรงข้ามศาลาว่าการกรุงเทพฯ",
    "awards": [],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_person_thb",
      "closed_days",
      "website"
    ],
    "kind": "bakery",
    "meals": [
      "snack",
      "dinner"
    ],
    "opening_hours": "13:00-22:00",
    "closed_days": null,
    "cuisine": [
      "เบเกอรี่",
      "เครื่องดื่ม"
    ],
    "signature_dishes": [
      "ขนมปังสังขยาใบเตย",
      "นมสดเย็น"
    ],
    "price_per_person": {
      "min": 40,
      "max": 80
    }
  },
  {
    "id": "rongros",
    "province": "bangkok",
    "name_en": "Rongros",
    "lat": 13.74432,
    "lng": 100.49163,
    "moods": [
      "food",
      "photo"
    ],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Lunch_at_Rongros%2C_Bangkok_%28Jan_2021%29_-_img_01.jpg/1280px-Lunch_at_Rongros%2C_Bangkok_%28Jan_2021%29_-_img_01.jpg",
    "image_credit": "Chainwit. / Wikimedia Commons",
    "image_license": "CC BY-SA 4.0",
    "image_page_url": "https://commons.wikimedia.org/wiki/File:Lunch_at_Rongros,_Bangkok_(Jan_2021)_-_img_01.jpg",
    "website": "https://www.facebook.com/rongrosbkk",
    "name": "โรงรส",
    "area": "ท่าเตียน พระบรมมหาราชวัง เขตพระนคร",
    "description": "ร้านอาหารไทยริมแม่น้ำเจ้าพระยาชมวิวพระปรางค์วัดอรุณตระการตา",
    "awards": [
      "MICHELIN Selected (ไม่ระบุปี)"
    ],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_person_thb"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "11:00-15:00, 17:00-22:00",
    "closed_days": null,
    "cuisine": [
      "ไทย"
    ],
    "signature_dishes": [
      "แตงโมหน้าปลาแห้ง",
      "แกงเขียวหวานเนื้อ"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  }
]

export const REAL_STAYS = [
  {
    "id": "mandarin-oriental-bangkok",
    "province": "bangkok",
    "name_en": "Mandarin Oriental, Bangkok",
    "lat": 13.72361,
    "lng": 100.51444,
    "moods": [
      "luxury",
      "quiet",
      "photo"
    ],
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mandarin_Oriental_Bangkok_Authors_Wing_-_01.jpg/1280px-Mandarin_Oriental_Bangkok_Authors_Wing_-_01.jpg",
    "image_credit": "Chainwit. / Wikimedia Commons",
    "image_license": "CC BY-SA 4.0",
    "image_page_url": "https://commons.wikimedia.org/wiki/File:Mandarin_Oriental_Bangkok_Authors_Wing_-_01.jpg",
    "website": "https://www.mandarinoriental.com/en/bangkok/chao-phraya-river",
    "name": "โรงแรมแมนดาริน โอเรียนเต็ล กรุงเทพฯ",
    "area": "บางรัก · ริมแม่น้ำเจ้าพระยา",
    "description": "โรงแรมหรูริมแม่น้ำเจ้าพระยาย่านบางรัก เปิดตั้งแต่ปี พ.ศ. 2419 มีสระว่ายน้ำและสปา",
    "awards": [
      "3 MICHELIN Keys (2026)"
    ],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_night_thb",
      "price_per_night_thb.taxes_and_fees"
    ],
    "type": "hotel",
    "tier": "comfy",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 26953.3,
      "max": 30484.3
    }
  },
  {
    "id": "siam-kempinski-hotel-bangkok",
    "province": "bangkok",
    "name_en": "Siam Kempinski Hotel Bangkok",
    "lat": 13.748514,
    "lng": 100.534829,
    "moods": [
      "luxury",
      "quiet",
      "photo"
    ],
    "image_url": "https://images.unsplash.com/photo-1639647564912-651e29b8e6ad?auto=format&fit=crop&w=1280&q=80",
    "image_credit": "note thanun / Unsplash",
    "image_license": "ภาพประกอบ · Unsplash License",
    "image_page_url": "https://unsplash.com/photos/a-swimming-pool-with-lounge-chairs-and-trees-in-the-background-XYIWp9_48H8",
    "website": "https://www.kempinski.com/en/siam-hotel",
    "name": "โรงแรมสยามเคมปินสกี้ กรุงเทพฯ",
    "area": "สยาม · เขตปทุมวัน",
    "description": "โรงแรมหรูย่านสยาม มีสวนและสระว่ายน้ำ เชื่อมสยามพารากอนด้วยทางเดินชั้นสอง",
    "awards": [],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_night_thb",
      "price_per_night_thb.taxes_and_fees"
    ],
    "type": "hotel",
    "tier": "comfy",
    "amenities": [
      "pool",
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 8500,
      "max": 10500
    }
  },
  {
    "id": "the-standard-bangkok-mahanakhon",
    "province": "bangkok",
    "name_en": "The Standard, Bangkok Mahanakhon",
    "lat": 13.72361,
    "lng": 100.52833,
    "moods": [
      "luxury",
      "photo",
      "food"
    ],
    "image_url": "https://images.unsplash.com/photo-1754567371234-c832f2d299b5?auto=format&fit=crop&w=1280&q=80",
    "image_credit": "bartosz wojciechowski / Unsplash",
    "image_license": "ภาพประกอบ · Unsplash License",
    "image_page_url": "https://unsplash.com/photos/rooftop-pool-overlooking-a-modern-cityscape-with-skyscrapers-bBn-2dwNly0",
    "website": "https://www.standardhotels.com/bangkok/properties/bangkok/",
    "name": "เดอะ สแตนดาร์ด แบงค็อก มหานคร",
    "area": "สีลม · เขตบางรัก",
    "description": "โรงแรมดีไซน์ในอาคารคิง เพาเวอร์ มหานคร ย่านสีลม ห้องพักอยู่ชั้น 8–18 มีสระว่ายน้ำและร้านอาหาร",
    "awards": [
      "Condé Nast Traveler Hot List 2023",
      "50 Best Discovery 2024"
    ],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_night_thb",
      "price_per_night_thb.taxes_and_fees",
      "price_per_night_thb.max"
    ],
    "type": "hotel",
    "tier": "comfy",
    "amenities": [
      "pool",
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 6900,
      "max": 8500
    }
  },
  {
    "id": "hua-chang-heritage-hotel",
    "province": "bangkok",
    "name_en": "Hua Chang Heritage Hotel",
    "lat": 13.7487888,
    "lng": 100.5307151,
    "moods": [
      "quiet",
      "photo"
    ],
    "image_url": "https://images.pexels.com/photos/5883725/pexels-photo-5883725.jpeg?auto=compress&cs=tinysrgb&w=1280",
    "image_credit": "thiha soe / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/modern-hotel-bedroom-interior-5883725/",
    "website": "https://www.huachangheritagehotel.com",
    "name": "โรงแรมหัวช้าง เฮอริเทจ",
    "area": "สะพานหัวช้าง · เขตปทุมวัน",
    "description": "โรงแรมบูทีคสไตล์ไทยร่วมสมัยใกล้สะพานหัวช้าง ถนนพญาไท เดินถึงสยามและ BTS ราชเทวีได้ มีสระว่ายน้ำ",
    "awards": [],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_night_thb",
      "price_per_night_thb.taxes_and_fees"
    ],
    "type": "boutique",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2800,
      "max": 4800
    }
  },
  {
    "id": "lub-d-bangkok-siam",
    "province": "bangkok",
    "name_en": "Lub d Bangkok Siam",
    "lat": 13.7468712,
    "lng": 100.52869,
    "moods": [
      "food",
      "photo"
    ],
    "image_url": "https://images.pexels.com/photos/27313198/pexels-photo-27313198/free-photo-of-airbnb-in-bangkok.jpeg?auto=compress&cs=tinysrgb&w=1280",
    "image_credit": "Raymond Aquila / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/airbnb-in-bangkok-27313198/",
    "website": "https://lubd.com/destination/bangkok-siam/",
    "name": "หลับดี กรุงเทพฯ สยาม",
    "area": "สนามกีฬาแห่งชาติ · เขตปทุมวัน",
    "description": "โฮสเทลใกล้ BTS สนามกีฬาแห่งชาติ มีทั้งห้องส่วนตัวและห้องรวม ราคาที่แสดงเป็นห้องส่วนตัวสำหรับ 2 คนต่อคืน",
    "awards": [],
    "is_mock": false,
    "uncertain_fields": [
      "price_per_night_thb",
      "price_per_night_thb.taxes_and_fees"
    ],
    "type": "hostel",
    "tier": "mid",
    "amenities": [
      "free_wifi",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1635,
      "max": 2239
    }
  }
]
