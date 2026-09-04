import Card from '../../components/Card.jsx'
import KpiCard from '../../components/KpiCard.jsx'
import PageHeader from '../../components/PageHeader.jsx'
import Tag from '../../components/Tag.jsx'
import EntriesExpensesChart from '../../components/charts/EntriesExpensesChart.jsx'
import RevenueDonutChart from '../../components/charts/RevenueDonutChart.jsx'
import OccupancyBars from '../../components/charts/OccupancyBars.jsx'
import WeeklyRevenueChart from '../../components/charts/WeeklyRevenueChart.jsx'
import { overviewKpis, upcomingCommitments } from '../../data/clubData.js'

export default function Overview() {
  return (
    <section className="panel">
      <PageHeader
        title="Bom dia, Marcos"
        subtitle="Resumo do clube hoje, terça-feira."
      />

      <div className="kpi-row">
        {overviewKpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>

      <div className="dash-grid">
        <Card title="Distribuição de receitas" sub="Composição da receita do mês por origem.">
          <RevenueDonutChart />
        </Card>
        <Card title="Ocupação por espaço / quadra" sub="Taxa de uso na semana atual.">
          <OccupancyBars />
        </Card>
        <Card
          className="span-2"
          title="Faturamento e agendamentos da semana"
          sub="Reservas de quadras, quiosques e salão — segunda a domingo."
        >
          <WeeklyRevenueChart />
        </Card>
      </div>

      <div className="two-col" style={{ marginTop: 16 }}>
        <Card
          title="Entradas x saídas — últimos 6 meses"
          sub="Mensalidades, quadras avulsas e eventos, contra despesas do clube."
        >
          <EntriesExpensesChart />
        </Card>
        <Card title="Próximos compromissos">
          {upcomingCommitments.map((row) => (
            <div className="list-row" key={row.label}>
              <span>{row.label}</span>
              <Tag variant={row.status}>{row.tag}</Tag>
            </div>
          ))}
        </Card>
      </div>
    </section>
  )
}
