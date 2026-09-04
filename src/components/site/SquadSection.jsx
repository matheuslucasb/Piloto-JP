import PlayerCard from './PlayerCard.jsx'
import { squad, squadNote } from '../../data/siteContent.js'

export default function SquadSection() {
  return (
    <>
      <p className="site-lede">{squadNote}</p>
      <ul className="site-squad">
        {squad.map((p) => (
          <PlayerCard key={p.nome} nome={p.nome} posicao={p.posicao} foto={p.foto} />
        ))}
      </ul>
    </>
  )
}
