import { lazy, useState } from 'react'
import { matchPath } from 'react-router-dom'

// lazy page that can be loaded ahead, so the slide captures the real page instead of the loader
function lazyPage(load) {
  let Loaded = null
  const preload = () => load().then((m) => { Loaded = m.default })
  const Lazy = lazy(() => load().then((m) => { Loaded = m.default; return m }))
  function Page(props) {
    // pick once per mount so the element type never switches mid-life
    const [C] = useState(() => Loaded ?? Lazy)
    return <C {...props} />
  }
  Page.preload = preload
  return Page
}

// โหลดแยกทีละหน้า
export const Landing = lazyPage(() => import('../pages/Landing'))
export const Login = lazyPage(() => import('../pages/Login'))
export const Register = lazyPage(() => import('../pages/Register'))
export const Welcome = lazyPage(() => import('../pages/Welcome'))
export const Home = lazyPage(() => import('../pages/Home'))
export const Map = lazyPage(() => import('../pages/Map'))
export const Mood = lazyPage(() => import('../pages/Mood'))
export const Swipe = lazyPage(() => import('../pages/Swipe'))
export const Trip = lazyPage(() => import('../pages/Trip'))
export const FoodSwipe = lazyPage(() => import('../pages/FoodSwipe'))
export const StaySwipe = lazyPage(() => import('../pages/StaySwipe'))
export const StayFinal = lazyPage(() => import('../pages/StayFinal'))
export const TransportPick = lazyPage(() => import('../pages/TransportPick'))
export const TripDetails = lazyPage(() => import('../pages/TripDetails'))
export const TripDetail = lazyPage(() => import('../pages/TripDetail'))
export const Personality = lazyPage(() => import('../pages/Personality'))
export const About = lazyPage(() => import('../pages/About'))

// keep in sync with the routes in App.jsx
const routes = [
  ['/', Landing], ['/login', Login], ['/register', Register], ['/welcome', Welcome],
  ['/home', Home], ['/about', About], ['/map/:province?', Map], ['/plan/mood', Mood],
  ['/plan/details', TripDetails], ['/plan/swipe', Swipe], ['/plan/transport', TransportPick],
  ['/plan/food', FoodSwipe], ['/plan/stay', StaySwipe], ['/plan/stay/final', StayFinal],
  ['/plan/trip', Trip], ['/trips/:id', TripDetail], ['/personality', Personality],
]

// resolves when the page for `to` is loaded (never rejects)
export function preloadPage(to) {
  if (typeof to !== 'string') return Promise.resolve()
  const path = to.split(/[?#]/)[0]
  const page = routes.find(([pattern]) => matchPath(pattern, path))?.[1]
  return page ? page.preload().catch(() => {}) : Promise.resolve()
}
