import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar.jsx'

// Área do visitante — sem menu lateral, conteúdo único centralizado.
export default function GuestLayout() {
  return (
    <>
      <TopBar />
      <main className="main narrow">
        <Outlet />
      </main>
    </>
  )
}
