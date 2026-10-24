import { useCallback, useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useMotionValue } from 'framer-motion'
import AppHeader from '../components/AppHeader'
import SlideLink, { slideNavigate } from '../components/SlideLink'
import SwipeDeck from '../components/cards/SwipeDeck'
import SwipeControls from '../components/cards/SwipeControls'
import { DeckMessage } from '../components/cards/DeckStates'
import { MOODS, PROVINCES } from '../data/options'
import { listPlaces } from '../lib/api/places'
import { recordSwipe } from '../lib/api/swipes'

const PRIMARY_BUTTON =
  'flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-brown text-base font-semibold text-white'

function preload(url) {
  if (!url) return
  const img = new Image()
  img.referrerPolicy = 'no-referrer'
  img.src = url
}

function SwipeSession({ province, provinceLabel, moods, budget }) {
  const navigate = useNavigate()
  const deckRef = useRef(null)
  const dragX = useMotionValue(0)
  const moodKey = moods.join(',')
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState([]) // [{ id, dir }] ตามลำดับที่ปัด
  const [returning, setReturning] = useState(null)

  useEffect(() => {
    let cancelled = false
    listPlaces({ province, moods: moodKey.split(','), budget })
      .then((places) => !cancelled && setResult({ attempt, places }))
      .catch((err) => {
        console.error('load places failed', err)
        if (!cancelled) setResult({ attempt, error: true })
      })
    return () => {
      cancelled = true
    }
  }, [province, moodKey, budget, attempt])

  const current = result?.attempt === attempt ? result : null
  const places = current?.places ?? null
  const index = history.length
  const total = places?.length ?? 0
  const likedIds = history.filter((s) => s.dir === 1).map((s) => s.id)

  useEffect(() => {
    preload(places?.[index + 2]?.image_url)
  }, [places, index])

  const finish = useCallback(
    (steps) => {
      slideNavigate(navigate, `/map/${province}/trip`, {
        state: { likedIds: steps.filter((s) => s.dir === 1).map((s) => s.id), moods: moodKey.split(','), budget },
      })
    },
    [navigate, province, moodKey, budget],
  )

  function handleSwiped(dir) {
    const place = places[index]
    if (!place) return
    recordSwipe(place.id, dir === 1 ? 'right' : 'left')
    const steps = [...history, { id: place.id, dir }]
    setHistory(steps)
    setReturning(null)
    if (steps.length >= places.length) finish(steps)
  }

  function undo() {
    if (!history.length || deckRef.current?.busy()) return
    setReturning(history.at(-1))
    setHistory(history.slice(0, -1))
  }

  const actions = useRef(null)
  useEffect(() => {
    actions.current = { swipe: (dir) => deckRef.current?.swipe(dir), undo }
  })

  useEffect(() => {
    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
      if (e.target.closest?.('input, textarea, select, [contenteditable="true"]')) return
      const act = actions.current
      if (!act) return
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        act.swipe(e.key === 'ArrowRight' ? 1 : -1)
      } else if (e.key === 'Backspace' || e.key === 'z' || e.key === 'Z') {
        e.preventDefault()
        act.undo()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const moodLabels = moods.map((id) => MOODS.find((m) => m.id === id)?.label ?? id).join(', ')
  const swipe = (dir) => deckRef.current?.swipe(dir)

  let body
  if (current?.error) {
    body = (
      <DeckMessage title="โหลดที่เที่ยวไม่สำเร็จ" body="เช็กอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง">
        <button type="button" onClick={() => setAttempt((a) => a + 1)} className={PRIMARY_BUTTON}>
          ลองใหม่
        </button>
      </DeckMessage>
    )
  } else if (places && !total) {
    body = (
      <DeckMessage title="ยังไม่มีที่เที่ยวที่ตรงกับมู้ดนี้" body="ลองเปลี่ยนมู้ดหรืองบดู แล้วมาปัดกันใหม่">
        <SlideLink to={`/map/${province}/mood`} back replace className={PRIMARY_BUTTON}>
          เลือกมู้ดใหม่
        </SlideLink>
      </DeckMessage>
    )
  } else {
    body = (
      <>
        <SwipeDeck
          ref={deckRef}
          places={places}
          index={index}
          returning={returning}
          dragX={dragX}
          onSwiped={handleSwiped}
          provinceLabel={provinceLabel}
          moodTotal={moods.length}
        />

        <SwipeControls
          dragX={dragX}
          onSkip={() => swipe(-1)}
          onUndo={undo}
          onLike={() => swipe(1)}
          canUndo={history.length > 0}
          disabled={!places || index >= total}
        />

        <div className="flex h-11 shrink-0 items-center justify-center">
          <button
            type="button"
            onClick={() => !deckRef.current?.busy() && finish(history)}
            tabIndex={likedIds.length ? 0 : -1}
            aria-hidden={likedIds.length ? undefined : true}
            className={`h-11 cursor-pointer px-4 text-sm font-semibold text-brown transition-opacity duration-300 ${
              likedIds.length ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            สรุปทริปเลย ›
          </button>
        </div>
        <div className="h-4 shrink-0" />
      </>
    )
  }

  return (
    <div className="min-h-svh overflow-x-clip bg-cream">
      <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col text-ink">
        <AppHeader
          crumb={`${provinceLabel} · ${moodLabels}`}
          title="เลือกที่เที่ยว"
          step={total ? `${Math.min(index + 1, total)} / ${total}` : undefined}
          backTo={`/map/${province}/mood`}
        />
        {body}
      </div>
    </div>
  )
}

// /map/:province/swipe?moods=beach,food&budget=2
export default function Swipe() {
  const { province } = useParams()
  const [params] = useSearchParams()

  const info = PROVINCES.find((p) => p.id === province)
  if (!info) return <Navigate to="/map" replace />

  const moods = (params.get('moods') ?? '').split(',').filter((id) => MOODS.some((m) => m.id === id))
  if (!moods.length) return <Navigate to={`/map/${province}/mood`} replace />

  const rawBudget = Number(params.get('budget'))
  const budget = [1, 2, 3].includes(rawBudget) ? rawBudget : null

  return (
    <SwipeSession
      key={`${province}|${moods.join(',')}|${budget}`}
      province={province}
      provinceLabel={info.label}
      moods={moods}
      budget={budget}
    />
  )
}
