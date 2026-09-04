import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal.js'
import Accent from './Accent.jsx'
import campoNovo from '../../assets/camponovoJP.png'
import { homeHistory } from '../../data/siteContent.js'

// Seção "Nossa História" da página inicial. Fluxo de página normal — sem sticky,
// sem altura artificial, sem scroll progressivo. Grid de 2 colunas: a foto do
// campo à esquerda, o conteúdo à direita. Quando a seção entra na viewport
// (useReveal → IntersectionObserver, o mesmo das outras seções), a foto surge
// (fade + scale) e o texto entra em cascata (.site-stagger, ~800ms). Depois
// fica estável. O scroll continua totalmente natural.
export default function HomeHistory() {
  const [ref, shown] = useReveal()
  const { eyebrow, titleLead, titleAccent, text, stats } = homeHistory

  return (
    <section
      className="site-chapter site-hh"
      id="home-historia"
      ref={ref}
      data-shown={shown || undefined}
      aria-labelledby="home-historia-title"
    >
      <div className="site-hh-block">
        <div className="site-hh-grid">
          <div className="site-hh-media">
            <img
              className="site-hh-photo-main"
              src={campoNovo}
              alt="Campo da Sociedade Esportiva João Pessoa"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="site-hh-text site-stagger">
            <p className="site-hh-eyebrow">
              <span className="site-hh-eyebrow-line" />
              {eyebrow}
            </p>
            <h2 className="site-hh-title" id="home-historia-title">
              <span>{titleLead}</span>
              <span className="site-hh-title-accent">
                <Accent>{titleAccent}</Accent>
              </span>
            </h2>
            <p className="site-hh-lead">{text}</p>
            <dl className="site-hh-stats">
              {stats.map((s) => (
                <div className="site-hh-stat" key={s.label}>
                  <dt className="site-hh-stat-num">{s.num}</dt>
                  <dd className="site-hh-stat-label">{s.label}</dd>
                </div>
              ))}
            </dl>
            <Link to="/historia" className="site-more site-hh-more">
              Conhecer a história completa
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
