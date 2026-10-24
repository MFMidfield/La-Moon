import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import StayCard from '../components/cards/StayCard'
import SwipeStage, { FooterLink } from '../components/cards/SwipeStage'
import { DeckMessage } from '../components/cards/DeckStates'
import { byDistance, centroid, distanceTo, PRIMARY_BUTTON } from '../components/cards/swipeHelpers'
import { PROVINCES } from '../data/options'
import { travelerCount, tripLength, useTripDraft } from '../context/TripDraftContext'
import { getPlacesByIds } from '../lib/api/places'
import { listStays } from '../lib/api/stays'
import { budgetTier } from '../lib/trip/budget'
import { sortForMoods } from '../lib/trip/luxury'

// เรียง: ระดับที่พักตรงงบก่อน แล้วใกล้ที่เที่ยวที่ถูกใจก่อน ; มู้ด luxury = ที่พักพรีเมียมขึ้นก่อน (เรียงซ้ำแบบ stable) ; ใส่ distanceKm ให้การ์ดโชว์
function orderStays(list, tier, center, moods) {
  const ordered = list
    .map((s) => ({ ...s, distanceKm: distanceTo(center, s) }))
    .sort((a, b) => Number(b.tier === tier) - Number(a.tier === tier) || byDistance(a.distanceKm, b.distanceKm))
  return sortForMoods(ordered, moods)
}

function StaySession({ draft, updateDraft, province, provinceLabel }) {
  const reduced = useReducedMotion()
  const navigate = useNavigate()
  const likedKey = draft.likedIds.join(',')
  const { days } = tripLength(draft)
  const tier = budgetTier(draft.budget, travelerCount(draft), days)
  const moodKey = draft.moods.join(',')
  const sessionKey = `${province}|${tier}|${likedKey}|${moodKey}`
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState(null)

  useEffect(() => {
    let cancelled = false
    const likedIds = likedKey.split(',').filter(Boolean)
    Promise.all([
      listStays({ province }),
      getPlacesByIds(likedIds).catch((err) => {
        console.error('load liked places failed', err)
        return []
      }),
    ])
      .then(([stays, liked]) => {
        if (!cancelled) setResult({ attempt, stays: orderStays(stays, tier, centroid(liked), moodKey.split(',').filter(Boolean)) })
      })
      .catch((err) => {
        console.error('load stays failed', err)
        if (!cancelled) setResult({ attempt, error: true })
      })
    return () => {
      cancelled = true
    }
  }, [province, tier, likedKey, moodKey, attempt])

  const current = result?.attempt === attempt ? result : null
  const stays = current?.stays ?? null

  function skipStep() {
    updateDraft({ likedStayIds: [], stayMode: null, chosenStayId: null })
    slideNavigate(navigate, '/plan/trip')
  }

  function finish(likedStayIds) {
    if (likedStayIds.length > 1) {
      updateDraft({ likedStayIds })
      slideNavigate(navigate, '/plan/stay/final')
      return
    }
    updateDraft({ likedStayIds, stayMode: 'single', chosenStayId: likedStayIds[0] ?? null })
    slideNavigate(navigate, '/plan/trip')
  }

  let fallback = null
  if (current?.error) {
    fallback = (
      <DeckMessage title="โหลดที่พักไม่สำเร็จ" body="เช็กอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง">
        <motion.button type="button" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={() => setAttempt((a) => a + 1)} className={PRIMARY_BUTTON}>
          ลองใหม่
        </motion.button>
        <div className="mt-2 flex justify-center">
          <FooterLink onClick={skipStep}>ข้ามขั้นนี้ ฉันจองที่พักเองแล้ว</FooterLink>
        </div>
      </DeckMessage>
    )
  } else if (stays && !stays.length) {
    fallback = (
      <DeckMessage title="ยังไม่มีที่พักในจังหวัดนี้" body="ข้ามขั้นนี้ไปก่อน แล้วจองที่พักเองได้เลย">
        <motion.button type="button" whileTap={reduced ? undefined : { scale: 0.96 }} transition={{ type: 'spring', duration: reduced ? 0 : 0.2 }} onClick={skipStep} className={PRIMARY_BUTTON}>
          ไปต่อ
        </motion.button>
      </DeckMessage>
    )
  }

  return (
    <SwipeStage
      items={fallback ? null : stays}
      fallback={fallback}
      noun="แห่ง"
      likeLabel="อยากพัก"
      loadingLabel="กำลังโหลดที่พัก"
      initialState={draft.stayKey === sessionKey ? draft.stayState : null}
      onStateChange={(state) => updateDraft({ stayKey: sessionKey, stayState: state })}
      onDone={finish}
      labelOf={(s) => s.name}
      renderCard={(s) => <StayCard stay={s} />}
      doneTitle="เลือกที่พักครบแล้ว"
      doneBody={(liked) => (liked > 1 ? `ถูกใจ ${liked} แห่ง ไปจัดว่าคืนไหนพักที่ไหน` : liked === 1 ? 'ถูกใจ 1 แห่ง พร้อมจัดทริปให้คุณ' : 'ยังไม่ได้เลือกที่พัก ระบบจะประมาณค่าที่พักให้ในแผนทริป')}
      doneButton="สรุปทริปเลย"
      header={<AppHeader crumb={provinceLabel} title="เลือกที่พัก" step="6 / 6" backTo="/plan/food" />}
      hint="ปัดขึ้นเก็บไว้ก่อน ปัดขวาถ้าอยากพัก"
      footer={<FooterLink onClick={skipStep}>ข้ามขั้นนี้ ฉันจองที่พักเองแล้ว</FooterLink>}
    />
  )
}

// Day trips never get here; a new session starts when the province, budget tier or liked places change.
export default function StaySwipe() {
  const { draft, updateDraft } = useTripDraft()
  const info = PROVINCES.find((p) => p.id === draft.province)
  if (!info) return <Navigate to="/map" replace />
  if (draft.tripType !== 'overnight') return <Navigate to="/plan/trip" replace />
  if (!draft.moods.length) return <Navigate to="/plan/mood" replace />
  return (
    <StaySession
      key={`${draft.province}|${draft.likedIds.join(',')}`}
      draft={draft}
      updateDraft={updateDraft}
      province={draft.province}
      provinceLabel={info.label}
    />
  )
}
