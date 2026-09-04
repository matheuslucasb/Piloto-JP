import { transparencyLede, transparencyDocs } from '../../data/siteContent.js'

// Estrutura pronta para receber os documentos reais — nada inventado.
export default function TransparencySection() {
  return (
    <>
      <p className="site-lede">{transparencyLede}</p>
      <ul className="site-doc-list">
        {transparencyDocs.map((d) => (
          <li className="site-doc-row" key={d.categoria}>
            <span className="site-doc-name">{d.categoria}</span>
            <span className="site-doc-status">{d.nota}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
