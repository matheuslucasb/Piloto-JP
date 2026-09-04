import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import useChartColors from './useChartColors.js'
import { financeSeries } from '../../data/clubData.js'

const brl = (v) => `${(v / 1000).toLocaleString('pt-BR')}k`

export default function FinanceChart() {
  const c = useChartColors()

  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={financeSeries}>
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
          <Line
            type="monotone"
            dataKey="entradas"
            name="Entradas"
            stroke={c.success}
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="saidas"
            name="Saídas"
            stroke={c.danger}
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
