import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import useChartColors from './useChartColors.js'
import { weeklyBookings } from '../../data/clubData.js'

const brl = (v) => `R$ ${v.toLocaleString('pt-BR')}`
const brlShort = (v) => `${(v / 1000).toLocaleString('pt-BR')}k`

export default function WeeklyRevenueChart() {
  const c = useChartColors()
  const total = weeklyBookings.reduce((sum, d) => sum + d.faturamento, 0)
  const agendamentos = weeklyBookings.reduce((sum, d) => sum + d.agendamentos, 0)

  return (
    <div>
      <div className="chart-stat">
        <span className="chart-stat-value">{brl(total)}</span>
        <span className="chart-stat-label">arrecadados esta semana · {agendamentos} agendamentos</span>
      </div>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyBookings} barGap={4}>
            <CartesianGrid stroke={c.line} vertical={false} />
            <XAxis
              dataKey="dia"
              tickLine={false}
              axisLine={false}
              tick={{ fill: c.inkSoft, fontSize: 11 }}
            />
            <YAxis
              tickFormatter={brlShort}
              tickLine={false}
              axisLine={false}
              width={38}
              tick={{ fill: c.inkSoft, fontSize: 11 }}
            />
            <Tooltip
              formatter={(v, name, item) => [
                `${brl(v)} · ${item.payload.agendamentos} agendamentos`,
                'Faturamento',
              ]}
              contentStyle={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 8,
                fontSize: 12,
                color: 'var(--ink)',
              }}
            />
            <Bar
              dataKey="faturamento"
              name="Faturamento"
              fill={c.blue}
              radius={[6, 6, 0, 0]}
              maxBarSize={34}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
