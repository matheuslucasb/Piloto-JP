import { marqueeItems } from '../../data/siteContent.js'

// Faixa infinita depois do hero — atmosfera, não informação (aria-hidden).
// Movimento linear lento, pausa no hover, estático sob prefers-reduced-motion.
export default function Marquee() {
  const track = marqueeItems.map((t, i) => (
    <span className="site-marquee-item" key={i}>
      {t}
      <span className="site-marquee-dot" aria-hidden="true">
        •
      </span>
    </span>
  ))

  return (
    <div className="site-marquee" aria-hidden="true">
      <div className="site-marquee-track">
        {track}
        {track}
      </div>
    </div>
  )
}
