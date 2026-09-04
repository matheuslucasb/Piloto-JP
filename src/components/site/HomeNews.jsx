import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal.js'
import { homeNews } from '../../data/siteContent.js'

// Ícone discreto para o placeholder de capa (mesmo da "Nossa Estrutura").
function PhotoGlyph() {
  return (
    <svg viewBox="0 0 24 20" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="7" r="2" fill="currentColor" />
      <path d="M3 17l6-6 4 4 3-3 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NewsCard({ item, feature }) {
  return (
    <Link
      to="/noticias"
      className={'site-hnews-card' + (feature ? ' is-feature' : '')}
      aria-label={`${item.titulo} — ler notícia`}
    >
      <span className="site-hnews-photo" aria-hidden="true">
        {item.foto ? (
          <img src={item.foto} alt="" loading="lazy" />
        ) : (
          <>
            <PhotoGlyph />
            <span className="site-hnews-photo-tag">Foto em breve</span>
          </>
        )}
      </span>
      <span className="site-hnews-body">
        <span className="site-hnews-meta">
          <span className="site-hnews-cat">{item.categoria}</span>
          {item.quando ? <span className="site-hnews-when">{item.quando}</span> : null}
        </span>
        <span className="site-hnews-title">{item.titulo}</span>
        <span className="site-hnews-sum">{item.resumo}</span>
        <span className="site-hnews-cue">
          Ler notícia
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </Link>
  )
}

// Preview de notícias na inicial — 1 card em destaque + 2 menores, todos
// levando a /noticias. Conteúdo real do clube.
// Entrada por scroll: cabeçalho e CTA em bloco, cards em cascata (useReveal).
export default function HomeNews() {
  const [ref, shown] = useReveal()
  const { eyebrow, title, sub, note, items } = homeNews
  const [feature, ...rest] = items

  return (
    <section
      className="site-chapter site-hnews"
      id="home-noticias"
      ref={ref}
      data-shown={shown || undefined}
      aria-labelledby="home-noticias-title"
    >
      <div className="site-hnews-inner">
        <header className="site-hnews-head">
          <p className="site-hnews-eyebrow">
            <span className="site-hnews-eyebrow-line" />
            {eyebrow}
          </p>
          <h2 className="site-hnews-title-lg" id="home-noticias-title">
            {title}
          </h2>
          <p className="site-hnews-subtitle">{sub}</p>
          {note ? <p className="site-hnews-note">{note}</p> : null}
        </header>

        <div className="site-hnews-grid">
          <NewsCard item={feature} feature />
          <div className="site-hnews-side">
            {rest.map((item) => (
              <NewsCard item={item} key={item.titulo} />
            ))}
          </div>
        </div>

        <Link to="/noticias" className="site-more site-hnews-more">
          Ver todas as notícias
        </Link>
      </div>
    </section>
  )
}
