// ระยะทางระหว่าง 2 สถานที่ (กม.) — ไม่มีพิกัด = Infinity
export function distanceKm(a, b) {
  if (a.lat == null || a.lng == null || b.lat == null || b.lng == null) return Infinity
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 6371 * 2 * Math.asin(Math.sqrt(h))
}
