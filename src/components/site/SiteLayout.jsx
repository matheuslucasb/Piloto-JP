import { Outlet } from 'react-router-dom'
import '../../pages/site/site.css'

import SiteNav from './SiteNav.jsx'
import SiteFooter from './SiteFooter.jsx'
import ScrollToTop from './ScrollToTop.jsx'

// Casca do site institucional público: barra fixa + rodapé, comuns a todas as
// páginas (/, /o-clube, /historia, /futebol, /noticias, /quem-apoia, /contato).
// Cada página entra pelo <Outlet />. A área do sócio/admin não passa por aqui.
export default function SiteLayout() {
  return (
    <div className="site">
      <ScrollToTop />
      <a href="#conteudo" className="site-skip">
        Pular para o conteúdo
      </a>
      <SiteNav />
      <main id="conteudo" className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
