import { toHHMM, toMinutes } from '../../lib/trip/schedule'
import { travelOptions } from '../../lib/trip/travel'

// เผื่อเวลาก่อนออกเดินทางกลับ (นาที): เครื่องบินต้องไปสนามบินล่วงหน้า
export const RETURN_BUFFER = { plane: 120, train: 45, bus: 45 }
const DEFAULT_TRANSFER = 60
// เริ่มวันแรกหลังเวลานี้ = ไม่มีเวลาเที่ยว (เหลือแค่มื้อเย็นถ้ายังไม่เกินเวลาตัด)
const LATE_START = 21 * 60
const DINNER_CUTOFF = 22 * 60

const mid = ({ min, max }) => (min + max) / 2

/**
 * เที่ยวเดินทางไป-กลับของทริปค้างคืน → { mode, out, back } | null (ทริปวันเดียว / ไม่เดินทางข้ามจังหวัด)
 * booking = draft.transportBooking ({ out, back }); ขับรถเอง (car) สร้างขาไปจาก carDepart + เวลาขับ (travelOptions)
 * แต่ละ leg เพิ่ม from/to (province id) ไว้ทำลิงก์จอง
 */
export function buildLegs({ transportTo, origin, province, booking, carDepart }) {
  // ไปกลับวันเดียวก็มีขาไป-กลับได้ (จังหวัดใกล้); ในจังหวัดตัวเอง transportTo = null → ไม่มี
  if (!transportTo) return null
  if (transportTo === 'car') {
    const hours = travelOptions(origin, province).options.find(option => option.id === 'car')?.hours ?? null
    const depart = carDepart || '06:00'
    const total = hours == null ? null : toMinutes(depart) + Math.round(hours * 60)
    return {
      mode: 'car',
      out: { mode: 'car', depart, arrive: total == null ? null : toHHMM(total), arrive_next_day: total != null && total >= 1440, hours, from: origin, to: province, transfer: null },
      back: { mode: 'car', depart: null, arrive: null, hours, from: province, to: origin, transfer: null },
    }
  }
  const leg = (value, from, to) => (value ? { ...value, mode: value.mode ?? transportTo, from, to } : null)
  return { mode: transportTo, out: leg(booking?.out, origin, province), back: leg(booking?.back, province, origin) }
}

/**
 * ขอบเขตเวลาต่อวันจากเที่ยวเดินทาง → [{ start?, end?, closed?, late?, dinner? }] (นาที)
 * - start: เวลาถึง + เวลาเข้าเมือง (default 60; รถเอง +0) · เที่ยวที่ถึงวันถัดไป = วันแรกปิด วันที่ 2 เริ่มตามเวลาถึง
 * - late: เริ่มหลัง 21:00 → ไม่มีที่เที่ยว (dinner = ยังกินมื้อเย็นได้)
 * - end: วันสุดท้ายต้องจบก่อนเวลาออกเที่ยวกลับ − เผื่อเวลา
 */
export function legBounds(legs, dayCount) {
  const bounds = Array.from({ length: dayCount }, () => ({}))
  if (!legs || !dayCount) return bounds
  const { out, back } = legs
  if (out?.arrive) {
    let day = 0
    if (out.arrive_next_day && dayCount > 1) {
      bounds[0] = { closed: true }
      day = 1
    }
    const start = toMinutes(out.arrive) + (out.mode === 'car' ? 0 : out.transfer?.to_city_minutes ?? DEFAULT_TRANSFER)
    bounds[day] = start >= LATE_START ? { start, late: true, dinner: start < DINNER_CUTOFF } : { start }
  }
  if (back?.depart && RETURN_BUFFER[back.mode] != null) {
    const last = dayCount - 1
    bounds[last] = { ...bounds[last], end: toMinutes(back.depart) - RETURN_BUFFER[back.mode], returnDepart: back.depart }
  }
  return bounds
}

/** ค่าเดินทางตามเที่ยวที่เลือก (บาท ทั้งกลุ่ม) — ต้องเลือกครบทั้งไปและกลับ (รถเอง = null ใช้ค่าประมาณเดิม) */
export function legsTransportAmount(legs, people) {
  if (!legs?.out || !legs.back || legs.mode === 'car' || !legs.out.price_thb || !legs.back.price_thb) return null
  return (mid(legs.out.price_thb) + mid(legs.back.price_thb)) * people
}

/** ใส่ค่าเดินทางตามเที่ยวลงในผล estimateTrip (ไม่แก้ตัวเดิม) */
export function applyLegsTransport(estimate, amount, people) {
  if (amount == null) return estimate
  const transport = Math.round(amount)
  const total = estimate.total - estimate.transport + transport
  return { ...estimate, transport, total, perPerson: Math.round(total / people), over: Math.max(0, total - estimate.budget), transportFromLegs: true }
}

/** รูปที่เก็บใน estimate.transportBooking (jsonb เดิม ไม่ต้องแก้ DB) */
export function serializeLegs(legs, draft) {
  if (!legs) return null
  return { out: draft.transportBooking?.out ?? null, back: draft.transportBooking?.back ?? null, carDepart: draft.carDepart ?? '06:00' }
}
