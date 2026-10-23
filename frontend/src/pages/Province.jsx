import { Link, useParams } from 'react-router-dom'

export default function Province() {
  const { province } = useParams()

  return (
    <div className="p-8">
      <h1>Province: {province}</h1>
      <Link to="mood">เลือก mood</Link>
    </div>
  )
}
