import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import { slideNavigate } from '../components/SlideLink'
import { MOODS, PROVINCES } from '../data/options'
import AiMoodBox from '../components/mood/AiMoodBox'
import MoodTile from '../components/mood/MoodTile'
import BudgetPicker from '../components/mood/BudgetPicker'

const MAX_MOODS = 3

export default function Mood() {
  const { province } = useParams()
  const navigate = useNavigate()
  const [moods, setMoods] = useState([])
  const [budget, setBudget] = useState(2)

  const info = PROVINCES.find((p) => p.id === province)
  if (!info) return <Navigate to="/map" replace />

  const full = moods.length >= MAX_MOODS

  function toggle(id) {
    setMoods((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : prev.length >= MAX_MOODS ? prev : [...prev, id]))
  }

  function goSwipe() {
    if (!moods.length) return
    slideNavigate(navigate, `/map/${province}/swipe?moods=${moods.join(',')}&budget=${budget}`)
  }

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col bg-cream text-ink">
      <AppHeader crumb={info.label} title="เลือกมู้ด" step="2 / 3" backTo={`/map/${province}`} />

      <div className="flex flex-col gap-1 px-[22px] pb-1 pt-3">
        <h1 className="m-0 text-[26px] font-semibold">วันนี้อยากได้ฟีลไหน?</h1>
        <p className="m-0 text-sm text-muted">
          เลือกได้สูงสุด {MAX_MOODS} มู้ด · เลือกแล้ว {moods.length}
        </p>
      </div>

      <div className="flex flex-col gap-3.5 px-4 pt-4">
        <AiMoodBox onPick={(ids) => setMoods(ids.slice(0, MAX_MOODS))} />

        <div className="grid grid-cols-2 gap-2.5">
          {MOODS.map((mood) => {
            const selected = moods.includes(mood.id)
            return (
              <MoodTile
                key={mood.id}
                mood={mood}
                selected={selected}
                disabled={full && !selected}
                onClick={() => toggle(mood.id)}
              />
            )
          })}
        </div>

        <BudgetPicker value={budget} onChange={setBudget} />
      </div>

      <div className="grow" />

      <div className="sticky bottom-0 bg-cream px-4 pb-7 pt-4">
        <button
          type="button"
          onClick={goSwipe}
          disabled={!moods.length}
          className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-brown text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          ดูที่เที่ยว ({moods.length} มู้ด)
        </button>
      </div>
    </div>
  )
}
