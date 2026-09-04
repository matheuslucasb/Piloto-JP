import { spaceOccupancy } from '../../data/clubData.js'

// Barras de progresso horizontais — sem Recharts, é só uma lista de barras.
export default function OccupancyBars() {
  return (
    <ul className="occ-bars">
      {spaceOccupancy.map((s) => (
        <li key={s.label} className="occ-bar-row">
          <div className="occ-bar-head">
            <span>{s.label}</span>
            <span className="occ-bar-pct">{s.pct}%</span>
          </div>
          <div className="occ-bar-track">
            <div
              className={`occ-bar-fill ${s.accent}`}
              style={{ width: `${s.pct}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
