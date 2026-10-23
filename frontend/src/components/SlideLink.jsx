import { flushSync } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'

// Link that slides pages with the View Transitions API; `back` reverses the direction
export default function SlideLink({ to, back = false, onClick, ...props }) {
  const navigate = useNavigate()

  function handleClick(e) {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (!document.startViewTransition) return
    e.preventDefault()
    document.documentElement.dataset.nav = back ? 'back' : 'forward'
    document.startViewTransition(() => flushSync(() => navigate(to)))
  }

  return <Link to={to} onClick={handleClick} {...props} />
}
