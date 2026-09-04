import CourtSchedule from '../../components/CourtSchedule.jsx'
import PageHeader from '../../components/PageHeader.jsx'

const legend = [
  { label: 'Livre', style: { background: 'var(--card)', border: '1px solid var(--line)' } },
  { label: 'Reservado', style: { background: 'rgba(181,98,47,0.4)' } },
  { label: 'Bloqueado (simulação)', style: { background: 'rgba(242,169,59,0.5)' } },
]

export default function Courts() {
  return (
    <section className="panel">
      <PageHeader
        title="Quadras"
        subtitle="Grade da semana. Clique num horário livre para simular um bloqueio administrativo."
      />
      <CourtSchedule mode="admin" legend={legend} />
    </section>
  )
}
