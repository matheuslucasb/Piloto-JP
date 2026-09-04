import { useEffect, useRef, useState } from 'react'

const BARS = [8, 15, 11, 20, 26, 17, 30, 22, 13, 24, 19, 28, 12, 21, 16, 25, 10, 18]

function fmt(t) {
  if (!Number.isFinite(t)) return '0:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

// Player de áudio estilizado para o hino. Enquanto o arquivo real não existe
// (`src` nulo), mostra o mesmo desenho num estado "em breve" — nada quebrado.
export default function HinoPlayer({ src, label }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [cur, setCur] = useState(0)
  const [dur, setDur] = useState(0)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return undefined
    const onTime = () => setCur(a.currentTime)
    const onMeta = () => setDur(a.duration)
    const onEnd = () => {
      setPlaying(false)
      setCur(0)
    }
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('ended', onEnd)
    return () => {
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('ended', onEnd)
    }
  }, [src])

  const pct = dur ? cur / dur : 0

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  function seek(e) {
    const a = audioRef.current
    if (!a || !dur) return
    const r = e.currentTarget.getBoundingClientRect()
    a.currentTime = ((e.clientX - r.left) / r.width) * dur
  }

  const empty = !src

  return (
    <div
      className={
        'site-hino' + (empty ? ' is-empty' : '') + (playing ? ' is-playing' : '')
      }
    >
      {!empty ? (
        <audio ref={audioRef} src={src} preload="metadata" />
      ) : null}

      <button
        type="button"
        className="site-hino-toggle"
        onClick={empty ? undefined : toggle}
        disabled={empty}
        aria-label={
          empty
            ? 'Hino em breve'
            : playing
              ? 'Pausar o hino'
              : `Tocar o hino${label ? ' — ' + label : ''}`
        }
      >
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
          </svg>
        )}
      </button>

      <div className="site-hino-body">
        <div
          className="site-hino-bars"
          style={{ '--pct': pct }}
          onClick={empty ? undefined : seek}
          aria-hidden="true"
        >
          {BARS.map((h, i) => (
            <span key={i} style={{ '--h': h + '%', '--i': i / BARS.length }} />
          ))}
        </div>
        <p className="site-hino-status">
          {empty ? 'Áudio em breve' : `${fmt(cur)} / ${fmt(dur)}`}
        </p>
      </div>
    </div>
  )
}
