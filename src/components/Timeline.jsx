import { scheduleCategoryLabels } from '../data/clubData.js'

// Linha do tempo de compromissos do clube (agenda do sócio e agenda geral do admin).
export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <div className="tl-item" key={`${it.d}-${it.title}-${i}`}>
          <div className="tl-date">
            <div className="d">{it.d}</div>
            <div className="m">{it.m}</div>
          </div>
          <div className="tl-sep" aria-hidden="true" />
          <div className="tl-info">
            <b>{it.title}</b>
            <span>{it.sub}</span>
          </div>
          <span className={`tl-cat ${it.cat}`}>
            {scheduleCategoryLabels[it.cat] ?? it.cat}
          </span>
        </div>
      ))}
    </div>
  )
}
