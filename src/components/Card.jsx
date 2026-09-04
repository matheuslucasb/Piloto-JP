export default function Card({ title, sub, children, style, className = '' }) {
  return (
    <div className={`card${className ? ` ${className}` : ''}`} style={style}>
      {title && <h2 className="card-title">{title}</h2>}
      {sub && <p className="card-sub">{sub}</p>}
      {children}
    </div>
  )
}
