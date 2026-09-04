import { useState } from 'react'
import { courtDays, courtTimes } from '../data/clubData.js'

// mode: 'member' → "Você (sim.)" | 'admin' → "Bloqueado" | 'guest' → "Selecionado"
const takenLabels = {
  member: 'Você (sim.)',
  admin: 'Bloqueado',
  guest: 'Selecionado',
}

export default function WeekGrid({ courtId, bookings, mode = 'member' }) {
  const [mine, setMine] = useState({}) // { [courtId]: Set<key> }
  const mineForCourt = mine[courtId] || new Set()
  const takenLabel = takenLabels[mode] || takenLabels.member

  function toggleSlot(key) {
    setMine((prev) => {
      const next = new Set(prev[courtId] || [])
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return { ...prev, [courtId]: next }
    })
  }

  return (
    <div className="grid-scroll">
      <div className="week-grid">
        <div />
        {courtDays.map((d) => (
          <div className="cell-head" key={d}>
            {d}
          </div>
        ))}

        {courtTimes.map((t) => (
          <Row
            key={t}
            time={t}
            bookings={bookings}
            mine={mineForCourt}
            takenLabel={takenLabel}
            onToggle={toggleSlot}
          />
        ))}
      </div>
    </div>
  )
}

function Row({ time, bookings, mine, takenLabel, onToggle }) {
  return (
    <>
      <div className="time-label">{time}</div>
      {courtDays.map((d) => {
        const key = `${d}-${time}`
        const booked = bookings[key]
        if (booked) {
          return (
            <div className="slot booked" key={key}>
              {booked}
            </div>
          )
        }
        const isMine = mine.has(key)
        return (
          <button
            type="button"
            className={'slot' + (isMine ? ' mine' : '')}
            key={key}
            aria-pressed={isMine}
            aria-label={`${d} ${time} — ${isMine ? takenLabel : 'livre'}`}
            onClick={() => onToggle(key)}
          >
            {isMine ? takenLabel : 'Livre'}
          </button>
        )
      })}
    </>
  )
}
