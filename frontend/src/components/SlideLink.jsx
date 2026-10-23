import { flushSync } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'

// navigate with the page slide; `back` reverses the direction
// eslint-disable-next-line react-refresh/only-export-components
export function slideNavigate(navigate, to, { back = false, ...options } = {}) {
  if (!document.startViewTransition) return navigate(to, options)
  document.documentElement.dataset.nav = back ? 'back' : 'forward'
  document.startViewTransition(() => flushSync(() => navigate(to, options)))
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
