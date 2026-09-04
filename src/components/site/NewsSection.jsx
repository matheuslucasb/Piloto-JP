import { newsLede, newsItems } from '../../data/siteContent.js'

// Mural institucional — estrutura pronta; sem notícias inventadas.
// A primeira publicação entra em destaque (linha larga); as demais em grade.
function NewsCard({ item, lead }) {
  return (
    <li className={'site-news-item' + (lead ? ' is-lead' : '')}>
      <span className="site-news-kicker">{item.tipo}</span>
      <p className="site-news-title">{item.titulo}</p>
      {item.data ? (
        <span className="site-news-date">{item.data}</span>
      ) : (
        <span className="site-news-flag">Aguardando publicação</span>
      )}
    </li>
  )
}

export default function NewsSection() {
  const [lead, ...rest] = newsItems

  return (
    <>
      <p className="site-lede">{newsLede}</p>
      <ul className="site-news">
        {lead && <NewsCard item={lead} lead key="lead" />}
        {rest.map((n, i) => (
          <NewsCard item={n} key={i} />
        ))}
      </ul>
      <p className="site-news-note">As publicações do clube passam a aparecer aqui.</p>
    </>
  )
}
