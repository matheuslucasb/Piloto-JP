import PageHeader from '../../components/PageHeader.jsx'
import Timeline from '../../components/Timeline.jsx'
import { clubSchedule } from '../../data/clubData.js'

export default function Calendar() {
  return (
    <section className="panel">
      <PageHeader
        title="Agenda geral do clube"
        subtitle="Todos os compromissos num só lugar: jogos, treinos, eventos, manutenções e reuniões."
      />
      <Timeline items={clubSchedule} />
    </section>
  )
}
