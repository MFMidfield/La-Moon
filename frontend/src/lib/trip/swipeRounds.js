/**
 * กติกาปัดทุกหมวด: right = ชอบ, left = ข้าม, up = เก็บไว้ก่อน
 * ปัดจนหมดกอง → ถ้ามีที่เก็บไว้ เข้ารอบ 2 (กองใหม่ = ที่เก็บไว้, ปัดขึ้นไม่ได้แล้ว)
 * state: { round: 1|2, queue: id[], index, liked: id[], skipped: id[], saved: id[], history: [{ id, dir, round }] }
 */
export function createRounds(ids) {
  return { round: 1, queue: [...ids], index: 0, liked: [], skipped: [], saved: [], history: [] }
}

export const currentId = (s) => s.queue[s.index] ?? null
export const canSave = (s) => s.round === 1
export const isDone = (s) => s.index >= s.queue.length && (s.round === 2 || s.saved.length === 0)
// จบรอบ 1 พอดีและมีที่เก็บไว้ → หน้าควรโชว์ช่วงเปลี่ยนรอบ แล้วเรียก startRound2
export const needsRound2 = (s) => s.round === 1 && s.index >= s.queue.length && s.saved.length > 0

export function applySwipe(s, dir) {
  const id = currentId(s)
  if (!id || (dir === 'up' && !canSave(s))) return s
  const next = { ...s, index: s.index + 1, history: [...s.history, { id, dir, round: s.round }] }
  if (dir === 'right') next.liked = [...s.liked, id]
  else if (dir === 'left') next.skipped = [...s.skipped, id]
  else next.saved = [...s.saved, id]
  return next
}

export function startRound2(s) {
  return { ...s, round: 2, queue: [...s.saved], index: 0, saved: [] }
}

// ย้อนได้เฉพาะในรอบปัจจุบัน
export function undoSwipe(s) {
  const last = s.history[s.history.length - 1]
  if (!last || last.round !== s.round || s.index === 0) return s
  const drop = (list) => list.filter((id) => id !== last.id)
  return {
    ...s,
    index: s.index - 1,
    history: s.history.slice(0, -1),
    liked: last.dir === 'right' ? drop(s.liked) : s.liked,
    skipped: last.dir === 'left' ? drop(s.skipped) : s.skipped,
    saved: last.dir === 'up' ? drop(s.saved) : s.saved,
  }
}
