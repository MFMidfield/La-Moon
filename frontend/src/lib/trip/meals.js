import { distanceKm } from './geo'

export const MEALS = ['breakfast', 'lunch', 'dinner']
const MEAL_LABEL = { breakfast: 'เช้า', lunch: 'กลางวัน', dinner: 'เย็น' }
export const mealLabel = (m) => MEAL_LABEL[m] ?? m

// จุดอ้างอิงของมื้อในวัน: เช้า = ที่แรก, กลางวัน = กลางวัน, เย็น = ที่สุดท้าย
function anchorFor(places, meal) {
  if (!places.length) return null
  if (meal === 'breakfast') return places[0]
  if (meal === 'dinner') return places[places.length - 1]
  return places[Math.floor((places.length - 1) / 2)]
}

function nearest(list, anchor) {
  if (!anchor) return list[0] ?? null
  return [...list].sort((a, b) => distanceKm(anchor, a) - distanceKm(anchor, b))[0] ?? null
}

/**
 * จัดร้านลงมื้อ
 * dayPlaces: Place[][] (สถานที่ของแต่ละวันตามลำดับ), liked: Restaurant[] ที่ปัดขวา, pool: Restaurant[] ทั้งจังหวัด
 * breakfastAtStay: boolean[] ต่อวัน (ที่พักคืนก่อนหน้ามีอาหารเช้า → ไม่เติมมื้อเช้า)
 * คืน [{ meals: [{ meal, restaurant|null, auto, atStay }] }] — ร้านที่ชอบใช้ก่อน ไม่ซ้ำ, ที่เหลือเติมจาก pool (auto)
 */
export function planMeals({ dayPlaces, liked = [], pool = [], breakfastAtStay = [] }) {
  const used = new Set()
  const likedLeft = [...liked]
  const out = dayPlaces.map(() => ({ meals: [] }))

  // รอบแรก: วางร้านที่ชอบลงมื้อที่ร้านรองรับ ใกล้จุดอ้างอิงที่สุด
  dayPlaces.forEach((places, d) => {
    for (const meal of MEALS) {
      if (meal === 'breakfast' && breakfastAtStay[d]) {
        out[d].meals.push({ meal, restaurant: null, auto: false, atStay: true })
        continue
      }
      const fits = likedLeft.filter((r) => r.meals.includes(meal) && !used.has(r.id))
      const pick = nearest(fits, anchorFor(places, meal))
      if (pick) {
        used.add(pick.id)
        likedLeft.splice(likedLeft.indexOf(pick), 1)
      }
      out[d].meals.push({ meal, restaurant: pick, auto: false, atStay: false })
    }
  })

  // รอบสอง: มื้อที่ยังว่าง เติมจาก pool
  dayPlaces.forEach((places, d) => {
    out[d].meals = out[d].meals.map((slot) => {
      if (slot.restaurant || slot.atStay) return slot
      const fits = pool.filter((r) => r.meals.includes(slot.meal) && !used.has(r.id))
      const pick = nearest(fits, anchorFor(places, slot.meal))
      if (!pick) return slot
      used.add(pick.id)
      return { ...slot, restaurant: pick, auto: true }
    })
  })
  return out
}

/**
 * ที่พักต่อคืน
 * mode 'single': ใช้ chosen ทุกคืน; 'multi': คืนที่ i เลือกที่ชอบที่ใกล้สถานที่สุดท้ายของวันที่ i
 * คืน Stay[] ยาว = nights (null ถ้าไม่มีที่พัก)
 */
export function assignStays({ nights, dayPlaces, liked = [], mode = 'single', chosen = null }) {
  if (!nights) return []
  if (mode === 'single' || liked.length <= 1) {
    const stay = chosen ?? liked[0] ?? null
    return Array.from({ length: nights }, () => stay)
  }
  return Array.from({ length: nights }, (_, i) => {
    const places = dayPlaces[i] ?? []
    return nearest(liked, places[places.length - 1]) ?? liked[0]
  })
}
