import { Link } from 'react-router-dom'
import escudo from '../../assets/escudo-sejp.png'
import EnterLink from './EnterLink.jsx'
import SocialIcon from './SocialIcon.jsx'
import {
  clubFullName,
  city,
  footerColumns,
  socialLinks,
  instagramHandle,
  instagramUrl,
  memberCtaTo,
} from '../../data/siteContent.js'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <img src={escudo} alt={`Escudo da ${clubFullName}`} width="42" height="55" />
            <p>
              {clubFullName}
              <br />
              <span>{city}</span>
            </p>
          </div>

          <div className="site-footer-cols">
            {footerColumns.map((col) => (
              <nav className="site-footer-col" key={col.title} aria-label={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="site-footer-col">
              <h3>Redes Sociais</h3>
              <ul className="site-footer-social">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                className="site-footer-handle"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                {instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer-bar">
          <p>
            © {year} {clubFullName} — {city}. Todos os direitos reservados.
          </p>
          <div className="site-footer-bar-actions">
            <Link to={memberCtaTo} className="site-footer-cta">
              Seja Sócio
            </Link>
            <EnterLink className="site-footer-enter">Entrar</EnterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
