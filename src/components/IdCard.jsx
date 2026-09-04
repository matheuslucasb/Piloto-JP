import { clubName, memberProfile } from '../data/clubData.js'

// Faux-QR: deterministic module grid with three finder patterns. Decorative only.
function FauxQr({ seed }) {
  const N = 25
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  const rand = () => {
    h ^= h << 13
    h ^= h >>> 17
    h ^= h << 5
    return ((h >>> 0) % 1000) / 1000
  }
  const inFinder = (r, c) => {
    const zones = [
      [0, 0],
      [0, N - 7],
      [N - 7, 0],
    ]
    return zones.some(([zr, zc]) => r >= zr && r < zr + 7 && c >= zc && c < zc + 7)
  }
  const rects = []
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (inFinder(r, c)) continue
      if (rand() > 0.55) rects.push(<rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" />)
    }
  }
  const finder = (x, y) => (
    <g key={`f-${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#F5F7F1" />
      <rect x={x + 2} y={y + 2} width="3" height="3" />
    </g>
  )
  return (
    <svg viewBox={`0 0 ${N} ${N}`} shapeRendering="crispEdges" fill="#132B1D">
      {finder(0, 0)}
      {finder(N - 7, 0)}
      {finder(0, N - 7)}
      {rects}
    </svg>
  )
}

// Carteirinha digital do sócio — mostrada na portaria para liberar a entrada.
export default function IdCard() {
  const situacao = memberProfile.emDia ? 'em dia' : 'em atraso'
  return (
    <div className="id-card">
      <div className="id-top">
        <div>
          <div className="id-role">{memberProfile.categoria}</div>
          <div className="id-club">
            {clubName[0]} {clubName[1]}
          </div>
        </div>
        <div className="qr" aria-hidden="true">
          <FauxQr seed={memberProfile.matricula} />
        </div>
      </div>
      <div className="id-name">{memberProfile.nome}</div>
      <div className="id-meta">
        Matrícula {memberProfile.matricula} · Desde {memberProfile.desde} ·
        Situação: {situacao}
      </div>
    </div>
  )
}
