import CourtSchedule from '../../components/CourtSchedule.jsx'
import PageHeader from '../../components/PageHeader.jsx'

const legend = [
  { label: 'Livre', style: { background: 'var(--card)', border: '1px solid var(--line)' } },
  { label: 'Ocupado', style: { background: 'rgba(181,98,47,0.4)' } },
  { label: 'Sua reserva', style: { background: 'rgba(242,169,59,0.5)' } },
]

export default function Book() {
  return (
    <section className="panel">
      <PageHeader
        title="Reservar quadra"
        subtitle="Escolha um horário livre. Clique de novo para desmarcar."
      />
      <CourtSchedule mode="member" legend={legend} />
    </section>
  )
}
