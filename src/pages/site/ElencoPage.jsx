import { useEffect } from 'react'

import PlayerSilhouette from '../../components/site/PlayerSilhouette.jsx'
import { FutHero, FutSection } from '../../components/site/FutLayout.jsx'
import { squad, squadNote, rosterGroups } from '../../data/siteContent.js'

function PlayerCard({ p }) {
  return (
    <li className="site-fut-player">
      <div className="site-fut-player-photo">
        {p.foto ? (
          <img src={p.foto} alt={p.nome} loading="lazy" />
        ) : (
          <PlayerSilhouette />
        )}
      </div>
      <span className="site-fut-player-num" aria-hidden="true">
        {p.numero ?? '–'}
      </span>
      <div className="site-fut-player-info">
        <p className="site-fut-player-name">{p.nome}</p>
        <p className="site-fut-player-pos">{p.posicao || 'A definir'}</p>
      </div>
    </li>
  )
}

// /futebol/elenco — grupo dividido por posição. Enquanto os atletas não têm
// `grupo` definido, todos aparecem sob "Elenco 2025"; assim que a secretaria
// preencher, os grupos (Goleiros, Defensores, Meias, Atacantes) aparecem
// sozinhos.
export default function ElencoPage() {
  useEffect(() => {
    document.title = 'Elenco · Sociedade Esportiva João Pessoa'
  }, [])

  const groups = rosterGroups
    .map((g) => ({ ...g, players: squad.filter((p) => p.grupo === g.key) }))
    .filter((g) => g.players.length)

  const semGrupo = squad.filter((p) => !p.grupo)
  if (semGrupo.length) {
    groups.push({ key: 'elenco', label: 'Elenco 2025', players: semGrupo })
  }

  return (
    <div className="site-page site-fut">
      <FutHero
        eyebrow="Futebol"
        title="Elenco"
        intro={squadNote}
        titleId="fut-elenco-title"
      />
      <FutSection labelledby="fut-elenco-title">
        {groups.map((g) => (
          <div className="site-fut-roster-group" key={g.key}>
            <h2 className="site-fut-roster-group-title">
              <span className="site-fut-roster-group-line" />
              {g.label}
              <span className="site-fut-roster-group-count">{g.players.length}</span>
            </h2>
            <ul className="site-fut-roster-grid site-stagger">
              {g.players.map((p) => (
                <PlayerCard p={p} key={p.nome} />
              ))}
            </ul>
          </div>
        ))}
      </FutSection>
    </div>
  )
}
