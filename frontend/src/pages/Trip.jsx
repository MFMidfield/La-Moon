import { Sun } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import AppHeader from '../components/AppHeader'
import SlideLink, { slideNavigate } from '../components/SlideLink'
import { tripLength, travelerCount, useTripDraft } from '../context/TripDraftContext'
import { PROVINCES } from '../data/options'
import { PACES } from '../data/travel'
import { getPlacesByIds, listPlaces } from '../lib/api/places'
import { getRestaurantsByIds, listRestaurants } from '../lib/api/restaurants'
import { getStaysByIds } from '../lib/api/stays'
import { createTrip } from '../lib/api/trips'
import { assignSlots, dayCapacities, planTrip } from '../lib/trip/plan'
import { travelOptions } from '../lib/trip/travel'
import { estimateTrip } from '../lib/trip/budget'
import { seasonWarnings } from '../lib/trip/season'
import { findCombos } from '../lib/trip/combos'
import { computePersonality } from '../lib/trip/personality'
import { TripLoading, TripMessage } from '../components/trip/TripStates'
import { PRIMARY_BUTTON } from '../components/trip/styles'
import TripOverview from '../components/trip/TripOverview'
import DayPlan from '../components/trip/DayPlan'
import TripBudget from '../components/trip/TripBudget'
import ComboCard from '../components/trip/ComboCard'
import usePlanTransit from '../components/trip/usePlanTransit'
import MealSwapSheet from '../components/trip/MealSwapSheet'
import { buildFoodStay, budgetMeals, overrideKey, serializeFood } from '../components/trip/mealPlan'
import { alternativePatch, hydratePlan, moveCard, resizePlan, serializePlan } from '../components/trip/itinerary'

function capacitiesFor(draft) {
  return dayCapacities({ days: tripLength(draft).days, perDay: PACES.find(p => p.id === draft.pace)?.perDay ?? 3, travelHours: travelOptions(draft.origin, draft.province).options.find(o => o.id === draft.transportTo)?.hours ?? 0 })
}

