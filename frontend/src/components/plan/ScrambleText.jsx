import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useTripDraft } from '../../context/TripDraftContext'
import { isCurrentRoll } from './rollReveal'

const segmenter = new Intl.Segmenter('th', { granularity: 'grapheme' })
const thai = [...'กขคฆงจฉชซญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ']
const latin = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789']

export default function ScrambleText({ text, revealKey, delay = 0, duration = 700, play = true, className = '' }) {
  const { draft, updateDraft } = useTripDraft()
  const reduced = useReducedMotion()
  const value = String(text ?? '')
  const clusters = useMemo(() => [...segmenter.segment(value)].map(({ segment }) => segment), [value])
  const [frame, setFrame] = useState(null)
  // Claiming the reveal updates the draft; keep this mount's playback unchanged.
  const [reveal] = useState(() => {
    const eligible = Boolean(revealKey && isCurrentRoll(draft.rollId) && !draft.revealed?.includes(revealKey))
    return { value, clusters, delay, duration, rollId: draft.rollId, revealKey, eligible, animate: eligible && play && !reduced }
  })

  useEffect(() => {
    if (!reveal.eligible) return
    updateDraft(current => current.rollId === reveal.rollId && !current.revealed?.includes(reveal.revealKey)
      ? { revealed: [...(current.revealed ?? []), reveal.revealKey] }
      : {})
  }, [reveal, updateDraft])

  useEffect(() => {
    if (!reveal.animate) return
    const { value, clusters, delay, duration } = reveal
    let raf
    let start
    let last = -1
    function tick(now) {
      start ??= now
      const elapsed = now - start - delay
      const step = Math.floor(Math.max(0, elapsed) / 45)
      if (step !== last || elapsed >= duration) {
        last = step
        const settled = Math.floor(Math.max(0, elapsed) / Math.max(1, duration) * clusters.length)
        setFrame({ value, chars: clusters.map((cluster, i) => {
          if (i < settled || !cluster.trim()) return cluster
          const pool = /[ก-๙]/u.test(cluster) ? thai : latin
          return pool[Math.floor(Math.random() * pool.length)]
        }) })
      }
      if (elapsed < duration) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reveal])

  const chars = play && !reduced && draft.rollId === reveal.rollId && frame?.value === value ? frame.chars : clusters
  return (
    <span aria-label={value} className={className}>
      <span aria-hidden="true">
        {clusters.map((cluster, i) => (
          <span key={i} className="relative inline-block whitespace-pre align-baseline">
            <span className="invisible">{cluster}</span>
            <span className="absolute inset-0 text-center">{chars[i]}</span>
          </span>
        ))}
      </span>
    </span>
  )
}
