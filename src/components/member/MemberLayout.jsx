import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar.jsx'
import SideNav from '../SideNav.jsx'
import { memberNav } from '../../navigation.js'
import { memberProfile } from '../../data/clubData.js'

export default function MemberLayout() {
  return (
    <>
      <TopBar />
      <div className="shell">
        <SideNav
          variant="light"
          items={memberNav}
          foot={`${memberProfile.nome} — ${memberProfile.categoria}`}
        />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  )
}
