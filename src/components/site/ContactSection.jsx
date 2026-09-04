import EnterLink from './EnterLink.jsx'
import { contact } from '../../data/siteContent.js'

export default function ContactSection() {
  return (
    <>
      <div className="site-split-main">
        <p className="site-lede">{contact.intro}</p>
        <dl className="site-marks site-marks-stacked">
          {contact.marks.map((m) => (
            <div className="site-mark" key={m.k}>
              <dt>{m.k}</dt>
              <dd>
                {m.href ? (
                  <a
                    href={m.href}
                    className="site-mark-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {m.v}
                  </a>
                ) : (
                  m.v
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <aside className="site-split-aside">
        <div className="site-contact-card">
          <p className="site-contact-card-kicker">Fale com o clube</p>
          <p className="site-contact-card-body">
            A secretaria responde sobre locação de campo, quadra e salões, sobre o
            quadro social e sobre assuntos institucionais.
          </p>
          <p className="site-contact-login">
            Sócios e administração:{' '}
            <EnterLink className="site-contact-login-link">acessar o sistema</EnterLink>
          </p>
        </div>
      </aside>
    </>
  )
}
