import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Map() {
  const { signOut } = useAuth()

  return (
    <div className="p-8">
      <h1>Map</h1>
      <Link to="/map/phuket">ภูเก็ต</Link>
      <button onClick={signOut}>ออกจากระบบ</button>
    </div>
  )
}
