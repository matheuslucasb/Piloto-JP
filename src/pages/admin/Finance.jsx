import Card from '../../components/Card.jsx'
import KpiCard from '../../components/KpiCard.jsx'
import PageHeader from '../../components/PageHeader.jsx'
import Tag from '../../components/Tag.jsx'
import FinanceEvolutionChart from '../../components/charts/FinanceEvolutionChart.jsx'
import RevenueDonutChart from '../../components/charts/RevenueDonutChart.jsx'
import { financeEntries, financeKpis } from '../../data/clubData.js'

const STATUS = {
  pago: { variant: 'ok', label: 'Pago' },
  pendente: { variant: 'soon', label: 'Pendente' },
  atrasado: { variant: 'late', label: 'Atrasado' },
}

export default function Finance() {
  return (
    <section className="panel">
      <PageHeader
        title="Financeiro"
        subtitle="Receitas, despesas e transações do clube."
      />

      <div className="kpi-row">
        {financeKpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="two-col" style={{ marginTop: 16 }}>
        <Card title="Evolução financeira" sub="Fluxo de caixa por período.">
          <FinanceEvolutionChart />
        </Card>
        <Card title="Origem das entradas" sub="De onde vem a receita do mês.">
          <RevenueDonutChart />
        </Card>
      </div>

      <h2 className="section-title">Transações recentes</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Descrição / Membro</th>
              <th scope="col">Categoria</th>
              <th scope="col">Data / Hora</th>
              <th scope="col">Valor (R$)</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {financeEntries.map((e, i) => {
              const status = STATUS[e.status]
              return (
                <tr key={i}>
                  <td>{e.descricao}</td>
                  <td>{e.categoria}</td>
                  <td>
                    {e.data} · {e.hora}
                  </td>
                  <td className={`amount ${e.tipo}`}>{e.valor}</td>
                  <td>
                    <Tag variant={status.variant}>{status.label}</Tag>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
