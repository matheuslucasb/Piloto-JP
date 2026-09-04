import PageHeader from '../../components/PageHeader.jsx'
import { quiosqueConsumo } from '../../data/clubData.js'

export default function Consumo() {
  return (
    <section className="panel">
      <PageHeader
        title="Consumo no quiosque"
        subtitle="Sua comanda do mês, se você consome no bar/quiosque do clube."
      />

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Item</th>
              <th>Qtd</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {quiosqueConsumo.itens.map((row, i) => (
              <tr key={`${row.data}-${row.item}-${i}`}>
                <td>{row.data}</td>
                <td>{row.item}</td>
                <td>{row.qtd}</td>
                <td>{row.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="card-sub" style={{ marginTop: 14 }}>
        Total do mês:{' '}
        <b style={{ color: 'var(--ink)' }}>{quiosqueConsumo.total}</b> — será
        somado à próxima mensalidade.
      </p>
    </section>
  )
}
