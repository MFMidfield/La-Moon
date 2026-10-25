import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import FullPageLoader from './components/FullPageLoader'
import { AuthProvider } from './context/AuthContext'
import { TripDraftProvider } from './context/TripDraftContext'
import PrivateRoute from './routes/PrivateRoute'
import PublicOnlyRoute from './routes/PublicOnlyRoute'
import {
  About, FoodSwipe, Home, Landing, Login, Map, Mood, Personality, Register,
  StayFinal, StaySwipe, Swipe, TransportPick, Trip, TripDetail, TripDetails, Welcome,
} from './routes/pages'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TripDraftProvider>
          <Suspense fallback={<FullPageLoader />}>
          <Routes>
            <Route path="/about" element={<About />} />

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
