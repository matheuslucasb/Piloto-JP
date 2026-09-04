import useReveal from '../../hooks/useReveal.js'

// Cabeçalho compacto das páginas de Futebol (tema escuro).
export function FutHero({ eyebrow, title, intro, titleId }) {
  return (
    <header className="site-fut-hero">
      <div className="site-fut-hero-inner">
        <p className="site-fut-hero-kicker">{eyebrow}</p>
        <h1 className="site-fut-hero-title" id={titleId}>
          {title}
        </h1>
        {intro ? <p className="site-fut-hero-lead">{intro}</p> : null}
      </div>
    </header>
  )
}

// Seção com revelação por scroll.
export function FutSection({ id, className = '', labelledby, children }) {
  const [ref, shown] = useReveal()
  return (
    <section
      ref={ref}
      id={id}
      className={'site-fut-block ' + className}
      data-shown={shown || undefined}
      aria-labelledby={labelledby}
    >
      <div className="site-fut-inner">{children}</div>
    </section>
  )
}
