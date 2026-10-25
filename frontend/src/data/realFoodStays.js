// ร้าน/ที่พักชื่อจริง — กรุงเทพตรวจแล้ว (AI/data/bangkok-food-stays.verified.json)
// จังหวัดอื่น unverified: true แปลงจาก AI/more-*.json / *_research_data.md ยังไม่ได้ตรวจซ้ำ (AI/data/food-stays-unverified.json) — รูปเป็นภาพประกอบตามประเภท
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
    "id": "ruenthip-seafood",
    "province": "krabi",
    "name_en": "Ruenthip Seafood",
    "lat": 8.0312,
    "lng": 98.8212,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": "https://www.facebook.com/ruenthipseafood",
    "name": "เรือนทิพย์ซีฟู้ด",
    "area": "อำเภอเมืองกระบี่",
    "description": "ร้านอาหารซีฟู้ดสดๆ รสชาติจัดจ้านสไตล์ปักษ์ใต้แท้ริมอ่าวนาง",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-22:00",
    "closed_days": null,
    "cuisine": [
      "ไทยใต้",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "แกงส้มปลาคอด",
      "ปูม้านึ่งสด"
    ],
    "price_per_person": {
      "min": 225,
      "max": 450
    }
  },
  {
    "id": "ko-joi-khanom-jeen",
    "province": "krabi",
    "name_en": "Ko Joi Khanom Jeen",
    "lat": 8.0123,
    "lng": 98.9212,
    "image_url": "https://images.pexels.com/photos/12178095/pexels-photo-12178095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Markus Winkler / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12178095/",
    "website": "https://www.facebook.com/kojoi",
    "name": "โกจ้อย ขนมจีน",
    "area": "อำเภอเหนือคลอง",
    "description": "ร้านขนมจีนชื่อดังประจำจังหวัดกระบี่เส้นสดนุ่มและไก่ทอดกรอบอร่อย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "breakfast",
      "lunch"
    ],
    "opening_hours": "07:00-15:00",
    "closed_days": "วันพุธ",
    "cuisine": [
      "ไทยใต้",
      "เส้นจันทน์"
    ],
    "signature_dishes": [
      "ขนมจีนน้ำยาปู",
      "ไก่ทอดหาดใหญ่"
    ],
    "price_per_person": {
      "min": 50,
      "max": 100
    }
  },
  {
    "id": "klua-wan-cafe",
    "province": "krabi",
    "name_en": "Klua Wan Cafe",
    "lat": 8.0612,
    "lng": 98.9154,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": "https://www.facebook.com/kluawancafe",
    "name": "เกลือหวาน คาเฟ่",
    "area": "อำเภอเมืองกระบี่",
    "description": "คาเฟ่บรรยากาศอบอุ่นเสิร์ฟเบเกอรี่โฮมเมดและกาแฟคั่วบดชั้นดี",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "breakfast",
      "snack"
    ],
    "opening_hours": "08:00-18:00",
    "closed_days": null,
    "cuisine": [
      "คาเฟ่",
      "เบเกอรี่"
    ],
    "signature_dishes": [
      "ครัวซองต์เนยสด",
      "กาแฟมะพร้าวคั่ว"
    ],
    "price_per_person": {
      "min": 75,
      "max": 150
    }
  },
  {
    "id": "krua-cha-om",
    "province": "krabi",
    "name_en": "Krua Cha-om",
    "lat": 8.0812,
    "lng": 98.9012,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": "https://www.facebook.com/kruachaom",
    "name": "ครัวชะอม",
    "area": "อำเภอเมืองกระบี่",
    "description": "ร้านอาหารพื้นบ้านรสชาติจัดจ้านถึงเครื่องแกงใต้แท้ๆ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:30-21:30",
    "closed_days": null,
    "cuisine": [
      "ไทยใต้"
    ],
    "signature_dishes": [
      "กุ้งผัดสะตอ",
      "ใบเหลียงผัดไข่"
    ],
    "price_per_person": {
      "min": 125,
      "max": 250
    }
  },
  {
    "id": "chok-dee-noodle",
    "province": "krabi",
    "name_en": "Chok Dee Noodle",
    "lat": 8.0645,
    "lng": 98.9145,
    "image_url": "https://images.pexels.com/photos/38941394/pexels-photo-38941394.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Archudio / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/38941394/",
    "website": null,
    "name": "โชคดี บะหมี่เกี๊ยว",
    "area": "อำเภอเมืองกระบี่",
    "description": "ร้านบะหมี่เกี๊ยวทำเองเส้นเหนียวนุ่มน้ำซุปกระดูกหมูกลมกล่อม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "breakfast",
      "lunch",
      "dinner"
    ],
    "opening_hours": "06:00-20:00",
    "closed_days": null,
    "cuisine": [
      "บะหมี่",
      "อาหารจานเดียว"
    ],
    "signature_dishes": [
      "บะหมี่เกี๊ยวกุ้งยักษ์",
      "หมูแดงอบขมิ้น"
    ],
    "price_per_person": {
      "min": 40,
      "max": 80
    }
  },
  {
    "id": "cafe-de-lanta",
    "province": "krabi",
    "name_en": "Cafe de Lanta",
    "lat": 7.6123,
    "lng": 99.0312,
    "image_url": "https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dinaziz2462 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27706147/",
    "website": "https://www.facebook.com/cafedelanta",
    "name": "คาเฟ่ เดอ ลันตา",
    "area": "อำเภอเกาะลันตา",
    "description": "คาเฟ่ริมหาดเกาะลันตาวิวสวยบรรยากาศโรแมนติกยามเย็น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "คาเฟ่",
      "อาหารนานาชาติ"
    ],
    "signature_dishes": [
      "สมูทตี้ผลไม้รวม",
      "พิซซ่าเตาถ่าน"
    ],
    "price_per_person": {
      "min": 175,
      "max": 350
    }
  },
  {
    "id": "bang-yao-seafood",
    "province": "krabi",
    "name_en": "Bang Yao Seafood",
    "lat": 8.0356,
    "lng": 98.8189,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "บังยาว ซีฟู้ด",
    "area": "อำเภอเมืองกระบี่",
    "description": "ร้านซีฟู้ดสดจากทะเลในราคาเป็นกันเองย่านอ่าวนาง",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "11:00-22:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทยใต้"
    ],
    "signature_dishes": [
      "ปูม้าผัดผงกะหรี่",
      "ปลาทอดน้ำปลา"
    ],
    "price_per_person": {
      "min": 200,
      "max": 400
    }
  },
  {
    "id": "roti-chao-kao",
    "province": "krabi",
    "name_en": "Roti Chao Kao",
    "lat": 8.0623,
    "lng": 98.9167,
    "image_url": "https://images.pexels.com/photos/28600264/pexels-photo-28600264.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Jean Papillon / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/28600264/",
    "website": null,
    "name": "โรตีเจ้าเก่า ตลาดโต้รุ่ง",
    "area": "อำเภอเมืองกระบี่",
    "description": "ร้านโรตีชื่อดังแป้งกรอบนอกนุ่มในทานคู่กับชาชักรสชาติเข้มข้น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "breakfast",
      "snack"
    ],
    "opening_hours": "17:00-23:00",
    "closed_days": null,
    "cuisine": [
      "โรตี",
      "ชาชัก"
    ],
    "signature_dishes": [
      "โรตีใส่ไข่กล้วย",
      "ชาชักฟองนุ่ม"
    ],
    "price_per_person": {
      "min": 30,
      "max": 60
    }
  },
  {
    "id": "puma-thip-fish-congee",
    "province": "krabi",
    "name_en": "Puma Thip Fish Congee",
    "lat": 8.0678,
    "lng": 98.9123,
    "image_url": "https://images.pexels.com/photos/38790905/pexels-photo-38790905.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Archudio / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/38790905/",
    "website": null,
    "name": "ปูม้าทิพย์ ข้าวต้มปลา",
    "area": "อำเภอเมืองกระบี่",
    "description": "ร้านข้าวต้มปลาและอาหารทะเลสดๆ เปิดให้บริการยามค่ำคืน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "dinner",
      "snack"
    ],
    "opening_hours": "17:00-01:00",
    "closed_days": null,
    "cuisine": [
      "ข้าวต้ม",
      "อาหารทะเล"
    ],
    "signature_dishes": [
      "ข้าวต้มปลาเก๋า",
      "ยำปูม้าสด"
    ],
    "price_per_person": {
      "min": 100,
      "max": 200
    }
  },
  {
    "id": "lanta-sunset-restaurant",
    "province": "krabi",
    "name_en": "Lanta Sunset Restaurant",
    "lat": 7.4912,
    "lng": 99.0123,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": "https://www.facebook.com/lantasunset",
    "name": "ลันตา ซันเซ็ท เรสเตอรองต์",
    "area": "อำเภอเกาะลันตา",
    "description": "ร้านอาหารริมหาดเกาะลันตาชมพระอาทิตย์ลับขอบฟ้าพร้อมอาหารอร่อย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "11:00-22:30",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "ต้มยำกุ้งน้ำข้น",
      "ปลากะพงทอดน้ำปลา"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "krua---------nakhon-si",
    "province": "nakhon-si-thammarat",
    "name_en": "Krua Nai Nang",
    "lat": 8.421,
    "lng": 99.968,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": null,
    "name": "ร้านอาหาร ครัวนายหนัง",
    "area": "เมืองนครศรีธรรมราช",
    "description": "ร้านอาหารใต้รสชาติจัดจ้านต้นตำรับเมืองนคร มีการแสดงแกะสลักและเชิดหนังตะลุงให้ชมขณะรับประทานอาหาร",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "ไทยใต้",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "แกงส้มปลากะพงยอดมะพร้าว",
      "แกงไตปลาทรงเครื่อง",
      "หมูผัดกะปิสตอ"
    ],
    "price_per_person": {
      "min": 200,
      "max": 400
    }
  },
  {
    "id": "ko-lan-kanom-jeen-mueang-nakhon",
    "province": "nakhon-si-thammarat",
    "name_en": "Kanom Jeen Mueang Khon Phanyom",
    "lat": 8.411,
    "lng": 99.9685,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": null,
    "name": "ขนมจีนเมืองคอน ถนนพานยม",
    "area": "ถนนพานยม เมืองนครศรีธรรมราช",
    "description": "ร้านขนมจีนใต้ระดับตำนานประจำเมืองนคร น้ำยาหลากหลายรสชาติทานคู่ถาดผักสดพื้นบ้านไม่อั้น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "breakfast",
      "lunch"
    ],
    "opening_hours": "08:00-15:30",
    "closed_days": null,
    "cuisine": [
      "ขนมจีนใต้",
      "ไทยใต้"
    ],
    "signature_dishes": [
      "ขนมจีนน้ำยาป่า",
      "ขนมจีนน้ำพริกหวาน",
      "แกงไตปลา"
    ],
    "price_per_person": {
      "min": 80,
      "max": 180
    }
  },
  {
    "id": "khao-yoi-kopitiam-nakhon-si",
    "province": "nakhon-si-thammarat",
    "name_en": "Kopi Nakhon Si Thammarat",
    "lat": 8.428,
    "lng": 99.965,
    "image_url": "https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Emrecan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/2079448/",
    "website": null,
    "name": "โกปี๊ นครศรีธรรมราช (สาขาข้างศาลากลาง)",
    "area": "เมืองนครศรีธรรมราช",
    "description": "ร้านกาแฟและติ่มซำบรรยากาศสไตล์ชิโน-โปรตุกีส จุดนัดพบยามเช้าของชาวเมืองนครศรีธรรมราช",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "restaurant",
    "meals": [
      "breakfast",
      "lunch",
      "snack"
    ],
    "opening_hours": "06:30-16:30",
    "closed_days": null,
    "cuisine": [
      "ติ่มซำ",
      "กาแฟโบราณ",
      "บะกุ๊ดเต๋"
    ],
    "signature_dishes": [
      "บะกุ๊ดเต๋หม้อดินร้อน",
      "ติ่มซำนึ่งสด",
      "ชาเย็นโบราณ"
    ],
    "price_per_person": {
      "min": 100,
      "max": 250
    }
  },
  {
    "id": "krua-sea-bass-sichon",
    "province": "nakhon-si-thammarat",
    "name_en": "Krua Tang Ke Seafood Sichon",
    "lat": 9.0095,
    "lng": 99.914,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ครัวตังเก ซีฟู้ด สิชล",
    "area": "ชายหาดสิชล",
    "description": "ร้านอาหารทะเลสดริมหาดสิชล วัตถุดิบสดใหม่ส่งตรงจากเรือประมง บรรยากาศรับลมทะเลสบายๆ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-21:30",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทยใต้"
    ],
    "signature_dishes": [
      "หมึกไข่นึ่งมะนาว",
      "กุ้งเผาตัวโต",
      "ปลากะพงทอดราดน้ำปลา"
    ],
    "price_per_person": {
      "min": 300,
      "max": 600
    }
  },
  {
    "id": "blue-surf-cafe-by-sichon-cabana",
    "province": "nakhon-si-thammarat",
    "name_en": "Blue Surf Cafe by Sichon Cabana",
    "lat": 9.0085,
    "lng": 99.913,
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
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "beach",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "breakfast",
      "lunch",
      "snack"
    ],
    "opening_hours": "08:00-19:00",
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
      "min": 120,
      "max": 280
    }
  },
  {
    "id": "suan-por-iam-kiriwong",
    "province": "nakhon-si-thammarat",
    "name_en": "Suan Por Iam Kiriwong",
    "lat": 8.438,
    "lng": 99.781,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านอาหาร สวนพ่อเอี่ยม คีรีวง",
    "area": "คีรีวง ลานสกา",
    "description": "ร้านอาหารพื้นบ้านริมลำธารคีรีวง ชิมเมนูผักกูดและวัตถุดิบสดจากสวนผลไม้ท่ามกลางธรรมชาติร่มรื่น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "mountain"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-19:00",
    "closed_days": "วันพุธ",
    "cuisine": [
      "ไทยใต้",
      "อาหารพื้นบ้าน"
    ],
    "signature_dishes": [
      "ยำผักกูดกุ้งสด",
      "ไก่ต้มขมิ้น",
      "แกงส้มหยวกกล้วยป่า"
    ],
    "price_per_person": {
      "min": 150,
      "max": 300
    }
  },
  {
    "id": "rot-dee-teochew-noodle-nakhon",
    "province": "nakhon-si-thammarat",
    "name_en": "Golden Dragon Teochew Noodle Nakhon",
    "lat": 8.429,
    "lng": 99.962,
    "image_url": "https://images.pexels.com/photos/7361022/pexels-photo-7361022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Likeboss Lertpongsaporn / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/7361022/",
    "website": null,
    "name": "ร้านก๋วยเตี๋ยวบะหมี่แต้จิ๋ว มังกรทอง",
    "area": "ท่าวัง เมืองนครศรีธรรมราช",
    "description": "ร้านบะหมี่ทำเองเส้นเหนียวนุ่มสไตล์แต้จิ๋วระดับตำนานย่านท่าวัง เปิดขายมายาวนานกว่า 50 ปี",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "09:00-20:00",
    "closed_days": null,
    "cuisine": [
      "บะหมี่แต้จิ๋ว",
      "จีน"
    ],
    "signature_dishes": [
      "บะหมี่แห้งหมูกรอบฉ่ำ",
      "เกี๊ยวกุ้งน้ำเป็ดพะโล้",
      "ลูกชิ้นปลาทำเอง"
    ],
    "price_per_person": {
      "min": 60,
      "max": 120
    }
  },
  {
    "id": "khanom-roti--------nakhon-si",
    "province": "nakhon-si-thammarat",
    "name_en": "Roti Bang Bang Ka Ae",
    "lat": 8.422,
    "lng": 99.967,
    "image_url": "https://images.pexels.com/photos/27104070/pexels-photo-27104070.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "The Journey of Frames / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27104070/",
    "website": null,
    "name": "โรตีบังบังกะแอ มหาชัย",
    "area": "เมืองนครศรีธรรมราช",
    "description": "ร้านโรตีชาชักยอดฮิตยามค่ำคืนของเมืองนคร แป้งโรตีตบกรอบนุ่มราดนมข้นหวานทานคู่ชาชักเข้มข้น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "dinner",
      "snack"
    ],
    "opening_hours": "16:00-23:00",
    "closed_days": null,
    "cuisine": [
      "โรตีชาชัก",
      "ขนมหวานมุสลิม"
    ],
    "signature_dishes": [
      "โรตีตบกรอบนอกนุ่มใน",
      "โรตีมะพร้าวอ่อน",
      "ชาชักใต้เข้มข้น"
    ],
    "price_per_person": {
      "min": 40,
      "max": 100
    }
  },
  {
    "id": "pak-phanang-seafood-market-restaurant",
    "province": "nakhon-si-thammarat",
    "name_en": "Rim Nam Pak Phanang Restaurant",
    "lat": 8.3585,
    "lng": 100.198,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านอาหาร ริมน้ำปากพนัง",
    "area": "ปากพนัง",
    "description": "ร้านอาหารทะเลบรรยากาศดีติดแม่น้ำปากพนัง ชมเรือประมงสัญจรและลิ้มรสอาหารทะเลสดใหม่",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:30-21:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทยใต้"
    ],
    "signature_dishes": [
      "ปลากะพงสองหน้า",
      "กุ้งแม่น้ำซอสมะขาม",
      "ส้มโอทับทิมสยามทรงเครื่อง"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "cc-khanom-beach-cafe",
    "province": "nakhon-si-thammarat",
    "name_en": "CC Beach Cafe Khanom",
    "lat": 9.168,
    "lng": 99.8812,
    "image_url": "https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dinaziz2462 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27706147/",
    "website": null,
    "name": "ซีซี คาเฟ่ ขนอม (CC Beach Cafe Khanom)",
    "area": "หาดหน้าด่าน ขนอม",
    "description": "คาเฟ่ริมหาดหน้าด่านขนอม ตกแต่งสไตล์มินิมอลสีขาวคลีนถ่ายรูปสวยทุกมุม บรรยากาศสุดชิล",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo",
      "beach"
    ],
    "kind": "cafe",
    "meals": [
      "snack"
    ],
    "opening_hours": "09:00-18:00",
    "closed_days": "วันพฤหัสบดี",
    "cuisine": [
      "กาแฟ",
      "เบเกอรี่",
      "เครื่องดื่มสดชื่น"
    ],
    "signature_dishes": [
      "Iced Caramel Macchiato",
      "Strawberry Shortcake",
      "Mango Passion Fruit Soda"
    ],
    "price_per_person": {
      "min": 90,
      "max": 200
    }
  },
  {
    "id": "khao-thong-roti-cha-chak-sichon",
    "province": "nakhon-si-thammarat",
    "name_en": "Roti Bang Bas Sichon",
    "lat": 9.002,
    "lng": 99.896,
    "image_url": "https://images.pexels.com/photos/38954055/pexels-photo-38954055.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Shakir1317 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/38954055/",
    "website": null,
    "name": "โรตีบังบัส สิชล",
    "area": "สิชล",
    "description": "ร้านโรตีชาชักยอดฮิตประจำอำเภอสิชล แป้งโรตีนุ่มหอมเนย ชาชักฟองนุ่มรสชาติใต้แท้",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "dinner",
      "snack"
    ],
    "opening_hours": "15:30-22:30",
    "closed_days": null,
    "cuisine": [
      "โรตี",
      "ชาชัก"
    ],
    "signature_dishes": [
      "โรตีภูเขาไฟ",
      "โรตีมะพร้าวอ่อน",
      "ชาเย็นใต้สูตรเข้มข้น"
    ],
    "price_per_person": {
      "min": 35,
      "max": 90
    }
  },
  {
    "id": "chada-tea-house-nakhon-si",
    "province": "nakhon-si-thammarat",
    "name_en": "Chada Thai Dessert & Tea House",
    "lat": 8.412,
    "lng": 99.9672,
    "image_url": "https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dinaziz2462 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27706147/",
    "website": null,
    "name": "ร้านชาฎา ขนมไทย เมืองนคร",
    "area": "เมืองนครศรีธรรมราช",
    "description": "ร้านคาเฟ่ขนมไทยโบราณรสชาติประณีต จัดเสิร์ฟใส่ชุดเครื่องทองงดงามใกล้าวัดพระมหาธาตุฯ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "snack"
    ],
    "opening_hours": "09:00-17:30",
    "closed_days": "วันจันทร์",
    "cuisine": [
      "ขนมไทยโบราณ",
      "ชาไทย"
    ],
    "signature_dishes": [
      "เซ็ตขนมไทยทองโบราณ",
      "ขนมเสน่ห์จันทน์",
      "ชาสมุนไพรบำรุงสุขภาพ"
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
    "lat": 13.9182,
    "lng": 100.4912,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": "https://www.facebook.com/RiverWinePakkret",
    "name": "ริเวอร์ ไวน์ (River Wine)",
    "area": "ปากเกร็ด",
    "description": "ร้านอาหารสไตล์โมเดิร์นโรแมนติกริมแม่น้ำเจ้าพระยา ชมวิวสะพานพระราม 4 และพระอาทิตย์ตกงดงาม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "max": 1200
    }
  },
  {
    "id": "baan-rabiangnam",
    "province": "nonthaburi",
    "name_en": "Baan Rabiangnam",
    "lat": 13.8835,
    "lng": 100.4851,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": "https://www.facebook.com/baanrabiangnam",
    "name": "บ้านระเบียงน้ำ",
    "area": "เมืองนนทบุรี",
    "description": "ร้านอาหารไทยเรือนไม้คลาสสิกริมแม่น้ำเจ้าพระยา บรรยากาศร่มรื่นริมน้ำพร้อมอาหารไทยรสจัดจ้าน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "11:30-22:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "กุ้งแม่น้ำเผา",
      "ต้มยำกุ้งแม่น้ำ",
      "แกงคั่วสับปะรดกุ้ง"
    ],
    "price_per_person": {
      "min": 400,
      "max": 900
    }
  },
  {
    "id": "song-fang-khlong",
    "province": "nonthaburi",
    "name_en": "Song Fang Khlong Riverside",
    "lat": 13.9112,
    "lng": 100.5021,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": "https://www.facebook.com/Songfangkhlong",
    "name": "สองฝั่งคลอง ริเวอร์ไซด์",
    "area": "ปากเกร็ด",
    "description": "ร้านอาหารไทยริมแม่น้ำเจ้าพระยาบรรยากาศย้อนยุคริมน้ำ พร้อมวิวเกาะเกร็ดตระการตา",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "11:00-23:00",
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
      "min": 350,
      "max": 800
    }
  },
  {
    "id": "my-castle-cafe",
    "province": "nonthaburi",
    "name_en": "My Castle Cafe",
    "lat": 13.8805,
    "lng": 100.4891,
    "image_url": "https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Emrecan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/2079448/",
    "website": "https://www.facebook.com/mycastlecafe",
    "name": "ไมเคาส์เซิล คาเฟ่ (My Castle Cafe)",
    "area": "เมืองนนทบุรี",
    "description": "คาเฟ่ธีมปราสาทสีพาสเทลสุดหวาน ตกแต่งด้วยมุมถ่ายรูปดอกไม้สวยงามเหมาะกับสายคอนเทนต์",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "lunch",
      "snack"
    ],
    "opening_hours": "11:00-21:30",
    "closed_days": "พฤหัสบดี",
    "cuisine": [
      "เบเกอรี่",
      "เครื่องดื่ม",
      "อาหารฟิวชั่น"
    ],
    "signature_dishes": [
      "เค้กปราสาทพาสเทล",
      "สปาเกตตีคาโบนารา",
      "ชานมไข่มุกพรีเมียม"
    ],
    "price_per_person": {
      "min": 150,
      "max": 350
    }
  },
  {
    "id": "plern-cafe-and-bistro",
    "province": "nonthaburi",
    "name_en": "Plern Cafe & Bistro",
    "lat": 13.9281,
    "lng": 100.5212,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": "https://www.facebook.com/plerncafebistro",
    "name": "เพลิน คาเฟ่ แอนด์ บิสโทร (Plern Cafe & Bistro)",
    "area": "ปากเกร็ด",
    "description": "คาเฟ่สไตล์การ์เดนร่มรื่นกลางสวนเขียวขจี มีสนามหญ้าและมุมนั่งพักผ่อนสไตล์ปิกนิก",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo",
      "quiet"
    ],
    "kind": "cafe",
    "meals": [
      "breakfast",
      "lunch",
      "dinner",
      "snack"
    ],
    "opening_hours": "08:00-22:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "เบเกอรี่",
      "กาแฟ"
    ],
    "signature_dishes": [
      "กาแฟสกัดเย็น",
      "พิซซ่าเตาถ่าน",
      "บิงซูผลไม้สด"
    ],
    "price_per_person": {
      "min": 200,
      "max": 450
    }
  },
  {
    "id": "item-nonthaburi",
    "province": "nonthaburi",
    "name_en": "Nai Song Stewed Duck Sai Noi",
    "lat": 13.9781,
    "lng": 100.3129,
    "image_url": "https://images.pexels.com/photos/12178095/pexels-photo-12178095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Markus Winkler / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12178095/",
    "website": null,
    "name": "นายซ้งเป็ดพะโล้ ไทรน้อย",
    "area": "ไทรน้อย",
    "description": "ร้านเป็ดพะโล้เจ้าดังประจำตลาดน้ำไทรน้อย น้ำซุปพะโล้หอมเครื่องยาจีน เนื้อเป็ดนุ่มไม่มีกลิ่นคาว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "website"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "breakfast",
      "lunch"
    ],
    "opening_hours": "07:30-15:30",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "จีน"
    ],
    "signature_dishes": [
      "เป็ดพะโล้เนื้อนุ่ม",
      "ก๋วยเตี๋ยวเป็ด",
      "อะไหล่เป็ดพะโล้"
    ],
    "price_per_person": {
      "min": 80,
      "max": 250
    }
  },
  {
    "id": "som-tum-pa-pao-nonthaburi",
    "province": "nonthaburi",
    "name_en": "Som Tum Pa Pao Nonthaburi",
    "lat": 13.8408,
    "lng": 100.4918,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ส้มตำป้าเป้า ท่าน้ำนนท์",
    "area": "เมืองนนทบุรี",
    "description": "ร้านส้มตำรสแซ่บจัดจ้านตำนานขวัญใจคนท้องถิ่นบริเวณหอนาฬิกาท่าน้ำนนท์",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "website"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-19:00",
    "closed_days": "จันทร์",
    "cuisine": [
      "อีสาน",
      "ไทย"
    ],
    "signature_dishes": [
      "ส้มตำปูปลาร้า",
      "ไก่ย่างวิเชียรบุรี",
      "คอหมูย่าง"
    ],
    "price_per_person": {
      "min": 70,
      "max": 200
    }
  },
  {
    "id": "kuay-tiew-phak-wan-nonthaburi",
    "province": "nonthaburi",
    "name_en": "Kuay Tiew Phak Wan Nonthaburi",
    "lat": 13.8812,
    "lng": 100.4899,
    "image_url": "https://images.pexels.com/photos/38941394/pexels-photo-38941394.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Archudio / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/38941394/",
    "website": null,
    "name": "ก๋วยเตี๋ยวผักหวาน นนทบุรี",
    "area": "เมืองนนทบุรี",
    "description": "ร้านก๋วยเตี๋ยวสูตรเด็ดเน้นวัตถุดิบผักหวานสดกรอบ พร้อมเมนูอาหารไทยหลากหลาย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "website"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch"
    ],
    "opening_hours": "08:30-17:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ก๋วยเตี๋ยว"
    ],
    "signature_dishes": [
      "ก๋วยเตี๋ยวเนื้อผักหวาน",
      "ผัดไทยผักหวาน",
      "ผักหวานทอดกรอบ"
    ],
    "price_per_person": {
      "min": 80,
      "max": 200
    }
  },
  {
    "id": "non-bakery",
    "province": "nonthaburi",
    "name_en": "Non Bakery",
    "lat": 13.8411,
    "lng": 100.4925,
    "image_url": "https://images.pexels.com/photos/7405059/pexels-photo-7405059.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Furkan Tumer / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/7405059/",
    "website": "https://www.facebook.com/nonbakery",
    "name": "นนท์เบเกอรี่",
    "area": "เมืองนนทบุรี",
    "description": "ร้านเบเกอรี่เก่าแก่ชื่อดังใกล้วงเวียนท่าน้ำนนท์ โดดเด่นด้วยขนมอร่อยคุณภาพดีในราคามิตรภาพ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "เอแคลร์นมสด",
      "เค้กมะพร้าวอ่อน",
      "ขนมปังเนยสด"
    ],
    "price_per_person": {
      "min": 50,
      "max": 150
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
    "website": "https://www.facebook.com/ganiccofarm",
    "name": "กานิกะ ฟาร์ม (Ganicco Farm)",
    "area": "เมืองนนทบุรี",
    "description": "คาเฟ่ออร์แกนิกสไตล์มินิมอลเกาหลี รายล้อมด้วยเรือนกระจกปลูกผลไม้และสวนสวยละมุนตา",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "08:30-19:00",
    "closed_days": "อังคาร",
    "cuisine": [
      "เบเกอรี่",
      "เครื่องดื่ม",
      "ออร์แกนิก"
    ],
    "signature_dishes": [
      "เค้กเมลอนออร์แกนิก",
      "พาสต้าโฮมเมด",
      "สมูทตี้ผลไม้สด"
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
    "lat": 14.0383,
    "lng": 100.4142,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": null,
    "name": "แปโภชนา",
    "area": "ตลาด 100 ปี ระแหง ลาดหลุมแก้ว",
    "description": "ร้านอาหารไทย-จีนโบราณระดับตำนานกว่า 100 ปี รสชาติเข้มข้นจัดจ้านประจำตลาดระแหง",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "ต้มยำขาหมู",
      "ผัดฉ่าปลาสลิด",
      "หมูแดดเดียว"
    ],
    "price_per_person": {
      "min": 150,
      "max": 300
    }
  },
  {
    "id": "ruen-thai-goong-pao",
    "province": "pathum-thani",
    "name_en": "Ruen Thai Kung Pao",
    "lat": 14.0515,
    "lng": 100.5288,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": null,
    "name": "เรือนไทยกุ้งเผา วัดเชิงราก",
    "area": "สามโคก ปทุมธานี",
    "description": "ร้านกุ้งแม่น้ำเผาชื่อดังริมแม่น้ำเจ้าพระยา มันกุ้งเยิ้มๆ และน้ำจิ้มซีฟู้ดสุดรสจัดจ้าน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-19:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย",
      "กุ้งแม่น้ำ"
    ],
    "signature_dishes": [
      "กุ้งแม่น้ำเผาตัวโต",
      "ต้มยำกุ้งแม่น้ำ",
      "ปลากะพงทอดน้ำปลา"
    ],
    "price_per_person": {
      "min": 500,
      "max": 1200
    }
  },
  {
    "id": "kru-tor-kung-pao",
    "province": "pathum-thani",
    "name_en": "Kru Tor Restaurant",
    "lat": 14.062,
    "lng": 100.531,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านอาหารครูต้อ กุ้งเผา",
    "area": "สามโคก",
    "description": "ร้านอาหารไทยริมน้ำบรรยากาศดี ขึ้นชื่อเรื่องกุ้งแม่น้ำสดและปลาแม่น้ำรสเลิศ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-21:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "กุ้งแม่น้ำเผา",
      "ปลาคังผัดฉ่า",
      "แกงส้มชะอมกุ้ง"
    ],
    "price_per_person": {
      "min": 350,
      "max": 800
    }
  },
  {
    "id": "jae-mon-gui-chai",
    "province": "pathum-thani",
    "name_en": "Jae Mon Gui Chai Wat San Chao",
    "lat": 13.989,
    "lng": 100.5396,
    "image_url": "https://images.pexels.com/photos/12265850/pexels-photo-12265850.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Markus Winkler / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12265850/",
    "website": null,
    "name": "กุยช่ายเจ๊มล วัดศาลเจ้า",
    "area": "ตลาดน้ำวัดศาลเจ้า เมืองปทุมธานี",
    "description": "ต้นตำรับกุยช่ายแป้งบางนุ่มไส้แน่นระดับตำนานประจำวัดศาลเจ้าที่ต้องต่อแถวซื้อ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "snack"
    ],
    "opening_hours": "07:00-15:00",
    "closed_days": "วันจันทร์",
    "cuisine": [
      "ของว่างไทย-จีน"
    ],
    "signature_dishes": [
      "กุยช่ายแป้งบางใสไส้ผัก",
      "กุยช่ายเผือก",
      "กุยช่ายหน่อไม้"
    ],
    "price_per_person": {
      "min": 50,
      "max": 150
    }
  },
  {
    "id": "ko-boy-boat-noodle",
    "province": "pathum-thani",
    "name_en": "Ko Boy Boat Noodle Khlong 3",
    "lat": 13.9912,
    "lng": 100.665,
    "image_url": "https://images.pexels.com/photos/7361022/pexels-photo-7361022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Likeboss Lertpongsaporn / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/7361022/",
    "website": null,
    "name": "ก๋วยเตี๋ยวเรือโกบอย คลองสาม",
    "area": "รังสิต-นครนายก คลองสาม",
    "description": "ก๋วยเตี๋ยวเรือรังสิตเจ้าดัง น้ำซุปเข้มข้นจัดจ้าน หอมเครื่องเทศและกากหมูเจียวใหม่ๆ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch"
    ],
    "opening_hours": "08:00-17:00",
    "closed_days": null,
    "cuisine": [
      "ก๋วยเตี๋ยวเรือ",
      "ไทย"
    ],
    "signature_dishes": [
      "ก๋วยเตี๋ยวเรือเนื้อน้ำตกเข้มข้น",
      "กากหมูเจียวกรอบ",
      "ก๋วยเตี๋ยวต้มยำ"
    ],
    "price_per_person": {
      "min": 60,
      "max": 150
    }
  },
  {
    "id": "coffee-and-tree-khlong-15",
    "province": "pathum-thani",
    "name_en": "Coffee & Tree Khlong 15",
    "lat": 14.0921,
    "lng": 100.908,
    "image_url": "https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Emrecan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/2079448/",
    "website": null,
    "name": "ร้านกาแฟกับต้นไม้ คลอง 15",
    "area": "ธัญบุรี คลอง 15",
    "description": "ร้านกาแฟไม้เก่าสุดวินเทจซ่อนตัวในหมู่บ้านไม้ดอกไม้ประดับ คลอง 15 บรรยากาศร่มรื่น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "quiet",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "snack"
    ],
    "opening_hours": "08:00-17:00",
    "closed_days": "วันจันทร์",
    "cuisine": [
      "กาแฟ",
      "เบเกอรี่"
    ],
    "signature_dishes": [
      "เอสเพรสโซเย็น",
      "เค้กส้ม",
      "ชาเขียวมัทฉะ"
    ],
    "price_per_person": {
      "min": 60,
      "max": 150
    }
  },
  {
    "id": "baan-phruksa-thewa",
    "province": "pathum-thani",
    "name_en": "Baan Phruksa Thewa",
    "lat": 14.011,
    "lng": 100.525,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านอาหารบ้านพฤกษาเทวา",
    "area": "เมืองปทุมธานี",
    "description": "ร้านอาหารไทยในเรือนไทยโบราณ รสชาติกลมกล่อมตำรับชาววังและบรรยากาศสวนร่มรื่น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "quiet"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:30-21:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "พื้นบ้าน"
    ],
    "signature_dishes": [
      "แกงส้มคาวหวาน",
      "ปลาช่อนเผาเกลือ",
      "ยำถั่วพู"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "samkhok-coffee",
    "province": "pathum-thani",
    "name_en": "Samkhok Coffee",
    "lat": 14.0535,
    "lng": 100.53,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": null,
    "name": "สามโคก คอฟฟี่ (Samkhok Coffee)",
    "area": "สามโคก",
    "description": "ร้านกาแฟสเปเชียลตี้คัดสรรเมล็ดกาแฟคุณภาพเยี่ยม บรรยากาศอบอุ่นเป็นกันเองในอำเภอสามโคก",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "quiet"
    ],
    "kind": "cafe",
    "meals": [
      "snack"
    ],
    "opening_hours": "07:30-17:00",
    "closed_days": "วันพุธ",
    "cuisine": [
      "กาแฟ",
      "เครื่องดื่ม",
      "เบเกอรี่"
    ],
    "signature_dishes": [
      "Dirty Coffee",
      "Coconut Cold Brew",
      "Croissant สด"
    ],
    "price_per_person": {
      "min": 80,
      "max": 200
    }
  },
  {
    "id": "tak-arkart-riverfront",
    "province": "pathum-thani",
    "name_en": "Tak Arkart Riverfront Restaurant",
    "lat": 14.0152,
    "lng": 100.5385,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านอาหารตากอากาศ ปทุมธานี",
    "area": "เมืองปทุมธานี",
    "description": "ร้านอาหารริมแม่น้ำเจ้าพระยาบรรยากาศดี ชมวิวสะพานและแสงไฟยามค่ำคืนอย่างโรแมนติก",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "beach"
    ],
    "kind": "restaurant",
    "meals": [
      "dinner"
    ],
    "opening_hours": "16:00-23:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "ปลากะพงนึ่งมะนาว",
      "กุ้งซอสมะขาม",
      "แกงส้มใต้แป๊ะซะ"
    ],
    "price_per_person": {
      "min": 300,
      "max": 600
    }
  },
  {
    "id": "nai-sawang-pork-noodle",
    "province": "pathum-thani",
    "name_en": "Nai Sawang Pork Noodle",
    "lat": 14.0185,
    "lng": 100.5332,
    "image_url": "https://images.pexels.com/photos/12178095/pexels-photo-12178095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Markus Winkler / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12178095/",
    "website": null,
    "name": "ก๋วยเตี๋ยวหมูโบราณนายสว่าง",
    "area": "เมืองปทุมธานี",
    "description": "ก๋วยเตี๋ยวหมูต้มยำสูตรโบราณใส่ถั่วพริกคั่วเองหอมๆ มะนาวแท้รสชาติแซ่บลงตัว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "lunch"
    ],
    "opening_hours": "08:30-15:30",
    "closed_days": null,
    "cuisine": [
      "ก๋วยเตี๋ยวหมูโบราณ"
    ],
    "signature_dishes": [
      "ก๋วยเตี๋ยวต้มยำหมูโบราณ",
      "หมูเด้งต้มยำ",
      "เกี๊ยวกรอบ"
    ],
    "price_per_person": {
      "min": 50,
      "max": 100
    }
  },
  {
    "id": "sailom-bangpu-restaurant",
    "province": "samut-prakan",
    "name_en": "Sailom Bangpu Restaurant",
    "lat": 13.5412,
    "lng": 100.6225,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": "https://www.facebook.com/SailomBangpu",
    "name": "สายลม บางปู (ร้านอาหารซีฟู้ด)",
    "area": "บางปู เมืองสมุทรปราการ",
    "description": "ร้านอาหารซีฟู้ดสไตล์อาร์ตตกแต่งงานเซรามิกริมทะเลอ่าวไทย วิวพระอาทิตย์ตกสวยตระการตา",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "11:00-21:30",
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
    "id": "rabang-mai-bangpu",
    "province": "samut-prakan",
    "name_en": "Rabiang Mai Bangpu",
    "lat": 13.528,
    "lng": 100.641,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": null,
    "name": "ระเบียงไม้ บางปู",
    "area": "บางปู เมืองสมุทรปราการ",
    "description": "ร้านอาหารทะเลเรือนไม้ทอดยาวลงไปในทะเลป่าชายเลน บรรยากาศรับลมทะเลเย็นสบายสุดชิล",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-21:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "ปูไข่นึ่งนมสด",
      "ต้มยำกุ้งแม่น้ำ",
      "แกงส้มไข่ปลาเรียวเซียว"
    ],
    "price_per_person": {
      "min": 350,
      "max": 700
    }
  },
  {
    "id": "mon-khlong-dan-seafood",
    "province": "samut-prakan",
    "name_en": "Mon Khlong Dan Seafood",
    "lat": 13.4985,
    "lng": 100.801,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านอาหาร มอญคลองด่าน",
    "area": "คลองด่าน บางบ่อ",
    "description": "ร้านอาหารทะเลสดใหม่วัตถุดิบตรงจากเรือประมงคลองด่าน รสชาติไทยจัดจ้านดั้งเดิม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-20:30",
    "closed_days": "วันจันทร์",
    "cuisine": [
      "ซีฟู้ด",
      "อาหารพื้นบ้านมอญ-ไทย"
    ],
    "signature_dishes": [
      "กุ้งแชบ๊วยเผา",
      "ปูทะเลผัดผงกะหรี่",
      "แกงส้มปูไข่หน่อไม้ดอง"
    ],
    "price_per_person": {
      "min": 300,
      "max": 600
    }
  },
  {
    "id": "pae-lee-coffee-100-years",
    "province": "samut-prakan",
    "name_en": "Pae Lee Coffee 100 Years Market",
    "lat": 13.6625,
    "lng": 100.9125,
    "image_url": "https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dinaziz2462 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27706147/",
    "website": null,
    "name": "กาแฟแป๊ะหลี ตลาดคลองสวน 100 ปี",
    "area": "ตลาดคลองสวน 100 ปี บางบ่อ",
    "description": "ตำนานกาแฟโบราณกว่า 80 ปี ประจำตลาดคลองสวน ชงด้วยถุงชงผ้าชักแบบดั้งเดิม เอกลักษณ์ฉลากแป๊ะหลี",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "snack"
    ],
    "opening_hours": "07:00-16:00",
    "closed_days": null,
    "cuisine": [
      "กาแฟโบราณ",
      "เครื่องดื่มโบราณ"
    ],
    "signature_dishes": [
      "กาแฟโบราณสูตรแป๊ะหลี",
      "ชาเย็นโบราณ",
      "ไข่ลวก"
    ],
    "price_per_person": {
      "min": 30,
      "max": 80
    }
  },
  {
    "id": "ban-me-phrik-khlong-suan",
    "province": "samut-prakan",
    "name_en": "Baan Mae Phrik Khlong Suan",
    "lat": 13.6628,
    "lng": 100.912,
    "image_url": "https://images.pexels.com/photos/28654108/pexels-photo-28654108.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Inna YN / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/28654108/",
    "website": null,
    "name": "ร้านบ้านแม่พริก ตลาดคลองสวน",
    "area": "ตลาดคลองสวน 100 ปี บางบ่อ",
    "description": "ร้านอาหารไทยริมคลองในตลาดคลองสวน เด่นเรื่องก๋วยเตี๋ยวเป็ดตุ๋นน้ำซุปหอมกลมกล่อม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch"
    ],
    "opening_hours": "08:00-16:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "ก๋วยเตี๋ยวโบราณ"
    ],
    "signature_dishes": [
      "ก๋วยเตี๋ยวเป็ดตุ๋นยาจีน",
      "ผัดไทยกุ้งสด",
      "ขนมจุ๋ยก้วยโบราณ"
    ],
    "price_per_person": {
      "min": 60,
      "max": 150
    }
  },
  {
    "id": "morn-ban-sakhla-seafood",
    "province": "samut-prakan",
    "name_en": "Pa Sunthon Kung Yiad Ban Sakhla",
    "lat": 13.5362,
    "lng": 100.5288,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านกุ้งเหยียดป้าสุนทร บ้านสาขลา",
    "area": "ชุมชนบ้านสาขลา พระสมุทรเจดีย์",
    "description": "ต้นตำรับกุ้งเหยียดรสชาติหวานเค็มกลมกล่อม เปลือกกรอบทานได้ทั้งตัว ของฝากขึ้นชื่อที่สุดของบ้านสาขลา",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "snack",
      "lunch"
    ],
    "opening_hours": "08:00-17:00",
    "closed_days": null,
    "cuisine": [
      "อาหารพื้นบ้านสมุทรปราการ",
      "กุ้งเหยียด"
    ],
    "signature_dishes": [
      "กุ้งเหยียดสูตรดั้งเดิม",
      "ปูเค็มต้มหวาน",
      "ปลาสลิดแดดเดียว"
    ],
    "price_per_person": {
      "min": 150,
      "max": 300
    }
  },
  {
    "id": "bangkok-tree-house-restaurant",
    "province": "samut-prakan",
    "name_en": "Bangkok Tree House Restaurant",
    "lat": 13.6812,
    "lng": 100.578,
    "image_url": "https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Emrecan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/2079448/",
    "website": "http://www.bangkoktreehouse.com",
    "name": "ร้านอาหารและคาเฟ่ บางกอก ทรี เฮ้าส์",
    "area": "บางกระเจ้า พระประแดง",
    "description": "ร้านอาหารสไตล์ออร์แกนิกเน้นวัตถุดิบท้องถิ่น บรรยากาศบ้านบนต้นไม้ท่ามกลางธรรมชาติป่าชายเลน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "quiet",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "lunch",
      "dinner",
      "snack"
    ],
    "opening_hours": "09:00-18:00",
    "closed_days": null,
    "cuisine": [
      "ไทยออร์แกนิก",
      "ฟิวชั่น",
      "กาแฟ"
    ],
    "signature_dishes": [
      "มัสมั่นไก่สูตรโบราณ",
      "เมี่ยงกลีบบัวออร์แกนิก",
      "ชาสมุนไพรบางกระเจ้า"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "sanphawut-seafood-bangna",
    "province": "samut-prakan",
    "name_en": "Baan Khun Mam Seafood Pak Nam",
    "lat": 13.592,
    "lng": 100.595,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านอาหารบ้านคุณแหม่ม ซีฟู้ด ปากน้ำ",
    "area": "ปากน้ำ เมืองสมุทรปราการ",
    "description": "ร้านอาหารทะเลรสจัดจ้านดั้งเดิมใกล้ริมแม่น้ำเจ้าพระยา ปากน้ำ วัตถุดิบสดใหม่ราคามิตรภาพ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:30-21:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "กุ้งแม่น้ำเผา",
      "ปลากะพงนึ่งมะนาว",
      "แกงส้มไข่ปลาเรียวเซียว"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "khanom-chin-nam-ya-mae-buap",
    "province": "samut-prakan",
    "name_en": "Mae Buap Khanom Chin Bang Phli",
    "lat": 13.6055,
    "lng": 100.7062,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ขนมจีนน้ำยาแม่บวบ บางพลี",
    "area": "ตลาดโบราณบางพลี",
    "description": "ขนมจีนน้ำยาสูตรโบราณข้นเข้มเนื้อปลาเน้นๆ ประจำตลาดบางพลี ขายมานานกว่า 40 ปี",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "lunch"
    ],
    "opening_hours": "08:00-15:00",
    "closed_days": null,
    "cuisine": [
      "ขนมจีน",
      "ไทย"
    ],
    "signature_dishes": [
      "ขนมจีนน้ำยาปลาแกะเข้มข้น",
      "ขนมจีนเขียวหวานไก่",
      "ขนมจีนน้ำพริก"
    ],
    "price_per_person": {
      "min": 40,
      "max": 90
    }
  },
  {
    "id": "hidden-woods-bang-krachao",
    "province": "samut-prakan",
    "name_en": "Hidden Woods Cafe Bang Krachao",
    "lat": 13.689,
    "lng": 100.572,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": null,
    "name": "ฮิดเดน วูดส์ คาเฟ่ บางกระเจ้า (Hidden Woods)",
    "area": "บางกระเจ้า พระประแดง",
    "description": "คาเฟ่ลับซ่อนตัวในป่าชายเลนริมแม่น้ำเจ้าพระยา ตกแต่งสไตล์มินิมอลกลมกลืนธรรมชาติ วิวดีสงบเงียบ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "closed_days": "วันจันทร์, วันอังคาร",
    "cuisine": [
      "กาแฟ",
      "เบเกอรี่",
      "ฟิวชั่น"
    ],
    "signature_dishes": [
      "Dirty Coffee",
      "Croissant สดอบใหม่",
      "สปาเก็ตตี้พริกแห้งเบคอน"
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
    "lat": 13.6468,
    "lng": 100.68,
    "image_url": "https://images.pexels.com/photos/34714660/pexels-photo-34714660.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Undo Kim / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/34714660/",
    "website": "https://www.boontongkeethailand.com",
    "name": "บุญตงกี่ เมกาบางนา",
    "area": "เมกาบางนา บางพลี",
    "description": "ร้านข้าวมันไก่สิงคโปร์ระดับตำนาน เนื้อไก่นุ่มฉ่ำราดซอสซีอิ๊วสูตรเด็ดในศูนย์การค้าเมกาบางนา",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "จีน",
      "ข้าวมันไก่สิงคโปร์"
    ],
    "signature_dishes": [
      "ข้าวมันไก่บุญตงกี่",
      "เต้าหู้ทอดสูตรบุญตงกี่",
      "หมูกรอบสไตล์กวางตุ้ง"
    ],
    "price_per_person": {
      "min": 200,
      "max": 400
    }
  },
  {
    "id": "chok-chai-steamed-duck-bang-phli",
    "province": "samut-prakan",
    "name_en": "Chok Chai Stewed Duck Bang Phli",
    "lat": 13.612,
    "lng": 100.695,
    "image_url": "https://images.pexels.com/photos/38941394/pexels-photo-38941394.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Archudio / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/38941394/",
    "website": null,
    "name": "เป็ดพะโล้โชคชัย บางพลี",
    "area": "เทพารักษ์ บางพลี",
    "description": "ร้านเป็ดพะโล้เจ้าดังประจำอำเภอบางพลี น้ำพะโล้หอมกลมกล่อมเคี่ยวกลมกล่อมยาวนานกว่า 30 ปี",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch"
    ],
    "opening_hours": "07:30-15:30",
    "closed_days": null,
    "cuisine": [
      "เป็ดพะโล้",
      "ไทย-จีน"
    ],
    "signature_dishes": [
      "เป็ดพะโล้เนื้อนุ่ม",
      "ก๋วยเตี๋ยวเป็ดพะโล้",
      "ไส้เป็ดพะโล้กรอบ"
    ],
    "price_per_person": {
      "min": 80,
      "max": 200
    }
  },
  {
    "id": "thap-thim-seafood-samut-sakhon",
    "province": "samut-sakhon",
    "name_en": "Thap Thim Seafood",
    "lat": 13.5385,
    "lng": 100.279,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": null,
    "name": "ร้านอาหาร ทับทิม ซีฟู้ด",
    "area": "เมืองสมุทรสาคร",
    "description": "ร้านอาหารทะเลชื่อดังริมแม่น้ำท่าจีน วัตถุดิบสดใหม่ส่งตรงจากเรือประมง รสชาติไทยจัดจ้าน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-21:30",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "ปลากะพงทอดน้ำปลา",
      "ต้มยำกุ้งแม่น้ำน้ำข้น",
      "ปูไข่นึ่งนมสด"
    ],
    "price_per_person": {
      "min": 300,
      "max": 600
    }
  },
  {
    "id": "khun-tui-seafood-mueang-samut-sakhon",
    "province": "samut-sakhon",
    "name_en": "Khun Toi Seafood Mahachai",
    "lat": 13.548,
    "lng": 100.2812,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": null,
    "name": "ร้านอาหาร คุณต๋อย ซีฟู้ด มหาชัย",
    "area": "มหาชัย เมืองสมุทรสาคร",
    "description": "ร้านอาหารทะเลบรรยากาศเป็นกันเองใกล้ตัวเมืองมหาชัย โดดเด่นด้วยอาหารทะเลสดราคามิตรภาพ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:30-21:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "ปูหลนผักสด",
      "แกงส้มไข่ปลาเรียวเซียว",
      "กุ้งผัดพริกเกลือ"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "item-samut-sakhon",
    "province": "samut-sakhon",
    "name_en": "Krua Baan Aree Seafood Khok Kham",
    "lat": 13.5512,
    "lng": 100.328,
    "image_url": "https://images.pexels.com/photos/7361022/pexels-photo-7361022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Likeboss Lertpongsaporn / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/7361022/",
    "website": null,
    "name": "ครัวบ้านอารีย์ ซีฟู้ด โคกขาม",
    "area": "โคกขาม เมืองสมุทรสาคร",
    "description": "ร้านอาหารทะเลรสเด็ดใกล้อุทยานพันท้ายนรสิงห์ นำเสนอเมนูชูวัตถุดิบท้องถิ่นอย่างใบชะครามสด",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "closed_days": "วันจันทร์",
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "ปูทะเลผัดผงกะหรี่",
      "กุ้งแชบ๊วยอบวุ้นเส้น",
      "ปลากะพงสองใจ"
    ],
    "price_per_person": {
      "min": 250,
      "max": 550
    }
  },
  {
    "id": "phanthai-seafood-mahachai",
    "province": "samut-sakhon",
    "name_en": "Krua Phanthai Seafood",
    "lat": 13.578,
    "lng": 100.369,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ครัวพันท้ายซีฟู้ด",
    "area": "โคกขาม เมืองสมุทรสาคร",
    "description": "ร้านอาหารทะเลบรรยากาศดีติดริมคลองใกล้อุทยานพันท้ายนรสิงห์ โดดเด่นแกงส้มปูไข่ใบชะคราม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-21:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "แกงส้มปูไข่ใบชะคราม",
      "ปลากะพงทอดราดน้ำน้ำปลา",
      "หมึกไข่นึ่งมะนาว"
    ],
    "price_per_person": {
      "min": 300,
      "max": 600
    }
  },
  {
    "id": "lod-chong-singapore-mahachai",
    "province": "samut-sakhon",
    "name_en": "Lod Chong Singapore Mahachai",
    "lat": 13.5468,
    "lng": 100.2755,
    "image_url": "https://images.pexels.com/photos/15009979/pexels-photo-15009979.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Vovkapanda / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/15009979/",
    "website": null,
    "name": "ลอดช่องสิงคโปร์ มหาชัย (เจ้าเก่า)",
    "area": "ตลาดมหาชัย เมืองสมุทรสาคร",
    "description": "ร้านขนมหวานระดับตำนานประจำมหาชัย ลอดช่องเส้นเหนียวนุ่มหอมกะทิมะพร้าวสดอบควันเทียน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "bakery",
    "meals": [
      "snack"
    ],
    "opening_hours": "08:30-17:00",
    "closed_days": null,
    "cuisine": [
      "ขนมหวานไทย",
      "เครื่องดื่ม"
    ],
    "signature_dishes": [
      "ลอดช่องสิงคโปร์เส้นเหนียวนุ่ม",
      "ทับทิมกรอบน้ำกะทิสด",
      "เฉาก๊วยชากังราว"
    ],
    "price_per_person": {
      "min": 30,
      "max": 70
    }
  },
  {
    "id": "ban-phaeo-noodle-coconut",
    "province": "samut-sakhon",
    "name_en": "Ban Phaeo Ancient Tom Yum Noodle",
    "lat": 13.5898,
    "lng": 100.1078,
    "image_url": "https://images.pexels.com/photos/12178095/pexels-photo-12178095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Markus Winkler / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12178095/",
    "website": null,
    "name": "ก๋วยเตี๋ยวหมูต้มยำโบราณ บ้านแพ้ว",
    "area": "ริมคลองดำเนินสะดวก บ้านแพ้ว",
    "description": "ก๋วยเตี๋ยวหมูต้มยำโบราณถั่วบดใหม่ใส่ยอดมะพร้าวอ่อนกรอบหวาน เอกลักษณ์ความอร่อยแห่งบ้านแพ้ว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "lunch"
    ],
    "opening_hours": "08:00-15:00",
    "closed_days": null,
    "cuisine": [
      "ก๋วยเตี๋ยวต้มยำ",
      "ไทย"
    ],
    "signature_dishes": [
      "กวยเตี๋ยวหมูต้มยำใส่ยอดมะพร้าว",
      "ก๋วยเตี๋ยวเย็นตาโฟทะเล",
      "กล้วยแขกทอดกรอบ"
    ],
    "price_per_person": {
      "min": 50,
      "max": 100
    }
  },
  {
    "id": "por-krua-thae-seafood-kalong",
    "province": "samut-sakhon",
    "name_en": "Por Krua Thae Seafood Ka Long",
    "lat": 13.482,
    "lng": 100.181,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ร้านพ่อครัวแท้ ซีฟู้ด กาหลง",
    "area": "กาหลง เมืองสมุทรสาคร",
    "description": "ร้านอาหารทะเลพื้นบ้านใกล้สะพานสายรุ้งกาหลง รสชาติจัดจ้านวัตถุดิบสดจากเรือประมงชายฝั่ง",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-20:30",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทย"
    ],
    "signature_dishes": [
      "ปูต้มน้ำปลา",
      "กุ้งแม่น้ำเผา",
      "ต้มยำปลาคังหม้อไฟ"
    ],
    "price_per_person": {
      "min": 250,
      "max": 500
    }
  },
  {
    "id": "coconut-lane-cafe-ban-phaeo",
    "province": "samut-sakhon",
    "name_en": "Coconut Lane Cafe Ban Phaeo",
    "lat": 13.598,
    "lng": 100.092,
    "image_url": "https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dinaziz2462 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27706147/",
    "website": null,
    "name": "คาเฟ่สวนมะพร้าว Coconut Lane บ้านแพ้ว",
    "area": "บ้านแพ้ว",
    "description": "คาเฟ่บรรยากาศน่ารักกลางร่องสวนมะพร้าวน้ำหอมบ้านแพ้ว เมนูกาแฟผสานมะพร้าวสดหอมหวานหวานธรรมชาติ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "09:00-18:00",
    "closed_days": "วันอังคาร",
    "cuisine": [
      "กาแฟ",
      "เบเกอรี่",
      "เครื่องดื่มมะพร้าว"
    ],
    "signature_dishes": [
      "กาแฟอเมริกาโน่มะพร้าวน้ำหอม",
      "เค้กมะพร้าวลาวา",
      "พุดดิ้งมะพร้าวสด"
    ],
    "price_per_person": {
      "min": 90,
      "max": 200
    }
  },
  {
    "id": "krua-chao-baen-krathum-baen",
    "province": "samut-sakhon",
    "name_en": "Krua Chao Baan Krathum Baen",
    "lat": 13.652,
    "lng": 100.262,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ครัวเจ้าบ้าน กระทุ่มแบน",
    "area": "กระทุ่มแบน",
    "description": "ร้านอาหารไทยพื้นบ้านบรรยากาศเรือนไม้ร่มรื่นในกระทุ่มแบน รสชาติเข้มข้นดั้งเดิมแบบไทยแท้",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:30-21:00",
    "closed_days": null,
    "cuisine": [
      "ไทย",
      "อาหารพื้นบ้าน"
    ],
    "signature_dishes": [
      "ต้มยำไก่บ้านใบมะขามอ่อน",
      "ปลาช่อนเผาเกลือทรงเครื่อง",
      "แกงคั่วหอยขม"
    ],
    "price_per_person": {
      "min": 200,
      "max": 400
    }
  },
  {
    "id": "roti-sai-mai-mahachai-station",
    "province": "samut-sakhon",
    "name_en": "Mahachai Station Roti Sai Mai",
    "lat": 13.5462,
    "lng": 100.2762,
    "image_url": "https://images.pexels.com/photos/27104070/pexels-photo-27104070.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "The Journey of Frames / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27104070/",
    "website": null,
    "name": "โรตีสายไหมมหาชัย หน้าสถานีรถไฟ",
    "area": "สถานีรถไฟมหาชัย",
    "description": "ร้านโรตีสายไหมแป้งสดทำใหม่ร้อนๆ หน้าสถานีรถไฟมหาชัย แป้งนุ่มหอมใบเตยสายไหมหวานกำลังดี",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "snack"
    ],
    "opening_hours": "07:00-16:00",
    "closed_days": null,
    "cuisine": [
      "ขนมไทย",
      "โรตีสายไหม"
    ],
    "signature_dishes": [
      "โรตีสายไหมแป้งใบเตยสด",
      "โรตีสายไหมแป้งงาดำ"
    ],
    "price_per_person": {
      "min": 40,
      "max": 100
    }
  },
  {
    "id": "pae-prapai-noodle-tha-chalom",
    "province": "samut-sakhon",
    "name_en": "Pa Prapai Tom Yum Noodle Tha Chalom",
    "lat": 13.5418,
    "lng": 100.2705,
    "image_url": "https://images.pexels.com/photos/38941394/pexels-photo-38941394.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Archudio / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/38941394/",
    "website": null,
    "name": "ก๋วยเตี๋ยวต้มยำป้าประไพ ท่าฉลอม",
    "area": "ท่าฉลอม เมืองสมุทรสาคร",
    "description": "ก๋วยเตี๋ยวต้มยำทะเลเครื่องจัดเต็มทั้งกั้ง กุ้ง และหมึกสดๆ จากเรือประมงท่าฉลอม รสชาติแซ่บลงตัว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "lunch"
    ],
    "opening_hours": "08:30-15:30",
    "closed_days": "วันจันทร์",
    "cuisine": [
      "ก๋วยเตี๋ยวต้มยำทะเล"
    ],
    "signature_dishes": [
      "ก๋วยเตี๋ยวต้มยำกั้งสด",
      "ก๋วยเตี๋ยวต้มยำกุ้งหมึก",
      "เย็นตาโฟต้มยำทะเล"
    ],
    "price_per_person": {
      "min": 60,
      "max": 150
    }
  },
  {
    "id": "after-noon-tea-and-cafe-krathum-baen",
    "province": "samut-sakhon",
    "name_en": "Baan Mai Rim Nam Cafe Krathum Baen",
    "lat": 13.668,
    "lng": 100.261,
    "image_url": "https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Emrecan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/2079448/",
    "website": null,
    "name": "คาเฟ่บ้านไม้ริมน้ำ กระทุ่มแben",
    "area": "กระทุ่มแบน",
    "description": "คาเฟ่บ้านไม้คลาสสิกริมแม่น้ำท่าจีน วิวแม่น้ำกว้างขวางบรรยากาศสโลว์ไลฟ์รับลมเย็นชิลๆ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "quiet",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "snack"
    ],
    "opening_hours": "09:00-18:00",
    "closed_days": "วันพุธ",
    "cuisine": [
      "กาแฟ",
      "เครื่องดื่ม",
      "เบเกอรี่"
    ],
    "signature_dishes": [
      "Matcha Latte",
      "เค้กส้มหน้านิ่ม",
      "โทสต์สังขยาใบเตย"
    ],
    "price_per_person": {
      "min": 80,
      "max": 180
    }
  },
  {
    "id": "rive-droit-cafe",
    "province": "nakhon-pathom",
    "name_en": "Rive Droit Cafe",
    "lat": 13.805122,
    "lng": 100.198122,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": "https://www.facebook.com/RiveDroitCafe",
    "name": "ริฟ ดรัวต์ กาแฟริมน้ำ",
    "area": "นครชัยศรี",
    "description": "คาเฟ่ริมแม่น้ำนครชัยศรี บรรยากาศสไตล์ฝรั่งเศส กาแฟคุณภาพและขนมอบสดใหม่ทุกวัน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "beach",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "lunch",
      "snack"
    ],
    "opening_hours": "09:00-18:00",
    "closed_days": "วันอังคาร",
    "cuisine": [
      "เบเกอรี่",
      "เครื่องดื่ม",
      "อาหารฝรั่ง"
    ],
    "signature_dishes": [
      "Croissant",
      "Cold Brew Coffee",
      "Spaghetti Carbonara"
    ],
    "price_per_person": {
      "min": 150,
      "max": 350
    }
  },
  {
    "id": "kung-ob",
    "province": "nakhon-pathom",
    "name_en": "Kung Ob Phu Khaofai",
    "lat": 13.821411,
    "lng": 100.03819,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": "https://www.volcanoshrimp.com",
    "name": "กุ้งอบภูเขาไฟ",
    "area": "เมืองนครปฐม",
    "description": "ร้านอาหารระดับตำนานเมืองนครปฐม ขึ้นชื่อเรื่องกุ้งกุลาดำสดๆ เสิร์ฟในกระทะครอบจุดไฟลุกโชน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "ต้มยำกุ้ง",
      "ปลากระพงทอดน้ำปลา"
    ],
    "price_per_person": {
      "min": 300,
      "max": 600
    }
  },
  {
    "id": "tang-ha-seng",
    "province": "nakhon-pathom",
    "name_en": "Tang Ha Seng",
    "lat": 13.819123,
    "lng": 100.061012,
    "image_url": "https://images.pexels.com/photos/12824413/pexels-photo-12824413.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Manit Seekhao / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12824413/",
    "website": null,
    "name": "ตั้งฮะเซ้ง",
    "area": "เมืองนครปฐม",
    "description": "ร้านข้าวหมูแดงเก่าแก่กว่า 70 ปี ข้างองค์พระปฐมเจดีย์ น้ำราดสูตรโบราณกลมกล่อม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "breakfast",
      "lunch"
    ],
    "opening_hours": "07:00-15:00",
    "closed_days": null,
    "cuisine": [
      "ข้าวหมูแดง",
      "ไทย-จีน"
    ],
    "signature_dishes": [
      "ข้าวหมูแดง",
      "ข้าวหมูกรอบ",
      "ต้มเลือดหมู"
    ],
    "price_per_person": {
      "min": 60,
      "max": 120
    }
  },
  {
    "id": "say-hay-cafe-cuisine",
    "province": "nakhon-pathom",
    "name_en": "Say Hay Cafe & Cuisine",
    "lat": 13.789122,
    "lng": 100.312901,
    "image_url": "https://images.pexels.com/photos/27706147/pexels-photo-27706147.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dinaziz2462 / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/27706147/",
    "website": "https://www.facebook.com/sayhaycafe",
    "name": "เซย์ไฮ คาเฟ่ แอนด์ ควิซีน",
    "area": "พุทธมณฑล",
    "description": "คาเฟ่ในฟาร์มเมล่อนและสวนผักออร์แกนิก บรรยากาศดี มีกิจกรรมให้อาหารสัตว์น่ารักๆ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "09:00-20:00",
    "closed_days": null,
    "cuisine": [
      "ฟิวชั่น",
      "อาหารไทย",
      "ขนมหวาน"
    ],
    "signature_dishes": [
      "สลัดผักออร์แกนิก",
      "พิซซ่าเตาถ่าน",
      "เมล่อนปั่น"
    ],
    "price_per_person": {
      "min": 200,
      "max": 400
    }
  },
  {
    "id": "moo-yot-khao-mu-dang",
    "province": "nakhon-pathom",
    "name_en": "Khao Moo Dang Nai Chua",
    "lat": 13.8189,
    "lng": 100.0601,
    "image_url": "https://images.pexels.com/photos/38429596/pexels-photo-38429596.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dale / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/38429596/",
    "website": null,
    "name": "ข้าวหมูแดงนายฉั้ว",
    "area": "เมืองนครปฐม",
    "description": "ร้านข้าวหมูแดงยอดฮิตในตลาดซอยกลาง นครปฐม เนื้อหมูนุ่ม หมูกรอบกรอบกร๊อบ น้ำราดเข้มข้น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "breakfast",
      "lunch"
    ],
    "opening_hours": "06:00-13:00",
    "closed_days": null,
    "cuisine": [
      "ข้าวหมูแดง"
    ],
    "signature_dishes": [
      "ข้าวหมูแดงหมูกรอบ",
      "กุนเชียงทอด"
    ],
    "price_per_person": {
      "min": 50,
      "max": 100
    }
  },
  {
    "id": "crai-crai-restaurant",
    "province": "phang-nga",
    "name_en": "Crai Crai",
    "lat": 8.6582,
    "lng": 98.2515,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": null,
    "name": "ไคร้ ไคร้",
    "area": "เขาหลัก อำเภอตะกั่วป่า",
    "description": "ร้านอาหารพื้นบ้านรสชาติต้นตำรับใต้แท้ๆ วัตถุดิบสดใหม่จากทะเลอันดามัน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "11:00-22:00",
    "closed_days": "วันพุธ",
    "cuisine": [
      "ไทยใต้",
      "ซีฟู้ด"
    ],
    "signature_dishes": [
      "แกงส้มปลาสด",
      "ใบเหลียงผัดไข่",
      "ปลาหมึกผัดน้ำดำ"
    ],
    "price_per_person": {
      "min": 250,
      "max": 600
    }
  },
  {
    "id": "takua-pa-morning-market-food",
    "province": "phang-nga",
    "name_en": "Takua Pa Morning Market",
    "lat": 8.3584,
    "lng": 98.3751,
    "image_url": "https://images.pexels.com/photos/28560925/pexels-photo-28560925.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Gije / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/28560925/",
    "website": null,
    "name": "ตลาดสดเทศบาลตะกั่วป่า",
    "area": "ย่านเมืองเก่าตะกั่วป่า",
    "description": "ตลาดเช้าท้องถิ่นที่เต็มไปด้วยอาหารพื้นเมืองรสชาติแท้และวิถีชีวิตชาวตะกั่วป่า",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "quiet"
    ],
    "kind": "market",
    "meals": [
      "breakfast"
    ],
    "opening_hours": "06:00-11:00",
    "closed_days": null,
    "cuisine": [
      "อาหารพื้นเมือง",
      "ติ่มซำ"
    ],
    "signature_dishes": [
      "หมี่ฮกเกี้ยน",
      "ปาท่องโก๋ย่าง",
      "ขนมจีนใต้"
    ],
    "price_per_person": {
      "min": 50,
      "max": 150
    }
  },
  {
    "id": "talay-thong-seafood",
    "province": "phang-nga",
    "name_en": "Talay Thong Seafood",
    "lat": 8.4412,
    "lng": 98.2531,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "ทะเลทองซีฟู้ด",
    "area": "อำเภอท้ายเหมือง",
    "description": "ร้านซีฟู้ดริมทะเลบรรยากาศสบายๆ เสิร์ฟอาหารทะเลสดๆ จากชาวประมงพื้นบ้าน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "10:00-21:00",
    "closed_days": null,
    "cuisine": [
      "ซีฟู้ด",
      "ไทยใต้"
    ],
    "signature_dishes": [
      "กุ้งผัดสะตอ",
      "ปูม้านึ่ง",
      "ปลาทอดกระเทียม"
    ],
    "price_per_person": {
      "min": 300,
      "max": 800
    }
  },
  {
    "id": "raya-restaurant",
    "province": "phuket",
    "name_en": "Raya Restaurant",
    "lat": 7.8821,
    "lng": 98.3892,
    "image_url": "https://images.pexels.com/photos/18502881/pexels-photo-18502881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Adisak Thangthong / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/18502881/",
    "website": "https://www.facebook.com/rayarestaurant",
    "name": "ระย้า",
    "area": "ถนนดีบุก อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารพื้นเมืองภูเก็ตในตึกเก่าคลาสสิก รสชาติต้นตำรับที่นักท่องเที่ยวและคนท้องถิ่นหลงรัก",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "temple",
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
      "แกงส้มปูไข่",
      "หมูฮ้อง",
      "ปลาทอดกระเทียม"
    ],
    "price_per_person": {
      "min": 400,
      "max": 1200
    }
  },
  {
    "id": "tu-kab-khao",
    "province": "phuket",
    "name_en": "Tu Kab Khao Restaurant",
    "lat": 7.8834,
    "lng": 98.3871,
    "image_url": "https://images.pexels.com/photos/33939170/pexels-photo-33939170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Nana LLJ / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33939170/",
    "website": "https://www.facebook.com/tukabkhao",
    "name": "ระย้า ตู้กับข้าว",
    "area": "ถนนพังงา อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารพื้นบ้านรสจัดจ้านในตึกชิโนโปรตุกีสตกแต่งสวยงามโดดเด่น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "opening_hours": "11:00-22:00",
    "closed_days": null,
    "cuisine": [
      "ไทยใต้",
      "พื้นเมืองภูเก็ต"
    ],
    "signature_dishes": [
      "แกงเนื้อปูใบชะพลู",
      "หมูฮ้อง",
      "กุ้งผัดสะตอ"
    ],
    "price_per_person": {
      "min": 350,
      "max": 1000
    }
  },
  {
    "id": "one-chun-cafe-restaurant",
    "province": "phuket",
    "name_en": "One Chun Cafe & Restaurant",
    "lat": 7.8842,
    "lng": 98.3854,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": "https://www.facebook.com/onechunphuket",
    "name": "วันจันทร์",
    "area": "ถนนเทพ อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารพื้นเมืองบรรยากาศวินเทจ เสิร์ฟอาหารใต้รสชาติเข้มข้นถึงเครื่อง",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "หมูฮ้อง",
      "แกงส้มปลากะพง",
      "ใบเหลียงผัดไข่"
    ],
    "price_per_person": {
      "min": 300,
      "max": 800
    }
  },
  {
    "id": "mor-mu-dong",
    "province": "phuket",
    "name_en": "Mor Mu Dong",
    "lat": 7.8421,
    "lng": 98.3912,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "หมอมูดง",
    "area": "ซอยปาล์มพัฒนา อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารพื้นบ้านริมป่าชายเลน บรรยากาศซุ้มไม้ไผ่ริมน้ำ อาหารรสจัดจ้าน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "mountain"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "10:00-21:30",
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
    "name_en": "Kan Eang Pier",
    "lat": 7.8284,
    "lng": 98.3421,
    "image_url": "https://images.pexels.com/photos/12561888/pexels-photo-12561888.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Captured by Augustine / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/12561888/",
    "website": "https://www.kaneang-pier.com",
    "name": "กันเอง แอท เพียร์",
    "area": "อ่าวฉลอง อำเภอเมืองภูเก็ต",
    "description": "ร้านอาหารซีฟู้ดริมอ่าวฉลอง วิวสวย บรรยากาศดี อาหารทะเลสดใหม่คุณภาพเยี่ยม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
    "name_en": "Kopitiam by Wilaiwan",
    "lat": 7.8851,
    "lng": 98.3879,
    "image_url": "https://images.pexels.com/photos/2079448/pexels-photo-2079448.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Emrecan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/2079448/",
    "website": null,
    "name": "โกปี้เทียม บาย วิไลวรรณ",
    "area": "ถนนถลาง อำเภอเมืองภูเก็ต",
    "description": "ร้านกาแฟและอาหารพื้นเมืองสไตล์เปอรานากันในตึกโบราณย่านเมืองเก่า",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "temple",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "breakfast",
      "lunch",
      "snack"
    ],
    "opening_hours": "09:00-18:00",
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
      "max": 300
    }
  },
  {
    "id": "lock-tien-food-center",
    "province": "phuket",
    "name_en": "Lock Tien Food Center",
    "lat": 7.8832,
    "lng": 98.3842,
    "image_url": "https://images.pexels.com/photos/28600264/pexels-photo-28600264.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Jean Papillon / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/28600264/",
    "website": null,
    "name": "ศูนย์อาหารล็อกเตี้ยn (หล็อกเทียน)",
    "area": "ถนนเยาวราช อำเภอเมืองภูเก็ต",
    "description": "ศูนย์รวมอาหารพื้นเมืองโบราณชื่อดังของภูเก็ต รวบรวมเมนูหาทานยากไว้ในที่เดียว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "temple"
    ],
    "kind": "market",
    "meals": [
      "breakfast",
      "lunch"
    ],
    "opening_hours": "06:30-15:00",
    "closed_days": null,
    "cuisine": [
      "อาหารพื้นเมืองภูเก็ต",
      "ติ่มซำ",
      "โอต้าว"
    ],
    "signature_dishes": [
      "โอต้าว",
      "โลบา",
      "หมี่หุ้นกระดูกหมู"
    ],
    "price_per_person": {
      "min": 60,
      "max": 200
    }
  },
  {
    "id": "poon-yosh-restaurant",
    "province": "phuket",
    "name_en": "Poon Yosh Restaurant",
    "lat": 7.8801,
    "lng": 98.3791,
    "image_url": "https://images.pexels.com/photos/37279451/pexels-photo-37279451.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Liuuu / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37279451/",
    "website": null,
    "name": "พูนผล โภชนา",
    "area": "ถนนพูนผล อำเภอเมืองภูเก็ต",
    "description": "ร้านข้าวต้มและอาหารเหลาสไตล์แต้จิ๋วเก่าแก่ขวัญใจคนภูเก็ตยามค่ำคืน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "restaurant",
    "meals": [
      "lunch",
      "dinner"
    ],
    "opening_hours": "16:00-23:00",
    "closed_days": null,
    "cuisine": [
      "อาหารจีนแต้จิ๋ว",
      "พื้นเมืองภูเก็ต"
    ],
    "signature_dishes": [
      "เป็ดพะโล้",
      "หมูสับปั้นก้อนนึ่งปลาเค็ม",
      "ต้มยำปลา"
    ],
    "price_per_person": {
      "min": 150,
      "max": 400
    }
  },
  {
    "id": "aramis-cafe-phuket",
    "province": "phuket",
    "name_en": "Torry's Ice Cream",
    "lat": 7.8864,
    "lng": 98.3882,
    "image_url": "https://images.pexels.com/photos/6612572/pexels-photo-6612572.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Pavel Danilyuk / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6612572/",
    "website": "https://www.facebook.com/torrysicecream",
    "name": "ทอรีส์ บาบ๋า คาเฟ่",
    "area": "ถนนรมณีย์ อำเภอเมืองภูเก็ต",
    "description": "คาเฟ่ไอศกรีมสุดชิคบนถนนรมณีย์ นำเสนอไอเดียขนมพื้นเมืองภูเก็ตในรูปแบบใหม่",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "kind": "cafe",
    "meals": [
      "snack"
    ],
    "opening_hours": "11:00-18:00",
    "closed_days": null,
    "cuisine": [
      "ไอศกรีมพื้นเมือง",
      "ขนมเปอรานากัน"
    ],
    "signature_dishes": [
      "ไอศกรีมอาโป๊ง",
      "บีโกหมอย",
      "ไอศกรีมโอ้เอ๋ว"
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
    "lat": 7.8812,
    "lng": 98.3821,
    "image_url": "https://images.pexels.com/photos/15797984/pexels-photo-15797984.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Eaksit Sangdee / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/15797984/",
    "website": null,
    "name": "อาโป๊งแม่สุณีย์",
    "area": "ถนนซอยภูธร อำเภอเมืองภูเก็ต",
    "description": "ร้านขนมอาโป๊งโบราณเตาถ่าน ขนมพื้นเมืองภูเก็ตแป้งบางกรอบหอมกะทิ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food"
    ],
    "kind": "street_food",
    "meals": [
      "snack"
    ],
    "opening_hours": "08:00-15:00",
    "closed_days": null,
    "cuisine": [
      "ขนมพื้นเมืองภูเก็ต"
    ],
    "signature_dishes": [
      "ขนมอาโป๊งกรอบนอกนุ่มใน"
    ],
    "price_per_person": {
      "min": 30,
      "max": 60
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
    "name_en": "Tubkaek Sunset Resort",
    "lat": 8.0789,
    "lng": 98.7823,
    "image_url": "https://images.pexels.com/photos/4089908/pexels-photo-4089908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dushenkovsky / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/4089908/",
    "website": "https://www.tubkaeksunset.com",
    "name": "ทับแขก ซันเซ็ท รีสอร์ท",
    "area": "อ่าวนาง/ทับแขก",
    "description": "รีสอร์ทติดชายหาดทับแขกบรรยากาศเงียบสงบวิวพระอาทิตย์ตกสวยงาม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "breakfast",
      "free_wifi",
      "parking",
      "beach_access"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2800,
      "max": 4300
    }
  },
  {
    "id": "lanta-panta-beach-resort",
    "province": "krabi",
    "name_en": "Lanta Panta Beach Resort",
    "lat": 7.6234,
    "lng": 99.0312,
    "image_url": "https://images.pexels.com/photos/31387456/pexels-photo-31387456.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Vince / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/31387456/",
    "website": "https://www.lantapanta.com",
    "name": "ลันตา ปันตา บีช รีสอร์ท",
    "area": "เกาะลันตา",
    "description": "รีสอร์ทริมหาดคลองดาวเกาะลันตาห้องพักกว้างขวางและสระว่ายน้ำกลางแจ้ง",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "beach",
      "quiet"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking",
      "beach_access"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1800,
      "max": 3300
    }
  },
  {
    "id": "krabi-mercure-hotel",
    "province": "krabi",
    "name_en": "Krabi Mercure Hotel",
    "lat": 8.0612,
    "lng": 98.9123,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": "https://www.mercurekrabi.com",
    "name": "กระบี่ เมอร์เคียว โฮเทล",
    "area": "เมืองกระบี่",
    "description": "โรงแรมทันสมัยใจกลางเมืองกระบี่เดินทางสะดวกสบายสิ่งอำนวยความสะดวกครบครัน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "quiet"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2200,
      "max": 3700
    }
  },
  {
    "id": "bluestotel-ao-nang",
    "province": "krabi",
    "name_en": "Bluestotel Ao Nang",
    "lat": 8.0312,
    "lng": 98.8234,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": "https://www.bluestotel.com",
    "name": "บลูโซเทล อ่าวนาง",
    "area": "อ่าวนาง",
    "description": "โรงแรมสไตล์โมเดิร์นใกล้หาดอ่าวนางมีสระว่ายน้ำดาดฟ้าวิวสวย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "beach",
      "adventure"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1500,
      "max": 3000
    }
  },
  {
    "id": "the-lanta-villa",
    "province": "krabi",
    "name_en": "The Lanta Villa",
    "lat": 7.6156,
    "lng": 99.0345,
    "image_url": "https://images.pexels.com/photos/36418268/pexels-photo-36418268.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Mark Direen / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/36418268/",
    "website": "https://www.thelantavilla.com",
    "name": "เดอะ ลันตา วิลล่า",
    "area": "เกาะลันตา",
    "description": "วิลล่าส่วนตัวบรรยากาศร่มรื่นใกล้หาดพระแอะเกาะลันตา",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "beach",
      "quiet",
      "photo"
    ],
    "type": "villa",
    "tier": "comfy",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking",
      "beach_access"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 4500,
      "max": 6000
    }
  },
  {
    "id": "cozy-hostel-krabi",
    "province": "krabi",
    "name_en": "Cozy Hostel Krabi",
    "lat": 8.0589,
    "lng": 98.9145,
    "image_url": "https://images.pexels.com/photos/5137986/pexels-photo-5137986.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "cottonbro studio / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/5137986/",
    "website": "https://www.cozyhostelkrabi.com",
    "name": "โคซี่ โฮสเทล กระบี่",
    "area": "เมืองกระบี่",
    "description": "โฮสเทลราคาสบายกระเป๋าใจกลางเมืองเหมาะสำหรับแบ็คแพคเกอร์",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "quiet"
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
      "min": 600,
      "max": 2100
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
    "description": "โรงแรมหรูระดับ 4 ดาวใจกลางเมืองนครศรีธรรมราช สระว่ายน้ำใหญ่ สิ่งอำนวยความสะดวกครบครันทันสมัย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1800,
      "max": 3500
    }
  },
  {
    "id": "sichon-cabana-beach-resort",
    "province": "nakhon-si-thammarat",
    "name_en": "Sichon Cabana Beach Resort",
    "lat": 9.0082,
    "lng": 99.9128,
    "image_url": "https://images.pexels.com/photos/3355777/pexels-photo-3355777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Quang Nguyen Vinh / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/3355777/",
    "website": null,
    "name": "สิชล คาบาน่า บีช รีสอร์ท",
    "area": "หาดหินงาม สิชล",
    "description": "รีสอร์ตริมหาดหินงามสิชลยอดฮิต บรรยากาศสุดชิล มีกิจกรรมทางน้ำ เล่นเซิร์ฟบอร์ด และคาเฟ่ริมทะเล",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "beach",
      "photo",
      "adventure"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "beach_access",
      "breakfast",
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
    "id": "khanom-beach-resort-and-spa",
    "province": "nakhon-si-thammarat",
    "name_en": "Khanom Beach Resort & Spa",
    "lat": 9.1652,
    "lng": 99.8825,
    "image_url": "https://images.pexels.com/photos/4089908/pexels-photo-4089908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dushenkovsky / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/4089908/",
    "website": null,
    "name": "ขนอม บีช รีสอร์ท แอนด์ สปา",
    "area": "หาดหน้าด่าน ขนอม",
    "description": "รีสอร์ตหรูสไตล์ติดชายหาดหน้าด่านขนอม สระว่ายน้ำอินฟินิตี้ติดทะเล และห้องพักรับวิวทะเลอ่าวไทยสุดกว้างไกล",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "beach_access",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2800,
      "max": 5500
    }
  },
  {
    "id": "hop-inn-nakhon-si-thammarat",
    "province": "nakhon-si-thammarat",
    "name_en": "Hop Inn Nakhon Si Thammarat",
    "lat": 8.4312,
    "lng": 99.961,
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
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "max": 950
    }
  },
  {
    "id": "kiriwong-resort-lan-saka",
    "province": "nakhon-si-thammarat",
    "name_en": "Kiriwong Resort Lan Saka",
    "lat": 8.439,
    "lng": 99.7805,
    "image_url": "https://images.pexels.com/photos/33399672/pexels-photo-33399672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Valeria Drozdova / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/33399672/",
    "website": null,
    "name": "คีรีวง รีสอร์ท ลานสกา",
    "area": "คีรีวง ลานสกา",
    "description": "ที่พักอิงแอบธรรมชาติริมลำธารคีรีวง ตื่นเช้าสูดอากาศบริสุทธิ์อันดับต้นๆ ของไทยและฟังเสียงน้ำไหลผ่อนคลาย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "mountain",
      "quiet"
    ],
    "type": "guesthouse",
    "tier": "mid",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 900,
      "max": 1800
    }
  },
  {
    "id": "chonnapha-resort-khanom",
    "province": "nakhon-si-thammarat",
    "name_en": "Chonnapha Resort Khanom",
    "lat": 9.172,
    "lng": 99.88,
    "image_url": "https://images.pexels.com/photos/31387456/pexels-photo-31387456.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Vince / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/31387456/",
    "website": null,
    "name": "ชลนภา รีสอร์ท ขนอม",
    "area": "หาดขนอม",
    "description": "รีสอร์ตบ้านพักเป็นหลังริมชายหาดขนอม บรรยากาศเงียบสงบเป็นส่วนตัว เหมาะแก่การพักผ่อนของครอบครัว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "beach",
      "quiet"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "beach_access",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1100,
      "max": 2200
    }
  },
  {
    "id": "novotel-bangkok-impact",
    "province": "nonthaburi",
    "name_en": "Novotel Bangkok Impact",
    "lat": 13.9125,
    "lng": 100.5478,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": "https://www.novotelbangkokimpact.com",
    "name": "โนโวเทล กรุงเทพ อิมแพ็ค",
    "area": "ปากเกร็ด / เมืองทองธานี",
    "description": "โรงแรมระดับ 4 ดาวมาตรฐานสากลใจกลางเมืองทองธานี เชื่อมต่อตรงสู่ศูนย์การประชุมอิมแพ็ค",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "booking_urls.traveloka"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "type": "hotel",
    "tier": "comfy",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2500,
      "max": 4800
    }
  },
  {
    "id": "ibis-bangkok-impact",
    "province": "nonthaburi",
    "name_en": "ibis Bangkok Impact",
    "lat": 13.9142,
    "lng": 100.5491,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": "https://ibisbangkokimpact.com",
    "name": "ไอบิส กรุงเทพ อิมแพ็ค",
    "area": "ปากเกร็ด / เมืองทองธานี",
    "description": "โรงแรมสไตล์โมเดิร์นทันสมัยเน้นความคุ้มค่า ตั้งอยู่ใจกลางเมืองทองธานี สะดวกต่อการร่วมงานอีเวนต์",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "booking_urls.traveloka"
    ],
    "moods": [
      "food"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1300,
      "max": 2400
    }
  },
  {
    "id": "best-western-plus-wanda-grand-hotel",
    "province": "nonthaburi",
    "name_en": "Best Western Plus Wanda Grand Hotel",
    "lat": 13.9021,
    "lng": 100.5281,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": "https://www.wandagrand.com",
    "name": "เบสท์ เวสเทิร์น พลัส แวนด้า แกรนด์",
    "area": "ปากเกร็ด / แจ้งวัฒนะ",
    "description": "โรงแรมหรูบนถนนแจ้งวัฒนะ ใกล้ศูนย์ราชการและเซ็นทรัลแจ้งวัฒนะ พร้อมสิ่งอำนวยความสะดวกครบครัน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "booking_urls.traveloka"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1600,
      "max": 3200
    }
  },
  {
    "id": "bed-by-city-hotel",
    "province": "nonthaburi",
    "name_en": "Bed by City Hotel",
    "lat": 13.8582,
    "lng": 100.5291,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": null,
    "name": "เบด บาย ซิตี้ โฮเทล",
    "area": "เมืองนนทบุรี / งามวงศ์วาน",
    "description": "โรงแรมสไตล์มินิมอลราคาประหยัดย่านงามวงศ์วาน ใกล้เดอะมอลล์งามวงศ์วาน เดินทางสะดวกสะอาดยอดเยี่ยม",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "booking_urls.booking",
      "booking_urls.traveloka",
      "website"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 750,
      "max": 1100
    }
  },
  {
    "id": "buddy-oriental-riverside-hotel",
    "province": "nonthaburi",
    "name_en": "Buddy Oriental Riverside Hotel",
    "lat": 13.9281,
    "lng": 100.5052,
    "image_url": "https://images.pexels.com/photos/37610710/pexels-photo-37610710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Cihad Yildiz / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37610710/",
    "website": "https://www.buddyriverside.com",
    "name": "บั๊ดดี้ โอเรียนทอล รีเวอร์ไซด์",
    "area": "ปากเกร็ด / สุขาประชาสวรรค์",
    "description": "รีสอร์ตสไตล์ไทยโคโลเนียลสะท้อนเสน่ห์สถาปัตยกรรมคลาสสิกริมแม่น้ำเจ้าพระยา บรรยากาศสงบร่มรื่น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "booking_urls.traveloka"
    ],
    "moods": [
      "photo",
      "quiet"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
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
    "description": "โรงแรมคลาสสิกใจกลางเมืองนนทบุรี ใกล้ท่าน้ำนนท์และพิพิธภัณฑ์จังหวัดนนทบุรี ราคาย่อมเยา",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked",
      "booking_urls.booking",
      "booking_urls.traveloka",
      "website"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 850,
      "max": 1300
    }
  },
  {
    "id": "tinidee-hotel-bangkok-golf-club",
    "province": "pathum-thani",
    "name_en": "Tinidee Hotel Bangkok Golf Club",
    "lat": 13.9731,
    "lng": 100.5482,
    "image_url": "https://images.pexels.com/photos/13584138/pexels-photo-13584138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Kien Le / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/13584138/",
    "website": "https://www.tinideebangkokgolf.com",
    "name": "โรงแรมทินิดี บางกอก กอล์ฟ คลับ",
    "area": "เมืองปทุมธานี / บางกะดี",
    "description": "รีสอร์ตท่ามกลางสนามกอล์ฟและธรรมชาติอันเงียบสงบ เหมาะกับการพักผ่อนและเล่นกอล์ฟ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1400,
      "max": 2800
    }
  },
  {
    "id": "novotel-bangkok-futurepark-rangsit",
    "province": "pathum-thani",
    "name_en": "Novotel Bangkok Future Park Rangsit",
    "lat": 13.9875,
    "lng": 100.6152,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": "https://all.accor.com",
    "name": "โรงแรมโนโวเทล กรุงเทพ ฟิวเจอร์พาร์ค รังสิต",
    "area": "ธัญบุรี / รังสิต",
    "description": "โรงแรมระดับ 4 ดาวทันสมัยติดกับห้างฟิวเจอร์พาร์ค รังสิต เดินทางสะดวกพร้อมสิ่งอำนวยความสะดวกครบครัน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "food",
      "photo"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2400,
      "max": 4500
    }
  },
  {
    "id": "pinehurst-golf-club-hotel",
    "province": "pathum-thani",
    "name_en": "Pinehurst Golf Club & Hotel",
    "lat": 14.0482,
    "lng": 100.6088,
    "image_url": "https://images.pexels.com/photos/37610710/pexels-photo-37610710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Cihad Yildiz / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37610710/",
    "website": "https://pinehurst.co.th",
    "name": "ไพน์เฮิร์สท กอล์ฟ คลับ แอนด์ โฮเต็ล",
    "area": "คลองหลวง / รังสิต",
    "description": "โรงแรมสไตล์รีสอร์ตบรรยากาศร่มรื่นท่ามกลางสนามกอล์ฟ ใกล้มหาวิทยาลัยกรุงเทพ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1100,
      "max": 2200
    }
  },
  {
    "id": "the-pine-resort-pathum",
    "province": "pathum-thani",
    "name_en": "The Pine Resort",
    "lat": 14.095,
    "lng": 100.4912,
    "image_url": "https://images.pexels.com/photos/37610710/pexels-photo-37610710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Cihad Yildiz / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37610710/",
    "website": "http://www.thepineresort.com",
    "name": "เดอะ ไพน์ รีสอร์ท ปทุมธานี",
    "area": "สามโคก",
    "description": "รีสอร์ตสไตล์ธรรมชาติมีกิจกรรมฐานแอดเวนเจอร์ และพื้นที่จัดสัมมนาท่ามกลางสวนปุ่มต้นสนร่มรื่น",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "adventure",
      "quiet"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1200,
      "max": 2500
    }
  },
  {
    "id": "ingnamm-hotel-pathum",
    "province": "pathum-thani",
    "name_en": "Ingnamm Hotel",
    "lat": 14.0182,
    "lng": 100.5312,
    "image_url": "https://images.pexels.com/photos/37098094/pexels-photo-37098094.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Sasi Tha / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37098094/",
    "website": null,
    "name": "โรงแรมอิงน้ำ ปทุมธานี",
    "area": "เมืองปทุมธานี",
    "description": "โรงแรมบูทีคขนาดย่อมใกล้มหาลัยและใจกลางเมืองปทุมธานี ห้องพักสะอาด ตกแต่งทันสมัยสบายตา",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet"
    ],
    "type": "boutique",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 850,
      "max": 1400
    }
  },
  {
    "id": "asia-airport-hotel-rangsit",
    "province": "pathum-thani",
    "name_en": "Asia Airport Hotel Rangsit",
    "lat": 13.9615,
    "lng": 100.6225,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": "https://www.asiahotel.co.th",
    "name": "โรงแรมเอเชีย แอร์พอร์ต รังสิต",
    "area": "ลำลูกกา / รังสิต",
    "description": "โรงแรมขนาดใหญ่ตั้งอยู่บนศูนย์การค้าเซียร์รังสิต สะดวกสบายใกล้สนามบินดอนเมือง",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 950,
      "max": 1800
    }
  },
  {
    "id": "bangkok-tree-house",
    "province": "samut-prakan",
    "name_en": "Bangkok Tree House",
    "lat": 13.6812,
    "lng": 100.578,
    "image_url": "https://images.pexels.com/photos/39592435/pexels-photo-39592435.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Zenji / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/39592435/",
    "website": "http://www.bangkoktreehouse.com",
    "name": "บางกอก ทรี เฮ้าส์",
    "area": "บางกระเจ้า / พระประแดง",
    "description": "ที่พักบูทีคสไตล์อีโค่กรีนบนต้นไม้ริมแม่น้ำเจ้าพระยา สัมผัสความสงบเงียบท่ามกลางป่าชายเลนบางกระเจ้า",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo",
      "beach"
    ],
    "type": "boutique",
    "tier": "mid",
    "amenities": [
      "breakfast",
      "free_wifi"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2200,
      "max": 4500
    }
  },
  {
    "id": "d-rivala-hotel-bangna",
    "province": "samut-prakan",
    "name_en": "D-Rivala Hotel Bangna Suvarnabhumi",
    "lat": 13.632,
    "lng": 100.708,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": null,
    "name": "โรงแรม ดี-ไรวาลา บางนา",
    "area": "บางพลี / สุวรรณภูมิ",
    "description": "โรงแรมสไตล์โมเดิร์นห้องพักกว้างขวาง ใกล้เมกาบางนาและสนามบินสุวรรณภูมิ เดินทางสะดวกสบาย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet"
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
      "min": 950,
      "max": 1800
    }
  },
  {
    "id": "le-meridien-suvarnabhumi-golf-resort",
    "province": "samut-prakan",
    "name_en": "Le Meridien Suvarnabhumi Bangkok Golf Resort & Spa",
    "lat": 13.6335,
    "lng": 100.698,
    "image_url": "https://images.pexels.com/photos/13584138/pexels-photo-13584138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Kien Le / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/13584138/",
    "website": "https://www.marriott.com",
    "name": "เลอ เมอริเดียน สุวรรณภูมิ กอล์ฟ รีสอร์ท แอนด์ สปา",
    "area": "บางพลี / บางนา-ตราด",
    "description": "รีสอร์ตรักษาความพรีเมียมระดับ 5 ดาว บนสนามกอล์ฟซัมมิทวิลมิลล์ สระว่ายน้ำริมสวน และสปาครบวงจร",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "resort",
    "tier": "comfy",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 4200,
      "max": 8500
    }
  },
  {
    "id": "rim-khlong-resort-bangpu",
    "province": "samut-prakan",
    "name_en": "Rim Khlong Resort Bangpu",
    "lat": 13.528,
    "lng": 100.652,
    "image_url": "https://images.pexels.com/photos/3355777/pexels-photo-3355777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Quang Nguyen Vinh / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/3355777/",
    "website": null,
    "name": "ริมคลอง รีสอร์ท บางปู",
    "area": "บางปู / เมืองสมุทรปราการ",
    "description": "รีสอร์ตบรรยากาศสงบเงียบติดริมน้ำบางปู ใกล้สถานตากอากาศบางปู เหมาะสำหรับพักผ่อนตากอากาศยามพรบค่ำ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "beach"
    ],
    "type": "resort",
    "tier": "saver",
    "amenities": [
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
    "id": "amantara-hotel-and-residence-phra-pradaeng",
    "province": "samut-prakan",
    "name_en": "Amantara Hotel & Residence Phra Pradaeng",
    "lat": 13.655,
    "lng": 100.538,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": null,
    "name": "อมันตารา โฮเทล แอนด์ เรสซิเดนซ์ พระประแดง",
    "area": "พระประแดง",
    "description": "โรงแรมสไตล์ร่วมสมัยใกล้วงแหวนอุตสาหกรรมและสะพานภูมิพล สะดวกสบายสำหรับการพักผ่อนเชิงธุรกิจและท่องเที่ยว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet"
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
      "min": 1100,
      "max": 2000
    }
  },
  {
    "id": "micro-stay-suvarnabhumi",
    "province": "samut-prakan",
    "name_en": "Micro Stay Suvarnabhumi",
    "lat": 13.705,
    "lng": 100.712,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": null,
    "name": "ไมโครสเตย์ สุวรรณภูมิ",
    "area": "บางพลี / กิ่งแก้ว",
    "description": "โรงแรมขนาดกะทัดรัดสะอาดปลอดภัยบนถนนกิ่งแก้ว เหมาะกับการพักรอต่อเครื่องบินสนามบินสุวรรณภูมิ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "parking",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 700,
      "max": 1200
    }
  },
  {
    "id": "grand-inter-hotel-mahachai",
    "province": "samut-sakhon",
    "name_en": "Grand Inter Hotel Mahachai",
    "lat": 13.5552,
    "lng": 100.281,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": null,
    "name": "โรงแรม แกรนด์ อินเตอร์ โฮเทล มหาชัย",
    "area": "มหาชัย / เมืองสมุทรสาคร",
    "description": "โรงแรมระดับมาตรฐานใจกลางเมืองมหาชัย ห้องพักกว้างขวาง สิ่งอำนวยความสะดวกครบครัน และเดินทางสะดวก",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "free_wifi",
      "parking",
      "breakfast"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1100,
      "max": 2200
    }
  },
  {
    "id": "loft-mania-residence-samut-sakhon",
    "province": "samut-sakhon",
    "name_en": "Loft Mania Residence Samut Sakhon",
    "lat": 13.562,
    "lng": 100.288,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": null,
    "name": "ลอฟท์ มาเนีย เรสซิเดนซ์ สมุทรสาคร",
    "area": "เมืองสมุทรสาคร / ถนนพระราม 2",
    "description": "โรงแรมสไตล์ลอฟท์ทันสมัย ตกแต่งเท่มีสไตล์ บรรยากาศเงียบสงบใกล้ศูนย์การค้าเซ็นทรัล มหาชัย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
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
      "min": 980,
      "max": 1800
    }
  },
  {
    "id": "thong-chen-resort-ban-phaeo",
    "province": "samut-sakhon",
    "name_en": "Thong Chen Resort Ban Phaeo",
    "lat": 13.592,
    "lng": 100.102,
    "image_url": "https://images.pexels.com/photos/4089908/pexels-photo-4089908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dushenkovsky / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/4089908/",
    "website": null,
    "name": "ทองเชน รีสอร์ท บ้านแพ้ว",
    "area": "บ้านแพ้ว",
    "description": "รีสอร์ตบรรยากาศร่มรื่นริมคลองดำเนินสะดวก รายล้อมด้วยสวนผลไม้และธรรมชาติบ้านสวนเงียบสงบ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "beach"
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
      "min": 850,
      "max": 1600
    }
  },
  {
    "id": "nonna-residence-krathum-baen",
    "province": "samut-sakhon",
    "name_en": "Nonna Residence Krathum Baen",
    "lat": 13.658,
    "lng": 100.265,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": null,
    "name": "นนท์นะ เรสซิเดนซ์ กระทุ่มแบน",
    "area": "กระทุ่มแบน",
    "description": "โรงแรมสไตล์มินิมอลสะอาดบรรยากาศเป็นกันเอง ตั้งอยู่ใกล้หมู่บ้านเบญจรงค์ดอนไก่ดีและวัดท่าไม้",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "min": 750,
      "max": 1300
    }
  },
  {
    "id": "ta-wan-resort-phanthai-norasing",
    "province": "samut-sakhon",
    "name_en": "Tawan Resort Phanthai Norasing",
    "lat": 13.572,
    "lng": 100.365,
    "image_url": "https://images.pexels.com/photos/31387456/pexels-photo-31387456.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Vince / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/31387456/",
    "website": null,
    "name": "ตะวัน รีสอร์ท พันท้ายนรสิงห์",
    "area": "โคกขาม / พันท้ายนรสิงห์",
    "description": "รีสอร์ตบ้านเป็นหลังบรรยากาศธรรมชาติติดริมคลอง บรรยากาศเงียบสงบใกล้อุทยานประวัติศาสตร์พันท้ายนรสิงห์",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "beach"
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
      "min": 900,
      "max": 1700
    }
  },
  {
    "id": "sakhon-grand-residence",
    "province": "samut-sakhon",
    "name_en": "Sakhon Grand Residence",
    "lat": 13.549,
    "lng": 100.285,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": null,
    "name": "สาคร แกรนด์ เรสซิเดนซ์",
    "area": "เมืองสมุทรสาคร",
    "description": "โรงแรมสไตล์โมเดิร์นห้องพักขนาดใหญ่ สะอาด ปลอดภัย เหมาะสำหรับการเดินทางติดต่อธุรกิจและการท่องเที่ยว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "min": 850,
      "max": 1500
    }
  },
  {
    "id": "mida-grande-hotel-dhavaravati",
    "province": "nakhon-pathom",
    "name_en": "Mida Grande Hotel Dhavaravati Nakhon Pathom",
    "lat": 13.810521,
    "lng": 100.075892,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": "https://www.midahotelsandresorts.com",
    "name": "โรงแรมไมด้า แกรนด์ ทวารวดี นครปฐม",
    "area": "เมืองนครปฐม",
    "description": "โรงแรมหรูระดับ 5 ดาว ตกแต่งสไตล์ทวารวดีร่วมสมัย พร้อมสระว่ายน้ำขนาดใหญ่และสิ่งอำนวยความสะดวกครบครัน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "hotel",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1800,
      "max": 4500
    }
  },
  {
    "id": "xen-hotel-nakhon-pathom",
    "province": "nakhon-pathom",
    "name_en": "Xen Hotel Nakhon Pathom",
    "lat": 13.821011,
    "lng": 100.068901,
    "image_url": "https://images.pexels.com/photos/37836001/pexels-photo-37836001.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37836001/",
    "website": null,
    "name": "โรงแรมเซน นครปฐม",
    "area": "เมืองนครปฐม",
    "description": "โรงแรมสไตล์โมเดิร์นตั้งอยู่ใจกลางเมือง ใกล้องค์พระปฐมเจดีย์ เดินทางสะดวกสบาย ในราคาคุ้มค่า",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "min": 850,
      "max": 1400
    }
  },
  {
    "id": "the-pround-hotel",
    "province": "nakhon-pathom",
    "name_en": "The Proud Hotel",
    "lat": 13.815201,
    "lng": 100.048911,
    "image_url": "https://images.pexels.com/photos/6606354/pexels-photo-6606354.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Belle Shang / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/6606354/",
    "website": null,
    "name": "เดอะ พราวด์ โฮเทล",
    "area": "เมืองนครปฐม",
    "description": "บูทีคโฮเทลบรรยากาศดี ใกล้พระราชวังสนามจันทร์ ห้องพักสะอาด ตกแต่งเรียบหรูสไตล์มินิมอล",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "boutique",
    "tier": "mid",
    "amenities": [
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1100,
      "max": 2200
    }
  },
  {
    "id": "parnvati-resort",
    "province": "nakhon-pathom",
    "name_en": "Parnvati Riverside Resort",
    "lat": 13.748111,
    "lng": 100.221012,
    "image_url": "https://images.pexels.com/photos/37610710/pexels-photo-37610710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Cihad Yildiz / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37610710/",
    "website": "https://www.parnvati.com",
    "name": "ปานเทวี ริเวอร์ไซด์ รีสอร์ท",
    "area": "สามพราน",
    "description": "รีสอร์ทเรือนไทยบรรยากาศร่มรื่นริมแม่น้ำท่าจีน เหมาะสำหรับการพักผ่อนแบบสโลว์ไลฟ์ใกล้กรุงเทพฯ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1500,
      "max": 3200
    }
  },
  {
    "id": "charn-at-nakhon-chai-si",
    "province": "nakhon-pathom",
    "name_en": "Charn at Nakhon Chai Si",
    "lat": 13.801211,
    "lng": 100.190112,
    "image_url": "https://images.pexels.com/photos/37098094/pexels-photo-37098094.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Sasi Tha / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37098094/",
    "website": null,
    "name": "ชาน ณ นครชัยศรี",
    "area": "นครชัยศรี",
    "description": "ที่พักบูทีคบรรยากาศเงียบสงบโอบล้อมด้วยสวนธรรมชาติ เหมาะสำหรับการหลีกหนีความวุ่นวายมาผ่อนคลาย",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "boutique",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2200,
      "max": 4800
    }
  },
  {
    "id": "khaolak-orchid-beach-resort",
    "province": "phang-nga",
    "name_en": "Khaolak Orchid Beach Resort",
    "lat": 8.6721,
    "lng": 98.2589,
    "image_url": "https://images.pexels.com/photos/3355777/pexels-photo-3355777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Quang Nguyen Vinh / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/3355777/",
    "website": null,
    "name": "เขาหลัก ออร์คิด บีช รีสอร์ท",
    "area": "หาดข่อยหลาว เขาหลัก",
    "description": "รีสอร์ตติดริมชายหาดบรรยากาศผ่อนคลาย พร้อมสระว่ายน้ำขนาดใหญ่และสิ่งอำนวยความสะดวกครบครัน",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "beach"
    ],
    "type": "resort",
    "tier": "mid",
    "amenities": [
      "pool",
      "breakfast",
      "free_wifi",
      "parking",
      "beach_access"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 1800,
      "max": 3500
    }
  },
  {
    "id": "fanrai-guesthouse",
    "province": "phang-nga",
    "name_en": "Fanrai Guesthouse",
    "lat": 8.3591,
    "lng": 98.3742,
    "image_url": "https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Carmen Cobo / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/1103808/",
    "website": null,
    "name": "ฝันร้าย เกสท์เฮาส์",
    "area": "ย่านเมืองเก่าตะกั่วป่า",
    "description": "เกสท์เฮาส์สไตล์สตรีทชิคในตึกชิโนโปรตุกีสโบราณใจกลางเมืองเก่าตะกั่วป่า",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "photo"
    ],
    "type": "guesthouse",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "11:00",
    "price_per_night": {
      "min": 600,
      "max": 1100
    }
  },
  {
    "id": "the-memory-at-on-on-hotel",
    "province": "phuket",
    "name_en": "The Memory at On On Hotel",
    "lat": 7.8852,
    "lng": 98.3884,
    "image_url": "https://images.pexels.com/photos/19810875/pexels-photo-19810875.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Wutthichai Charoenburi / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/19810875/",
    "website": "https://www.thememoryhotel.com",
    "name": "เดอะ เมมโมรี ที่ ออน ออน โฮเต็ล",
    "area": "ย่านเมืองเก่าภูเก็ต",
    "description": "โรงแรมประวัติศาสตร์สไตล์ชิโนโปรตุกีสสุดคลาสสิกใจกลางเมืองเก่าภูเก็ต",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "breakfast",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 2200,
      "max": 4500
    }
  },
  {
    "id": "blu-monkey-hub-hotel-phuket",
    "province": "phuket",
    "name_en": "Blu Monkey Hub & Hotel Phuket",
    "lat": 7.8912,
    "lng": 98.3792,
    "image_url": "https://images.pexels.com/photos/37835990/pexels-photo-37835990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Ariyan / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/37835990/",
    "website": "https://www.blumonkeyhotels.com",
    "name": "บลูมังกี้ ฮับ แอนด์ โฮเทล ภูเก็ต",
    "area": "ตัวเมืองภูเก็ต",
    "description": "โรงแรมดีไซน์โมเดิร์นโคาสต์ สไตล์ฮิปสเตอร์ราคาสบายกระเป๋าสำหรับคนรุ่นใหม่",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "photo"
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
      "min": 900,
      "max": 1600
    }
  },
  {
    "id": "trisara-phuket-resort",
    "province": "phuket",
    "name_en": "Trisara Phuket Resort",
    "lat": 8.0412,
    "lng": 98.2794,
    "image_url": "https://images.pexels.com/photos/4089908/pexels-photo-4089908.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Dushenkovsky / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/4089908/",
    "website": "https://www.trisara.com",
    "name": "ตรีสาร ภูเก็ต",
    "area": "หาดถลาง ภูเก็ต",
    "description": "รีสอร์ตวิลล่าหรูระดับอัลตร้าลักชูรีริมทะเล พร้อมสระว่ายน้ำส่วนตัวและความเป็นส่วนตัวสูงสุด",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
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
      "breakfast",
      "free_wifi",
      "beach_access"
    ],
    "check_in": "15:00",
    "check_out": "12:00",
    "price_per_night": {
      "min": 25000,
      "max": 60000
    }
  },
  {
    "id": "the-siam-heritage-phuket-or-similar",
    "province": "phuket",
    "name_en": "SALAK Phuket Resort & Spa",
    "lat": 8.1212,
    "lng": 98.2984,
    "image_url": "https://images.pexels.com/photos/31387456/pexels-photo-31387456.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Vince / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/31387456/",
    "website": "https://www.salahospitality.com",
    "name": "ศาลาภูเก็ต รีสอร์ต แอนด์ สปา",
    "area": "หาดไม้ขาว อำเภอถลาง",
    "description": "พูลวิลล่ารีสอร์ตสไตล์มินิมอลริมหาดไม้ขาว ดีไซน์โดดเด่นและเงียบสงบ",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "beach",
      "quiet"
    ],
    "type": "resort",
    "tier": "comfy",
    "amenities": [
      "pool",
      "breakfast",
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
    "id": "woody-inn-phuket",
    "province": "phuket",
    "name_en": "Woody Inn Phuket",
    "lat": 7.8841,
    "lng": 98.3852,
    "image_url": "https://images.pexels.com/photos/14595935/pexels-photo-14595935.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "image_credit": "Bilakis / Pexels",
    "image_license": "ภาพประกอบ · Pexels License",
    "image_page_url": "https://www.pexels.com/photo/14595935/",
    "website": null,
    "name": "วูดดี้ อินน์ ภูเก็ต",
    "area": "อำเภอเมืองภูเก็ต",
    "description": "เกสท์เฮาส์อบอุ่นสไตล์ไม้โบราณใจกลางเมืองเก่า สะดวกต่อการเดินทางท่องเที่ยว",
    "awards": [],
    "is_mock": false,
    "unverified": true,
    "uncertain_fields": [
      "all fields: not re-checked"
    ],
    "moods": [
      "quiet",
      "temple"
    ],
    "type": "guesthouse",
    "tier": "saver",
    "amenities": [
      "free_wifi",
      "near_transit"
    ],
    "check_in": "14:00",
    "check_out": "11:00",
    "price_per_night": {
      "min": 800,
      "max": 1400
    }
  }
]
