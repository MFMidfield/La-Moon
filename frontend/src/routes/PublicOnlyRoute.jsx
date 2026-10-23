import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import FullPageLoader from '../components/FullPageLoader'

export default function PublicOnlyRoute() {
  const { session, profile, loading } = useAuth()
  const location = useLocation()

  if (loading) return <FullPageLoader />

  if (session) {
    if (!profile) return <Navigate to="/register" replace />
    return <Navigate to={location.state?.from ?? '/map'} replace />
  }

  return <Outlet />
}
