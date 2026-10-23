import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './routes/PrivateRoute'
import PublicOnlyRoute from './routes/PublicOnlyRoute'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Map from './pages/Map'
import Province from './pages/Province'
import Mood from './pages/Mood'
import Swipe from './pages/Swipe'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PublicOnlyRoute />}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<PrivateRoute requireProfile={false} />}>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/map" element={<Map />} />
            <Route path="/map/:province" element={<Province />} />
            <Route path="/map/:province/mood" element={<Mood />} />
            <Route path="/map/:province/swipe" element={<Swipe />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
