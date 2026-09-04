import { useMemo, useState } from 'react'
import MembersTable from '../../components/MembersTable.jsx'
import PageHeader from '../../components/PageHeader.jsx'
import { members } from '../../data/clubData.js'

export default function Members() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      members.filter((m) =>
        m.nome.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  )

  return (
    <section className="panel">
      <PageHeader
        title="Sócios"
        subtitle="Situação de pagamento e cobrança dos sócios ativos."
      />

      <input
        className="search"
        placeholder="Buscar sócio pelo nome..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <MembersTable members={filtered} />
    </section>
  )
}
