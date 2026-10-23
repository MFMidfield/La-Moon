import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import FullPageLoader from '../components/FullPageLoader'

// requireProfile=false ใช้กับ /register (login แล้วแต่ยังไม่มี profile)
export default function PrivateRoute({ requireProfile = true }) {
  const { session, profile, loading } = useAuth()
  const location = useLocation()

  if (loading) return <FullPageLoader />

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location.pathname + location.search }} />
  }

  if (requireProfile && !profile) {
    return <Navigate to="/register" replace state={{ from: location.state?.from ?? location.pathname }} />
  }

  if (!requireProfile && profile) {
    return <Navigate to={location.state?.from ?? '/home'} replace />
  }

  return <Outlet />
}
