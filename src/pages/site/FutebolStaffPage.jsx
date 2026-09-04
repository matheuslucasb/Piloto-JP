import { useEffect } from 'react'

import PlayerSilhouette from '../../components/site/PlayerSilhouette.jsx'
import { FutHero, FutSection } from '../../components/site/FutLayout.jsx'
import { footballStaff } from '../../data/siteContent.js'

function StaffCard({ person }) {
  return (
    <li className="site-fut-staff-card">
      <div className="site-fut-staff-photo">
        {person.foto ? (
          <img src={person.foto} alt={person.nome || person.cargo} loading="lazy" />
        ) : (
          <PlayerSilhouette />
        )}
      </div>
      <div className="site-fut-staff-body">
        <p className={'site-fut-staff-name' + (person.nome ? '' : ' is-empty')}>
          {person.nome || 'A definir'}
        </p>
        <p className="site-fut-staff-role">{person.cargo}</p>
      </div>
    </li>
  )
}

// /futebol/comissao-tecnica e /futebol/diretoria — mesmo layout (grid de 4
// colunas, cards verticais de busto). `kind` escolhe os dados.
export default function FutebolStaffPage({ kind }) {
  const data = footballStaff[kind]

  useEffect(() => {
    document.title = `${data.title} · Sociedade Esportiva João Pessoa`
  }, [data.title])

  return (
    <div className="site-page site-fut">
      <FutHero
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        titleId="fut-staff-title"
      />
      <FutSection labelledby="fut-staff-title">
        <ul className="site-fut-staff-grid site-stagger">
          {data.people.map((p, i) => (
            <StaffCard person={p} key={p.nome || p.cargo + i} />
          ))}
        </ul>
      </FutSection>
    </div>
  )
}
