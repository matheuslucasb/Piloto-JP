import PageHeader from '../../components/PageHeader.jsx'
import Timeline from '../../components/Timeline.jsx'
import { clubSchedule } from '../../data/clubData.js'

export default function MemberAgenda() {
  return (
    <section className="panel">
      <PageHeader
        title="Agenda do clube"
        subtitle="Próximos jogos, treinos e eventos abertos aos sócios."
      />
      <Timeline items={clubSchedule} />
    </section>
  )
}
