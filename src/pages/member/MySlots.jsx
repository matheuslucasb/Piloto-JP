import PageHeader from '../../components/PageHeader.jsx'
import Tag from '../../components/Tag.jsx'
import { memberSlots } from '../../data/clubData.js'

export default function MySlots() {
  return (
    <section className="panel">
      <PageHeader
        title="Meus horários"
        subtitle="Suas próximas reservas no clube."
      />
      {memberSlots.map((slot) => (
        <div className="list-row" key={slot.titulo}>
          <span>{slot.titulo}</span>
          <Tag variant={slot.status}>{slot.situacao}</Tag>
        </div>
      ))}
    </section>
  )
}
