// Placeholder de página/seção ainda sem conteúdo definitivo. Deixa claro que é
// um espaço reservado — nada inventado — e dá um contexto curto do que virá.
export default function ComingSoon({ children }) {
  return (
    <div className="site-soon">
      <span className="site-soon-badge">Em breve</span>
      {children && <p className="site-soon-text">{children}</p>}
    </div>
  )
}
