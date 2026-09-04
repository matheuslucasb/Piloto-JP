import { courtDays } from '../data/clubData.js'

export default function MonthGrid({ daysInMonth, blanksBefore, reservedDays }) {
  const reserved = new Set(reservedDays)
  const blanks = Array.from({ length: blanksBefore })
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className="month-grid">
      {courtDays.map((d) => (
        <div className="cell-head" key={d}>
          {d}
        </div>
      ))}

      {blanks.map((_, i) => (
        <div className="day blank" key={`blank-${i}`} />
      ))}

      {days.map((d) => {
        const isReserved = reserved.has(d)
        return (
          <div className={'day ' + (isReserved ? 'reserved' : 'free')} key={d}>
            <span className="num">{d}</span>
            <span className="status">
              {isReserved ? 'Reservado' : 'Disponível'}
            </span>
          </div>
        )
      })}
    </div>
  )
}
