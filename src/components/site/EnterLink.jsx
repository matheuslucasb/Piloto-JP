import { useNavigate } from 'react-router-dom'

// Navigates into the pilot with a cross-fade where the browser supports View
// Transitions; a plain navigation everywhere else.
export default function EnterLink({ to = '/entrar', className, children, onClick }) {
  const navigate = useNavigate()

  const handle = (e) => {
    onClick?.()
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
    e.preventDefault()
    if (document.startViewTransition) {
      document.startViewTransition(() => navigate(to))
    } else {
      navigate(to)
    }
  }

  return (
    <a href={to} className={className} onClick={handle}>
      {children}
    </a>
  )
}
