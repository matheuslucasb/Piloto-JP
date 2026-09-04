import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal.js'
import { homeSupporters } from '../../data/siteContent.js'

// Marcas abstratas para os espaços ainda sem logo real — nenhuma se parece
// com um logotipo existente; servem só de preenchimento do mural.
const MARKS = [
  <g key="a">
    <circle cx="12" cy="12" r="8.5" />
    <rect x="7.5" y="7.5" width="9" height="9" />
  </g>,
  <g key="b">
    <path d="M4 15l8-8 8 8" />
    <path d="M4 20l8-8 8 8" />
  </g>,
  <g key="c">
    <path d="M12 3.5l8 4.6v8.8L12 20.5 4 16.9V8.1z" />
  </g>,
  <g key="d">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
  </g>,
  <g key="e">
    <path d="M12 4.5l8 15H4z" />
  </g>,
  <g key="f">
    <path d="M6 20V10M12 20V4M18 20v-7" />
  </g>,
]

function Mark({ i }) {
  return (
    <svg
      className="site-spon-mark"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {MARKS[i % MARKS.length]}
    </svg>
  )
}

function Slot({ slot, index }) {
  return (
    <li className={'site-spon-slot' + (slot.logo ? '' : ' is-empty')}>
      {slot.logo ? (
        <img src={slot.logo} alt={slot.nome || ''} loading="lazy" />
      ) : (
        <Mark i={index} />
      )}
    </li>
  )
}

// Preview "Quem Apoia" logo acima do rodapé — mural de patrocínio em 3
// níveis (master / oficiais / parceiros). Logos em monocromático claro sobre
// o verde; ganham cor + leve escala no hover. Entrada por scroll: fade
// progressivo por categoria (useReveal, one-shot).
export default function HomeSupporters() {
  const [ref, shown] = useReveal()
  const { eyebrow, title, note, cta, tiers } = homeSupporters

  return (
    <section
      className="site-chapter site-spon"
      id="home-quem-apoia"
      ref={ref}
      data-shown={shown || undefined}
      aria-labelledby="home-quem-apoia-title"
    >
      <div className="site-spon-inner">
        <header className="site-spon-head">
          <p className="site-spon-eyebrow">
            <span className="site-spon-eyebrow-line" />
            {eyebrow}
          </p>
          <h2 className="site-spon-title" id="home-quem-apoia-title">
            {title}
          </h2>
          <p className="site-spon-note">{note}</p>
        </header>

        <div className="site-spon-tiers">
          {tiers.map((tier, ti) => (
            <div className={`site-spon-tier is-${tier.key}`} key={tier.key}>
              <p className="site-spon-tier-label">{tier.label}</p>
              <ul className="site-spon-row">
                {tier.slots.map((slot, si) => (
                  <Slot slot={slot} index={ti * 3 + si} key={si} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {cta ? (
          <Link to={cta.to} className="site-more site-spon-more">
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  )
}
