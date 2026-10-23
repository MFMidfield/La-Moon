import { useParams } from 'react-router-dom'

// TODO: สรุปทริปจากการปัด (lane D) — รับ location.state { likedIds, moods, budget } จาก Swipe
export default function Trip() {
  const { province } = useParams()

  return (
    <div className="p-8">
      <h1>Trip: {province}</h1>
    </div>
  )
}
