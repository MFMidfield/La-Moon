import { PROVINCE_CENTERS } from '../../data/provinceCenters'
import {
  AIRPORT_PROVINCES, DAY_TRIP_MAX_KM, NEAREST_AIRPORT, PLANE_MIN_KM, RAIL_HUB, RAIL_PROVINCES, ROAD_FACTOR, TRAVEL,
} from '../../data/travel'

function haversineKm([lat1, lng1], [lat2, lng2]) {
  const toRad = (d) => (d * Math.PI) / 180
  const h = Math.sin(toRad(lat2 - lat1) / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(toRad(lng2 - lng1) / 2) ** 2
  return 6371 * 2 * Math.asin(Math.sqrt(h))
}

// ระยะทางถนนโดยประมาณ (กม.) ระหว่างจังหวัด — จังหวัดเดียวกัน = 0
export function roadKm(fromId, toId) {
  if (!fromId || !toId || fromId === toId) return 0
  const a = PROVINCE_CENTERS[fromId]
  const b = PROVINCE_CENTERS[toId]
  if (!a || !b) return null
  return Math.round(haversineKm(a, b) * ROAD_FACTOR)
}

const round50 = (n) => Math.round(n / 50) * 50
const hasAirport = (id) => AIRPORT_PROVINCES.includes(id) || Boolean(NEAREST_AIRPORT[id])

/**
 * ตัวเลือกพาหนะจาก origin → dest
 * คืน { sameProvince, km, dayTripSuggested, options: [{ id, available, hours, cost: { min, max }, perVehicle, note }] }
 * cost = บาทต่อคนเที่ยวเดียว (car = ต่อคัน perVehicle: true)
 */
export function travelOptions(originId, destId) {
  const km = roadKm(originId, destId)
  if (km === 0) return { sameProvince: true, km: 0, dayTripSuggested: true, options: [] }
  if (km == null) return { sameProvince: false, km: null, dayTripSuggested: false, options: [] }

  const car = { id: 'car', available: true, hours: km / TRAVEL.car.kmh, cost: { min: round50(km * TRAVEL.car.bahtPerKm), max: round50(km * TRAVEL.car.bahtPerKm * 1.2) }, perVehicle: true, note: null }
  const bus = { id: 'bus', available: true, hours: km / TRAVEL.bus.kmh + TRAVEL.bus.extraHours, cost: { min: round50(Math.max(100, km * TRAVEL.bus.bahtPerKm * 0.8)), max: round50(Math.max(150, km * TRAVEL.bus.bahtPerKm * 1.2)) }, perVehicle: false, note: null }

  const originRail = RAIL_PROVINCES.includes(originId) || Boolean(RAIL_HUB[originId])
  const destHub = RAIL_PROVINCES.includes(destId) ? null : RAIL_HUB[destId]
  const trainOk = originRail && (RAIL_PROVINCES.includes(destId) || Boolean(destHub))
  const [tMin, tMax] = TRAVEL.train.bahtPerKm
  const train = {
    id: 'train',
    // ต้องต่อรถจากสถานีกลาง → คุ้มเฉพาะทางไกล
    available: trainOk && km > (destHub || !RAIL_PROVINCES.includes(originId) ? 300 : 100),
    hours: km / TRAVEL.train.kmh + TRAVEL.train.extraHours + (destHub ? 2 : 0),
    cost: { min: round50(km * tMin), max: round50(km * tMax) },
    perVehicle: false,
    note: destHub ? 'รถไฟ + ต่อรถ' : null,
  }

  const planeOk = km >= PLANE_MIN_KM && hasAirport(originId) && hasAirport(destId)
  const [pMin, pMax] = TRAVEL.plane.baht
  const plane = {
    id: 'plane',
    available: planeOk,
    hours: km / ROAD_FACTOR / TRAVEL.plane.flightKmh + TRAVEL.plane.airportHours + (NEAREST_AIRPORT[destId] ? 1.5 : 0),
    cost: { min: pMin, max: round50(Math.min(pMax * 1.5, pMax * (km / 800))) },
    perVehicle: false,
    note: NEAREST_AIRPORT[destId] ? `บินลง${NEAREST_AIRPORT[destId] === 'phuket' ? 'ภูเก็ต' : 'จังหวัดใกล้เคียง'} + ต่อรถ` : null,
  }

  return { sameProvince: false, km, dayTripSuggested: km <= DAY_TRIP_MAX_KM, options: [plane, train, bus, car] }
}

// ข้อความเวลาเดินทาง เช่น "~1 ชม. 20 น."
export function formatHours(hours) {
  const total = Math.round(hours * 6) * 10
  const h = Math.floor(total / 60)
  const m = total % 60
  return `~${h ? `${h} ชม.` : ''}${h && m ? ' ' : ''}${m ? `${m} น.` : ''}`
}
