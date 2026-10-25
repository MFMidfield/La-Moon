// ร้าน/ที่พักชื่อจริงที่ตรวจแล้ว — กรุงเทพ: AI/data/bangkok-food-stays.verified.json; อีก 9 จังหวัด: AI/data/food-stays-verified-<province>.json
// (ตรวจกับแหล่งจริงโดย Sonnet agents 2026-10-25, ตัดรายการที่หาไม่เจอ; uncertain_fields = ช่องที่ยังไม่แน่ใจ) — รูปที่ไม่ใช่ Commons เป็นภาพประกอบตามประเภท
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
  },
  {
    "id": "kung-ob",
    "province": "nakhon-pathom",
    "name_en": "Kung Ob Phu Khaofai",
    "lat": 13.80433,
    "lng": 100.041341,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": "https://www.facebook.com/%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B8%AD%E0%B8%9A%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B9%84%E0%B8%9F-160358674021417/",
    "name": "กุ้งอบภูเขาไฟ",
    "area": "สนามจันทร์ ถนนเพชรเกษม เมืองนครปฐม",
    "description": "ร้านอาหารดังเมืองนครปฐม ขึ้นชื่อเรื่องกุ้งอบภูเขาไฟที่เสิร์ฟพร้อมไฟลุกที่โต๊ะ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "signature_dishes"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-21:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "กุ้งอบภูเขาไฟ",
      "กุ้งอบวุ้นเส้น",
      "ปลาช่อนบ้าน"
    ],
    "price_per_person": {
      "min": 250,
      "max": 600
    }
  },
  {
    "id": "tang-ha-seng",
    "province": "nakhon-pathom",
    "name_en": "Tang Ha Seng (Old Shop)",
    "lat": 13.82273,
    "lng": 100.059862,
    "image_url": "https://images.pexels.com/photos/12824413/pexels-photo-12824413.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Manit Seekhao / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12824413/",
    "website": null,
    "name": "ตั้งฮะเส็ง (ร้านเก่า)",
    "area": "ถนนพญากง ตลาดล่าง เมืองนครปฐม",
    "description": "ร้านข้าวหมูแดงหมูกรอบเก่าแก่หลายสิบปี ใกล้องค์พระปฐมเจดีย์ มีเต้าหู้ทอดชิ้นใหญ่เป็นเมนูเด่น",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "breakfast",
      "lunch"
    ],
    "opening_hours": "07:30-16:00",
    "closed_days": null,
    "cuisine": [
      "ข้าวหมูแดง",
      "ไทย-จีน"
    ],
    "signature_dishes": [
      "ข้าวหมูแดง",
      "ข้าวหมูกรอบ",
      "เต้าหู้ทอด"
    ],
    "price_per_person": {
      "min": 50,
      "max": 150
    }
  },
  {
    "id": "say-hay-cafe-cuisine",
    "province": "nakhon-pathom",
    "name_en": "Say Hay Cafe & Cuisine",
    "lat": 13.783941,
    "lng": 100.233245,
    "image_url": "https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dinaziz2462 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27706147/",
    "website": "https://www.facebook.com/Sayhaycafecuisine/",
    "name": "เซย์เฮย์ คาเฟ่ แอนด์ ควิซีน",
    "area": "พุทธมณฑลสาย 7 หอมเกร็ด สามพราน",
    "description": "คาเฟ่และร้านอาหารฟิวชันร่มรื่น มีมินิสวนสัตว์ให้อาหารสัตว์ และปลูกเมลอนเอง",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "signature_dishes",
      "name"
    ],
    "moods": [
      "food",
      "photo",
      "quiet"
    ],
    "kind": "cafe",
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ],
    "opening_hours": "11:00-20:00 (ส.-อา. เปิด 10:30)",
    "closed_days": null,
    "cuisine": [
      "ฟิวชั่น",
      "อาหารไทย",
      "ขนมหวาน"
    ],
    "signature_dishes": [
      "พิซซ่า",
      "อาหารฟิวชัน",
      "เมลอน"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "moo-yot-khao-mu-dang",
    "province": "nakhon-pathom",
    "name_en": "Khao Moo Dang Nai Chua",
    "lat": 13.822237,
    "lng": 100.060847,
    "image_url": "https://images.pexels.com/photos/38429596/pexels-photo-38429596.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dale / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/38429596/",
    "website": null,
    "name": "ข้าวหมูแดงนายฉั้ว",
    "area": "ซอยซ้ายพระ ตลาดล่าง เมืองนครปฐม",
    "description": "ร้านข้าวหมูแดงหมูกรอบเก่าแก่ใกล้องค์พระปฐมเจดีย์ หมูแดงหนา หมูกรอบกรอบ ข้าวสามกษัตริย์เป็นเมนูแนะนำ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "opening_hours",
      "price_per_person"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "lunch"
    ],
    "opening_hours": "09:00-15:00",
    "closed_days": null,
    "cuisine": [
      "ข้าวหมูแดง"
    ],
    "signature_dishes": [
      "ข้าวสามกษัตริย์ (หมูแดง หมูกรอบ ไก่ย่าง)",
      "ข้าวหมูแดง"
    ],
    "price_per_person": {
      "min": 40,
      "max": 100
    }
  },
  {
    "id": "krua---------nakhon-si",
    "province": "nakhon-si-thammarat",
    "name_en": "Krua Nai Nang",
    "lat": 8.42197,
    "lng": 99.97342,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": null,
    "name": "ร้านอาหาร ครัวนายหนัง",
    "area": "ถนนพัฒนาการคูขวาง เมืองนครศรีธรรมราช",
    "description": "ร้านอาหารใต้รสชาติจัดจ้านต้นตำรับเมืองนคร มีการแสดงแกะสลักและเชิดหนังตะลุงให้ชมขณะรับประทานอาหาร",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "signature_dishes"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-23:00",
    "closed_days": null,
    "cuisine": [
      "ไทยใต้",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "แกงส้มปลากะพงยอดมะพร้าว",
      "แกงไตปลาทรงเครื่อง",
      "หมูผัดกะปิสตอ"
    ],
    "price_per_person": {
      "min": 150,
      "max": 350
    }
  },
  {
    "id": "ko-lan-kanom-jeen-mueang-nakhon",
    "province": "nakhon-si-thammarat",
    "name_en": "Kanom Jeen Mueang Khon Phanyom",
    "lat": 8.41562,
    "lng": 99.96696,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": null,
    "name": "ขนมจีนเมืองคอน ถนนพานยม",
    "area": "23 ถนนพานยม เมืองนครศรีธรรมราช",
    "description": "ร้านขนมจีนใต้ระดับตำนานประจำเมืองนคร น้ำยาหลากหลายรสชาติทานคู่ถาดผักสดพื้นบ้านไม่อั้น",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "opening_hours",
      "lat",
      "lng",
      "price_per_person"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "breakfast",
      "lunch"
    ],
    "opening_hours": "09:00-14:00",
    "closed_days": "วันที่ 16 ของเดือน",
    "cuisine": [
      "ขนมจีนใต้",
      "ไทยใต้"
    ],
    "signature_dishes": [
      "ไก่ทอด",
      "ข้าวยำน้ำบูดู",
      "แกงเขียวหวาน",
      "ขนมจีนน้ำยา"
    ],
    "price_per_person": {
      "min": 100,
      "max": 250
    }
  },
  {
    "id": "khao-yoi-kopitiam-nakhon-si",
    "province": "nakhon-si-thammarat",
    "name_en": "Ko Pi (beside the Provincial Hall)",
    "lat": 8.42043,
    "lng": 99.9638,
    "image_url": "https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Emrecan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/2079448/",
    "website": null,
    "name": "โกปี๊ ข้างศาลากลาง",
    "area": "ซอยนางงาม เมืองนครศรีธรรมราช",
    "description": "ร้านกาแฟโบราณและติ่มซำข้างศาลากลางจังหวัด ขายบะกุ๊ดเต๋ ข้าวจานเดียว ปาท่องโก๋ และโรตีไข่ดาว เปิดเช้าถึงบ่าย",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "lat",
      "lng",
      "price_per_person"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "breakfast",
      "lunch",
      "snack"
    ],
    "opening_hours": "06:30-15:00",
    "closed_days": null,
    "cuisine": [
      "ติ่มซำ",
      "กาแฟโบราณ",
      "ข้าวจานเดียว"
    ],
    "signature_dishes": [
      "บะกุ๊ดเต๋",
      "ติ่มซำ",
      "ข้าวขาหมู",
      "โกปี้ร้อน"
    ],
    "price_per_person": {
      "min": 60,
      "max": 200
    }
  },
  {
    "id": "blue-surf-cafe-by-sichon-cabana",
    "province": "nakhon-si-thammarat",
    "name_en": "Blue Surf Cafe by Sichon Cabana",
    "lat": 9.0106,
    "lng": 99.9211,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": null,
    "name": "บลูเซิร์ฟคาเฟ่ (Blue Surf Cafe by Sichon Cabana)",
    "area": "หาดหินงาม สิชล",
    "description": "คาเฟ่สุดชิคสไตล์เซิร์ฟติดริมหาดหินงามสิชล จิบกาแฟชมวิวคลื่นทะเลและนักเล่นเซิร์ฟบอร์ด",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "lat",
      "lng",
      "opening_hours",
      "signature_dishes"
    ],
    "moods": [
      "food",
      "beach",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ],
    "opening_hours": "10:00-22:00",
    "closed_days": null,
    "cuisine": [
      "กาแฟ",
      "เบเกอรี่",
      "ฟิวชั่น"
    ],
    "signature_dishes": [
      "Coconut Dirty Coffee",
      "Croissant Pizza",
      "Smoothie Bowl Fruit"
    ],
    "price_per_person": {
      "min": 100,
      "max": 250
    }
  },
  {
    "id": "river-wine-restaurant",
    "province": "nonthaburi",
    "name_en": "River Wine",
    "lat": 13.91558,
    "lng": 100.48816,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": null,
    "name": "ริเวอร์ ไวน์ (River Wine)",
    "area": "ซอยวัดบางจาก ปากเกร็ด",
    "description": "ร้านอาหารและไวน์บาร์ริมแม่น้ำเจ้าพระยา ปากเกร็ด มีห้องส่วนตัวและห้องคาราโอเกะ เห็นวิวเกาะเกร็ด",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "opening_hours",
      "signature_dishes"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "16:00-23:59",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "นานาชาติ",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "ปลากะพงทอดน้ำปลา",
      "ขาหมูเยอรมัน",
      "กุ้งแม่น้ำเผา"
    ],
    "price_per_person": {
      "min": 500,
      "max": 1000
    }
  },
  {
    "id": "baan-rabiangnam",
    "province": "nonthaburi",
    "name_en": "Baan Rabiangnam",
    "lat": 13.8805,
    "lng": 100.48329,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": null,
    "name": "บ้านระเบียงน้ำ",
    "area": "ซอยนนทบุรี 23 เมืองนนทบุรี",
    "description": "ร้านอาหารไทยริมแม่น้ำเจ้าพระยา ซอยนนทบุรี 23 โดดเด่นด้วยกุ้งแม่น้ำเผา ห่อหมกทะเล และปลากะพงทอดน้ำปลา",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "lat",
      "lng"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:30-21:30",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "กุ้งแม่น้ำเผา",
      "ห่อหมกทะเล",
      "แกงส้มชะอมกุ้ง",
      "ปลากะพงทอดน้ำปลา"
    ],
    "price_per_person": {
      "min": 300,
      "max": 700
    }
  },
  {
    "id": "song-fang-khlong",
    "province": "nonthaburi",
    "name_en": "Song Fang Khlong Riverside",
    "lat": 13.92872,
    "lng": 100.5018,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "สองฝั่งคลอง ริเวอร์ไซด์",
    "area": "ซอยสุขาประชาสรร 2 ปากเกร็ด",
    "description": "ร้านอาหารไทยริมแม่น้ำเจ้าพระยาภายในโรงแรมคาลานัน ริเวอร์ไซด์ (เดิมบั๊ดดี้ โอเรียนทอล) ปากเกร็ด",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "opening_hours",
      "price_per_person",
      "signature_dishes",
      "lat",
      "lng"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "17:00-22:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "ปูก้อนผัดพริกเหลือง",
      "ปลากะพงสองใจ",
      "ต้มยำโป๊ะแตก"
    ],
    "price_per_person": {
      "min": 250,
      "max": 600
    }
  },
  {
    "id": "non-bakery",
    "province": "nonthaburi",
    "name_en": "Non Bakery",
    "lat": 13.84319,
    "lng": 100.49395,
    "image_url": "https://images.pexels.com/photos/7405059/pexels-photo-7405059.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Furkan Tumer / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/7405059/",
    "website": null,
    "name": "นนท์เบเกอรี่",
    "area": "ถนนประชาราษฎร์ ท่าน้ำนนท์ เมืองนนทบุรี",
    "description": "ร้านเบเกอรี่เก่าแก่หน้าท่าน้ำนนท์ ขายเอแคลร์ ท็อฟฟี่เค้ก และขนมปังหมูสับไข่เค็ม (ซื้อกลับ ไม่มีที่นั่ง)",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person"
    ],
    "moods": [
      "food"
    ],
    "kind": "bakery",
    "meals": [
      "snack"
    ],
    "opening_hours": "08:00-20:00",
    "closed_days": null,
    "cuisine": [
      "เบเกอรี่",
      "ขนมไทย"
    ],
    "signature_dishes": [
      "เอแคลร์",
      "ท็อฟฟี่เค้ก",
      "ขนมปังหมูสับไข่เค็ม"
    ],
    "price_per_person": {
      "min": 40,
      "max": 100
    }
  },
  {
    "id": "ganicco-farm",
    "province": "nonthaburi",
    "name_en": "Ganicco Farm",
    "lat": 13.8752,
    "lng": 100.4581,
    "image_url": "https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dinaziz2462 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27706147/",
    "website": null,
    "name": "กานิกะ ฟาร์ม (Ganicco Farm)",
    "area": "สายมา เมืองนนทบุรี",
    "description": "ฟาร์มคาเฟ่ย่านสายมา นนทบุรี สวนดอกไม้และเรือนกระจก ปลูกผักผลไม้ออร์แกนิกและเมลอน มีเครื่องดื่ม เบเกอรี่ และอาหาร",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "lat",
      "lng",
      "price_per_person",
      "signature_dishes",
      "opening_hours"
    ],
    "moods": [
      "food",
      "photo",
      "quiet"
    ],
    "kind": "cafe",
    "meals": [
      "lunch",
      "snack"
    ],
    "opening_hours": "08:30-19:30",
    "closed_days": "อังคาร",
    "cuisine": [
      "เบเกอรี่",
      "เครื่องดื่ม",
      "ออร์แกนิก"
    ],
    "signature_dishes": [
      "กาแฟ",
      "เบเกอรี่",
      "เมลอนออร์แกนิก"
    ],
    "price_per_person": {
      "min": 180,
      "max": 400
    }
  },
  {
    "id": "pae-pochana",
    "province": "pathum-thani",
    "name_en": "Pae Pochana",
    "lat": 14.042349,
    "lng": 100.419872,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": "https://www.facebook.com/pare.phochana",
    "name": "แปโภชนา",
    "area": "ตลาดระแหง 100 ปี ลาดหลุมแก้ว",
    "description": "ร้านอาหารไทย-จีนโบราณในตลาดระแหง 100 ปี เปิดมากว่า 50 ปี ได้รับ MICHELIN Bib Gourmand",
    "awards": [
      "MICHELIN Bib Gourmand 2026"
    ],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "temporary_closure_until_2027-01-01",
      "signature_dishes"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch"
    ],
    "opening_hours": "09:00-14:30",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "จีน",
      "อาหารพื้นบ้าน"
    ],
    "signature_dishes": [
      "ปลากรายและหมูห่อฟองเต้าหู้",
      "ต้มยำขาหมู",
      "ผัดฉ่าปลาสลิด"
    ],
    "price_per_person": {
      "min": 200,
      "max": 450
    }
  },
  {
    "id": "jae-mon-gui-chai",
    "province": "pathum-thani",
    "name_en": "Jae Mon Gui Chai (Wat San Chao)",
    "lat": 14.002415,
    "lng": 100.541305,
    "image_url": "https://images.pexels.com/photos/12265850/pexels-photo-12265850.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Markus Winkler / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12265850/",
    "website": null,
    "name": "กุยช่ายเจ๊มล (เจ้าเก่า) วัดศาลเจ้า",
    "area": "ตลาดน้ำวัดศาลเจ้า บ้านกลาง เมืองปทุมธานี",
    "description": "กุยช่ายสดแป้งบางไส้แน่นขายมากว่า 30 ปี ประจำตลาดน้ำวัดศาลเจ้า มีไส้ผัก เผือก หน่อไม้ มันแกว",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "opening_hours",
      "price_per_person"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "breakfast",
      "snack"
    ],
    "opening_hours": "05:00-17:00",
    "closed_days": "วันจันทร์",
    "cuisine": [
      "ของว่างไทย-จีน"
    ],
    "signature_dishes": [
      "กุยช่ายไส้ผัก",
      "กุยช่ายเผือก",
      "กุยช่ายหน่อไม้",
      "กุยช่ายเปลือย"
    ],
    "price_per_person": {
      "min": 40,
      "max": 100
    }
  },
  {
    "id": "ko-boy-boat-noodle",
    "province": "pathum-thani",
    "name_en": "Ko Boy Boat Noodle Khlong 3 (Talat Pha Charoen)",
    "lat": 14.03568,
    "lng": 100.663199,
    "image_url": "https://images.pexels.com/photos/7361022/pexels-photo-7361022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Likeboss Lertpongsaporn / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/7361022/",
    "website": null,
    "name": "ก๋วยเตี๋ยวเรือโกบอย สาขาคลองสาม (ตลาดพาเจริญ)",
    "area": "ตลาดพาเจริญ คลองสาม คลองหลวง",
    "description": "ก๋วยเตี๋ยวเรือรังสิตเจ้าดัง น้ำซุปข้นเข้มข้น เนื้อหมกตับหมก กากหมูเจียวกรอบ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "signature_dishes"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch"
    ],
    "opening_hours": "09:30-17:00",
    "closed_days": null,
    "cuisine": [
      "ก๋วยเตี๋ยวเรือ",
      "ไทย"
    ],
    "signature_dishes": [
      "ก๋วยเตี๋ยวเรือหมู",
      "กากหมูเจียว",
      "เนื้อหมก ตับหมก"
    ],
    "price_per_person": {
      "min": 60,
      "max": 150
    }
  },
  {
    "id": "raya-restaurant",
    "province": "phuket",
    "name_en": "Raya Restaurant",
    "lat": 7.88593,
    "lng": 98.3909,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": null,
    "name": "ร้านอาหารระย้า",
    "area": "ถนนดีบุก ตลาดใหญ่ อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารใต้และอาหารพื้นเมืองภูเก็ตในบ้านชิโนโปรตุกีสเก่าบนถนนดีบุก ขึ้นชื่อเรื่องแกงปูและหมูฮ้อง",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "awards"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-22:00",
    "closed_days": null,
    "cuisine": [
      "ไทยใต้",
      "พื้นเมืองภูเก็ต"
    ],
    "signature_dishes": [
      "แกงปู",
      "หมูฮ้อง",
      "ปลาทอดกระเทียม"
    ],
    "price_per_person": {
      "min": 350,
      "max": 800
    }
  },
  {
    "id": "tu-kab-khao",
    "province": "phuket",
    "name_en": "Tu Kab Khao",
    "lat": 7.88369,
    "lng": 98.3882,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": null,
    "name": "ตู้กับข้าว",
    "area": "ถนนพังงา ตลาดใหญ่ อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารใต้ในอาคารชิโนโปรตุกีสริมถนนพังงา ขึ้นชื่อเรื่องแกงปูกับขนมจีนและหมูฮ้อง",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "awards"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "11:00-21:00",
    "closed_days": null,
    "cuisine": [
      "ไทยใต้",
      "พื้นเมืองภูเก็ต"
    ],
    "signature_dishes": [
      "แกงเนื้อปูขนมจีน",
      "หมูฮ้อง",
      "กุ้งผัดสะตอ"
    ],
    "price_per_person": {
      "min": 350,
      "max": 900
    }
  },
  {
    "id": "one-chun-cafe-restaurant",
    "province": "phuket",
    "name_en": "One Chun Cafe & Restaurant",
    "lat": 7.88578,
    "lng": 98.39069,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/One_Chun.jpg/1280px-One_Chun.jpg",
    "image_credit": "Vano111ru / Wikimedia Commons",
    "image_license": "CC BY-SA 4.0",
    "image_page_url": "https://commons.wikimedia.org/wiki/File:One_Chun.jpg",
    "website": null,
    "name": "วันจันทร์",
    "area": "ถนนเทพกระษัตรี ตลาดใหญ่ อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารใต้และอาหารพื้นเมืองภูเก็ตในบ้านเก่าบนถนนเทพกระษัตรี ได้รับการแนะนำใน MICHELIN Guide",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "awards"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-22:00 (อังคารปิด 21:00)",
    "closed_days": null,
    "cuisine": [
      "ไทยใต้",
      "พื้นเมืองภูเก็ต"
    ],
    "signature_dishes": [
      "หมูฮ้อง",
      "แกงส้มปลากะพง",
      "ใบเหลียงผัดไข่"
    ],
    "price_per_person": {
      "min": 250,
      "max": 650
    }
  },
  {
    "id": "mor-mu-dong",
    "province": "phuket",
    "name_en": "Mor Mu Dong",
    "lat": 7.84314,
    "lng": 98.37199,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "หมอมูดง",
    "area": "ฉลอง อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารพื้นบ้านริมป่าชายเลน บรรยากาศซุ้มไม้ไผ่ริมน้ำ อาหารรสจัดจ้าน",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "name",
      "price_per_person",
      "awards"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-21:00",
    "closed_days": null,
    "cuisine": [
      "ไทยใต้",
      "ซีฟู้ดพื้นบ้าน"
    ],
    "signature_dishes": [
      "ปลายัดไส้",
      "แกงส้มสับปะรดปลา",
      "หมูคั่วเกลือ"
    ],
    "price_per_person": {
      "min": 250,
      "max": 600
    }
  },
  {
    "id": "kan-eang-at-pier",
    "province": "phuket",
    "name_en": "Kan Eang @ Pier",
    "lat": 7.8199,
    "lng": 98.34442,
    "image_url": "https://images.pexels.com/photos/12561888/pexels-photo-12561888.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Captured by Augustine / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12561888/",
    "website": null,
    "name": "กันเอง แอท เพียร์",
    "area": "อ่าวฉลอง ถนนวิเศษ อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารซีฟู้ดริมอ่าวฉลอง วิวสวย บรรยากาศดี อาหารทะเลสดใหม่คุณภาพเยี่ยม",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "opening_hours",
      "price_per_person",
      "coordinates"
    ],
    "moods": [
      "food",
      "beach"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:30-22:30",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทยใต้",
      "ญี่ปุ่น"
    ],
    "signature_dishes": [
      "กุ้งมังกรซาชิมิ",
      "ปูผัดผงกะหรี่",
      "แกงส้มยอดมะพร้าวปลา"
    ],
    "price_per_person": {
      "min": 500,
      "max": 1500
    }
  },
  {
    "id": "kopitiam-by-wilaiwan",
    "province": "phuket",
    "name_en": "Kopitiam by Wilai",
    "lat": 7.88478,
    "lng": 98.38808,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Kopitiam_by_Wilai%2C_Phuket_%2813271249955%29.jpg/1280px-Kopitiam_by_Wilai%2C_Phuket_%2813271249955%29.jpg",
    "image_credit": "Thanakrit Gu from Shanghai, China / Wikimedia Commons",
    "image_license": "CC BY 2.0",
    "image_page_url": "https://commons.wikimedia.org/wiki/File:Kopitiam_by_Wilai,_Phuket_(13271249955).jpg",
    "website": "https://www.facebook.com/kopitiambywilai/",
    "name": "โกปี้เทียม บาย วิไล",
    "area": "ถนนถลาง ตลาดเหนือ อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารพื้นเมืองภูเก็ตสไตล์โกปี้เตี๊ยมบนถนนถลางในย่านเมืองเก่า มีหมี่ฮกเกี้ยนและผัดไทยเป็นเมนูเด่น",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "name",
      "opening_hours",
      "closed_days",
      "price_per_person",
      "signature_dishes"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ],
    "opening_hours": "11:00-22:00",
    "closed_days": null,
    "cuisine": [
      "อาหารพื้นเมืองภูเก็ต",
      "กาแฟโบราณ"
    ],
    "signature_dishes": [
      "บะหมี่ฮกเกี้ยน",
      "ข้าวผัดน้ำพริกกุ้งสด",
      "ขนมปังปังสังขยา"
    ],
    "price_per_person": {
      "min": 100,
      "max": 250
    }
  },
  {
    "id": "lock-tien-food-center",
    "province": "phuket",
    "name_en": "Lock Tien",
    "lat": 7.8803,
    "lng": 98.3868,
    "image_url": "https://images.pexels.com/photos/28600264/pexels-photo-28600264.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Jean Papillon / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/28600264/",
    "website": null,
    "name": "ลกเที้ยน",
    "area": "ถนนบางกอก ตลาดเหนือ อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารพื้นเมืองภูเก็ตและฮกเกี้ยนเก่าแก่ ย้ายจากมุมถนนเยาวราชมาอยู่ถนนบางกอก",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "coordinates",
      "opening_hours",
      "price_per_person"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "snack"
    ],
    "opening_hours": "09:00-19:00",
    "closed_days": null,
    "cuisine": [
      "พื้นเมืองภูเก็ต",
      "ฮกเกี้ยน"
    ],
    "signature_dishes": [
      "หมี่ฮกเกี้ยน",
      "โลบะ",
      "ปอเปี๊ยะสด",
      "โอ้เอ๋ว"
    ],
    "price_per_person": {
      "min": 80,
      "max": 250
    }
  },
  {
    "id": "aramis-cafe-phuket",
    "province": "phuket",
    "name_en": "Torry's Ice Cream",
    "lat": 7.88546,
    "lng": 98.38925,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": null,
    "name": "ทอร์รี่ส์ ไอศกรีม",
    "area": "ซอยรมณีย์ ตลาดใหญ่ อำเภอเมืองภูเก็ต",
    "description": "ร้านไอศกรีมในตึกแถวชิโนโปรตุกีสสีชมพูที่ซอยรมณีย์ มีไอศกรีมรสพื้นเมืองภูเก็ตอย่างโอ้เอ๋วและบีโกหมอย",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "name",
      "opening_hours"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "snack"
    ],
    "opening_hours": "11:00-18:00 (ศุกร์-อาทิตย์ถึง 21:30)",
    "closed_days": null,
    "cuisine": [
      "ไอศกรีม",
      "ขนมพื้นเมืองภูเก็ต"
    ],
    "signature_dishes": [
      "โอ้เอ๋ว",
      "บีโกหมอย",
      "อาโป๊ง"
    ],
    "price_per_person": {
      "min": 100,
      "max": 250
    }
  },
  {
    "id": "a-pon-mae-sunee",
    "province": "phuket",
    "name_en": "Apong Mae Sunee",
    "lat": 7.88581,
    "lng": 98.38738,
    "image_url": "https://images.pexels.com/photos/15797984/pexels-photo-15797984.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Eaksit Sangdee / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/15797984/",
    "website": null,
    "name": "อาโป๊งแม่สุณี",
    "area": "ซอยสุ่นอุทิศ ถนนเยาวราช ตลาดใหญ่ อำเภอเมืองภูเก็ต",
    "description": "ร้านขนมอาโป๊งเตาถ่านเก่าแก่ริมซอยสุ่นอุทิศ ขายจนของหมดในแต่ละวัน",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "opening_hours",
      "closed_days",
      "price_per_person"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "snack"
    ],
    "opening_hours": "09:00-15:00",
    "closed_days": null,
    "cuisine": [
      "ขนมพื้นเมืองภูเก็ต"
    ],
    "signature_dishes": [
      "ขนมอาโป๊งกรอบนอกนุ่มใน"
    ],
    "price_per_person": {
      "min": 20,
      "max": 60
    }
  },
  {
    "id": "sailom-bangpu-restaurant",
    "province": "samut-prakan",
    "name_en": "Sailom Bangpu",
    "lat": 13.5384,
    "lng": 100.613,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": "https://www.facebook.com/SailomBangpu",
    "name": "สายลม บางปู (ร้านอาหารซีฟู้ด)",
    "area": "บางปู เมืองสมุทรปราการ",
    "description": "ร้านอาหารซีฟู้ดริมทะเลที่บางปู ลมเย็น เป็นจุดนั่งชมพระอาทิตย์ตกยอดนิยม มีโซนคาเฟ่และของฝากอยู่ใกล้กัน",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "signature_dishes",
      "closed_days",
      "opening_hours"
    ],
    "moods": [
      "food",
      "beach",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "11:00-21:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "เครปกล้วยหอม",
      "ต้มยำโป๊ะแตกทะเล",
      "ปลากะพงทอดน้ำปลา"
    ],
    "price_per_person": {
      "min": 300,
      "max": 600
    }
  },
  {
    "id": "bangkok-tree-house-restaurant",
    "province": "samut-prakan",
    "name_en": "Bangkok Tree House Restaurant & Cafe",
    "lat": 13.6805,
    "lng": 100.5851,
    "image_url": "https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Emrecan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/2079448/",
    "website": "http://www.bangkoktreehouse.com",
    "name": "ร้านอาหารและคาเฟ่ บางกอก ทรี เฮ้าส์",
    "area": "บางน้ำผึ้ง พระประแดง (บางกระเจ้า)",
    "description": "ร้านอาหารและคาเฟ่ของที่พักบางกอก ทรี เฮ้าส์ ในป่าชายเลนบางกระเจ้า เน้นวัตถุดิบออร์แกนิก เข้าถึงด้วยการเดินหรือเรือ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_person",
      "signature_dishes",
      "closed_days"
    ],
    "moods": [
      "food",
      "quiet",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "snack"
    ],
    "opening_hours": "11:30-18:00",
    "closed_days": null,
    "cuisine": [
      "ฟิวชั่น",
      "ออร์แกนิก"
    ],
    "signature_dishes": [],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "hidden-woods-bang-krachao",
    "province": "samut-prakan",
    "name_en": "Hiddenwoods Cafe Bang Krachao",
    "lat": 13.67494,
    "lng": 100.58084,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": "https://www.facebook.com/hiddenwoodsbangkok",
    "name": "ฮิดเดนวูดส์ คาเฟ่ บางกระเจ้า",
    "area": "บางน้ำผึ้ง พระประแดง (บางกระเจ้า)",
    "description": "คาเฟ่ริมแม่น้ำเจ้าพระยาในป่าบางกระเจ้า มีสะพานไม้ ลานนั่งริมน้ำ และให้เช่าสกูตเตอร์ไฟฟ้าสำรวจเกาะ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "opening_hours",
      "closed_days",
      "price_per_person",
      "signature_dishes"
    ],
    "moods": [
      "food",
      "quiet",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "snack",
      "lunch"
    ],
    "opening_hours": "10:30-18:00",
    "closed_days": null,
    "cuisine": [
      "กาแฟ",
      "เบเกอรี่",
      "ไทย-ตะวันตก"
    ],
    "signature_dishes": [
      "กาแฟสเปเชียลตี้",
      "เรดเวลเวตบราวนี่"
    ],
    "price_per_person": {
      "min": 120,
      "max": 280
    }
  },
  {
    "id": "boon-tong-kee-mega-bangna",
    "province": "samut-prakan",
    "name_en": "Boon Tong Kee Mega Bangna",
    "lat": 13.6475,
    "lng": 100.681,
    "image_url": "https://images.pexels.com/photos/34714660/pexels-photo-34714660.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Undo Kim / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/34714660/",
    "website": "https://www.boontongkeethailand.com",
    "name": "บุญตงกี่ เมกาบางนา",
    "area": "เมกาบางนา บางพลี",
    "description": "สาขาเมกาบางนา ชั้น 2 โซนด้านนอก ร้านข้าวมันไก่สิงคโปร์ เมนูเด่นคือไก่ต้นตำรับและข้าวมันไก่",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "closed_days"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-21:30",
    "closed_days": null,
    "cuisine": [
      "ข้าวมันไก่สิงคโปร์",
      "จีน"
    ],
    "signature_dishes": [
      "ไก่ต้นตำรับ",
      "ข้าวมันไก่สิงคโปร์",
      "เต้าหู้ทอด"
    ],
    "price_per_person": {
      "min": 100,
      "max": 250
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
  },
  {
    "id": "tubkaek-sunset-resort",
    "province": "krabi",
    "name_en": "Tup Kaek Sunset Beach Resort",
    "lat": 8.09035,
    "lng": 98.74745,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Tup_Kaek_Sunset_Beach_Resort%5ESpa_-_panoramio.jpg/1280px-Tup_Kaek_Sunset_Beach_Resort%5ESpa_-_panoramio.jpg",
    "image_credit": "::::=UT=:::: / Wikimedia Commons",
    "image_license": "CC BY-SA 3.0",
    "image_page_url": "https://commons.wikimedia.org/wiki/File:Tup_Kaek_Sunset_Beach_Resort%5ESpa_-_panoramio.jpg",
    "website": null,
    "name": "ทับแขก ซันเซ็ท บีช รีสอร์ท",
    "area": "หาดทับแขก หนองทะเล อำเภอเมืองกระบี่",
    "description": "รีสอร์ทติดชายหาดทับแขกบรรยากาศเงียบสงบวิวพระอาทิตย์ตกสวยงาม",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night"
    ],
    "moods": [
      "beach",
      "quiet",
      "photo"
    ],
    "type": "resort",
    "tier": "comfy",
    "amenities": [
      "pool",
      "free_wifi",
      "parking",
      "beach_access"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2500,
      "max": 6000
    }
  },
  {
    "id": "bluestotel-ao-nang",
    "province": "krabi",
    "name_en": "BlueSotel Krabi Ao Nang Beach",
    "lat": 8.0326,
    "lng": 98.82667,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": null,
    "name": "บลูโซเทล กระบี่ อ่าวนาง บีช",
    "area": "อ่าวนาง อำเภอเมืองกระบี่",
    "description": "โรงแรมใกล้หาดอ่าวนางมีสระว่ายน้ำและห้องพักพร้อมระเบียง",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities"
    ],
    "moods": [
      "beach"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "15:00",
    "check_out": "11:00",
    "price_per_night": {
      "min": 1200,
      "max": 2800
    }
  },
  {
    "id": "mida-grande-hotel-dhavaravati",
    "province": "nakhon-pathom",
    "name_en": "Mida Grande Hotel Dhavaravati Nakhon Pathom",
    "lat": 13.80721,
    "lng": 100.057924,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": "https://www.midagrandehoteldhavaravati.com/en/",
    "name": "โรงแรมไมด้า แกรนด์ ทวารวดี นครปฐม",
    "area": "สนามจันทร์ ถนนเพชรเกษม เมืองนครปฐม",
    "description": "โรงแรมระดับ 4-5 ดาวบนถนนเพชรเกษม ตกแต่งสไตล์ทวารวดี มีสระว่ายน้ำ สปา และบาร์ดาดฟ้า",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities",
      "tier"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1300,
      "max": 2200
    }
  },
  {
    "id": "xen-hotel-nakhon-pathom",
    "province": "nakhon-pathom",
    "name_en": "Xen Hotel Nakhon Pathom",
    "lat": 13.811981,
    "lng": 100.054363,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": "https://www.xenhotel-nakhonpathom.com",
    "name": "โรงแรมเซ็น นครปฐม",
    "area": "ถนนราชมรรคา เมืองนครปฐม",
    "description": "โรงแรม 3 ดาว 134 ห้อง ใจกลางเมืองนครปฐม ใกล้องค์พระปฐมเจดีย์ จอดรถสะดวก",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 900,
      "max": 1400
    }
  },
  {
    "id": "the-pround-hotel",
    "province": "nakhon-pathom",
    "name_en": "The Proud Exclusive Hotel",
    "lat": 13.812689,
    "lng": 100.048455,
    "image_url": "https://images.pexels.com/photos/6606354/pexels-photo-6606354.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Belle Shang / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6606354/",
    "website": null,
    "name": "เดอะ พราวด์ เอ็กซ์คลูซีฟ โฮเทล",
    "area": "ถนนราชมรรคา เมืองนครปฐม",
    "description": "โรงแรมราคาประหยัดใกล้พระราชวังสนามจันทร์ มีสระว่ายน้ำ ที่จอดรถ และห้องพักสะอาด",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities",
      "name"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 700,
      "max": 1300
    }
  },
  {
    "id": "parnvati-resort",
    "province": "nakhon-pathom",
    "name_en": "Parn Dhevi Riverside Resort & Spa",
    "lat": 13.7699,
    "lng": 100.2387,
    "image_url": "https://images.pexels.com/photos/37610710/pexels-photo-37610710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Cihad Yildiz / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37610710/",
    "website": null,
    "name": "ปานเทวี ริเวอร์ไซด์ รีสอร์ท แอนด์ สปา",
    "area": "หอมเกร็ด สามพราน (พุทธมณฑลสาย 7)",
    "description": "รีสอร์ตริมน้ำที่หอมเกร็ด สามพราน มีคาเฟ่ลอยน้ำ RIVA Floating Cafe และสปา",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities",
      "check_in",
      "check_out"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1200,
      "max": 1900
    }
  },
  {
    "id": "grand-fortune-hotel-nakhon-si-thammarat",
    "province": "nakhon-si-thammarat",
    "name_en": "Grand Fortune Hotel Nakhon Si Thammarat",
    "lat": 8.4215,
    "lng": 99.962,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": null,
    "name": "โรงแรม แกรนด์ ฟอร์จูน นครศรีธรรมราช",
    "area": "เมืองนครศรีธรรมราช",
    "description": "โรงแรมในเมืองนครศรีธรรมราช ถนนพัฒนาการคูขวาง มีสระว่ายน้ำและสปา อาหารเช้าแยกจ่าย",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "lat",
      "lng",
      "check_in",
      "check_out",
      "price_per_night"
    ],
    "moods": [
      "temple",
      "quiet"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1500,
      "max": 2500
    }
  },
  {
    "id": "sichon-cabana-beach-resort",
    "province": "nakhon-si-thammarat",
    "name_en": "Sichon Cabana Beach Resort",
    "lat": 9.0106,
    "lng": 99.9211,
    "image_url": "https://images.pexels.com/photos/3355777/pexels-photo-3355777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Quang Nguyen Vinh / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/3355777/",
    "website": null,
    "name": "สิชล คาบาน่า บีช รีสอร์ท",
    "area": "หาดหินงาม สิชล",
    "description": "รีสอร์ตริมหาดหินงามสิชล 12 ห้อง มีสระว่ายน้ำ คาเฟ่ริมหาด และกิจกรรมเล่นเซิร์ฟ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "lat",
      "lng",
      "price_per_night",
      "amenities"
    ],
    "moods": [
      "beach",
      "photo",
      "adventure"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "beach_access",
      "free_wifi",
      "parking",
      "breakfast"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2200,
      "max": 4200
    }
  },
  {
    "id": "khanom-beach-resort-and-spa",
    "province": "nakhon-si-thammarat",
    "name_en": "Khanom Beach Resort & Spa",
    "lat": 9.16704,
    "lng": 99.87284,
    "image_url": "https://images.pexels.com/photos/4089908/pexels-photo-4089908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dushenkovsky / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/4089908/",
    "website": null,
    "name": "ขนอม บีช รีสอร์ท แอนด์ สปา",
    "area": "หาดหน้าด่าน ขนอม",
    "description": "รีสอร์ตและสปาย่านหาดหน้าด่านขนอม ห่างชายหาดราว 200 เมตร ห้องพักมีระเบียง",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities",
      "check_in",
      "check_out"
    ],
    "moods": [
      "beach",
      "quiet",
      "photo"
    ],
    "type": "resort",
    "tier": "comfy",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 3000,
      "max": 5500
    }
  },
  {
    "id": "hop-inn-nakhon-si-thammarat",
    "province": "nakhon-si-thammarat",
    "name_en": "Hop Inn Nakhon Si Thammarat",
    "lat": 8.44263,
    "lng": 99.97072,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": null,
    "name": "โรงแรม ฮ็อป อินน์ นครศรีธรรมราช",
    "area": "เมืองนครศรีธรรมราช",
    "description": "โรงแรมราคาย่อมเยามาตรฐานความสะอาดสูง ใจกลางเมืองเดินทางสะดวก ปลอดภัย มีที่จอดรถกว้างขวาง",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "amenities",
      "check_in",
      "check_out",
      "price_per_night"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 600,
      "max": 900
    }
  },
  {
    "id": "chonnapha-resort-khanom",
    "province": "nakhon-si-thammarat",
    "name_en": "Chonnapha Resort Khanom",
    "lat": 9.19969,
    "lng": 99.87501,
    "image_url": "https://images.pexels.com/photos/31387456/pexels-photo-31387456.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Vince / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/31387456/",
    "website": null,
    "name": "ชลนภา รีสอร์ท ขนอม",
    "area": "หาดขนอม",
    "description": "รีสอร์ตขนาดเล็กย่านหาดขนอม บรรยากาศเงียบสงบ เหมาะกับครอบครัว",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "amenities",
      "check_in",
      "check_out",
      "price_per_night"
    ],
    "moods": [
      "beach",
      "quiet"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1100,
      "max": 1900
    }
  },
  {
    "id": "novotel-bangkok-impact",
    "province": "nonthaburi",
    "name_en": "Novotel Bangkok Impact",
    "lat": 13.91553,
    "lng": 100.54839,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": null,
    "name": "โนโวเทล กรุงเทพ อิมแพ็ค",
    "area": "ปากเกร็ด / เมืองทองธานี",
    "description": "โรงแรมระดับ 4 ดาวข้างศูนย์แสดงสินค้าอิมแพ็ค เมืองทองธานี สระว่ายน้ำในร่ม สปา ห้องออกกำลังกาย อาหารเช้าแยกจ่าย",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night"
    ],
    "moods": [
      "luxury"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2200,
      "max": 4000
    }
  },
  {
    "id": "ibis-bangkok-impact",
    "province": "nonthaburi",
    "name_en": "ibis Bangkok Impact",
    "lat": 13.91615,
    "lng": 100.55212,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": null,
    "name": "ไอบิส กรุงเทพ อิมแพ็ค",
    "area": "ปากเกร็ด / เมืองทองธานี",
    "description": "โรงแรมสไตล์โมเดิร์นเน้นความคุ้มค่า ถนนป๊อปปูล่า เมืองทองธานี ใกล้ศูนย์แสดงสินค้าอิมแพ็ค อาหารเช้าแยกจ่าย",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "amenities",
      "check_in",
      "check_out",
      "price_per_night"
    ],
    "moods": [
      "food"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1200,
      "max": 1900
    }
  },
  {
    "id": "best-western-plus-wanda-grand-hotel",
    "province": "nonthaburi",
    "name_en": "Best Western Plus Wanda Grand Hotel",
    "lat": 13.90431,
    "lng": 100.53092,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": null,
    "name": "เบสท์ เวสเทิร์น พลัส แวนด้า แกรนด์",
    "area": "ปากเกร็ด / แจ้งวัฒนะ",
    "description": "โรงแรมบนถนนแจ้งวัฒนะ ปากเกร็ด มีสระว่ายน้ำ ห้องอาหาร และฟิตเนส ใกล้เซ็นทรัลแจ้งวัฒนะ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "amenities",
      "check_in",
      "check_out",
      "price_per_night"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1500,
      "max": 2300
    }
  },
  {
    "id": "buddy-oriental-riverside-hotel",
    "province": "nonthaburi",
    "name_en": "Kalanan Riverside Resort (formerly Buddy Oriental Riverside)",
    "lat": 13.9283,
    "lng": 100.5025,
    "image_url": "https://images.pexels.com/photos/37610710/pexels-photo-37610710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Cihad Yildiz / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37610710/",
    "website": null,
    "name": "คาลานัน ริเวอร์ไซด์ รีสอร์ท (เดิม บั๊ดดี้ โอเรียนทอล)",
    "area": "ซอยสุขาประชาสรร 2 ปากเกร็ด",
    "description": "โรงแรมริมแม่น้ำเจ้าพระยา ปากเกร็ด มีสระว่ายน้ำ สปา และร้านอาหารริมน้ำ (เดิมชื่อ บั๊ดดี้ โอเรียนทอล ริเวอร์ไซด์)",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "tier",
      "lat",
      "lng"
    ],
    "moods": [
      "photo",
      "quiet"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2200,
      "max": 4500
    }
  },
  {
    "id": "nonthaburi-palace-hotel",
    "province": "nonthaburi",
    "name_en": "Nonthaburi Palace Hotel",
    "lat": 13.8482,
    "lng": 100.4891,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": null,
    "name": "โรงแรม นนทบุรี เพลส",
    "area": "เมืองนนทบุรี / นนทบุรี 1",
    "description": "โรงแรมราคาประหยัดบนถนนนนทบุรี เมืองนนทบุรี มีร้านอาหาร ที่จอดรถ และไวไฟฟรี",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "lat",
      "lng",
      "price_per_night"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 650,
      "max": 1000
    }
  },
  {
    "id": "tinidee-hotel-bangkok-golf-club",
    "province": "pathum-thani",
    "name_en": "Tinidee Hotel Bangkok Golf Club",
    "lat": 13.981505,
    "lng": 100.542286,
    "image_url": "https://images.pexels.com/photos/13584138/pexels-photo-13584138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Kien Le / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/13584138/",
    "website": null,
    "name": "โรงแรมทินิดี บางกอก กอล์ฟ คลับ",
    "area": "บางกะดี เมืองปทุมธานี",
    "description": "รีสอร์ตท่ามกลางสนามกอล์ฟและธรรมชาติอันเงียบสงบ เหมาะกับการพักผ่อนและเล่นกอล์ฟ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities",
      "check_out"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1000,
      "max": 1800
    }
  },
  {
    "id": "novotel-bangkok-futurepark-rangsit",
    "province": "pathum-thani",
    "name_en": "Novotel Bangkok Future Park Rangsit",
    "lat": 13.9952,
    "lng": 100.6174,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": null,
    "name": "โรงแรมโนโวเทล กรุงเทพ ฟิวเจอร์พาร์ค รังสิต",
    "area": "ประชาธิปัตย์ คลองหลวง / รังสิต",
    "description": "โรงแรม 4 ดาวทันสมัยใกล้ฟิวเจอร์พาร์ค รังสิต มีสระว่ายน้ำกลางแจ้งและที่จอดรถฟรี",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1900,
      "max": 3200
    }
  },
  {
    "id": "pinehurst-golf-club-hotel",
    "province": "pathum-thani",
    "name_en": "Pinehurst Golf Club & Hotel",
    "lat": 14.04532,
    "lng": 100.601335,
    "image_url": "https://images.pexels.com/photos/37610710/pexels-photo-37610710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Cihad Yildiz / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37610710/",
    "website": "https://pinehurst.co.th",
    "name": "ไพน์เฮิร์สท กอล์ฟ คลับ แอนด์ โฮเต็ล",
    "area": "คลองหนึ่ง คลองหลวง",
    "description": "โรงแรมสไตล์รีสอร์ตบรรยากาศร่มรื่นท่ามกลางสนามกอล์ฟ ใกล้มหาวิทยาลัยกรุงเทพ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities",
      "check_in"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "11:00",
    "price_per_night": {
      "min": 1100,
      "max": 1900
    }
  },
  {
    "id": "the-pine-resort-pathum",
    "province": "pathum-thani",
    "name_en": "The Pine Resort",
    "lat": 14.118775,
    "lng": 100.50541,
    "image_url": "https://images.pexels.com/photos/37610710/pexels-photo-37610710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Cihad Yildiz / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37610710/",
    "website": "http://www.thepineresort.com",
    "name": "เดอะ ไพน์ รีสอร์ท",
    "area": "ท้ายเกาะ สามโคก",
    "description": "รีสอร์ตสามโคกที่มีสระว่ายน้ำ สนามเทนนิส สนามเด็กเล่น และพื้นที่จัดสัมมนา เหมาะพักผ่อนใกล้กรุงเทพฯ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "lat_lng",
      "price_per_night",
      "amenities"
    ],
    "moods": [
      "adventure",
      "quiet"
    ],
    "type": "resort",
    "tier": "saver",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 800,
      "max": 1500
    }
  },
  {
    "id": "ingnamm-hotel-pathum",
    "province": "pathum-thani",
    "name_en": "Ingnaam Hotel",
    "lat": 13.985146,
    "lng": 100.625034,
    "image_url": "https://images.pexels.com/photos/37098094/pexels-photo-37098094.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Sasi Tha / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37098094/",
    "website": null,
    "name": "โรงแรมอิงน้ำ",
    "area": "ประชาธิปัตย์ ธัญบุรี / รังสิต",
    "description": "โรงแรมขนาดเล็กราคาประหยัดบนถนนรังสิต-นครนายก ใกล้ฟิวเจอร์พาร์ค รังสิต มีสระว่ายน้ำและที่จอดรถ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities",
      "check_out"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 750,
      "max": 1200
    }
  },
  {
    "id": "asia-airport-hotel-rangsit",
    "province": "pathum-thani",
    "name_en": "Asia Airport Hotel Rangsit",
    "lat": 13.96195,
    "lng": 100.623024,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": "https://www.asiahotel.co.th",
    "name": "โรงแรมเอเชีย แอร์พอร์ต รังสิต",
    "area": "ลำลูกกา / รังสิต",
    "description": "โรงแรมขนาดใหญ่บนศูนย์การค้าถนนพหลโยธิน ลำลูกกา ห่างสนามบินดอนเมืองราว 6 กม.",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 900,
      "max": 1400
    }
  },
  {
    "id": "khaolak-orchid-beach-resort",
    "province": "phang-nga",
    "name_en": "Khaolak Orchid Beach Resort",
    "lat": 8.686234,
    "lng": 98.240967,
    "image_url": "https://images.pexels.com/photos/3355777/pexels-photo-3355777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Quang Nguyen Vinh / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/3355777/",
    "website": null,
    "name": "เขาหลัก ออร์คิด บีช รีสอร์ท",
    "area": "คึกคัก ตะกั่วป่า เขาหลัก",
    "description": "รีสอร์ตติดชายหาดย่านคึกคัก เขาหลัก มีที่จอดรถและวายฟายฟรี",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities"
    ],
    "moods": [
      "beach"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "free_wifi",
      "parking",
      "beach_access"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1400,
      "max": 3500
    }
  },
  {
    "id": "the-memory-at-on-on-hotel",
    "province": "phuket",
    "name_en": "The Memory at On On Hotel",
    "lat": 7.88381,
    "lng": 98.38854,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": null,
    "name": "เดอะ เมมโมรี แอท ออน ออน โฮเต็ล",
    "area": "ถนนพังงา ย่านเมืองเก่าภูเก็ต",
    "description": "โรงแรมประวัติศาสตร์สไตล์ชิโนโปรตุกีสสุดคลาสสิกใจกลางเมืองเก่าภูเก็ต",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night"
    ],
    "moods": [
      "temple",
      "photo",
      "quiet"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "free_wifi",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 900,
      "max": 2500
    }
  },
  {
    "id": "blu-monkey-hub-hotel-phuket",
    "province": "phuket",
    "name_en": "Blu Monkey Hub and Hotel Phuket",
    "lat": 7.8838,
    "lng": 98.3868,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": null,
    "name": "บลู มังกี้ ฮับ แอนด์ โฮเต็ล ภูเก็ต",
    "area": "ถนนพังงา ตลาดใหญ่ ตัวเมืองภูเก็ต",
    "description": "โรงแรมดีไซน์โมเดิร์นโคาสต์ สไตล์ฮิปสเตอร์ราคาสบายกระเป๋าสำหรับคนรุ่นใหม่",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "coordinates",
      "price_per_night",
      "amenities"
    ],
    "moods": [
      "photo"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "free_wifi"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 900,
      "max": 1800
    }
  },
  {
    "id": "trisara-phuket-resort",
    "province": "phuket",
    "name_en": "Trisara Phuket",
    "lat": 8.03501,
    "lng": 98.2773,
    "image_url": "https://images.pexels.com/photos/4089908/pexels-photo-4089908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dushenkovsky / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/4089908/",
    "website": "https://www.trisara.com",
    "name": "ตรีสรา ภูเก็ต",
    "area": "หาดในทอน เชิงทะเล อำเภอถลาง",
    "description": "รีสอร์ตวิลล่าหรูระดับอัลตร้าลักชูรีริมทะเล พร้อมสระว่ายน้ำส่วนตัวและความเป็นส่วนตัวสูงสุด",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "check_in",
      "check_out",
      "price_per_night"
    ],
    "moods": [
      "beach",
      "quiet",
      "photo"
    ],
    "type": "resort",
    "tier": "comfy",
    "amenities": [
      "pool",
      "free_wifi",
      "beach_access"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 28000,
      "max": 60000
    }
  },
  {
    "id": "the-siam-heritage-phuket-or-similar",
    "province": "phuket",
    "name_en": "SALA Phuket Mai Khao Beach Resort",
    "lat": 8.15795,
    "lng": 98.29673,
    "image_url": "https://images.pexels.com/photos/31387456/pexels-photo-31387456.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Vince / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/31387456/",
    "website": null,
    "name": "ศาลา ภูเก็ต ไม้ขาว บีช รีสอร์ท",
    "area": "หาดไม้ขาว อำเภอถลาง",
    "description": "พูลวิลล่ารีสอร์ตสไตล์มินิมอลริมหาดไม้ขาว ดีไซน์โดดเด่นและเงียบสงบ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "check_in",
      "check_out",
      "price_per_night",
      "name"
    ],
    "moods": [
      "beach",
      "quiet"
    ],
    "type": "resort",
    "tier": "comfy",
    "amenities": [
      "pool",
      "free_wifi",
      "beach_access"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 5500,
      "max": 12000
    }
  },
  {
    "id": "bangkok-tree-house",
    "province": "samut-prakan",
    "name_en": "Bangkok Tree House",
    "lat": 13.6805,
    "lng": 100.5851,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bangkok_Tree_house_-_panoramio.jpg/1280px-Bangkok_Tree_house_-_panoramio.jpg",
    "image_credit": "mohigan / Wikimedia Commons",
    "image_license": "CC BY-SA 3.0",
    "image_page_url": "https://commons.wikimedia.org/wiki/File:Bangkok_Tree_house_-_panoramio.jpg",
    "website": "http://www.bangkoktreehouse.com",
    "name": "บางกอก ทรี เฮ้าส์",
    "area": "บางน้ำผึ้ง / พระประแดง (บางกระเจ้า)",
    "description": "ที่พักบูทีค 12 ห้องริมแม่น้ำเจ้าพระยาท่ามกลางป่าชายเลนบางกระเจ้า รถเข้าไม่ถึง ต้องจอดที่วัดแล้วเดินหรือนั่งเรือ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "amenities"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "boutique",
    "tier": "mid",
    "amenities": [
      "free_wifi"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2500,
      "max": 3500
    }
  },
  {
    "id": "le-meridien-suvarnabhumi-golf-resort",
    "province": "samut-prakan",
    "name_en": "Hilton Bangkok Suvarnabhumi Golf Resort & Spa",
    "lat": 13.6569,
    "lng": 100.7063,
    "image_url": "https://images.pexels.com/photos/13584138/pexels-photo-13584138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Kien Le / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/13584138/",
    "website": null,
    "name": "ฮิลตัน กรุงเทพ สุวรรณภูมิ กอล์ฟ รีสอร์ท แอนด์ สปา",
    "area": "บางพลีใหญ่ / บางนา-ตราด",
    "description": "รีสอร์ต 5 ดาว 223 ห้อง (เดิมเลอ เมอริเดียน) ติดสนามกอล์ฟซัมมิท วินด์มิลล์ มีสระว่ายน้ำ สปา และคิดส์คลับ",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "website"
    ],
    "moods": [
      "luxury",
      "quiet"
    ],
    "type": "resort",
    "tier": "comfy",
    "amenities": [
      "pool",
      "free_wifi",
      "parking"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 3500,
      "max": 6500
    }
  },
  {
    "id": "grand-inter-hotel-mahachai",
    "province": "samut-sakhon",
    "name_en": "Grand Inter Hotel",
    "lat": 13.5693,
    "lng": 100.3395,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": null,
    "name": "โรงแรม แกรนด์ อินเตอร์ โฮเทล",
    "area": "โคกขาม / เมืองสมุทรสาคร",
    "description": "โรงแรม 3.5 ดาว 79 ห้องที่โคกขาม มีร้านอาหาร ฟิตเนส และที่จอดรถฟรี อยู่ห่างเซ็นทรัลพลาซา มหาชัยประมาณ 10 กม.",
    "awards": [],
    "is_mock": false,
    "unverified": false,
    "uncertain_fields": [
      "price_per_night",
      "name"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 700,
      "max": 1000
    }
  }
]
