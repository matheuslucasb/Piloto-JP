import { useEffect } from 'react'

import useReveal from '../../hooks/useReveal.js'
import Accent from '../../components/site/Accent.jsx'
import PlayerSilhouette from '../../components/site/PlayerSilhouette.jsx'
import HinoPlayer from '../../components/site/HinoPlayer.jsx'
import HistoryReel from '../../components/site/HistoryReel.jsx'
import { history } from '../../data/siteContent.js'
import { historyGallery } from '../../data/siteMedia.js'

// Seção com revelação por scroll (useReveal), sem depender do componente
// Chapter (que traz fundo claro).
function Section({ id, className, labelledby, children }) {
  const [ref, shown] = useReveal()
  return (
    <section
      ref={ref}
      id={id}
      className={className}
      data-shown={shown || undefined}
      aria-labelledby={labelledby}
    >
      {children}
    </section>
  )
}

function Eyebrow({ children }) {
  return (
    <p className="site-hist-eyebrow">
      <span className="site-hist-eyebrow-line" />
      {children}
    </p>
  )
}

export default function HistoriaPage() {
  useEffect(() => {
    document.title = 'História · Sociedade Esportiva João Pessoa'
  }, [])

  const { identity, memorial } = history

  return (
    <div className="site-page site-hist">
      {/* --- Hero --- */}
      <header className="site-hist-hero">
        <div className="site-hist-hero-media">
          <img src={history.heroImg} alt="" aria-hidden="true" />
        </div>
        <div className="site-hist-hero-inner">
          <p className="site-hist-hero-kicker">{history.heroKicker}</p>
          <h1 className="site-hist-hero-title">{history.heroTitle}</h1>
          <p className="site-hist-hero-lead">{history.intro}</p>
        </div>
      </header>

      {/* --- Linha do tempo --- */}
      <Section
        id="historia"
        className="site-hist-block site-hist-timeline"
        labelledby="historia-title"
      >
        <div className="site-hist-inner">
          <header className="site-hist-head">
            <Eyebrow>Linha do tempo</Eyebrow>
            <h2 className="site-hist-h2" id="historia-title">
              Uma <Accent>história</Accent> de bairro
            </h2>
          </header>
          <ol className="site-hist-line site-stagger">
            {history.timeline.map((m) => (
              <li className="site-hist-mark" key={m.titulo}>
                <span className="site-hist-mark-era">{m.era}</span>
                <h3 className="site-hist-mark-title">{m.titulo}</h3>
                <p className="site-hist-mark-text">{m.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* --- Identidade & símbolos --- */}
      <Section
        className="site-hist-block site-hist-identity"
        labelledby="identidade-title"
      >
        <div className="site-hist-inner">
          <header className="site-hist-head">
            <Eyebrow>Identidade</Eyebrow>
            <h2 className="site-hist-h2" id="identidade-title">
              Escudo, cores e <Accent>hino</Accent>
            </h2>
          </header>
          <div className="site-hist-id-grid site-stagger">
            <article className="site-hist-id-card">
              <div className="site-hist-id-crest">
                <img src={identity.escudoImg} alt="Escudo da Sociedade Esportiva João Pessoa" />
              </div>
              <div className="site-hist-id-body">
                <h3>{identity.escudoTitle}</h3>
                <p>{identity.escudoText}</p>
              </div>
            </article>
            <article className="site-hist-id-card">
              <div className="site-hist-id-body">
                <h3>{identity.hinoTitle}</h3>
                <p>{identity.hinoText}</p>
              </div>
              <HinoPlayer src={identity.hinoAudio} label="Hino da Sociedade Esportiva João Pessoa" />
            </article>
          </div>
        </div>
      </Section>

      {/* --- Conquistas: Vertical Focus Reel --- */}
      <HistoryReel />

      {/* --- Memorial + acervo --- */}
      <Section
        className="site-hist-block site-hist-memorial"
        labelledby="memorial-title"
      >
        <div className="site-hist-inner">
          <header className="site-hist-head">
            <Eyebrow>{memorial.eyebrow}</Eyebrow>
            <h2 className="site-hist-h2" id="memorial-title">
              {memorial.titulo}
            </h2>
            <p className="site-hist-lead">{memorial.texto}</p>
          </header>

          <ul className="site-hist-leaders site-stagger">
            {Array.from({ length: memorial.vagas }, (_, i) => (
              <li className="site-hist-leader" key={i}>
                <div className="site-hist-leader-frame">
                  <PlayerSilhouette />
                </div>
                <span className="site-hist-leader-note">Registro em breve</span>
              </li>
            ))}
          </ul>

          <div className="site-hist-gallery-head">
            <h3>{history.galleryTitle}</h3>
            <p>{history.galleryNote}</p>
          </div>
          <ul className="site-hist-gallery site-stagger">
            {historyGallery.map((g) => (
              <li key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  )
}
