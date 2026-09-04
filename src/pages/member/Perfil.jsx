import PageHeader from '../../components/PageHeader.jsx'
import IdCard from '../../components/IdCard.jsx'

export default function Perfil() {
  return (
    <section className="panel">
      <PageHeader
        title="Perfil"
        subtitle="Sua carteirinha digital. Mostre na portaria pra liberar entrada."
      />
      <IdCard />
    </section>
  )
}
