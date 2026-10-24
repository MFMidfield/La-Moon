import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FullPageLoader from './components/FullPageLoader'
import { AuthProvider } from './context/AuthContext'
import { TripDraftProvider } from './context/TripDraftContext'
import PrivateRoute from './routes/PrivateRoute'
import PublicOnlyRoute from './routes/PublicOnlyRoute'
// โหลดแยกทีละหน้า
const Landing = lazy(() => import('./pages/Landing'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Welcome = lazy(() => import('./pages/Welcome'))
const Home = lazy(() => import('./pages/Home'))
const Map = lazy(() => import('./pages/Map'))
const Mood = lazy(() => import('./pages/Mood'))
const Swipe = lazy(() => import('./pages/Swipe'))
const Trip = lazy(() => import('./pages/Trip'))
const FoodSwipe = lazy(() => import('./pages/FoodSwipe'))
const StaySwipe = lazy(() => import('./pages/StaySwipe'))
const StayFinal = lazy(() => import('./pages/StayFinal'))
const TransportPick = lazy(() => import('./pages/TransportPick'))
const TripDetails = lazy(() => import('./pages/TripDetails'))
const TripDetail = lazy(() => import('./pages/TripDetail'))
const Personality = lazy(() => import('./pages/Personality'))

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TripDraftProvider>
          <Suspense fallback={<FullPageLoader />}>
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
              <Route path="/plan/transport" element={<TransportPick />} />
              <Route path="/plan/food" element={<FoodSwipe />} />
              <Route path="/plan/stay" element={<StaySwipe />} />
              <Route path="/plan/stay/final" element={<StayFinal />} />
              <Route path="/plan/trip" element={<Trip />} />
              <Route path="/trips/:id" element={<TripDetail />} />
              <Route path="/personality" element={<Personality />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </Suspense>
        </TripDraftProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
