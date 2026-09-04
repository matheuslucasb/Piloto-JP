// Comunicado da diretoria para os sócios.
export default function Announcement({ titulo, children }) {
  return (
    <div className="announce">
      <b>{titulo}</b>
      <span>{children}</span>
    </div>
  )
}
