import { distanceKm } from '../../lib/trip/geo'
import { assignStays, planMeals } from '../../lib/trip/meals'

export const mid = ({ min, max }) => (min + max) / 2
export const overrideKey = (d, meal) => `${d}:${meal}`
// key ของแถวในวัน (ใช้กับเวลา): สถานที่ / มื้อ
export const placeKey = (id) => `p:${id}`
export const mealKey = (meal) => `m:${meal}`

/**
 * ร้านอาหาร + ที่พักต่อวัน จากแผนสถานที่ปัจจุบัน
 * overrides: { 'd:meal': { restaurant: id|null, auto? } } — ที่ผู้ใช้สลับเอง (null = ไม่ต้องการมื้อนี้)
 * คืน { days: [{ stay, meals }], stays (ต่อคืน), dayPlaces, mealPlaces, hasFood }
 *   mealPlaces = dayPlaces แต่วันที่ไม่มีที่เที่ยวใช้ที่เที่ยวทั้งทริปเป็นจุดอ้างอิงหาร้านใกล้ๆ
 * meal ที่ผู้ใช้ข้าม = { restaurant: null, skipped: true }
 */
export function buildFoodStay({ plan, nights, likedStays = [], stayMode, chosenStay = null, likedRestaurants = [], pool = [], overrides = {} }) {
  const dayPlaces = plan.days.map((day) => day.items.map((item) => item.place))
  const stays = assignStays({ nights, dayPlaces, liked: likedStays, mode: stayMode ?? 'single', chosen: chosenStay })
  const hasFood = pool.length > 0 || likedRestaurants.length > 0
  const breakfastAtStay = dayPlaces.map((_, d) => d >= 1 && Boolean(stays[d - 1]?.amenities?.includes('breakfast')))

  // ร้านที่ผู้ใช้เลือกเองห้ามถูกระบบเอาไปใส่มื้ออื่นซ้ำ
  const reserved = new Set()
  Object.entries(overrides).forEach(([key, value]) => {
    if (value?.restaurant && Number(key.split(':')[0]) < dayPlaces.length) reserved.add(value.restaurant)
  })
  const allPlaces = dayPlaces.flat()
  const mealPlaces = dayPlaces.map((places) => (places.length ? places : allPlaces))
  const planned = hasFood
    ? planMeals({
      dayPlaces: mealPlaces,
      liked: likedRestaurants.filter((r) => !reserved.has(r.id)),
      pool: pool.filter((r) => !reserved.has(r.id)),
      breakfastAtStay,
    })
    : dayPlaces.map(() => ({ meals: [] }))

  const byId = new Map([...pool, ...likedRestaurants].map((r) => [r.id, r]))
  const days = planned.map((day, d) => ({
    stay: stays[d] ?? null,
    meals: day.meals.map((slot) => {
      const override = overrides[overrideKey(d, slot.meal)]
      if (!override) return slot
      if (override.restaurant === null) return { meal: slot.meal, restaurant: null, auto: false, atStay: false, skipped: true }
      const restaurant = byId.get(override.restaurant)
      return restaurant ? { meal: slot.meal, restaurant, auto: Boolean(override.auto), atStay: false } : slot
    }),
  }))
  return { days, stays, dayPlaces, mealPlaces, hasFood }
}

// มื้อทั้งทริปสำหรับ estimateTrip (ไม่รวมมื้อที่ผู้ใช้ข้าม); d = วันที่ของมื้อ
export function budgetMeals(food) {
  if (!food.hasFood) return null
  const slots = food.days.flatMap((day, d) => day.meals.filter((m) => !m.skipped).map((m) => ({ ...m, d })))
  return slots.length ? slots : [{ atStay: true, restaurant: null, d: 0 }]
}

// รูปแบบที่เก็บใน trips.days[d] (ส่วนเพิ่มจาก items); schedule = ผล scheduleTrip → ใส่ start/end ของมื้อ
export function serializeFood(foodDays, schedule = null) {
  return foodDays.map((day, d) => ({
    meals: day.meals.map((m) => {
      const t = schedule?.[d]?.times[mealKey(m.meal)]
      return { meal: m.meal, restaurant: m.restaurant?.id ?? null, auto: Boolean(m.auto), atStay: Boolean(m.atStay), ...(t ? { start: t.start, end: t.end } : {}) }
    }),
    stay: day.stay?.id ?? null,
  }))
}

// ร้านที่เสิร์ฟมื้อนั้น เรียงตามระยะถึงสถานที่ที่ใกล้ที่สุดของวัน (km = null ถ้าไม่มีพิกัด)
export function mealCandidates({ pool = [], liked = [], meal, places = [] }) {
  const likedIds = new Set(liked.map((r) => r.id))
  const all = [...new Map([...pool, ...liked].map((r) => [r.id, r])).values()].filter((r) => r.meals.includes(meal))
  return all
    .map((restaurant) => {
      const distances = places.map((p) => distanceKm(p, restaurant)).filter(Number.isFinite)
      return { restaurant, km: distances.length ? Math.min(...distances) : null, liked: likedIds.has(restaurant.id) }
    })
    .sort((a, b) => (a.km ?? 1e9) - (b.km ?? 1e9))
}

/**
 * เรียงแถวในวัน: เช้า → ที่เที่ยวช่วงเช้า → กลางวัน → ที่เที่ยวบ่าย/เย็น → เย็น (ลำดับนี้คือลำดับที่ใช้คำนวณเวลา)
 * คืน [{ kind: 'meal', slot } | { kind: 'place', item, index }]
 * hideEmpty: ซ่อนมื้อที่ไม่มีร้าน (หน้าอ่านอย่างเดียว)
 */
export function dayRows(items, meals = [], { hideEmpty = false } = {}) {
  const byMeal = new Map(meals.map((m) => [m.meal, m]))
  const rows = []
  const pushMeal = (meal) => {
    const slot = byMeal.get(meal)
    if (!slot) return
    if (hideEmpty && !slot.restaurant && !slot.atStay) return
    rows.push({ kind: 'meal', slot })
  }
  const lunchAt = items.findIndex((item) => item.slot !== 'morning')
  pushMeal('breakfast')
  items.forEach((item, index) => {
    if (index === lunchAt) pushMeal('lunch')
    rows.push({ kind: 'place', item, index })
  })
  if (lunchAt < 0) pushMeal('lunch')
  pushMeal('dinner')
  return rows
}
