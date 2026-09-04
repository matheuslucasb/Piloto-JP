import { useMemo, useState } from 'react'
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
import {
  financeSeries,
  weeklyBookings,
  financeDaily30,
  financeHourly24,
} from '../../data/clubData.js'

const brl = (v) => `R$ ${v.toLocaleString('pt-BR')}`
const brlShort = (v) => `${(v / 1000).toLocaleString('pt-BR')}k`

const PERIODS = [
  {
    key: '12m',
    label: '12 meses',
    data: () => financeSeries.map((d) => ({ label: d.mes, valor: d.entradas - d.saidas })),
  },
  { key: '30d', label: '30 dias', data: () => financeDaily30 },
  {
    key: '7d',
    label: '7 dias',
    data: () => weeklyBookings.map((d) => ({ label: d.dia, valor: d.faturamento })),
  },
  { key: '24h', label: '24 horas', data: () => financeHourly24 },
]

export default function FinanceEvolutionChart() {
  const c = useChartColors()
  const [period, setPeriod] = useState('12m')

  const active = PERIODS.find((p) => p.key === period)
  const data = useMemo(() => active.data(), [active])
  // Não lota o eixo X de rótulos nas séries longas (30 dias / 24 horas).
  const tickInterval = data.length > 12 ? Math.ceil(data.length / 8) - 1 : 0

  return (
    <div>
      <div className="period-filter" role="group" aria-label="Período">
        {PERIODS.map((p) => (
          <button
            key={p.key}
            type="button"
            className={`period-chip${p.key === period ? ' is-active' : ''}`}
            aria-pressed={p.key === period}
            onClick={() => setPeriod(p.key)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="chart-wrap" style={{ marginTop: 14 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid stroke={c.line} vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              interval={tickInterval}
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
              formatter={(v) => brl(v)}
              labelFormatter={(l) => l}
              contentStyle={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 8,
                fontSize: 12,
                color: 'var(--ink)',
              }}
            />
            <Bar
              dataKey="valor"
              name="Fluxo de caixa"
              fill={c.blue}
              radius={[5, 5, 0, 0]}
              maxBarSize={28}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
