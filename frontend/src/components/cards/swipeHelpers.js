import { distanceKm } from '../../lib/trip/geo'

// จุดกึ่งกลางของสถานที่ที่มีพิกัด (null = ไม่มีพิกัดเลย)
export function centroid(places) {
  const pts = places.filter((p) => p?.lat != null && p?.lng != null)
  if (!pts.length) return null
  return {
    lat: pts.reduce((s, p) => s + p.lat, 0) / pts.length,
    lng: pts.reduce((s, p) => s + p.lng, 0) / pts.length,
  }
}

// ระยะถึงจุดศูนย์กลาง (กม.) — ไม่มีจุดหรือไม่มีพิกัด = null
export function distanceTo(center, item) {
  if (!center) return null
  const d = distanceKm(center, item)
  return Number.isFinite(d) ? d : null
}

// เปรียบเทียบระยะ: ไม่รู้ระยะ = ไปท้าย (NaN จาก Infinity-Infinity นับเป็นเท่ากัน)
export const byDistance = (a, b) => (a ?? Infinity) - (b ?? Infinity) || 0

export const PRIMARY_BUTTON =
  'flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-brown text-base font-semibold text-white'

// 1234 → "1.2k"
export const fmtCount = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n ?? 0))

// { min, max } → "60–120"
export const fmtRange = (range) => `${range.min.toLocaleString('th-TH')}–${range.max.toLocaleString('th-TH')}`
