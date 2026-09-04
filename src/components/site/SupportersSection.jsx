import { Link } from 'react-router-dom'
import { supportersLede, sponsorSlots, partnerSlots } from '../../data/siteContent.js'

function LogoGrid({ slots, label }) {
  return (
    <ul className="site-logo-grid" aria-label={label}>
      {slots.map((n) => (
        <li className="site-logo-slot" key={n}>
          <span>Espaço reservado</span>
        </li>
      ))}
    </ul>
  )
}

// Logos vêm depois — placeholders discretos, seção institucional.
export default function SupportersSection() {
  return (
    <>
      <p className="site-lede">{supportersLede}</p>

      <div className="site-supporters-block" id="patrocinadores">
        <h3 className="site-supporters-head">Patrocinadores</h3>
        <LogoGrid slots={sponsorSlots} label="Patrocinadores" />
      </div>

      <div className="site-supporters-block" id="parceiros">
        <h3 className="site-supporters-head">Parceiros</h3>
        <LogoGrid slots={partnerSlots} label="Parceiros" />
      </div>

      <p className="site-supporters-invite">
        Interessado em apoiar a Sociedade? <Link to="/contato">Fale com o clube</Link>.
      </p>
    </>
  )
}
