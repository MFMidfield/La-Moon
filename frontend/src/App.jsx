import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { TripDraftProvider } from './context/TripDraftContext'
import PrivateRoute from './routes/PrivateRoute'
import PublicOnlyRoute from './routes/PublicOnlyRoute'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Map from './pages/Map'
import Mood from './pages/Mood'
import Swipe from './pages/Swipe'
import Trip from './pages/Trip'
import TripDetails from './pages/TripDetails'
import TripDetail from './pages/TripDetail'
import Personality from './pages/Personality'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TripDraftProvider>
          <Routes>
            <Route element={<PublicOnlyRoute />}>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<PrivateRoute requireProfile={false} />}>
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              {/* แผนที่เดียว: /map = ทั้งประเทศ, /map/:province = ซูมจังหวัด (ไม่ remount) */}
              <Route path="/map/:province?" element={<Map />} />
              {/* flow วางทริป: มู้ด → (modal สุ่ม/เลือกเอง) → /map → รายละเอียด → ปัด → แผน; ข้อมูลอยู่ใน useTripDraft() */}
              <Route path="/plan/mood" element={<Mood />} />
              <Route path="/plan/details" element={<TripDetails />} />
              <Route path="/plan/swipe" element={<Swipe />} />
              <Route path="/plan/trip" element={<Trip />} />
              <Route path="/trips/:id" element={<TripDetail />} />
              <Route path="/personality" element={<Personality />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </TripDraftProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
