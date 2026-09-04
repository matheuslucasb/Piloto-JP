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
import { financeSeries } from '../../data/clubData.js'

const brl = (v) => `${(v / 1000).toLocaleString('pt-BR')}k`

export default function EntriesExpensesChart() {
  const c = useChartColors()

  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={financeSeries} barGap={4}>
          <CartesianGrid stroke={c.line} vertical={false} />
          <XAxis
            dataKey="mes"
            tickLine={false}
            axisLine={false}
            tick={{ fill: c.inkSoft, fontSize: 11 }}
          />
          <YAxis
            tickFormatter={brl}
            tickLine={false}
            axisLine={false}
            width={38}
            tick={{ fill: c.inkSoft, fontSize: 11 }}
          />
          <Tooltip
            formatter={(v) => `R$ ${v.toLocaleString('pt-BR')}`}
            contentStyle={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 8,
              fontSize: 12,
              color: 'var(--ink)',
            }}
          />
          <Bar dataKey="entradas" name="Entradas" fill={c.success} radius={[5, 5, 0, 0]} maxBarSize={16} isAnimationActive={false} />
          <Bar dataKey="saidas" name="Saídas" fill={c.danger} radius={[5, 5, 0, 0]} maxBarSize={16} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
