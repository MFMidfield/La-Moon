import { supabase } from '../supabase'

/**
 * Trip (แถวจากตาราง trips):
 * { id, user_id, province, moods: string[], budget: 1|2|3|null,
 *   days: string[][] (place id แยกตามวัน), combos: string[] (combo id),
 *   personality: string|null (personality id), created_at }
 */

export async function createTrip({ province, moods, budget, days, combos, personality }) {
  const { data, error } = await supabase
    .from('trips')
    .insert({ province, moods, budget, days, combos, personality })
    .select()
    .single()
  if (error) throw error
  return data
}

// ทริปของฉัน ใหม่สุดก่อน
export async function listMyTrips() {
  const { data, error } = await supabase.from('trips').select('*').order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getTrip(id) {
  const { data, error } = await supabase.from('trips').select('*').eq('id', id).maybeSingle()
  if (error) throw error
  return data
}

export async function deleteTrip(id) {
  const { error } = await supabase.from('trips').delete().eq('id', id)
  if (error) throw error
}
