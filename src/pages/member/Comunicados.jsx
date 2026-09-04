import PageHeader from '../../components/PageHeader.jsx'
import Announcement from '../../components/Announcement.jsx'
import { announcements } from '../../data/clubData.js'

export default function Comunicados() {
  return (
    <section className="panel">
      <PageHeader
        title="Comunicados"
        subtitle="Avisos da diretoria pros sócios."
      />
      {announcements.map((a) => (
        <Announcement key={a.titulo} titulo={a.titulo}>
          {a.texto}
        </Announcement>
      ))}
    </section>
  )
}
