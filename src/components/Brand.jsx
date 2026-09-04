import { clubName } from '../data/clubData.js'

// Marca do clube na sidebar (sócio e admin): monograma + nome em duas linhas.
export default function Brand() {
  return (
    <div className="side-brand">
      <div className="mark" aria-hidden="true">
        SE
      </div>
      <div className="side-brand-name">
        {clubName[0]}
        <br />
        {clubName[1]}
      </div>
    </div>
  )
}
