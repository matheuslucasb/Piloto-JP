import PageHeader from '../../components/PageHeader.jsx'
import { stockItems, stockKpis } from '../../data/clubData.js'

export default function Stock() {
  return (
    <section className="panel">
      <PageHeader
        title="Estoque"
        subtitle="Bar/quiosque e materiais esportivos."
      />

      <div className="kpi-row cols-3" style={{ marginBottom: 20 }}>
        {stockKpis.map((kpi) => (
          <div className="kpi" key={kpi.label}>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-label">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Categoria</th>
              <th>Estoque atual</th>
              <th>Mínimo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {stockItems.map((row) => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td>{row.categoria}</td>
                <td>{row.atual}</td>
                <td>{row.minimo}</td>
                <td className={row.status === 'low' ? 'stock-low' : 'stock-ok'}>
                  {row.status === 'low' ? 'Baixo' : 'Ok'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
