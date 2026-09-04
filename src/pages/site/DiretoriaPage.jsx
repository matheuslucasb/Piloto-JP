import { useEffect } from 'react'

import Chapter from '../../components/site/Chapter.jsx'
import { diretoria } from '../../data/siteContent.js'
import diretoriaImg from '../../assets/diretoria.jpg'

// Governança do clube. Só a estrutura dos órgãos — nomes, cargos e fotos da
// gestão são publicados pela secretaria depois (nada inventado).
export default function DiretoriaPage() {
  useEffect(() => {
    document.title = 'Diretoria · Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <div className="site-page">
      <Chapter id="diretoria" num="01" title="Diretoria" align="left" layout="stack">
        <p className="site-lede site-lede-lg">{diretoria.lede}</p>

        <ul className="site-org">
          {diretoria.orgaos.map((o) => (
            <li className="site-org-block" key={o.nome}>
              <h3>{o.nome}</h3>
              <p className="site-org-note">{o.nota}</p>
              <span className="site-org-pill">Composição em breve</span>
            </li>
          ))}
        </ul>

        <figure className="site-oc-portrait is-wide">
          <img
            src={diretoriaImg}
            alt="A diretoria da Sociedade Esportiva João Pessoa reunida"
            loading="lazy"
          />
          <figcaption>A diretoria da Sociedade Esportiva João Pessoa.</figcaption>
        </figure>
      </Chapter>
    </div>
  )
}
