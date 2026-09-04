import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { FutHero, FutSection } from '../../components/site/FutLayout.jsx'
import { fixtures, footballChampionships } from '../../data/siteContent.js'

const MESES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

function monthLabel(iso) {
  const [y, m] = iso.split('-')
  return `${MESES[+m - 1]} de ${y}`
}
function dayParts(iso) {
  const [y, m, d] = iso.split('-')
  let wd = ''
  try {
    wd = new Date(+y, +m - 1, +d)
      .toLocaleDateString('pt-BR', { weekday: 'short' })
      .replace('.', '')
  } catch {
    wd = ''
  }
  return { dm: `${d}/${m}`, wd }
}

function MatchCrest({ team }) {
  if (team.crest) {
    return <img className="site-fut-cal-crest" src={team.crest} alt={team.name} />
  }
  return (
    <span className="site-fut-cal-crest is-placeholder" aria-label={team.name}>
      {team.name.replace(/^S\.?E\.?\s*/i, '').trim().slice(0, 1).toUpperCase()}
    </span>
  )
}

function Fixture({ f }) {
  const { dm, wd } = dayParts(f.date)
  return (
    <li className="site-fut-cal-row">
      <div className="site-fut-cal-when">
        <span className="site-fut-cal-date">
          {wd ? <span className="site-fut-cal-wd">{wd}</span> : null}
          {dm}
        </span>
        <span className="site-fut-cal-torneio">{f.championship}</span>
        {f.stage ? <span className="site-fut-cal-stage">{f.stage}</span> : null}
      </div>

      <div className="site-fut-cal-match">
        <span className="site-fut-cal-team is-home">
          <span className="site-fut-cal-team-name">{f.home.name}</span>
          <MatchCrest team={f.home} />
        </span>
        <span className="site-fut-cal-scoreline">
          {f.score
            ? `${f.score.home} – ${f.score.away}`
            : f.time || 'A definir'}
        </span>
        <span className="site-fut-cal-team is-away">
          <MatchCrest team={f.away} />
          <span className="site-fut-cal-team-name">{f.away.name}</span>
        </span>
      </div>

      <div className="site-fut-cal-venue">
        <span>{f.venue}</span>
        {f.broadcast ? <span className="site-fut-cal-tv">{f.broadcast}</span> : null}
      </div>

      <Link to="/noticias" className="site-fut-cal-cta">
        Ver detalhes
      </Link>
    </li>
  )
}

export default function CalendarioPage() {
  const [filter, setFilter] = useState('todos')

  useEffect(() => {
    document.title = 'Calendário · Sociedade Esportiva João Pessoa'
  }, [])

  const shown = useMemo(
    () =>
      filter === 'todos'
        ? fixtures
        : fixtures.filter((f) => f.championship === filter),
    [filter],
  )

  const months = useMemo(() => {
    const map = new Map()
    for (const f of [...shown].sort((a, b) => a.date.localeCompare(b.date))) {
      const key = monthLabel(f.date)
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(f)
    }
    return [...map.entries()]
  }, [shown])

  return (
    <div className="site-page site-fut">
      <FutHero
        eyebrow="Futebol"
        title="Calendário"
        intro="O calendário completo da temporada será publicado aqui. Por ora, o próximo compromisso confirmado da Sociedade."
        titleId="fut-cal-title"
      />
      <FutSection labelledby="fut-cal-title">
        <div className="site-fut-cal-filters" role="group" aria-label="Filtrar por campeonato">
          {['todos', ...footballChampionships].map((c) => (
            <button
              key={c}
              type="button"
              className={'site-fut-cal-chip' + (filter === c ? ' is-on' : '')}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c === 'todos' ? 'Todos' : c}
            </button>
          ))}
        </div>

        {months.length ? (
          months.map(([month, list]) => (
            <div className="site-fut-cal-month" key={month}>
              <h2 className="site-fut-cal-month-title">
                <span className="site-fut-cal-month-line" />
                {month}
              </h2>
              <ul className="site-fut-cal-list">
                {list.map((f) => (
                  <Fixture f={f} key={f.id} />
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="site-fut-empty">Nenhum jogo para este filtro.</p>
        )}
      </FutSection>
    </div>
  )
}
