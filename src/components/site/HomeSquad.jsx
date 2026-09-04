import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal.js'
import { homeSquad } from '../../data/siteContent.js'

function PhotoGlyph() {
  return (
    <svg viewBox="0 0 24 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="7" r="2" fill="currentColor" />
      <path d="M3 17l6-6 4 4 3-3 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SLIDE_MS = 520

// Preview "Nosso Elenco" entre Notícias e Apoiadores — 2 colunas: texto à
// esquerda, deck de 5 fotos empilhadas à direita. A carta da frente desliza
// para fora (clique / arraste / auto-play) revelando a próxima. Sem
// biblioteca de animação: transições CSS por data-pos + classe .is-leaving.
export default function HomeSquad() {
  const [ref, shown] = useReveal()
  const { eyebrow, title, text, badges, cardBadge, photos, cta } = homeSquad
  const n = photos.length

  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )

  const [active, setActive] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const [paused, setPaused] = useState(false)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)

  const activeRef = useRef(0)
  const animating = useRef(false)
  const down = useRef(null)
  const swiped = useRef(false)
  useEffect(() => {
    activeRef.current = active
  }, [active])

  const advance = useCallback(() => {
    if (animating.current) return
    animating.current = true
    setLeaving(activeRef.current)
    setActive((a) => (a + 1) % n)
    window.setTimeout(() => {
      setLeaving(null)
      animating.current = false
    }, SLIDE_MS)
  }, [n])

  // auto-play (pausa em hover / foco / aba oculta / movimento reduzido)
  useEffect(() => {
    if (reduced || paused) return undefined
    const id = window.setInterval(() => {
      if (!document.hidden) advance()
    }, 4200)
    return () => window.clearInterval(id)
  }, [advance, paused, reduced])

  function onPointerDown(e) {
    down.current = { x: e.clientX, moved: 0 }
    swiped.current = false
    setDragging(true)
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  function onPointerMove(e) {
    const d = down.current
    if (!d) return
    d.moved = e.clientX - d.x
    if (Math.abs(d.moved) > 6) swiped.current = true
    setDrag(Math.max(-90, Math.min(40, d.moved)))
  }
  function onPointerEnd() {
    const d = down.current
    down.current = null
    setDragging(false)
    setDrag(0)
    if (d && d.moved <= -44) advance()
  }
  function onDeckClick() {
    if (swiped.current) return
    advance()
  }
  function onKeyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      advance()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setActive((a) => (a - 1 + n) % n)
    }
  }

  return (
    <section
      className="site-chapter site-team"
      id="home-elenco"
      ref={ref}
      data-shown={shown || undefined}
      aria-labelledby="home-elenco-title"
    >
      <div className="site-team-inner">
        <div className="site-team-text">
          <p className="site-team-eyebrow">
            <span className="site-team-eyebrow-line" />
            {eyebrow}
          </p>
          <h2 className="site-team-title" id="home-elenco-title">
            {title}
          </h2>
          <p className="site-team-lead">{text}</p>
          <ul className="site-team-badges">
            {badges.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Link to={cta.to} className="site-more site-team-more">
            {cta.label}
          </Link>
        </div>

        <div className="site-team-media">
          <div
            className="site-team-deck"
            role="group"
            aria-roledescription="galeria"
            aria-label="Fotos do elenco"
            tabIndex={0}
            data-dragging={dragging || undefined}
            style={{ '--drag': drag }}
            onKeyDown={onKeyDown}
            onClick={onDeckClick}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <ul className="site-team-stack">
              {photos.map((photo, i) => {
                const pos = (i - active + n) % n
                return (
                  <li
                    key={i}
                    className={'site-team-card' + (leaving === i ? ' is-leaving' : '')}
                    data-pos={pos}
                    aria-hidden={pos !== 0 || undefined}
                  >
                    <span className="site-team-photo">
                      {photo.src ? (
                        <img src={photo.src} alt={photo.alt || ''} loading="lazy" />
                      ) : (
                        <>
                          <span className="site-team-photo-no">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <PhotoGlyph />
                          <span className="site-team-photo-tag">Foto em breve</span>
                        </>
                      )}
                    </span>
                    <span className="site-team-card-badge">{cardBadge}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="site-team-dots" role="tablist" aria-label="Selecionar foto">
            {Array.from({ length: n }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Foto ${i + 1} de ${n}`}
                className={'site-team-dot' + (i === active ? ' is-on' : '')}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <p className="site-team-live" aria-live="polite">
            Foto {active + 1} de {n}
          </p>
        </div>
      </div>
    </section>
  )
}
