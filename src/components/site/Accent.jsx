// Palavra de destaque em serifa itálica (Fraunces) dentro de um título Anton.
// Uso raro, editorial — 1 ou 2 palavras por título no máximo.
export default function Accent({ children }) {
  return <em className="site-accent">{children}</em>
}
