import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import useChartColors from './useChartColors.js'
import { revenueDistribution } from '../../data/clubData.js'

const brl = (v) => `R$ ${v.toLocaleString('pt-BR')}`

export default function RevenueDonutChart() {
  const c = useChartColors()
  const accents = { blue: c.blue, cyan: c.cyan, orange: c.orange, success: c.success }
  const total = revenueDistribution.reduce((sum, d) => sum + d.valor, 0)

  return (
    <div>
      <div className="donut-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={revenueDistribution}
              dataKey="valor"
              nameKey="label"
              innerRadius="68%"
              outerRadius="100%"
              paddingAngle={3}
              cornerRadius={6}
              stroke="none"
              isAnimationActive={false}
            >
              {revenueDistribution.map((d) => (
                <Cell key={d.key} fill={accents[d.accent]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(v) => brl(v)}
              contentStyle={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 8,
                fontSize: 12,
                color: 'var(--ink)',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-center">
          <span className="donut-center-value">{brl(total)}</span>
          <span className="donut-center-label">no mês</span>
        </div>
      </div>

      <ul className="donut-legend">
        {revenueDistribution.map((d) => (
          <li key={d.key}>
            <span className={`donut-dot ${d.accent}`} />
            <span className="donut-legend-label">{d.label}</span>
            <span className="donut-legend-pct">{Math.round((d.valor / total) * 100)}%</span>
            <span className={`kpi-trend ${d.dir}`}>{d.trend}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
