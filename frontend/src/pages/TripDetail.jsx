import { useParams } from 'react-router-dom'

// TODO: ดูทริปที่บันทึกแล้ว (lane D)
export default function TripDetail() {
  const { id } = useParams()

  return (
    <div className="p-8">
      <h1>Trip detail: {id}</h1>
    </div>
  )
}
