import { useParams } from 'react-router-dom'

export default function Swipe() {
  const { province } = useParams()

  return (
    <div className="p-8">
      <h1>Swipe: {province}</h1>
    </div>
  )
}
