// Persist the roll in the draft, but never replay it in a refreshed document.
const documentId = String(performance.timeOrigin)
let sequence = 0

export function createRollReveal() {
  return { rollId: `${documentId}:${Date.now()}:${++sequence}`, revealed: [] }
}

export function isCurrentRoll(rollId) {
  return typeof rollId === 'string' && rollId.startsWith(`${documentId}:`)
}
