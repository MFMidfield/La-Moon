import { MOODS } from '../../data/options'

/**
 * บุคลิกการเที่ยวจากสถานที่ที่ปัดขวา
 * คืน { id: mood id (key ของ PERSONALITIES), breakdown: { mood, percent }[] } หรือ null ถ้ายังไม่มีข้อมูล
 * breakdown เรียงมาก → น้อย, percent รวมกัน = 100
 */
export function computePersonality(places) {
  const counts = {}
  places.forEach((p) => p.moods.forEach((m) => (counts[m] = (counts[m] ?? 0) + 1)))
  const total = Object.values(counts).reduce((a, b) => a + b, 0)
  if (!total) return null

  // เสมอกัน → ตามลำดับ MOODS
  const order = MOODS.map((m) => m.id)
  const ranked = Object.entries(counts).sort((a, b) => b[1] - a[1] || order.indexOf(a[0]) - order.indexOf(b[0]))

  const breakdown = ranked.map(([mood, n]) => ({ mood, percent: Math.round((n / total) * 100) }))
  // ปัดเศษให้รวม 100
  breakdown[0].percent += 100 - breakdown.reduce((a, b) => a + b.percent, 0)

  return { id: ranked[0][0], breakdown }
}
