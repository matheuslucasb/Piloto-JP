import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import escudo from '../../assets/escudo-sejp.png'
import EnterLink from './EnterLink.jsx'
import { navMenu, memberCtaTo } from '../../data/siteContent.js'

const linkClass = ({ isActive }) =>
  'site-nav-link' + (isActive ? ' is-active' : '')

export default function SiteNav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef(null)
  const openerRef = useRef(null)

  const onHome = pathname === '/'
  // A barra fica transparente só sobre o hero da home; em qualquer outra página
  // (fundo claro) ela já entra sólida para o texto continuar legível.
  const solid = !onHome || scrolled

  useEffect(() => {
    if (!onHome) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  // Fecha o menu fullscreen ao navegar.
  useEffect(() => setOpen(false), [pathname])

  // Menu fullscreen (mobile): trap de foco + scroll-lock + Esc.
  useEffect(() => {
    if (!open) return
    const opener = openerRef.current
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab') {
        const f = panelRef.current?.querySelectorAll('a, button')
        if (!f?.length) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('a, button')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      opener?.focus()
    }
  }, [open])

  return (
    <>
      <header className={'site-nav' + (solid ? ' is-scrolled' : '')}>
        <Link to="/" className="site-nav-brand">
          <img src={escudo} alt="" aria-hidden="true" width="46" height="60" />
          <span>S.E. João Pessoa</span>
        </Link>

        <nav className="site-nav-links" aria-label="Seções do site">
          {navMenu.map((item) =>
            item.children ? (
              <div className="site-nav-group" key={item.label}>
                {item.noNav ? (
                  <span className="site-nav-link site-nav-parent">
                    {item.label}
                    <span className="site-nav-caret" aria-hidden="true" />
                  </span>
                ) : (
                  <NavLink to={item.to} end={item.end} className={linkClass}>
                    {item.label}
                    <span className="site-nav-caret" aria-hidden="true" />
                  </NavLink>
                )}
                <div className="site-nav-drop">
                  {item.children.map((c) => (
                    <Link key={c.label} to={c.to} className="site-nav-drop-link">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="site-nav-actions">
          <Link to={memberCtaTo} className="site-nav-cta">
            Seja Sócio
          </Link>
          <EnterLink className="site-nav-enter">Entrar</EnterLink>
          <button
            ref={openerRef}
            type="button"
            className="site-nav-menu"
            aria-expanded={open}
            aria-haspopup="dialog"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <div
        className="site-menu"
        data-open={open || undefined}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="site-menu-inner" ref={panelRef}>
          <button
            type="button"
            className="site-menu-close"
            onClick={() => setOpen(false)}
          >
            Fechar
          </button>

          <nav className="site-menu-list" aria-label="Seções do site">
            {navMenu.map((item) => (
              <div
                className={'site-menu-block' + (item.children ? ' is-group' : '')}
                key={item.label}
              >
                {item.noNav ? (
                  <p className="site-menu-item is-parent">
                    <span className="site-menu-label">{item.label}</span>
                  </p>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className="site-menu-item"
                    onClick={() => setOpen(false)}
                  >
                    <span className="site-menu-label">{item.label}</span>
                  </NavLink>
                )}
                {item.children ? (
                  <div className="site-menu-sub">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        className="site-menu-subitem"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="site-menu-actions">
            <Link
              to={memberCtaTo}
              className="site-menu-cta"
              onClick={() => setOpen(false)}
            >
              Seja Sócio
            </Link>
            <EnterLink className="site-menu-enter" onClick={() => setOpen(false)}>
              Entrar no sistema
            </EnterLink>
          </div>
        </div>
      </div>
    </>
  )
}
