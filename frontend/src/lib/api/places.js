import { supabase } from '../supabase'

const RARITY_ORDER = { legendary: 0, rare: 1, common: 2 }

/**
 * Place (แถวจากตาราง places):
 * { id, province, name, name_en, district, description, moods: string[], tags: string[],
 *   rarity: 'common'|'rare'|'legendary', stats: { chill, adventure, photo, food, budget } (0-5, budget สูง = ประหยัด),
 *   price_level: 1|2|3|null, price_label, lat, lng, coords_uncertain, popularity, best_time, opening_hours,
 *   booking_hint, image_url, image_credit, image_license, image_page_url, affiliate_url }
 */

// สถานที่ของจังหวัด กรองมู้ด (ตรงอย่างน้อย 1) และงบ (price_level <= budget)
// คืน Place + matchCount (จำนวนมู้ดที่ตรง) เรียง ตรงมาก → หายาก
export async function listPlaces({ province, moods = [], budget = null }) {
  let query = supabase.from('places').select('*').eq('province', province)
  if (moods.length) query = query.overlaps('moods', moods)
  if (budget) query = query.or(`price_level.is.null,price_level.lte.${budget}`)

  const { data, error } = await query
  if (error) throw error

  return data
    .map((p) => ({ ...p, matchCount: p.moods.filter((m) => moods.includes(m)).length }))
    .sort((a, b) => b.matchCount - a.matchCount || RARITY_ORDER[a.rarity] - RARITY_ORDER[b.rarity])
}

// ดึงตาม id คงลำดับตาม ids ที่ส่งมา
export async function getPlacesByIds(ids) {
  if (!ids.length) return []
  const { data, error } = await supabase.from('places').select('*').in('id', ids)
  if (error) throw error
  const byId = Object.fromEntries(data.map((p) => [p.id, p]))
  return ids.map((id) => byId[id]).filter(Boolean)
}

// ทุกสถานที่แบบย่อ — ใช้วาดหมุด/การ์ดจังหวัดบนแผนที่
export async function listAllPlaces() {
  const { data, error } = await supabase.from('places').select('id, province, name, moods, rarity, lat, lng, price_level, best_time, image_url')
  if (error) throw error
  return data
}

// จำนวนสถานที่ต่อจังหวัด { krabi: 5, ... } — จังหวัดที่ไม่มี = หมอกบนแผนที่
export async function countPlacesByProvince() {
  const { data, error } = await supabase.from('places').select('province')
  if (error) throw error
  return data.reduce((acc, { province }) => ({ ...acc, [province]: (acc[province] ?? 0) + 1 }), {})
}
