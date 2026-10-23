import { distanceKm } from './geo'

export const PLACES_PER_DAY = 3

// เรียงแบบไปที่ใกล้สุดถัดไป (nearest neighbor) เริ่มจากใบแรก แล้วแบ่งวันละ 3 ที่
// places: Place[] → Place[][] ; สถานที่ไม่มีพิกัดไปต่อท้าย
export function planDays(places, perDay = PLACES_PER_DAY) {
  const located = places.filter((p) => p.lat != null && p.lng != null)
  const unlocated = places.filter((p) => p.lat == null || p.lng == null)

  const ordered = []
  const rest = [...located]
  let current = rest.shift()
  while (current) {
    ordered.push(current)
    if (!rest.length) break
    let nearest = 0
    rest.forEach((p, i) => {
      if (distanceKm(current, p) < distanceKm(current, rest[nearest])) nearest = i
    })
    current = rest.splice(nearest, 1)[0]
  }

  const all = [...ordered, ...unlocated]
  const days = []
  for (let i = 0; i < all.length; i += perDay) days.push(all.slice(i, i + perDay))
  return days
}
