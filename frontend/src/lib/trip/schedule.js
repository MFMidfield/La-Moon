import { distanceKm } from './geo'

// เวลาเริ่มวันเริ่มต้น และค่าประมาณ
export const DAY_START = 9 * 60
const DEFAULT_VISIT = 90
const MEAL_MINUTES = { breakfast: 45, lunch: 60, dinner: 75 }
const CITY_KMH = 30

export const toMinutes = (hhmm) => {
  const [h, m] = String(hhmm).split(':').map(Number)
  return h * 60 + (m || 0)
}
export const toHHMM = (min) => `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(Math.round(min % 60)).padStart(2, '0')}`

// เวลาเดินทางระหว่างจุด (นาที) ขั้นต่ำ 10 ถ้าไม่มีพิกัดใช้ 20
export function travelMinutes(a, b) {
  const km = a && b ? distanceKm(a, b) : Infinity
  return Number.isFinite(km) ? Math.max(10, Math.round((km * 1.3 / CITY_KMH) * 60)) : 20
}

/**
 * คำนวณเวลาของวัน
 * stops: [{ key, kind: 'place'|'meal', point: {lat,lng}|null, minutes? , meal? }] เรียงตามลำดับในวัน
 * overrides: { [key]: 'HH:MM' } เวลาเริ่มที่ผู้ใช้แก้ — จุดถัดไปเลื่อนตาม
 * คืน [{ key, start, end, travelBefore }] (start/end เป็น 'HH:MM')
 */
export function scheduleDay(stops, { start = DAY_START, overrides = {} } = {}) {
  let clock = start
  let prev = null
  return stops.map((stop) => {
    const travel = prev ? travelMinutes(prev.point, stop.point) : 0
    clock += travel
    if (overrides[stop.key]) clock = Math.max(toMinutes(overrides[stop.key]), prev ? clock - travel : 0)
    const minutes = stop.minutes ?? (stop.kind === 'meal' ? MEAL_MINUTES[stop.meal] ?? 60 : DEFAULT_VISIT)
    const out = { key: stop.key, start: toHHMM(clock), end: toHHMM(clock + minutes), travelBefore: travel }
    clock += minutes
    prev = stop
    return out
  })
}
