import PlayerSilhouette from './PlayerSilhouette.jsx'

// foto: string (import) → mostra a foto. null → silhueta genérica.
// posicao: '' → "A definir".
export default function PlayerCard({ nome, posicao, foto }) {
  return (
    <li className="site-player">
      <div className="site-player-photo">
        {foto ? <img src={foto} alt={nome} loading="lazy" /> : <PlayerSilhouette />}
      </div>
      <p className="site-player-name">{nome}</p>
      <p className="site-player-pos">{posicao || 'A definir'}</p>
    </li>
  )
}
