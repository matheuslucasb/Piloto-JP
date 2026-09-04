import useReveal from '../../hooks/useReveal.js'

// A chapter of the programme: an outlined folio numeral, an uppercase title that
// wipes up under a mask, the chalk touchline that draws itself, then the body.
// `align` sets the folio side; `layout` ("stack" | "split" | "center") sets the
// composition so consecutive chapters don't read the same.
export default function Chapter({
  id,
  num,
  title,
  align = 'left',
  layout = 'stack',
  density = 'full',
  children,
}) {
  const [ref, shown] = useReveal()

  return (
    <section
      id={id}
      ref={ref}
      className="site-chapter"
      data-shown={shown || undefined}
      data-align={align}
      data-layout={layout}
      data-density={density !== 'full' ? density : undefined}
      aria-labelledby={`${id}-title`}
    >
      {num ? (
        <span className="site-chapter-num" aria-hidden="true">
          {num}
        </span>
      ) : null}
      <header className="site-chapter-head">
        <h2 id={`${id}-title`} className="site-chapter-title">
          <span>{title}</span>
        </h2>
        <span className="site-chapter-line" aria-hidden="true" />
      </header>
      <div className="site-chapter-body site-stagger">{children}</div>
    </section>
  )
}
