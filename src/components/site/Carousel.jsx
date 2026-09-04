import { useCallback, useEffect, useRef, useState } from 'react'

const AUTOPLAY_MS = 5200

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

// Crossfade photo gallery. Autoplays every ~5s and pauses on hover, keyboard
// focus, a hidden tab, or reduced-motion. Navigable by arrows, dots, the arrow
// keys, or a swipe. `variant`: "framed" (16:9 card in the content flow) or
// "bleed" (full-bleed cinematic band). Fails safe: with JS but no motion the
// slides simply cut; controls always work.
export default function Carousel({ slides, label, variant = 'framed' }) {
  const n = slides.length
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()
  const swipeX = useRef(null)

  const go = useCallback((i) => setActive(((i % n) + n) % n), [n])

  const autoplayOn = playing && !paused && !reduced && n > 1
  useEffect(() => {
    if (!autoplayOn) return
    const t = setTimeout(() => setActive((p) => (p + 1) % n), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [autoplayOn, active, n])

  useEffect(() => {
    const onVis = () => setPaused(document.hidden)
    onVis()
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(active - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(active + 1)
    }
  }

  const onPointerDown = (e) => {
    swipeX.current = e.clientX
  }
  const onPointerUp = (e) => {
    if (swipeX.current == null) return
    const dx = e.clientX - swipeX.current
    swipeX.current = null
    if (Math.abs(dx) > 44) go(active + (dx < 0 ? 1 : -1))
  }

  return (
    <div
      className={`site-carousel site-carousel-${variant}`}
      role="group"
      aria-roledescription="carrossel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
      onKeyDown={onKeyDown}
    >
      <div
        className="site-carousel-viewport"
        aria-live={autoplayOn ? 'off' : 'polite'}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          swipeX.current = null
        }}
      >
        {slides.map((s, i) => (
          <figure
            key={s.src}
            className="site-carousel-slide"
            data-active={i === active || undefined}
            aria-hidden={i === active ? undefined : 'true'}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${n}`}
          >
            <img
              src={s.src}
              alt={s.alt || s.caption || ''}
              loading={i <= 1 ? 'eager' : 'lazy'}
              decoding="async"
              draggable="false"
            />
            {s.caption && (
              <figcaption className="site-carousel-caption">
                {s.year && <b className="site-carousel-year">{s.year}</b>}
                <span>{s.caption}</span>
              </figcaption>
            )}
          </figure>
        ))}

        {n > 1 && (
          <>
            <button
              type="button"
              className="site-carousel-arrow site-carousel-arrow-prev"
              onClick={() => go(active - 1)}
              aria-label="Foto anterior"
            >
              <Chevron />
            </button>
            <button
              type="button"
              className="site-carousel-arrow site-carousel-arrow-next"
              onClick={() => go(active + 1)}
              aria-label="Próxima foto"
            >
              <Chevron />
            </button>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="site-carousel-controls">
          <button
            type="button"
            className="site-carousel-play"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pausar a galeria' : 'Reproduzir a galeria'}
          >
            {playing ? (
              <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                <rect x="0" y="0" width="3.2" height="12" rx="0.5" />
                <rect x="6.8" y="0" width="3.2" height="12" rx="0.5" />
              </svg>
            ) : (
              <svg width="11" height="12" viewBox="0 0 11 12" fill="currentColor" aria-hidden="true">
                <path d="M0 0l11 6-11 6z" />
              </svg>
            )}
          </button>

          <div className="site-carousel-dots" role="group" aria-label="Escolher foto">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className="site-carousel-dot"
                data-active={i === active || undefined}
                aria-current={i === active ? 'true' : undefined}
                aria-label={`Ir para a foto ${i + 1}`}
                onClick={() => go(i)}
              />
            ))}
          </div>

          <span className="site-carousel-count" aria-hidden="true">
            {active + 1} / {n}
          </span>
        </div>
      )}
    </div>
  )
}

// One drawn chevron pointing left; the "next" button flips it with scaleX(-1).
function Chevron() {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 1 2 8l6 7" />
    </svg>
  )
}
