import { useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import AppHeader from '../components/AppHeader'
import SlideLink, { slideNavigate } from '../components/SlideLink'
import PlaceCard from '../components/cards/PlaceCard'
import SwipeStage from '../components/cards/SwipeStage'
import { DeckMessage } from '../components/cards/DeckStates'
import { PRIMARY_BUTTON } from '../components/cards/swipeHelpers'
import { MOODS, PROVINCES } from '../data/options'
import { getPlacesByIds, listPlaces } from '../lib/api/places'
import { tripLength, useTripDraft } from '../context/TripDraftContext'
import { PACES } from '../data/travel'
import { travelOptions } from '../lib/trip/travel'
import { dayCapacities } from '../lib/trip/plan'
import { recordSwipe } from '../lib/api/swipes'

function SwipeSession({ draft, updateDraft, province, provinceLabel, moods }) {
  const reduced = useReducedMotion()
  const navigate = useNavigate()
  const moodKey = moods.join(',')
  const deckKey = draft.deck == null ? null : draft.deck.join(',')
  const sessionKey = `${province}|${moodKey}|${deckKey ?? 'pick'}`
  const { days } = tripLength(draft)
  const travelHours = travelOptions(draft.origin, province).options.find(option => option.id === draft.transportTo)?.hours ?? 0
  const perDay = PACES.find(pace => pace.id === draft.pace)?.perDay ?? 3
  const goal = dayCapacities({ days, perDay, travelHours }).reduce((sum, count) => sum + count, 0)
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState(null)

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
  const total = places?.length ?? 0
  const placeById = useMemo(() => Object.fromEntries((places ?? []).map((p) => [p.id, p])), [places])

  function finish(likedIds) {
    updateDraft({ likedIds })
    slideNavigate(navigate, '/plan/food')
  }

  let fallback = null
  if (current?.error) {
    fallback = (
      <DeckMessage title="โหลดที่เที่ยวไม่สำเร็จ" body="เช็กอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง">
        <motion.button type="button" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={() => setAttempt((a) => a + 1)} className={PRIMARY_BUTTON}>
          ลองใหม่
        </motion.button>
      </DeckMessage>
    )
  } else if (places && !total) {
    fallback = (
      <DeckMessage title="ยังไม่มีที่เที่ยวที่ตรงกับมู้ดนี้" body="ลองเปลี่ยนมู้ดหรืองบดู แล้วมาปัดกันใหม่">
        <SlideLink to="/plan/mood" back replace className={PRIMARY_BUTTON}>
          เลือกมู้ดใหม่
        </SlideLink>
      </DeckMessage>
    )
  }

  const moodLabels = moods.map((id) => MOODS.find((m) => m.id === id)?.label ?? id).join(', ')

  return (
    <SwipeStage
      items={fallback ? null : places}
      fallback={fallback}
      noun="ใบ"
      loadingLabel="กำลังโหลดที่เที่ยว"
      initialState={draft.swipeKey === sessionKey ? draft.swipeState : null}
      onStateChange={(state) => updateDraft({ swipeKey: sessionKey, swipeState: state })}
      onDecide={(place, dir) => recordSwipe(place.id, dir)}
      onDone={finish}
      holoOf={(place) => place.rarity}
      labelOf={(place) => place.name}
      renderCard={(place, rs) => (
        <PlaceCard
          place={place}
          provinceLabel={provinceLabel}
          moodTotal={moods.length}
          recommended={place.id === places[0]?.id}
          likedPlaces={(rs?.liked ?? []).map((id) => placeById[id]).filter(Boolean)}
        />
      )}
      doneTitle="เลือกการ์ดครบแล้ว"
      doneBody={(liked) => `ถูกใจ ${liked} ที่ ไปเลือกร้านอาหารต่อกัน`}
      doneButton="ไปเลือกร้านอาหาร"
      header={
        <AppHeader
          crumb={`${provinceLabel} · ${moodLabels}`}
          title="เลือกที่เที่ยว"
          step={draft.tripType === 'overnight' ? '4 / 6' : '4 / 5'}
          backTo="/plan/details"
        />
      }
      hint={<span className="rounded-full bg-peach px-3 py-1.5 text-brown">อยากได้ ~{goal} ที่</span>}
      finishLabel={(liked) => `ไปต่อเลย${liked ? ` · ถูกใจ ${liked} ที่` : ''}`}
    />
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
    <SwipeSession key={`${draft.province}|${draft.moods.join(',')}|${draft.deck?.join(',') ?? 'pick'}`} draft={draft} updateDraft={updateDraft} province={draft.province} provinceLabel={info.label} moods={draft.moods} />
  )
}
