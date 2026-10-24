import { assignSlots } from '../../lib/trip/plan'
import { placeKey } from './mealPlan'

export function localDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function addDays(value, days) {
  const date = new Date(`${value}T12:00:00`)
  date.setDate(date.getDate() + days)
  return localDate(date)
}

export function thaiDate(value, options = { day: 'numeric', month: 'short' }) {
  return value ? new Date(`${value}T12:00:00`).toLocaleDateString('th-TH', options) : ''
}

export function dayNarrative(items) {
  if (!items.length) return 'วันนี้ยังไม่มีที่เที่ยว มีแค่มื้ออาหาร'
  return items.map(item => item.place.name).join(' → ')
}

// schedule = ผล scheduleTrip → ใส่ start/end (เวลาจริง) ให้แต่ละ item
export function serializePlan(plan, schedule = null) {
  return {
    days: plan.days.map((day, d) => ({
      items: day.items.map(item => {
        const t = schedule?.[d]?.times[placeKey(item.place.id)]
        return { place: item.place.id, slot: item.slot, auto: Boolean(item.auto), ...(t ? { start: t.start, end: t.end } : {}) }
      }),
    })),
    spare: plan.spare.map(place => place.id),
  }
}

// Saved trips before the planning flow stored each day as an array of IDs.
export function normalizeDays(days = []) {
  return days.map(day => Array.isArray(day)
    ? { items: assignSlots(day.map(place => ({ place, auto: false }))) }
    : { items: (day.items ?? []).map(item => ({ ...item, slot: item.slot ?? 'morning', auto: Boolean(item.auto) })) })
}

export function hydratePlan(saved, places) {
  const byId = new Map(places.map(place => [place.id, place]))
  return {
    days: normalizeDays(saved.days).map(day => ({ items: day.items.flatMap(item => byId.has(item.place) ? [{ ...item, place: byId.get(item.place) }] : []) })),
    spare: (saved.spare ?? []).map(id => byId.get(id)).filter(Boolean),
  }
}

export function moveCard(plan, id, target, at = Infinity) {
  let moving
  let source
  let oldIndex = -1
  const days = plan.days.map((day, d) => ({ items: day.items.filter((item, i) => {
    if (item.place.id !== id) return true
    moving = item
    source = String(d)
    oldIndex = i
    return false
  }) }))
  const spare = plan.spare.filter((place, i) => {
    if (place.id !== id) return true
    moving = { place, auto: false }
    source = 'spare'
    oldIndex = i
    return false
  })
  if (!moving) return plan
  const destination = String(target)
  const index = source === destination && at > oldIndex ? at - 1 : at
  if (destination === 'spare') spare.splice(Math.max(0, index), 0, moving.place)
  else if (days[Number(destination)]) days[Number(destination)].items.splice(Math.max(0, index), 0, moving)
  else return plan
  return { days: days.map(day => ({ items: assignSlots(day.items) })), spare }
}

export function resizePlan(plan, count) {
  if (count === plan.days.length) return plan
  const spare = [...plan.spare, ...plan.days.slice(count).flatMap(day => day.items.map(item => item.place))]
  const days = Array.from({ length: count }, (_, d) => plan.days[d] ?? { items: [] })
  return { days, spare }
}

export function alternativePatch(draft, patch) {
  const nights = patch.nights
  const rest = { ...patch }
  delete rest.nights
  delete rest.days
  if (nights == null) return rest
  return { ...rest, tripType: nights === 0 ? 'daytrip' : 'overnight', endDate: addDays(draft.startDate, nights) }
}
