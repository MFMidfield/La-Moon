import { PACES } from '../../data/travel'
import { estimateTrip } from './budget'
import { travelOptions } from './travel'

const pick = (list) => list[Math.floor(Math.random() * list.length)]
const shuffle = (list) => [...list].sort(() => Math.random() - 0.5)
const iso = (d) => d.toISOString().slice(0, 10)

// วันเสาร์ถัดไป (อย่างน้อยพรุ่งนี้)
export function nextSaturday(today = new Date()) {
  const d = new Date(today)
  d.setDate(d.getDate() + 1)
  while (d.getDay() !== 6) d.setDate(d.getDate() + 1)
  return d
}

/**
 * สุ่มทริปจาก draft (ต้องมี moods, budget, travelers, origin)
 * places: Place[] ทั้งหมด (ต้องมี province, moods, price_level)
 * เคารพ draft.locked — key ที่ล็อกจะไม่เปลี่ยน
 * คืน { patch, estimate } ถ้าเจอชุดที่ไม่เกินงบ, หรือ { patch: null, needMore } = ต้องเพิ่มงบอย่างน้อยกี่บาท
 */
export function randomizeTrip({ draft, places, today = new Date(), tries = 40 }) {
  const locked = new Set(draft.locked)
  const people = Math.max(1, draft.travelers.adults + draft.travelers.children)
  const matching = places.filter((p) => !draft.moods.length || p.moods.some((m) => draft.moods.includes(m)))
  const provinces = locked.has('province') && draft.province ? [draft.province] : [...new Set(matching.map((p) => p.province))]
  if (!provinces.length) return { patch: null, needMore: null }

  let best = null
  for (let t = 0; t < tries; t++) {
    const province = pick(provinces)
    const travel = travelOptions(draft.origin, province)
    const feasible = travel.options.filter((o) => o.available)
    const transportTo = travel.sameProvince ? null : locked.has('transportTo') && draft.transportTo ? draft.transportTo : feasible.length ? pick(feasible).id : 'car'
    const tripType = locked.has('dates') ? draft.tripType : travel.dayTripSuggested ? pick(['daytrip', 'overnight']) : 'overnight'
    const nights = tripType === 'daytrip' ? 0 : locked.has('dates') && draft.startDate ? Math.round((new Date(draft.endDate) - new Date(draft.startDate)) / 86400000) : pick([1, 1, 2, 2, 3])
    const start = locked.has('dates') && draft.startDate ? new Date(draft.startDate) : nextSaturday(today)
    const end = new Date(start)
    end.setDate(end.getDate() + nights)
    const pace = locked.has('pace') ? draft.pace : pick(PACES).id
    const transportLocal = locked.has('transportLocal') && draft.transportLocal ? draft.transportLocal : pick(['rental_car', 'motorbike', 'public', 'tour'])
    const deckPool = shuffle(matching.filter((p) => p.province === province))
    const perDay = PACES.find((p) => p.id === pace).perDay
    const deck = deckPool.slice(0, Math.max(perDay * (nights + 1) + 2, 5))

    const estimate = estimateTrip({ origin: draft.origin, province, transportTo, transportLocal, budget: draft.budget, people, days: nights + 1, nights, places: deck.slice(0, perDay * (nights + 1)) })
    const patch = { province, transportTo, transportLocal, tripType, startDate: iso(start), endDate: iso(end), pace, deck: deck.map((p) => p.id), likedIds: [] }
    if (estimate.over === 0) return { patch, estimate }
    if (!best || estimate.over < best.estimate.over) best = { patch, estimate }
  }
  return { patch: null, needMore: best ? best.estimate.over : null, closest: best }
}