function TripEditor({ draft, updateDraft, liked, pool, likedRestaurants, restaurantPool, likedStays, sourceKey }) {
  const navigate = useNavigate()
  const [plan, setPlan] = useState(() => {
    if (draft.itineraryKey === sourceKey && draft.itinerary) return resizePlan(hydratePlan(draft.itinerary, [...liked, ...pool]), tripLength(draft).days)
    return planTrip({ liked, pool, capacities: capacitiesFor(draft) })
  })
  const [overrides, setOverrides] = useState(() => (draft.itineraryKey === sourceKey ? draft.itinerary?.mealOverrides : null) ?? {})
  const [mealSheet, setMealSheet] = useState({ open: false, d: 0, meal: 'lunch' })
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [notice, setNotice] = useState('')
  const transit = usePlanTransit(draft.province, plan.days)
  const length = tripLength(draft)
  const people = travelerCount(draft)
  const places = plan.days.flatMap(day => day.items.map(item => item.place))
  const combos = findCombos(places)
  const chosenStay = likedStays.find(stay => stay.id === draft.chosenStayId) ?? null
  const food = useMemo(
    () => buildFoodStay({ plan, nights: length.nights, likedStays, stayMode: draft.stayMode, chosenStay, likedRestaurants, pool: restaurantPool, overrides }),
    [plan, length.nights, likedStays, draft.stayMode, chosenStay, likedRestaurants, restaurantPool, overrides],
  )
  const viewDays = useMemo(() => plan.days.map((day, d) => ({ ...day, meals: food.days[d].meals, stay: food.days[d].stay })), [plan.days, food])
  const input = { ...draft, ...length, people, places, stays: food.stays, meals: budgetMeals(food) }
  const estimate = estimateTrip(input)
  const warnings = seasonWarnings(places, draft.startDate, draft.endDate)

  useEffect(() => {
    updateDraft({ itinerary: { ...serializePlan(plan), mealOverrides: overrides }, itineraryKey: sourceKey })
  }, [plan, overrides, sourceKey, updateDraft])

  const closeMealSheet = useCallback(() => setMealSheet(previous => ({ ...previous, open: false })), [])

  function changeMeal(value) {
    const key = overrideKey(mealSheet.d, mealSheet.meal)
    setOverrides(previous => {
      const next = { ...previous }
      if (value === undefined) delete next[key]
      else next[key] = value
      return next
    })
  }

  function move(id, target, at) {
    setPlan(previous => moveCard(previous, id, target, at))
    setNotice('ย้ายการ์ดแล้ว')
  }

  function swap(id) {
    if (!plan.spare.length) return
    const replacement = plan.spare[Math.floor(Math.random() * plan.spare.length)]
    const old = plan.days.flatMap(day => day.items).find(item => item.place.id === id)?.place
    if (!old) {
      setNotice('แตะการ์ดสำรองเพื่อเลือกวันที่จะไป')
      return
    }
    setPlan({ days: plan.days.map(day => ({ items: assignSlots(day.items.map(item => item.place.id === id ? { place: replacement, auto: true } : item)) })), spare: [...plan.spare.filter(place => place.id !== replacement.id), old] })
    setNotice(`สุ่มได้ ${replacement.name}`)
  }

  function applyAlternative(patch) {
    const applied = alternativePatch(draft, patch)
    const nextDraft = { ...draft, ...applied }
    setPlan(previous => resizePlan(previous, tripLength(nextDraft).days))
    updateDraft(applied)
    setNotice('ปรับทริปให้ประหยัดขึ้นแล้ว')
  }

  async function save() {
    if (saving) return
    setSaving(true)
    setSaveError('')
    try {
      const stored = serializePlan(plan)
      const extras = serializeFood(food.days)
      const trip = await createTrip({
        province: draft.province, moods: draft.moods, days: stored.days.map((day, d) => ({ ...day, ...extras[d] })), spare: stored.spare,
        combos: combos.map(combo => combo.id), personality: computePersonality(places)?.id ?? null,
        start_date: draft.startDate, end_date: draft.endDate, nights: length.nights,
        trip_type: draft.tripType, travelers: draft.travelers, budget: draft.budget,
        origin: draft.origin, transport_to: draft.transportTo, transport_local: draft.transportLocal,
        pace: draft.pace, estimate, is_random: draft.mode === 'random',
      })
      slideNavigate(navigate, `/trips/${trip.id}`, { replace: true })
    } catch {
      setSaveError('บันทึกทริปไม่สำเร็จ ร่างทริปยังอยู่ ลองใหม่อีกครั้งได้เลย')
      setSaving(false)
    }
  }

  return (
    <>
      <div className="flex flex-col gap-5 px-4 pt-3">
        <TripOverview trip={draft} {...length} people={people} />
        <div className="flex items-center justify-between px-1"><h1 className="m-0 text-2xl font-bold">ทริปในแบบของคุณ</h1><span className="rounded-full bg-white px-3 py-1.5 text-xs text-brown">{places.length} ที่</span></div>
        <DayPlan days={viewDays} spare={plan.spare} capacities={capacitiesFor(draft)} startDate={draft.startDate} onMove={move} onSwap={swap} canSwap={plan.spare.length > 0} transit={transit} onEditMeal={food.hasFood ? (d, meal) => setMealSheet({ open: true, d, meal }) : undefined} />
        {combos.map(combo => <ComboCard key={combo.id} combo={combo} />)}
        <TripBudget input={input} onApply={applyAlternative} transit={draft.transportLocal === 'transit' ? transit : null} />
        {warnings.length > 0 && <div className="rounded-[24px] bg-[#FBE3D2] p-4"><h2 className="m-0 flex items-center gap-2 text-sm font-semibold"><Sun size={18} strokeWidth={2} aria-hidden="true" />ก่อนออกเดินทาง</h2>{warnings.map(warning => <p key={warning.placeId} className="mb-0 mt-2 text-xs leading-relaxed text-[#4A3A30]">{warning.message}</p>)}</div>}
        <p role="status" aria-live="polite" className="m-0 min-h-5 text-center text-xs text-muted">{notice}</p>
      </div>
      <div className="sticky bottom-0 mt-4 bg-cream px-4 pb-6 pt-3">
        {saveError && <p role="alert" className="mb-3 mt-0 text-center text-sm text-[#9B432A]">{saveError}</p>}
        <button type="button" onClick={save} disabled={saving || !places.length} className={PRIMARY_BUTTON}>{saving ? 'กำลังบันทึก…' : 'บันทึกทริป'}</button>
      </div>
      <MealSwapSheet open={mealSheet.open} d={mealSheet.d} meal={mealSheet.meal} dayLabel={`วันที่ ${mealSheet.d + 1}`} food={food} pool={restaurantPool} liked={likedRestaurants} overridden={overrideKey(mealSheet.d, mealSheet.meal) in overrides} onChange={changeMeal} onNotice={setNotice} onClose={closeMealSheet} />
    </>
  )
}

