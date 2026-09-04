import { useLocation, useNavigate } from 'react-router-dom'
import { roles } from '../data/clubData.js'

// Barra superior — mostra o tipo de acesso ativo e permite voltar à tela de login.
// No sistema real seria um login único; aqui o piloto simula os três acessos.
const roleByPrefix = [
  { prefix: '/visitante', id: 'guest' },
  { prefix: '/socio', id: 'member' },
  { prefix: '/admin', id: 'admin' },
]

export default function TopBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const match = roleByPrefix.find((r) => pathname.startsWith(r.prefix))
  const role = match && roles.find((r) => r.id === match.id)

  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="mark" aria-hidden="true">
          SE
        </span>
        <span>Piloto — simulação de login por tipo de acesso</span>
      </div>
      <div className="topbar-right">
        <span className="role-chip">{role ? role.chip : 'Nenhum login'}</span>
        {role && (
          <button
            className="exit"
            type="button"
            onClick={() => navigate('/entrar')}
          >
            Trocar de acesso
          </button>
        )}
      </div>
    </div>
  )
}
