import { supabase } from '../supabase'

/**
 * Trip (แถวจากตาราง trips):
 * { id, user_id, province, moods: string[], days: jsonb, combos: string[], personality, created_at,
 *   start_date, end_date ('YYYY-MM-DD'), nights, trip_type ('daytrip'|'overnight'),
 *   travelers: { adults, children }, budget: { min, max, per }, origin, transport_to, transport_local,
 *   pace, estimate: jsonb (ผล estimateTrip), is_random, spare: string[] (place id กองสำรอง) }
 * days (แบบใหม่): [{ items: [{ place: placeId, slot: 'morning'|'afternoon'|'evening', auto: boolean }] }]
 *   (แถวเก่ายังเป็น string[][] — ฝั่งอ่านต้องรองรับทั้งสองแบบ)
 */

// trip: object ตามคอลัมน์ด้านบน (ไม่ต้องใส่ id/user_id/created_at)
export async function createTrip(trip) {
  const { data, error } = await supabase.from('trips').insert(trip).select().single()
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
