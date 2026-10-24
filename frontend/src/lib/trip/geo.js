// ระยะทางระหว่าง 2 สถานที่ (กม.) — ไม่มีพิกัด = Infinity
export function distanceKm(a, b) {
  if (a.lat == null || a.lng == null || b.lat == null || b.lng == null) return Infinity
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 6371 * 2 * Math.asin(Math.sqrt(h))
}

// ที่ที่ชอบไว้ที่ใกล้ place ที่สุด → { place, km } | null (ใช้บอกความใกล้บนการ์ดตอนปัด)
export function nearestOf(place, others) {
  let best = null
  for (const o of others) {
    if (o.id === place.id) continue
    const km = distanceKm(place, o)
    if (Number.isFinite(km) && (!best || km < best.km)) best = { place: o, km }
  }
  return best
}
