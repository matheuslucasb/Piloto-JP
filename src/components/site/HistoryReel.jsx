import { useCallback, useEffect, useRef, useState } from 'react'
import useReveal from '../../hooks/useReveal.js'
import { history } from '../../data/siteContent.js'
import { conquests } from '../../data/siteMedia.js'

const N = conquests.length

// menor deslocamento no anel (mostra 1 antes / 1 depois)
function ringOffset(i, active) {
  let d = ((i - active) % N + N) % N
  if (d > N / 2) d -= N
  return d
}

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === 'up' ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6'}
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// "Vertical Focus Reel" das Conquistas: as fotos deslizam de baixo para cima,
// a central em foco (scale 1) e as vizinhas parciais (scale 0.9, opacidade 0.4).
// Transições em CSS (curva --ease-out forte) — o projeto não usa biblioteca de
// animação; a curva faz o papel do "spring".
export default function HistoryReel() {
  const [ref, shown] = useReveal()
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )

  const [active, setActive] = useState(0)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [paused, setPaused] = useState(false)
  const start = useRef(null)
  const swiped = useRef(false)

  const go = useCallback((step) => setActive((a) => (a + step + N) % N), [])

  // auto-play (pausa em hover / foco / aba oculta / movimento reduzido)
  useEffect(() => {
    if (reduced || paused) return undefined
    const id = window.setInterval(() => {
      if (!document.hidden) go(1)
    }, 5000)
    return () => window.clearInterval(id)
  }, [go, paused, reduced])

  function onPointerDown(e) {
    start.current = { y: e.clientY, moved: 0 }
    swiped.current = false
    setDragging(true)
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  function onPointerMove(e) {
    const s = start.current
    if (!s) return
    s.moved = e.clientY - s.y
    if (Math.abs(s.moved) > 6) swiped.current = true
    setDrag(Math.max(-90, Math.min(90, s.moved * 0.6)))
  }
  function onPointerEnd() {
    const s = start.current
    start.current = null
    setDragging(false)
    setDrag(0)
    if (!s) return
    if (s.moved <= -44) go(1)
    else if (s.moved >= 44) go(-1)
  }
  function onSlideClick(i) {
    if (swiped.current) return
    if (i !== active) setActive(i)
  }
  function onKeyDown(e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault()
      go(1)
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault()
      go(-1)
    }
  }

  const activeItem = conquests[active]

  return (
    <section
      className="site-hist-reel"
      id="conquistas"
      ref={ref}
      data-shown={shown || undefined}
      aria-labelledby="conquistas-title"
    >
      <div className="site-hist-reel-inner">
        <header className="site-hist-reel-head">
          <p className="site-hist-eyebrow">
            <span className="site-hist-eyebrow-line" />
            {history.conquistasEyebrow}
          </p>
          <h2 className="site-hist-h2" id="conquistas-title">
            {history.conquistasTitle}
          </h2>
          <p className="site-hist-lead">{history.conquistasIntro}</p>
        </header>

        <div className="site-hist-reel-frame">
          <div
            className="site-hist-reel-stage"
            role="group"
            aria-roledescription="carrossel vertical"
            aria-label="Galeria de conquistas"
            tabIndex={0}
            data-dragging={dragging || undefined}
            style={{ '--drag': drag }}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <ul className="site-hist-reel-track">
              {conquests.map((c, i) => {
                const offset = ringOffset(i, active)
                const far = !reduced && Math.abs(offset) > 1
                const pos = far ? (offset < 0 ? -9 : 9) : offset
                return (
                  <li
                    key={i}
                    className="site-hist-reel-slide"
                    data-pos={pos}
                    aria-hidden={far || i !== active || undefined}
                  >
                    <button
                      type="button"
                      className="site-hist-reel-shot"
                      tabIndex={i === active ? -1 : 0}
                      aria-label={i === active ? undefined : `Ver: ${c.caption}`}
                      onClick={() => onSlideClick(i)}
                    >
                      <img src={c.src} alt={c.alt} loading="lazy" />
                      {c.year ? <span className="site-hist-reel-year">{c.year}</span> : null}
                    </button>
                  </li>
                )
              })}
            </ul>

            <button
              type="button"
              className="site-hist-reel-nav is-up"
              onClick={() => go(-1)}
              aria-label="Conquista anterior"
            >
              <Chevron dir="up" />
            </button>
            <button
              type="button"
              className="site-hist-reel-nav is-down"
              onClick={() => go(1)}
              aria-label="Próxima conquista"
            >
              <Chevron dir="down" />
            </button>
          </div>

          <div className="site-hist-reel-side">
            <p className="site-hist-reel-caption" aria-live="polite">
              {activeItem.year ? (
                <span className="site-hist-reel-caption-year">{activeItem.year}</span>
              ) : null}
              {activeItem.caption}
            </p>
            <ul className="site-hist-reel-dots">
              {conquests.map((c, i) => (
                <li key={i}>
                  <button
                    type="button"
                    className={'site-hist-reel-dot' + (i === active ? ' is-on' : '')}
                    aria-label={c.caption}
                    aria-current={i === active ? 'true' : undefined}
                    onClick={() => setActive(i)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
