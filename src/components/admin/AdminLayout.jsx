import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar.jsx'
import SideNav from '../SideNav.jsx'
import { adminNav } from '../../navigation.js'

export default function AdminLayout() {
  return (
    <>
      <TopBar />
      <div className="shell">
        <SideNav
          variant="dark"
          items={adminNav}
          foot="Piloto com dados fictícios."
        />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  )
}
