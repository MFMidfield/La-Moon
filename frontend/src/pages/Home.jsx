import { useMemo } from 'react'
import { useAuth } from '../context/AuthContext'
import { listMyTrips } from '../lib/api/trips'
import { listLikedPlaces } from '../lib/api/swipes'
import { computePersonality } from '../lib/trip/personality'
import { PERSONALITIES } from '../data/personalities'
import useLoad from '../components/home/useLoad'
import HomeHeader from '../components/home/HomeHeader'
import PersonalityChip, { PersonalityChipSkeleton } from '../components/home/PersonalityChip'
import StartBox from '../components/home/StartBox'
import TripList from '../components/home/TripList'
import WishProvinces from '../components/home/WishProvinces'

export default function Home() {
  const { profile, signOut } = useAuth()
  const trips = useLoad(listMyTrips)
  const liked = useLoad(listLikedPlaces)

  // โหลดบุคลิกไม่สำเร็จ = ซ่อน chip เฉยๆ
  const personality = useMemo(() => {
    const result = liked.data ? computePersonality(liked.data) : null
    return result && PERSONALITIES[result.id]
  }, [liked.data])

  return (
    <div className="min-h-svh bg-cream text-ink">
      <div className="mx-auto flex w-full max-w-[560px] flex-col pb-10 lg:pt-6">
        <HomeHeader profile={profile} onSignOut={signOut} />

        <h1 className="m-0 break-words px-[22px] pt-2 text-[26px] font-bold leading-[1.3]">
          สวัสดี {profile.display_name}
        </h1>

        {liked.status === 'loading' && <PersonalityChipSkeleton />}
        {personality && <PersonalityChip title={personality.title} />}

        <StartBox />
        <TripList status={trips.status} trips={trips.data} />
        <WishProvinces ids={profile.provinces ?? []} />
      </div>
    </div>
  )
}
