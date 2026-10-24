import { distanceKm } from './geo'

export const PLACES_PER_DAY = 3

// เรียงแบบไปที่ใกล้สุดถัดไป (nearest neighbor) เริ่มจากใบแรก แล้วแบ่งวันละ 3 ที่
// places: Place[] → Place[][] ; สถานที่ไม่มีพิกัดไปต่อท้าย
export function planDays(places, perDay = PLACES_PER_DAY) {
  const located = places.filter((p) => p.lat != null && p.lng != null)
  const unlocated = places.filter((p) => p.lat == null || p.lng == null)

  const ordered = []
  const rest = [...located]
  let current = rest.shift()
  while (current) {
    ordered.push(current)
    if (!rest.length) break
    let nearest = 0
    rest.forEach((p, i) => {
      if (distanceKm(current, p) < distanceKm(current, rest[nearest])) nearest = i
    })
    current = rest.splice(nearest, 1)[0]
  }

  const all = [...ordered, ...unlocated]
  const days = []
  for (let i = 0; i < all.length; i += perDay) days.push(all.slice(i, i + perDay))
  return days
}

const SLOT_IDS = ['morning', 'afternoon', 'evening']

// ใส่ช่วงเวลา เช้า/บ่าย/เย็น ให้รายการในวัน (เรียกใหม่ทุกครั้งที่ลาก/ย้ายการ์ด)
export function assignSlots(items) {
  return items.map((item, i) => ({ ...item, slot: SLOT_IDS[Math.min(2, Math.floor((i * 3) / Math.max(1, items.length)))] }))
}

// จำนวนที่ต่อวัน: วันแรก/วันสุดท้ายหักเวลาเดินทาง (travelHours = เที่ยวเดียว)
export function dayCapacities({ days, perDay, travelHours = 0 }) {
  const cut = travelHours >= 6 ? 2 : travelHours >= 3 ? 1 : 0
  if (days === 1) return [Math.max(1, perDay - cut)]
  return Array.from({ length: days }, (_, i) => (i === 0 || i === days - 1 ? Math.max(1, perDay - cut) : perDay))
}

/**
 * จัดแผนรายวันอัตโนมัติ
 * liked: Place[] ที่ปัดขวา (ใช้ทั้งหมด วันหนึ่งเกิน capacity ได้), pool: Place[] ตัวเลือกเติม (ตรงมู้ด ไม่ซ้ำ liked)
 * คืน { days: [{ items: [{ place, slot, auto }] }], spare: Place[] }
 *   auto = true คือระบบเติมให้ (ป้าย 🎲), spare = กองสำรองที่เหลือให้ลากใส่วันได้
 */
export function planTrip({ liked, pool = [], capacities }) {
  const days = capacities.length
  const need = capacities.reduce((a, b) => a + b, 0)
  const likedIds = new Set(liked.map((p) => p.id))
  const fillers = pool.filter((p) => !likedIds.has(p.id))
  const chosen = [...liked.map((place) => ({ place, auto: false })), ...fillers.slice(0, Math.max(0, need - liked.length)).map((place) => ({ place, auto: true }))]
  const spare = fillers.slice(Math.max(0, need - liked.length))

  // เรียงตามระยะ แล้วแบ่งตาม capacity (ส่วนเกินกระจายวันละใบ)
  const order = planDays(chosen.map((c) => c.place), chosen.length || 1).flat()
  const byId = new Map(chosen.map((c) => [c.place.id, c]))
  const sorted = order.map((p) => byId.get(p.id))
  const out = Array.from({ length: days }, () => [])
  let i = 0
  capacities.forEach((cap, d) => {
    for (let k = 0; k < cap && i < sorted.length; k++) out[d].push(sorted[i++])
  })
  for (let d = 0; i < sorted.length; d = (d + 1) % days) out[d].push(sorted[i++])

  return { days: out.map((items) => ({ items: assignSlots(items) })), spare }
}
