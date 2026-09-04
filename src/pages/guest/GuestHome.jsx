import PageHeader from '../../components/PageHeader.jsx'
import Card from '../../components/Card.jsx'
import CourtSchedule from '../../components/CourtSchedule.jsx'
import RequestForm from '../../components/RequestForm.jsx'

const legend = [
  { label: 'Livre', style: { background: 'var(--card)', border: '1px solid var(--line)' } },
  { label: 'Ocupado', style: { background: 'rgba(181,98,47,0.4)' } },
]

export default function GuestHome() {
  return (
    <section className="panel">
      <PageHeader
        title="Bem-vindo(a)"
        subtitle="Veja o que o clube tem disponível. Para confirmar uma reserva, vamos só pedir seu nome e telefone."
      />

      <h2 className="section-title" style={{ marginTop: 0 }}>
        Quadras disponíveis
      </h2>
      <CourtSchedule mode="guest" legend={legend} />

      <h2 className="section-title">Salão de eventos</h2>
      <Card
        title="Consultar data para casamento, aniversário ou confraternização"
        sub="Preencha os dados abaixo e a recepção te retorna com o orçamento."
      >
        <RequestForm
          fields={[
            { name: 'nome', label: 'Nome', placeholder: 'Nome completo' },
            { name: 'telefone', label: 'Telefone', placeholder: '(00) 00000-0000' },
            { name: 'data', label: 'Data desejada', placeholder: 'dd/mm/aaaa', full: true },
          ]}
          submitLabel="Enviar pedido de orçamento"
          successMessage="Pedido enviado. A recepção retorna com o orçamento pelo telefone informado."
        />
      </Card>
    </section>
  )
}
