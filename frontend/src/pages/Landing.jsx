import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="p-8">
      <h1>Landing</h1>
      <Link to="/login">เริ่มเลย</Link>
    </div>
  )
}
