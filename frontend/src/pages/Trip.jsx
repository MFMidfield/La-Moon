import { useEffect, useMemo, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import SlideLink, { slideNavigate } from '../components/SlideLink'
import TripSummary from '../components/trip/TripSummary'
import { TripLoading, TripMessage } from '../components/trip/TripStates'
import { PRIMARY_BUTTON, TEXT_LINK } from '../components/trip/styles'
import { PROVINCES } from '../data/options'
import { getPlacesByIds } from '../lib/api/places'
import { createTrip } from '../lib/api/trips'
import { planDays } from '../lib/trip/plan'
import { findCombos } from '../lib/trip/combos'
import { computePersonality } from '../lib/trip/personality'

function swipeUrl(province, moods = [], budget) {
  const params = []
  if (moods.length) params.push(`moods=${moods.map(encodeURIComponent).join(',')}`)
  if (budget) params.push(`budget=${budget}`)
  return `/map/${province}/swipe${params.length ? `?${params.join('&')}` : ''}`
}

// สรุปทริปจากการปัด — รับ location.state { likedIds, moods, budget } จาก Swipe
export default function Trip() {
  const { province } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()

  const idsKey = (state?.likedIds ?? []).join(',')
  const [attempt, setAttempt] = useState(0)
  const requestKey = `${idsKey}#${attempt}`
  const [result, setResult] = useState(null)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')

  useEffect(() => {
    if (!idsKey) return
    let cancelled = false
    getPlacesByIds(idsKey.split(','))
      .then((places) => !cancelled && setResult({ key: requestKey, places }))
      .catch((err) => {
        console.error('load trip places failed', err)
        if (!cancelled) setResult({ key: requestKey, error: true })
      })
    return () => {
      cancelled = true
    }
  }, [idsKey, requestKey])

  const current = result?.key === requestKey ? result : null
  const places = current?.places
  const plan = useMemo(() => {
    if (!places) return null
    return { days: planDays(places), combos: findCombos(places), personality: computePersonality(places) }
  }, [places])

  if (!state) return <Navigate to={`/map/${province}/mood`} replace />

  const provinceLabel = PROVINCES.find((p) => p.id === province)?.label ?? province
  const moods = state.moods ?? []
  const budget = state.budget ?? null

  async function handleSave() {
    if (!plan || saving) return
    setSaving(true)
    setSaveError('')
    try {
      const trip = await createTrip({
        province,
        moods,
        budget,
        days: plan.days.map((d) => d.map((p) => p.id)),
        combos: plan.combos.map((c) => c.id),
        personality: plan.personality?.id ?? null,
      })
      slideNavigate(navigate, `/trips/${trip.id}`, { replace: true })
    } catch (err) {
      console.error('create trip failed', err)
      setSaveError('บันทึกทริปไม่สำเร็จ ลองใหม่อีกครั้ง')
      setSaving(false)
    }
  }

  let body
  if (!idsKey || places?.length === 0) {
    body = (
      <TripMessage title="ยังไม่ได้เลือกที่ไหนเลย" body="ปัดขวาการ์ดที่อยากไป แล้วเราจะจัดทริปให้">
        <SlideLink to={swipeUrl(province, moods, budget)} back replace className={PRIMARY_BUTTON}>
          กลับไปปัดการ์ด
        </SlideLink>
      </TripMessage>
    )
  } else if (current?.error) {
    body = (
      <TripMessage title="โหลดทริปไม่สำเร็จ" body="เช็กอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง">
        <button type="button" onClick={() => setAttempt((a) => a + 1)} className={PRIMARY_BUTTON}>
          ลองใหม่
        </button>
      </TripMessage>
    )
  } else if (!plan) {
    body = <TripLoading label="กำลังจัดทริป…" />
  } else {
    body = (
      <>
        <p className="m-0 px-[22px] pt-2 text-[15px] text-[#4A3A30]">
          ปัดขวา {places.length} ที่ · {plan.days.length} วัน
        </p>

        <TripSummary days={plan.days} combos={plan.combos} />

        <div className="grow" />

        <div className="flex flex-col gap-2 px-4 pb-7 pt-8">
          <button type="button" onClick={handleSave} disabled={saving} className={PRIMARY_BUTTON}>
            {saving ? 'กำลังบันทึก…' : 'บันทึกทริป'}
          </button>
          {saveError && (
            <p role="alert" className="m-0 text-center text-[13px] text-[#C0392B]">
              {saveError}
            </p>
          )}
          <SlideLink to="/personality" className={TEXT_LINK}>
            ดูบุคลิกการเที่ยวของคุณ ›
          </SlideLink>
        </div>
      </>
    )
  }

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink">
      <AppHeader title={`ทริป${provinceLabel}`} step="3 / 3" backTo={`/map/${province}/mood`} />
      {body}
    </div>
  )
}
