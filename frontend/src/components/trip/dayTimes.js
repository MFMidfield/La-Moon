import { DAY_START, scheduleDay, toHHMM, toMinutes } from '../../lib/trip/schedule'
import { dayRows, mealKey, placeKey } from './mealPlan'

// มื้อกลางวัน/เย็นไม่เริ่มก่อนเวลานี้ (ถ้ามาถึงก่อนจะรอ) — มื้อเช้าเริ่มต่อจากเวลาเริ่มวัน (09:00)
const MEAL_ANCHOR = { lunch: 12 * 60, dinner: 18 * 60 }
const DEFAULT_VISIT = 90
const NIGHT_END = 22 * 60

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
function computeDay(stops, user, start) {
  const effective = {}
  stops.forEach((stop, i) => {
    const anchor = MEAL_ANCHOR[stop.meal]
    const want = user[stop.key] ?? (anchor != null ? toHHMM(anchor) : null)
    if (!want) return
    const natural = toMinutes(scheduleDay(stops.slice(0, i + 1), { start, overrides: effective })[i].start)
    // จุดแรกของวัน: เวลาที่ผู้ใช้ตั้งใช้ตามนั้น แต่เวลามื้อ default ต้องไม่เร็วกว่าเวลาเริ่มวัน
    if (i === 0 ? user[stop.key] != null || toMinutes(want) >= (start ?? DAY_START) : toMinutes(want) > natural) effective[stop.key] = want
  })
  return scheduleDay(stops, { start, overrides: effective })
}

// ตัดจุดที่ไม่ควรมีตามเวลาเริ่มวัน (มาถึงสาย): ไม่ลบจากแผน แค่ไม่ลงเวลา
function fitStart(stops, bound) {
  const start = bound.start
  if (bound.late) return stops.filter(stop => bound.dinner && stop.meal === 'dinner')
  return stops.filter(stop => !((stop.meal === 'breakfast' && start >= 11 * 60) || (stop.meal === 'lunch' && start >= 13 * 60 + 30)))
}

// นาทีสัมบูรณ์ของแถว (กันเวลาข้ามเที่ยงคืนวนกลับเป็นค่าเล็ก)
function absoluteMinutes(rows) {
  let base = 0
  let previousEnd = -1
  return rows.map((row) => {
    let start = toMinutes(row.start) + base
    if (start < previousEnd) { base += 1440; start += 1440 }
    let end = toMinutes(row.end) + base
    if (end < start) { base += 1440; end += 1440 }
    previousEnd = end
    return { key: row.key, start, end }
  })
}

/**
 * เวลาทั้งทริป
 * days: [{ items, meals, stay }] (viewDays); overrides: { 'd:key': 'HH:MM' }
 * saved = true (หน้าอ่านอย่างเดียว): ใช้ start ที่บันทึกไว้ในแต่ละ item/meal แทน overrides
 * bounds = legBounds(...) ต่อวัน: { start, end, closed, late, dinner } (นาที) — เริ่มตามเวลาถึง / จบก่อนเที่ยวกลับ
 * คืน [{ times: { [key]: { key, start, end, travelBefore } }, span: { start, end } | null,
 *        skipped: { [key]: true } จุดที่ไม่ลงเวลาเพราะมาถึงสาย, overrun: { [key]: 'overrun'|'late' } จุดที่จบหลังเวลาต้องออกเที่ยวกลับ / หลัง 22:00,
 *        closed, late }]
 */
export function scheduleTrip(days, { overrides = {}, saved = false, bounds = null } = {}) {
  return days.map((day, d) => {
    const bound = bounds?.[d] ?? {}
    const all = dayStops(day, days[d - 1]?.stay)
    const stops = bound.closed ? [] : bound.start != null ? fitStart(all, bound) : all
    const used = new Set(stops.map(stop => stop.key))
    const skipped = Object.fromEntries(all.filter(stop => !used.has(stop.key)).map(stop => [stop.key, true]))
    const user = {}
    if (saved) {
      day.items.forEach((item) => { if (item.start) user[placeKey(item.place.id)] = item.start })
      ;(day.meals ?? []).forEach((m) => { if (m.start) user[mealKey(m.meal)] = m.start })
    } else {
      stops.forEach((stop) => { const value = overrides[timeKey(d, stop.key)]; if (value) user[stop.key] = value })
    }
    const rows = computeDay(stops, user, bound.start)
    const overrun = {}
    // วันที่เริ่มตามเวลาถึง: จบหลัง 22:00 = 'late' (เตือนอย่างเดียว); จบหลังเวลาต้องออกเที่ยวกลับ = 'overrun' (สำคัญกว่า)
    if (bound.end != null || bound.start != null) {
      absoluteMinutes(rows).forEach((row) => {
        if (bound.end != null && row.end > bound.end) overrun[row.key] = 'overrun'
        else if (bound.start != null && row.end > NIGHT_END) overrun[row.key] = 'late'
      })
    }
    return {
      times: Object.fromEntries(rows.map((row) => [row.key, row])),
      span: rows.length ? { start: rows[0].start, end: rows[rows.length - 1].end } : null,
      skipped,
      overrun,
      closed: Boolean(bound.closed),
      late: Boolean(bound.late),
    }
  })
}
