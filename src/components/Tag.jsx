export default function Tag({ variant = 'ok', children }) {
  return <span className={`tag ${variant}`}>{children}</span>
}
