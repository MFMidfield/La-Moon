import { scheduleDay, toHHMM, toMinutes } from '../../lib/trip/schedule'
import { dayRows, mealKey, placeKey } from './mealPlan'

// มื้อกลางวัน/เย็นไม่เริ่มก่อนเวลานี้ (ถ้ามาถึงก่อนจะรอ) — มื้อเช้าเริ่มต่อจากเวลาเริ่มวัน (09:00)
const MEAL_ANCHOR = { lunch: 12 * 60, dinner: 18 * 60 }
const DEFAULT_VISIT = 90

const point = (x) => (x && x.lat != null && x.lng != null ? x : null)

export const timeKey = (d, key) => `${d}:${key}`

export function stepTime(hhmm, delta) {
  return toHHMM(Math.min(23 * 60 + 59, Math.max(0, toMinutes(hhmm) + delta)))
}

// "~20 นาที" / "~1 ชม. 10 นาที"
export function formatTravel(minutes) {
  if (minutes < 60) return `~${minutes} นาที`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `~${h} ชม.${m ? ` ${m} นาที` : ''}`
}

// จุดที่ใช้เวลาในวัน (ที่เที่ยว + มื้อที่มีร้าน/กินที่พัก) ตามลำดับแถว — มื้อที่ข้าม/ยังไม่มีร้านไม่กินเวลา
export function dayStops(day, prevStay) {
  return dayRows(day.items, day.meals ?? [], { hideEmpty: true }).map((row) => {
    if (row.kind === 'place') {
      const { place } = row.item
      return { key: placeKey(place.id), kind: 'place', point: point(place), minutes: place.visit_minutes ?? DEFAULT_VISIT }
    }
    const { slot } = row
    return { key: mealKey(slot.meal), kind: 'meal', meal: slot.meal, point: point(slot.atStay ? prevStay : slot.restaurant) }
  })
}

/**
 * คำนวณเวลาของวันเดียว — user = { [key]: 'HH:MM' } เวลาเริ่มที่ผู้ใช้เลือก
 * เวลาที่เร็วกว่าที่เดินทางถึงจริงถูกละ (ใช้เวลาถึงจริง) ยกเว้นจุดแรกของวัน
 */
function computeDay(stops, user) {
  const effective = {}
  stops.forEach((stop, i) => {
    const anchor = MEAL_ANCHOR[stop.meal]
    const want = user[stop.key] ?? (anchor != null ? toHHMM(anchor) : null)
    if (!want) return
    const natural = toMinutes(scheduleDay(stops.slice(0, i + 1), { overrides: effective })[i].start)
    if (i === 0 || toMinutes(want) > natural) effective[stop.key] = want
  })
  return scheduleDay(stops, { overrides: effective })
}

/**
 * เวลาทั้งทริป
 * days: [{ items, meals, stay }] (viewDays); overrides: { 'd:key': 'HH:MM' }
 * saved = true (หน้าอ่านอย่างเดียว): ใช้ start ที่บันทึกไว้ในแต่ละ item/meal แทน overrides
 * คืน [{ times: { [key]: { key, start, end, travelBefore } }, span: { start, end } | null }]
 */
export function scheduleTrip(days, { overrides = {}, saved = false } = {}) {
  return days.map((day, d) => {
    const stops = dayStops(day, days[d - 1]?.stay)
    const user = {}
    if (saved) {
      day.items.forEach((item) => { if (item.start) user[placeKey(item.place.id)] = item.start })
      ;(day.meals ?? []).forEach((m) => { if (m.start) user[mealKey(m.meal)] = m.start })
    } else {
      stops.forEach((stop) => { const value = overrides[timeKey(d, stop.key)]; if (value) user[stop.key] = value })
    }
    const rows = computeDay(stops, user)
    return {
      times: Object.fromEntries(rows.map((row) => [row.key, row])),
      span: rows.length ? { start: rows[0].start, end: rows[rows.length - 1].end } : null,
    }
  })
}
