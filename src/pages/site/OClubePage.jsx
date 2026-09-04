import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Chapter from '../../components/site/Chapter.jsx'
import Accent from '../../components/site/Accent.jsx'
import { clubHub, clubHubLinks } from '../../data/siteContent.js'
import { clubPatrimonio } from '../../data/siteMedia.js'
import heroImg from '../../assets/campo-fundo.jpg'
import diretoriaImg from '../../assets/diretoria.jpg'

function CardArrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10h11M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Hub de boas-vindas institucional. As páginas dos subtemas (História,
// Diretoria, Estrutura, Transparência) têm rotas próprias — os 4 cards no fim
// da página levam a elas.
export default function OClubePage() {
  useEffect(() => {
    document.title = 'O Clube · Sociedade Esportiva João Pessoa'
  }, [])

  return (
    <div className="site-page site-oc">
      <header className="site-oc-hero">
        <div className="site-oc-hero-media">
          <img src={heroImg} alt="" aria-hidden="true" />
        </div>
        <div className="site-oc-hero-inner">
          <p className="site-oc-hero-kicker">{clubHub.heroKicker}</p>
          <h1 className="site-oc-hero-title">{clubHub.heroTitle}</h1>
        </div>
      </header>

      <Chapter
        id="oc-sobre"
        num="01"
        title={<>Saiba mais sobre o <Accent>clube</Accent></>}
        align="left"
        layout="stack"
      >
        <p className="site-lede site-lede-lg">{clubHub.missionLead}</p>
        <div className="site-prose">
          {clubHub.missionParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="site-oc-gallery">
          {clubPatrimonio.map((g) => (
            <li key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </Chapter>

      <Chapter
        id="oc-diretoria-msg"
        num="02"
        title={<>Palavra da <Accent>diretoria</Accent></>}
        align="right"
        layout="split"
      >
        <div className="site-split-main">
          <div className="site-soon">
            <span className="site-soon-badge">Em breve</span>
            <p className="site-soon-text">{clubHub.diretoriaMessage}</p>
          </div>
        </div>
        <aside className="site-split-aside">
          <figure className="site-oc-portrait">
            <img src={diretoriaImg} alt="A diretoria da Sociedade Esportiva João Pessoa" loading="lazy" />
          </figure>
        </aside>
      </Chapter>

      <Chapter
        id="oc-explore"
        num="03"
        title="Explore o clube"
        align="left"
        layout="stack"
        density="compact"
      >
        <ul className="site-oc-cards">
          {clubHubLinks.map((q) => (
            <li key={q.to}>
              <Link to={q.to} className="site-oc-card">
                <span className="site-oc-card-label">{q.label}</span>
                <span className="site-oc-card-desc">{q.desc}</span>
                <span className="site-oc-card-cue">
                  Acessar <CardArrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Chapter>
    </div>
  )
}
