import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal.js'
import { facilities, homeStructure } from '../../data/siteContent.js'

// Ícone discreto para o placeholder de foto.
function PhotoGlyph() {
  return (
    <svg viewBox="0 0 24 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="7" r="2" fill="currentColor" />
      <path d="M3 17l6-6 4 4 3-3 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// quantos cards ficam visíveis de cada lado do central
const SIDE = 2
const N = facilities.length

// menor deslocamento no anel de N cards (-N/2 … +N/2)
function ringOffset(i, active) {
  let d = ((i - active) % N + N) % N
  if (d > N / 2) d -= N
  return d
}

// Preview da estrutura na inicial — carrossel coverflow 3D dos 6 espaços
// (mesma base de dados de /o-clube). Card central em evidência, laterais
// recuados e girados no eixo Y. Navega por arraste, setas, dots, clique no
// card ou setas do teclado. Entra por scroll (useReveal, one-shot).
export default function HomeStructure() {
  const [ref, shown] = useReveal()
  const { eyebrow, title, sub } = homeStructure

  // com movimento reduzido o coverflow vira uma tira rolável — todos os
  // cards ficam visíveis e acessíveis (sem estado "far")
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )

  const [active, setActive] = useState(0)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const start = useRef(null)
  const swiped = useRef(false)

  const go = useCallback((step) => setActive((i) => (i + step + N) % N), [])

  function onPointerDown(e) {
    start.current = { x: e.clientX, moved: 0 }
    setDragging(true)
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  function onPointerMove(e) {
    const s = start.current
    if (!s) return
    s.moved = e.clientX - s.x
    setDrag(Math.max(-120, Math.min(120, s.moved * 0.7)))
  }
  function onPointerEnd() {
    const s = start.current
    start.current = null
    setDragging(false)
    setDrag(0)
    if (!s) return
    if (s.moved <= -46) go(1)
    else if (s.moved >= 46) go(-1)
    // suprime o clique sintético que dispara logo após um arraste
    if (Math.abs(s.moved) > 6) {
      swiped.current = true
      setTimeout(() => {
        swiped.current = false
      }, 0)
    }
  }
  function onCardClick(i) {
    if (swiped.current) return
    if (i !== active) setActive(i)
  }
  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
  }

  return (
    <section
      className="site-chapter site-struct"
      id="home-estrutura"
      ref={ref}
      data-shown={shown || undefined}
      aria-labelledby="home-estrutura-title"
    >
      <div className="site-struct-inner">
        <header className="site-struct-head">
          <p className="site-struct-eyebrow">
            <span className="site-struct-eyebrow-line" />
            {eyebrow}
          </p>
          <h2 className="site-struct-title" id="home-estrutura-title">
            {title}
          </h2>
          <p className="site-struct-sub">{sub}</p>
        </header>

        <div className="site-struct-deck-wrap">
          <div
            className="site-struct-deck"
            role="group"
            aria-roledescription="carrossel"
            aria-label="Espaços do clube"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
          >
            <ul
              className="site-struct-track"
              data-dragging={dragging || undefined}
              style={{ '--drag': drag }}
            >
              {facilities.map((f, i) => {
                const offset = ringOffset(i, active)
                const far = !reduced && Math.abs(offset) > SIDE
                const pos = far ? (offset < 0 ? -9 : 9) : offset
                return (
                  <li
                    key={f.nome}
                    className="site-struct-slide"
                    data-pos={pos}
                    aria-hidden={far || undefined}
                  >
                    <button
                      type="button"
                      className="site-struct-cover"
                      aria-current={i === active ? 'true' : undefined}
                      aria-label={i === active ? undefined : `Ver ${f.nome}`}
                      tabIndex={far ? -1 : 0}
                      onClick={() => onCardClick(i)}
                    >
                      <span className="site-struct-cover-photo">
                        {f.foto ? (
                          <img src={f.foto} alt={f.nome} loading="lazy" />
                        ) : (
                          <span className="site-struct-cover-ph">
                            <PhotoGlyph />
                            <span className="site-struct-cover-chip">Foto em breve</span>
                          </span>
                        )}
                      </span>
                      <span className="site-struct-cover-body">
                        <span className="site-struct-cover-tags">
                          {f.detalhes.slice(0, 2).map((d) => (
                            <span key={d}>{d}</span>
                          ))}
                        </span>
                        <span className="site-struct-cover-name">{f.nome}</span>
                        <span className="site-struct-cover-desc">{f.desc}</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="site-struct-controls">
            <button
              type="button"
              className="site-struct-arrow"
              onClick={() => go(-1)}
              aria-label="Espaço anterior"
            >
              <Chevron dir="prev" />
            </button>
            <ul className="site-struct-dots">
              {facilities.map((f, i) => (
                <li key={f.nome}>
                  <button
                    type="button"
                    className={'site-struct-dot' + (i === active ? ' is-on' : '')}
                    aria-label={f.nome}
                    aria-current={i === active ? 'true' : undefined}
                    onClick={() => setActive(i)}
                  />
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="site-struct-arrow"
              onClick={() => go(1)}
              aria-label="Próximo espaço"
            >
              <Chevron dir="next" />
            </button>
          </div>

          <p className="site-struct-live" aria-live="polite">
            {facilities[active].nome}
          </p>
        </div>

        <Link to="/estrutura" className="site-more site-struct-more">
          Conhecer toda a estrutura
        </Link>
      </div>
    </section>
  )
}
