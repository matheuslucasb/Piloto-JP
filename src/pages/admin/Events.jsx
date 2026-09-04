import MonthGrid from '../../components/MonthGrid.jsx'
import PageHeader from '../../components/PageHeader.jsx'
import { eventsMonth } from '../../data/clubData.js'

export default function Events() {
  return (
    <section className="panel">
      <PageHeader
        title="Salão de eventos"
        subtitle="Disponibilidade do salão em setembro."
      />
      <MonthGrid
        daysInMonth={eventsMonth.daysInMonth}
        blanksBefore={eventsMonth.blanksBefore}
        reservedDays={eventsMonth.reservedDays}
      />
    </section>
  )
}
