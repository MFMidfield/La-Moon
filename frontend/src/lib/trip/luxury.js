// มู้ด luxury = ดันของระดับพรีเมียมขึ้นก่อน (ไม่มีสถานที่ไหนติดมู้ดนี้ในข้อมูล)
export const isLuxury = (moods = []) => moods.includes('luxury')

const RARITY_SCORE = { legendary: 2, rare: 1, common: 0 }

// คะแนนพรีเมียม 0..~5 ใช้เรียง (สูง = พรีเมียมกว่า)
export function premiumScore(item) {
  if (!item) return 0
  if (item.tier) return { comfy: 3, mid: 1, saver: 0 }[item.tier] ?? 0 // ที่พัก
  if (item.price_per_person) return Math.min(4, (item.price_per_person.max ?? 0) / 250) // ร้าน
  return (RARITY_SCORE[item.rarity] ?? 0) + (item.price_level === 3 ? 2 : item.price_level === 2 ? 1 : 0) + ((item.entry_fee_max ?? 0) >= 500 ? 1 : 0)
}

// เรียงให้พรีเมียมขึ้นก่อนเมื่อเลือก luxury, ไม่งั้นคืนลำดับเดิม
export function sortForMoods(list, moods) {
  if (!isLuxury(moods)) return list
  return [...list].sort((a, b) => premiumScore(b) - premiumScore(a))
}
