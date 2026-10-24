import { useMemo } from 'react'
import AppHeader from '../components/AppHeader'
import useLoad from '../components/home/useLoad'
import PersonalityCard from '../components/personality/PersonalityCard'
import ShareActions from '../components/personality/ShareActions'
import EmptyState from '../components/personality/EmptyState'
import { listLikedPlaces } from '../lib/api/swipes'
import { computePersonality } from '../lib/trip/personality'
import { PERSONALITIES } from '../data/personalities'
import { PROVINCES } from '../data/options'

// 2 จังหวัดที่ปัดขวาบ่อยสุด
function topProvinces(places) {
  const counts = {}
  places.forEach((p) => p.province && (counts[p.province] = (counts[p.province] ?? 0) + 1))
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => PROVINCES.find((p) => p.id === id)?.label)
    .filter(Boolean)
    .slice(0, 2)
}

export default function Personality() {
  const { status, data: places } = useLoad(listLikedPlaces)

  const view = useMemo(() => {
    if (!places) return null
    const result = computePersonality(places)
    const personality = result && PERSONALITIES[result.id]
    return personality ? { result, personality, provinces: topProvinces(places) } : null
  }, [places])

  let body
  if (status === 'loading') {
    body = <div className="mx-4 h-[520px] animate-pulse rounded-[36px] bg-peach/60" aria-hidden="true" />
  } else if (status === 'error') {
    body = (
      <p role="alert" className="m-0 px-[22px] pt-4 text-center text-sm text-[#C0392B]">
        โหลดข้อมูลไม่สำเร็จ ลองรีเฟรชหน้าอีกครั้ง
      </p>
    )
  } else if (!view) {
    body = <EmptyState />
  } else {
    body = (
      <>
        <PersonalityCard {...view} />
        <ShareActions title={view.personality.title} />
      </>
    )
  }

  return (
    <div className="min-h-svh bg-cream text-ink">
      <div className="mx-auto flex min-h-svh w-full max-w-[560px] flex-col lg:min-h-0 lg:pt-6">
        <AppHeader title="บุคลิกการเที่ยว" backTo="/home" />
        <div className="flex grow flex-col pt-2">{body}</div>
      </div>
    </div>
  )
}
