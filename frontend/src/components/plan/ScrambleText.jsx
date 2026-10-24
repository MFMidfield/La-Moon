import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const segmenter = new Intl.Segmenter('th', { granularity: 'grapheme' })
const thai = [...'กขคฆงจฉชซญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ']
const latin = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789']

export default function ScrambleText({ text, delay = 0, duration = 700, play = true, className = '' }) {
  const reduced = useReducedMotion()
  const value = String(text ?? '')
  const clusters = useMemo(() => [...segmenter.segment(value)].map(({ segment }) => segment), [value])
  const [frame, setFrame] = useState(null)

  useEffect(() => {
    if (!play || reduced) return
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
  }, [value, clusters, delay, duration, play, reduced])

  const chars = play && !reduced && frame?.value === value ? frame.chars : clusters
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
