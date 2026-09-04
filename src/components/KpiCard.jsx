import { dashboardIcons } from './icons/DashboardIcons.jsx'

export default function KpiCard({ value, meta, label, trend, dir, icon, accent }) {
  const Icon = icon && dashboardIcons[icon]

  return (
    <div className="kpi">
      {Icon && (
        <div className={`kpi-icon ${accent || ''}`}>
          <Icon />
        </div>
      )}
      <p className="kpi-label">{label}</p>
      <div className="kpi-value">{value}</div>
      {meta && <p className="kpi-meta">{meta}</p>}
      {trend && <span className={`kpi-trend ${dir}`}>{trend}</span>}
    </div>
  )
}
