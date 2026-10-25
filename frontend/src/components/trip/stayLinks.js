import { addDays } from './itinerary'

// ลิงก์ค้นหาที่พักจริง (Agoda / Booking.com) ที่กรอกจังหวัด วันเข้า-ออก คน ห้อง ให้แล้ว
// Agoda ใส่ cid เมื่อตั้ง VITE_AGODA_CID (affiliate) — ไม่ตั้งก็ยังเปิดหน้าค้นหาจริงได้
const AGODA_CID = import.meta.env.VITE_AGODA_CID

// คำค้น: ชื่ออังกฤษของที่พัก (ถ้าเป็นที่จริง) > จังหวัดภาษาอังกฤษ (slug → Krabi, Surat Thani)
function searchText(stay) {
  if (stay?.name_en && !stay.is_mock) return stay.name_en
  const province = stay?.province?.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
  return province ? `${province}, Thailand` : 'Thailand'
}

function agodaUrl({ stay, checkIn, nights, adults, rooms }) {
  const params = new URLSearchParams({ textToSearch: searchText(stay), rooms: String(rooms), adults: String(adults), children: '0' })
  if (checkIn) { params.set('checkIn', checkIn); params.set('los', String(nights)) }
  if (AGODA_CID) params.set('cid', AGODA_CID)
  return `https://www.agoda.com/search?${params}`
}

function bookingComUrl({ stay, checkIn, nights, adults, rooms }) {
  const params = new URLSearchParams({ ss: searchText(stay), group_adults: String(adults), no_rooms: String(rooms), group_children: '0' })
  if (checkIn) { params.set('checkin', checkIn); params.set('checkout', addDays(checkIn, nights)) }
  return `https://www.booking.com/searchresults.th.html?${params}`
}

/** ห้องละ 2 คน เหมือน estimateTrip */
export const roomsFor = (people) => Math.ceil(Math.max(1, people) / 2)

/** → [{ id, name, note, url }] — ที่พักมี booking_url ของตัวเอง → ลิงก์นั้นลิงก์เดียว */
export function stayLinks({ stay, checkIn = null, nights = 1, people = 1 }) {
  if (!stay) return []
  if (stay.booking_url) return [{ id: 'direct', name: 'เว็บที่พัก', note: 'จองตรง', url: stay.booking_url }]
  const query = { stay, checkIn, nights: Math.max(1, nights), adults: Math.max(1, people), rooms: roomsFor(people) }
  return [
    { id: 'agoda', name: 'Agoda', note: 'โรงแรม รีสอร์ต', url: agodaUrl(query) },
    { id: 'booking', name: 'Booking.com', note: 'ที่พักทุกแบบ', url: bookingComUrl(query) },
  ]
}
