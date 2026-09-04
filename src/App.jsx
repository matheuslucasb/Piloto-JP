import { Navigate, Route, Routes } from 'react-router-dom'

import SiteLayout from './components/site/SiteLayout.jsx'
import HomePage from './pages/site/HomePage.jsx'
import OClubePage from './pages/site/OClubePage.jsx'
import HistoriaPage from './pages/site/HistoriaPage.jsx'
import DiretoriaPage from './pages/site/DiretoriaPage.jsx'
import EstruturaPage from './pages/site/EstruturaPage.jsx'
import TransparenciaPage from './pages/site/TransparenciaPage.jsx'
import FutebolStaffPage from './pages/site/FutebolStaffPage.jsx'
import ElencoPage from './pages/site/ElencoPage.jsx'
import CalendarioPage from './pages/site/CalendarioPage.jsx'
import TitulosPage from './pages/site/TitulosPage.jsx'
import NoticiasPage from './pages/site/NoticiasPage.jsx'
import QuemApoiaPage from './pages/site/QuemApoiaPage.jsx'
import ContatoPage from './pages/site/ContatoPage.jsx'
import Login from './pages/Login.jsx'
import GuestLayout from './components/guest/GuestLayout.jsx'
import MemberLayout from './components/member/MemberLayout.jsx'
import AdminLayout from './components/admin/AdminLayout.jsx'

import GuestHome from './pages/guest/GuestHome.jsx'

import Book from './pages/member/Book.jsx'
import MySlots from './pages/member/MySlots.jsx'
import MemberAgenda from './pages/member/MemberAgenda.jsx'
import MemberFinance from './pages/member/MemberFinance.jsx'
import Consumo from './pages/member/Consumo.jsx'
import Perfil from './pages/member/Perfil.jsx'
import Comunicados from './pages/member/Comunicados.jsx'
import Documentos from './pages/member/Documentos.jsx'

import Overview from './pages/admin/Overview.jsx'
import Finance from './pages/admin/Finance.jsx'
import Courts from './pages/admin/Courts.jsx'
import Members from './pages/admin/Members.jsx'
import Events from './pages/admin/Events.jsx'
import Calendar from './pages/admin/Calendar.jsx'
import Stock from './pages/admin/Stock.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-clube" element={<OClubePage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/diretoria" element={<DiretoriaPage />} />
        <Route path="/estrutura" element={<EstruturaPage />} />
        <Route path="/transparencia" element={<TransparenciaPage />} />
        <Route path="/futebol" element={<Navigate to="/futebol/elenco" replace />} />
        <Route path="/futebol/comissao-tecnica" element={<FutebolStaffPage kind="comissao" />} />
        <Route path="/futebol/diretoria" element={<FutebolStaffPage kind="diretoria" />} />
        <Route path="/futebol/elenco" element={<ElencoPage />} />
        <Route path="/futebol/calendario" element={<CalendarioPage />} />
        <Route path="/futebol/titulos" element={<TitulosPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/quem-apoia" element={<QuemApoiaPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Route>

      <Route path="/entrar" element={<Login />} />

      <Route path="/visitante" element={<GuestLayout />}>
        <Route index element={<GuestHome />} />
      </Route>

      <Route path="/socio" element={<MemberLayout />}>
        <Route index element={<Book />} />
        <Route path="horarios" element={<MySlots />} />
        <Route path="agenda" element={<MemberAgenda />} />
        <Route path="financeiro" element={<MemberFinance />} />
        <Route path="consumo" element={<Consumo />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="comunicados" element={<Comunicados />} />
        <Route path="documentos" element={<Documentos />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Overview />} />
        <Route path="financeiro" element={<Finance />} />
        <Route path="quadras" element={<Courts />} />
        <Route path="socios" element={<Members />} />
        <Route path="eventos" element={<Events />} />
        <Route path="agenda" element={<Calendar />} />
        <Route path="estoque" element={<Stock />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
