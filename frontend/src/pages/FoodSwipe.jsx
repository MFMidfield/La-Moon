import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import RestaurantCard from '../components/cards/RestaurantCard'
import SwipeStage from '../components/cards/SwipeStage'
import { DeckMessage } from '../components/cards/DeckStates'
import { byDistance, centroid, distanceTo, PRIMARY_BUTTON } from '../components/cards/swipeHelpers'
import { PROVINCES } from '../data/options'
import { useTripDraft } from '../context/TripDraftContext'
import { getPlacesByIds } from '../lib/api/places'
import { listRestaurants } from '../lib/api/restaurants'
import { sortForMoods } from '../lib/trip/luxury'

// เรียง: มู้ดตรงมากก่อน แล้วใกล้ที่เที่ยวที่ถูกใจก่อน ; มู้ด luxury = ร้านพรีเมียมขึ้นก่อน (เรียงซ้ำแบบ stable)
function orderRestaurants(list, moods, center) {
  const ordered = list
    .map((r) => ({
      r,
      match: (r.moods ?? []).filter((m) => moods.includes(m)).length,
      dist: distanceTo(center, r),
    }))
    .sort((a, b) => b.match - a.match || byDistance(a.dist, b.dist))
    .map(({ r }) => r)
  return sortForMoods(ordered, moods)
}

function FoodSession({ draft, updateDraft, province, provinceLabel, moods }) {
  const reduced = useReducedMotion()
  const navigate = useNavigate()
  const likedKey = draft.likedIds.join(',')
  const moodKey = moods.join(',')
  const sessionKey = `${province}|${moodKey}|${likedKey}`
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState(null)

  useEffect(() => {
    let cancelled = false
    const likedIds = likedKey.split(',').filter(Boolean)
    Promise.all([
      listRestaurants({ province }),
      getPlacesByIds(likedIds).catch((err) => {
        console.error('load liked places failed', err)
        return []
      }),
    ])
      .then(([restaurants, liked]) => {
        if (cancelled) return
        setResult({ attempt, restaurants: orderRestaurants(restaurants, moodKey.split(',').filter(Boolean), centroid(liked)) })
      })
      .catch((err) => {
        console.error('load restaurants failed', err)
        if (!cancelled) setResult({ attempt, error: true })
      })
    return () => {
      cancelled = true
    }
  }, [province, moodKey, likedKey, attempt])

  const current = result?.attempt === attempt ? result : null
  const restaurants = current?.restaurants ?? null
  const overnight = draft.tripType === 'overnight'
  const next = overnight ? '/plan/stay' : '/plan/trip'

  function finish(likedRestaurantIds) {
    updateDraft({ likedRestaurantIds })
    slideNavigate(navigate, next)
  }

  let fallback = null
  if (current?.error) {
    fallback = (
      <DeckMessage title="โหลดร้านอาหารไม่สำเร็จ" body="เช็กอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง">
        <motion.button type="button" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={() => setAttempt((a) => a + 1)} className={PRIMARY_BUTTON}>
          ลองใหม่
        </motion.button>
      </DeckMessage>
    )
  } else if (restaurants && !restaurants.length) {
    fallback = (
      <DeckMessage title="ยังไม่มีร้านอาหารในจังหวัดนี้" body="ข้ามขั้นนี้ไปก่อน ระบบจะแนะนำมื้ออาหารให้ในแผนทริป">
        <motion.button type="button" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={() => finish([])} className={PRIMARY_BUTTON}>
          ไปต่อ
        </motion.button>
      </DeckMessage>
    )
  }

  return (
    <SwipeStage
      items={fallback ? null : restaurants}
      fallback={fallback}
      noun="ร้าน"
      likeLabel="อยากกิน"
      loadingLabel="กำลังโหลดร้านอาหาร"
      initialState={draft.foodKey === sessionKey ? draft.foodState : null}
      onStateChange={(state) => updateDraft({ foodKey: sessionKey, foodState: state })}
      onDone={finish}
      labelOf={(r) => r.name}
      renderCard={(r) => <RestaurantCard restaurant={r} />}
      doneTitle="เลือกร้านครบแล้ว"
      doneBody={(liked) => `ถูกใจ ${liked} ร้าน ${overnight ? 'ไปเลือกที่พักต่อกัน' : 'พร้อมจัดทริปให้คุณ'}`}
      doneButton={overnight ? 'ไปเลือกที่พัก' : 'สรุปทริปเลย'}
      header={
        <AppHeader
          crumb={provinceLabel}
          title="เลือกร้านอาหาร"
          step={overnight ? '5 / 6' : '5 / 5'}
          backTo="/plan/swipe"
        />
      }
      hint="ปัดขึ้นเก็บไว้ก่อน ปัดขวาถ้าอยากกิน"
      finishLabel={(liked) => `สรุปเลย${liked ? ` · ถูกใจ ${liked} ร้าน` : ''}`}
    />
  )
}

// A new session starts when the province, moods or liked places change.
export default function FoodSwipe() {
  const { draft, updateDraft } = useTripDraft()
  const info = PROVINCES.find((p) => p.id === draft.province)
  if (!info) return <Navigate to="/map" replace />
  if (!draft.moods.length) return <Navigate to="/plan/mood" replace />
  return (
    <FoodSession
      key={`${draft.province}|${draft.moods.join(',')}|${draft.likedIds.join(',')}`}
      draft={draft}
      updateDraft={updateDraft}
      province={draft.province}
      provinceLabel={info.label}
      moods={draft.moods}
    />
  )
}
