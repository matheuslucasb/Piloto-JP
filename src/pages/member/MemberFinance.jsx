import PageHeader from '../../components/PageHeader.jsx'
import Tag from '../../components/Tag.jsx'
import { memberPaymentHistory, memberProfile } from '../../data/clubData.js'

export default function MemberFinance() {
  const emDia = memberProfile.emDia

  return (
    <section className="panel">
      <PageHeader title="Financeiro" subtitle="Sua situação de mensalidade." />

      <div className={'callout' + (emDia ? '' : ' late')}>
        <h2 className="callout-title">
          {emDia ? 'Você está em dia' : 'Mensalidade em atraso'}
        </h2>
        <p>
          Próximo vencimento: {memberProfile.proximoVencimento} —{' '}
          {memberProfile.valorMensalidade}
        </p>
      </div>

      <h2 className="section-title">Histórico</h2>
      {memberPaymentHistory.map((item) => (
        <div className="list-row" key={item.titulo}>
          <span>{item.titulo}</span>
          <Tag variant={item.status}>{item.label}</Tag>
        </div>
      ))}
    </section>
  )
}
