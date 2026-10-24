import { ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { motion, MotionConfig, useMotionValue, useReducedMotion } from 'framer-motion'
import AppHeader from '../components/AppHeader'
import SlideLink, { slideNavigate } from '../components/SlideLink'
import SwipeDeck from '../components/cards/SwipeDeck'
import SwipeControls from '../components/cards/SwipeControls'
import { DeckMessage } from '../components/cards/DeckStates'
import { MOODS, PROVINCES } from '../data/options'
import { getPlacesByIds, listPlaces } from '../lib/api/places'
import { tripLength, useTripDraft } from '../context/TripDraftContext'
import { PACES } from '../data/travel'
import { travelOptions } from '../lib/trip/travel'
import { dayCapacities } from '../lib/trip/plan'
import { recordSwipe } from '../lib/api/swipes'

const PRIMARY_BUTTON =
  'flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-brown text-base font-semibold text-white'

function preload(url) {
  if (!url) return
  const img = new Image()
  img.referrerPolicy = 'no-referrer'
  img.src = url
}

function SwipeSession({ draft, updateDraft, province, provinceLabel, moods }) {
  const reduced = useReducedMotion()
  const navigate = useNavigate()
  const deckRef = useRef(null)
  const dragX = useMotionValue(0)
  const moodKey = moods.join(',')
  const deckKey = draft.deck == null ? null : draft.deck.join(',')
  const sessionKey = `${province}|${moodKey}|${deckKey ?? 'pick'}`
  const { days } = tripLength(draft)
  const travelHours = travelOptions(draft.origin, province).options.find(option => option.id === draft.transportTo)?.hours ?? 0
  const perDay = PACES.find(pace => pace.id === draft.pace)?.perDay ?? 3
  const goal = dayCapacities({ days, perDay, travelHours }).reduce((sum, count) => sum + count, 0)
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState(() => draft.swipeKey === sessionKey ? draft.swipeHistory ?? [] : [])
  const [returning, setReturning] = useState(null)

  useEffect(() => {
    let cancelled = false
    const request = deckKey == null ? listPlaces({ province, moods: moodKey.split(',').filter(Boolean) }) : getPlacesByIds(deckKey.split(',').filter(Boolean))
    request.then((places) => !cancelled && setResult({ attempt, places: places.map(place => ({ ...place, matchCount: (place.moods ?? []).filter(mood => moodKey.split(',').includes(mood)).length })) }))
      .catch((err) => {
        console.error('load places failed', err)
        if (!cancelled) setResult({ attempt, error: true })
      })
    return () => {
      cancelled = true
    }
  }, [province, moodKey, deckKey, attempt])

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
      updateDraft({ likedIds: steps.filter((step) => step.dir === 1).map((step) => step.id) })
      slideNavigate(navigate, '/plan/trip')
    },
    [navigate, updateDraft],
  )

  function handleSwiped(dir) {
    const place = places[index]
    if (!place) return
    recordSwipe(place.id, dir === 1 ? 'right' : 'left')
    const steps = [...history, { id: place.id, dir }]
    setHistory(steps)
    updateDraft({ swipeKey: sessionKey, swipeHistory: steps })
    setReturning(null)
    if (steps.length >= places.length) finish(steps)
  }

  function undo() {
    if (!history.length || deckRef.current?.busy()) return
    setReturning(history.at(-1))
    const steps = history.slice(0, -1)
    setHistory(steps)
    updateDraft({ swipeKey: sessionKey, swipeHistory: steps })
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
        <motion.button type="button" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={() => setAttempt((a) => a + 1)} className={PRIMARY_BUTTON}>
          ลองใหม่
        </motion.button>
      </DeckMessage>
    )
  } else if (places && !total) {
    body = (
      <DeckMessage title="ยังไม่มีที่เที่ยวที่ตรงกับมู้ดนี้" body="ลองเปลี่ยนมู้ดหรืองบดู แล้วมาปัดกันใหม่">
        <SlideLink to="/plan/mood" back replace className={PRIMARY_BUTTON}>
          เลือกมู้ดใหม่
        </SlideLink>
      </DeckMessage>
    )
  } else if (places && index >= total) {
    body = (
      <DeckMessage title="เลือกการ์ดครบแล้ว" body={`ถูกใจ ${likedIds.length} ที่ พร้อมจัดทริปให้คุณ`}>
        <motion.button type="button" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={() => finish(history)} className={PRIMARY_BUTTON}>สรุปทริปเลย</motion.button>
        <motion.button type="button" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={undo} className="mt-2 h-11 w-full rounded-full bg-white text-sm font-semibold text-brown transition-colors duration-200 motion-reduce:transition-none">ย้อนการ์ดก่อนหน้า</motion.button>
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

        <div className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[560px] bg-cream pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-[linear-gradient(to_top,var(--color-cream),transparent)]" />
          <SwipeControls
            dragX={dragX}
            onSkip={() => swipe(-1)}
            onUndo={undo}
            onLike={() => swipe(1)}
            canUndo={history.length > 0}
            disabled={!places || index >= total}
          />

          <div className="flex h-11 shrink-0 items-center justify-center">
            <motion.button
              whileTap={reduced ? undefined : { scale: 0.96 }}
              transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 450, damping: 28 }}
              type="button"
              onClick={() => !deckRef.current?.busy() && finish(history)}
              disabled={!places || !total}
              className="flex h-11 cursor-pointer items-center gap-1 px-4 text-sm font-semibold text-brown transition-colors duration-200 disabled:opacity-30"
            >
              สรุปทริปเลย{likedIds.length ? ` · ถูกใจ ${likedIds.length} ที่` : ''} <ChevronRight size={17} strokeWidth={2} aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-svh overflow-x-clip bg-cream">
      <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col pb-[calc(11rem+env(safe-area-inset-bottom))] text-ink">
        <AppHeader
          crumb={`${provinceLabel} · ${moodLabels}`}
          title="เลือกที่เที่ยว"
          step="4 / 4"
          backTo="/plan/details"
        />
        <div className="flex items-center justify-between px-[22px] py-2 text-xs text-muted"><span className="rounded-full bg-peach px-3 py-1.5 text-brown">อยากได้ ~{goal} ที่</span><span aria-live="polite">{total ? `${Math.min(index + 1, total)} / ${total} ใบ` : 'กำลังเตรียมการ์ด…'}</span></div>
        {body}
      </div>
    </div>
  )
}

// A new session starts when the province, mood selection or generated deck changes.
export default function Swipe() {
  const { draft, updateDraft } = useTripDraft()
  const info = PROVINCES.find(p => p.id === draft.province)
  if (!info) return <Navigate to="/map" replace />
  if (!draft.moods.length) return <Navigate to="/plan/mood" replace />
  if (!draft.origin || !draft.startDate || !draft.endDate) return <Navigate to="/plan/details" replace />
  return (
    <MotionConfig reducedMotion="user">
      <SwipeSession key={`${draft.province}|${draft.moods.join(',')}|${draft.deck?.join(',') ?? 'pick'}`} draft={draft} updateDraft={updateDraft} province={draft.province} provinceLabel={info.label} moods={draft.moods} />
    </MotionConfig>
  )
}
