import { useEffect, useRef, useState } from 'react'

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Reveals an element once it has been reached — on scroll-in, on an instant
// jump past it, or if it is already on screen at mount. Content is never left
// hidden: reduced motion, no IntersectionObserver, or a jump all resolve to
// "shown", and the CSS that hides it is itself gated on a `.js-reveal` class
// that only exists when this script ran.
export default function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(
    () => prefersReduced || typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    if (shown || !ref.current) return
    const el = ref.current

    const reached = () => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight * 0.9 && r.bottom > 0
    }
    if (reached()) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)

    const done = () => {
      setShown(true)
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('site:revealall', done)
    }
    const onScroll = () => {
      if (reached()) done()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // A menu jump can skip past sections without a scroll event that "reaches"
    // them — reveal everything so nothing is left hidden above the fold.
    window.addEventListener('site:revealall', done)

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('site:revealall', done)
    }
  }, [shown])

  return [ref, shown]
}