function TripSession({ draft, updateDraft }) {
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState(null)
  const likedKey = draft.likedIds.join(',')
  const moodKey = draft.moods.join(',')
  const foodKey = draft.likedRestaurantIds.join(',')
  const stayKey = draft.likedStayIds.join(',')
  const province = draft.province
  const sourceKey = `${province}|${moodKey}|${likedKey}|${draft.deck?.join(',') ?? 'pick'}`
  const requestKey = `${sourceKey}|${attempt}`
  useEffect(() => {
    let active = true
    // ร้าน/ที่พักโหลดไม่ได้ไม่ควรล้มทั้งแผน — ตกไปใช้ค่าประมาณเดิม
    const optional = promise => promise.catch(() => [])
    Promise.all([
      getPlacesByIds(likedKey.split(',').filter(Boolean)),
      listPlaces({ province, moods: moodKey.split(',').filter(Boolean) }),
      optional(getRestaurantsByIds(foodKey.split(',').filter(Boolean))),
      optional(listRestaurants({ province })),
      optional(getStaysByIds(stayKey.split(',').filter(Boolean))),
    ])
      .then(([liked, all, likedRestaurants, restaurantPool, likedStays]) => {
        if (active) setResult({ key: requestKey, liked, pool: all.filter(place => !liked.some(p => p.id === place.id)), likedRestaurants, restaurantPool, likedStays })
      })
      .catch(() => { if (active) setResult({ key: requestKey, error: true }) })
    return () => { active = false }
  }, [province, likedKey, moodKey, foodKey, stayKey, requestKey])
  const current = result?.key === requestKey ? result : null
  const label = PROVINCES.find(p => p.id === province)?.label ?? province
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink">
      <AppHeader crumb={label} title="แผนทริปของคุณ" backTo="/plan/swipe" />
      {!current ? <TripLoading label="กำลังจัดทริป…" /> : current.error ? <TripMessage title="โหลดที่เที่ยวไม่สำเร็จ" body="เช็กอินเทอร์เน็ตแล้วลองอีกครั้ง"><button type="button" onClick={() => setAttempt(value => value + 1)} className={PRIMARY_BUTTON}>ลองใหม่</button></TripMessage> : !current.liked.length && !current.pool.length ? <TripMessage title="ยังไม่มีที่เที่ยวตรงมู้ดนี้" body="ลองเปลี่ยนมู้ดหรือเลือกจังหวัดใหม่"><SlideLink to="/plan/mood" back className={PRIMARY_BUTTON}>เลือกมู้ดใหม่</SlideLink></TripMessage> : <TripEditor key={requestKey} draft={draft} updateDraft={updateDraft} liked={current.liked} pool={current.pool} likedRestaurants={current.likedRestaurants} restaurantPool={current.restaurantPool} likedStays={current.likedStays} sourceKey={sourceKey} />}
    </div>
  )
}

export default function Trip() {
  const { draft, updateDraft } = useTripDraft()
  if (!draft.province) return <Navigate to="/map" replace />
  if (!draft.moods.length) return <Navigate to="/plan/mood" replace />
  if (!draft.origin || !draft.startDate || !draft.endDate) return <Navigate to="/plan/details" replace />
  return <MotionConfig reducedMotion="user"><TripSession draft={draft} updateDraft={updateDraft} /></MotionConfig>
}
