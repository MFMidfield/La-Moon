import { Link, useParams } from 'react-router-dom'

export default function Mood() {
  const { province } = useParams()

  return (
    <div className="p-8">
      <h1>Mood: {province}</h1>
      <Link to="../swipe" relative="path">ไปปัดการ์ด</Link>
    </div>
  )
}
