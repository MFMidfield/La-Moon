// ข้อมูลประมาณการสำหรับวางแผนทริป — ตัวเลขร่าง ให้ทีมปรับได้ที่ไฟล์นี้ไฟล์เดียว

// พาหนะไปจังหวัดปลายทาง
export const TRANSPORT_TO = [
  { id: 'plane', label: 'เครื่องบิน' },
  { id: 'train', label: 'รถไฟ' },
  { id: 'bus', label: 'รถทัวร์' },
  { id: 'car', label: 'ขับรถเอง' },
]

// เที่ยวในพื้นที่ (ราคา/วัน ทั้งกลุ่ม ยกเว้น perPerson)
export const BKK_TRANSIT_PROVINCES = ['bangkok', 'nonthaburi', 'pathum-thani', 'samut-prakan', 'nakhon-pathom', 'samut-sakhon']

export const TRANSPORT_LOCAL = [
  { id: 'transit', label: 'รถไฟฟ้า/เรือ', costPerDay: 120, perPerson: true },
  { id: 'rental_car', label: 'เช่ารถ', costPerDay: 1200 },
  { id: 'motorbike', label: 'เช่ามอเตอร์ไซค์', costPerDay: 300 },
  { id: 'public', label: 'รถสาธารณะ/แท็กซี่', costPerDay: 400, perPerson: true },
  { id: 'tour', label: 'ทัวร์/เรือ', costPerDay: 900, perPerson: true },
  // ขับรถมาเอง/รถส่วนตัว: ค่าน้ำมันตามระยะที่วนในวัน (budget.js) ไม่คิดรายวัน
  { id: 'own_car', label: 'รถส่วนตัว', costPerDay: 0, bahtPerKm: 2.5 },
]

// จังหวะเที่ยว = จำนวนที่ต่อวันเต็ม
export const PACES = [
  { id: 'chill', label: 'ชิล', perDay: 2 },
  { id: 'normal', label: 'กลางๆ', perDay: 3 },
  { id: 'packed', label: 'แน่น', perDay: 4 },
]

// จังหวัดที่มีสนามบินพาณิชย์ (จังหวัดไม่มี → ใช้สนามบินใกล้สุดใน NEAREST_AIRPORT)
export const AIRPORT_PROVINCES = [
  'bangkok', 'samut-prakan', 'chiang-mai', 'chiang-rai', 'mae-hong-son', 'lampang', 'nan', 'phrae', 'phitsanulok', 'sukhothai', 'tak',
  'udon-thani', 'khon-kaen', 'ubon-ratchathani', 'nakhon-phanom', 'sakon-nakhon', 'loei', 'buri-ram', 'roi-et',
  'rayong', 'trat', 'phuket', 'krabi', 'surat-thani', 'nakhon-si-thammarat', 'trang', 'ranong', 'chumphon', 'songkhla', 'narathiwat',
]
export const NEAREST_AIRPORT = { 'phang-nga': 'phuket', 'phatthalung': 'nakhon-si-thammarat', 'satun': 'songkhla', 'pattani': 'songkhla', 'yala': 'narathiwat' }

// จังหวัดที่ทางรถไฟผ่าน (ไม่ผ่าน → ต่อรถจาก RAIL_HUB)
export const RAIL_PROVINCES = [
  'bangkok', 'nonthaburi', 'pathum-thani', 'ayutthaya', 'saraburi', 'lopburi', 'nakhon-sawan', 'phichit', 'phitsanulok', 'uttaradit',
  'phrae', 'lampang', 'lamphun', 'chiang-mai', 'nakhon-ratchasima', 'buri-ram', 'surin', 'si-sa-ket', 'ubon-ratchathani', 'khon-kaen',
  'udon-thani', 'nong-khai', 'chachoengsao', 'prachin-buri', 'sa-kaeo', 'chon-buri', 'nakhon-pathom', 'kanchanaburi', 'ratchaburi',
  'phetchaburi', 'prachuap-khiri-khan', 'chumphon', 'surat-thani', 'nakhon-si-thammarat', 'phatthalung', 'trang', 'songkhla', 'yala', 'narathiwat',
]
export const RAIL_HUB = { krabi: 'surat-thani', 'phang-nga': 'surat-thani', phuket: 'surat-thani', ranong: 'chumphon', satun: 'songkhla' }

// สูตรเดินทาง (road km = ระยะเส้นตรงระหว่างจุดกลาง × ROAD_FACTOR)
export const ROAD_FACTOR = 1.3
export const DAY_TRIP_MAX_KM = 150 // ใกล้กว่านี้แนะนำไปกลับวันเดียว
export const PLANE_MIN_KM = 350 // ใกล้กว่านี้ไม่เสนอเครื่องบิน
export const TRAVEL = {
  car: { kmh: 70, bahtPerKm: 2.5 }, // ค่าน้ำมันต่อคัน
  bus: { kmh: 60, bahtPerKm: 1.1, extraHours: 0.5 },
  train: { kmh: 55, bahtPerKm: [0.5, 1.4], extraHours: 1 },
  plane: { flightKmh: 650, airportHours: 2.5, baht: [1500, 3500] },
}

// ที่พักต่อคืนต่อห้อง (2 คน) และค่ากินต่อคนต่อวัน ตามระดับงบ
export const STAY_PER_ROOM = { saver: 700, mid: 1600, comfy: 3500 }
export const FOOD_PER_DAY = { saver: 300, mid: 600, comfy: 1200 }
// ค่าเข้าโดยประมาณต่อคน ตาม places.price_level (ฟรี/ถูก รวมเป็น 1)
export const ENTRY_BY_PRICE_LEVEL = { 1: 100, 2: 600, 3: 1500 }

// ปุ่มลัดงบต่อคน (บาท)
export const BUDGET_PRESETS = [
  { id: 'saver', label: 'ประหยัด', min: 2000, max: 4000 },
  { id: 'mid', label: 'กลางๆ', min: 4000, max: 10000 },
  { id: 'comfy', label: 'สบาย', min: 10000, max: 20000 },
]
export const BUDGET_RANGE = { min: 500, max: 30000, step: 500 }

// ช่วงเวลาในวัน (ใช้จัดแผน)
export const SLOTS = [
  { id: 'morning', label: 'เช้า' },
  { id: 'afternoon', label: 'บ่าย' },
  { id: 'evening', label: 'เย็น' },
]

// ฟีเจอร์ที่ปิดชั่วคราว (โหลดไม่ขึ้นในการเทส — เปิดกลับเมื่อแก้แล้ว)
export const FEATURES = {
  intercityTransport: false, // การ์ด "ไปยังไง" (เครื่องบิน/รถไฟ/รถทัวร์) ในหน้ารายละเอียด
  bkkTransit: false, // แถบเส้นทางรถไฟฟ้า/เรือในแผนรายวัน
}
