import { useEffect } from 'react'

import { FutHero, FutSection } from '../../components/site/FutLayout.jsx'
import { achievement } from '../../data/siteContent.js'
import { conquests } from '../../data/siteMedia.js'

export default function TitulosPage() {
  useEffect(() => {
    document.title = 'Títulos · Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <div className="site-page site-fut">
      <FutHero
        eyebrow="Futebol"
        title="Títulos"
        intro="As conquistas da Sociedade Esportiva João Pessoa. A relação completa dos títulos históricos está em levantamento pela diretoria."
        titleId="fut-titulos-title"
      />
      <FutSection labelledby="fut-titulos-title">
        <div className="site-fut-honour">
          <p className="site-fut-honour-label">{achievement.title}</p>
          <p className="site-fut-honour-year">{achievement.year}</p>
          <p className="site-fut-honour-line">{achievement.line}</p>
        </div>

        <ul className="site-fut-titulos-grid site-stagger">
          {conquests.map((c, i) => (
            <li className="site-fut-titulo" key={i}>
              <div className="site-fut-titulo-photo">
                <img src={c.src} alt={c.alt} loading="lazy" />
              </div>
              <div className="site-fut-titulo-body">
                {c.year ? <span className="site-fut-titulo-year">{c.year}</span> : null}
                <p className="site-fut-titulo-caption">{c.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </FutSection>
    </div>
  )
}
