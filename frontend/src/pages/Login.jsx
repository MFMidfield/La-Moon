import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { signInWithGoogle } = useAuth()
  const location = useLocation()

  return (
    <div className="p-8">
      <h1>Login</h1>
      <button onClick={() => signInWithGoogle(location.state?.from ?? '/map')}>
        เข้าสู่ระบบด้วย Google
      </button>
    </div>
  )
}
