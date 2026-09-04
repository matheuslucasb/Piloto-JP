import { useState } from 'react'
import WeekGrid from './WeekGrid.jsx'
import { courtBookings, courts } from '../data/clubData.js'

export default function CourtSchedule({ mode = 'member', legend }) {
  const [currentCourt, setCurrentCourt] = useState(courts[0].id)

  return (
    <>
      <div className="court-toggle">
        {courts.map((court) => (
          <button
            key={court.id}
            className={court.id === currentCourt ? 'active' : ''}
            onClick={() => setCurrentCourt(court.id)}
          >
            {court.label}
          </button>
        ))}
      </div>

      <WeekGrid
        courtId={currentCourt}
        bookings={courtBookings[currentCourt]}
        mode={mode}
      />

      <div className="legend">
        {legend.map((item) => (
          <span key={item.label}>
            <span className="dot" style={item.style} />
            {item.label}
          </span>
        ))}
      </div>
    </>
  )
}
