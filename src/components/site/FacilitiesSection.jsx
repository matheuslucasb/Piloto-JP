import { facilities, facilitiesLede } from '../../data/siteContent.js'

function Facility({ f, feature }) {
  return (
    <li className={'site-facility' + (feature ? ' is-feature' : '')}>
      <div className="site-facility-photo">
        {f.foto ? (
          <img src={f.foto} alt={f.nome} loading="lazy" />
        ) : (
          <span className="site-photo-slot">Foto em breve</span>
        )}
      </div>
      <div className="site-facility-body">
        <h3>{f.nome}</h3>
        <p>{f.desc}</p>
        <ul className="site-facility-tags">
          {f.detalhes.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function FacilitiesSection() {
  // O campo e o Salão 02 (o maior) entram como cards largos; o resto num grid.
  const campo = facilities[0]
  const meio = facilities.slice(1, 5)
  const salao2 = facilities[5]

  return (
    <>
      <p className="site-lede">{facilitiesLede}</p>
      <ul className="site-facilities">
        {campo && <Facility f={campo} feature />}
        {meio.map((f) => (
          <Facility key={f.nome} f={f} />
        ))}
        {salao2 && <Facility f={salao2} feature />}
      </ul>
    </>
  )
}
