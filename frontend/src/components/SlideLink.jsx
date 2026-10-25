import { flushSync } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { preloadPage } from '../routes/pages'

// navigate with the page slide; `back` reverses the direction
// the target page loads first so the slide never captures the loader;
// one navigation at a time (double taps while loading are ignored), a thin bar shows if loading is slow,
// and after PRELOAD_LIMIT ms it navigates anyway (Suspense loader shows)
const SLOW_MS = 150
const PRELOAD_LIMIT = 2500
let pending = false

// eslint-disable-next-line react-refresh/only-export-components
export function slideNavigate(navigate, to, { back = false, ...options } = {}) {
  if (!document.startViewTransition) return navigate(to, options)
  if (pending) return
  pending = true
  const root = document.documentElement
  const slow = setTimeout(() => { root.dataset.loading = 'true' }, SLOW_MS)
  Promise.race([preloadPage(to), new Promise((resolve) => setTimeout(resolve, PRELOAD_LIMIT))]).then(() => {
    clearTimeout(slow)
    delete root.dataset.loading
    root.dataset.nav = back ? 'back' : 'forward'
    const transition = document.startViewTransition(() => flushSync(() => navigate(to, options)))
    const release = () => { pending = false }
    transition.updateCallbackDone.then(release, release)
  })
}

// Link that slides pages with the View Transitions API
export default function SlideLink({ to, back = false, replace, onClick, ...props }) {
  const navigate = useNavigate()

  function handleClick(e) {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (!document.startViewTransition) return
    e.preventDefault()
    slideNavigate(navigate, to, { back, replace })
  }

  return <Link to={to} replace={replace} onClick={handleClick} {...props} />
}
