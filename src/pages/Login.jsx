import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar.jsx'
import { clubName, roles } from '../data/clubData.js'

export default function Login() {
  useEffect(() => {
    document.title = 'Sociedade Esportiva João Pessoa · Piloto'
  }, [])

  return (
    <>
      <TopBar />
      <div className="login-screen">
        <div className="login-box">
          <div className="mark" aria-hidden="true">
            SE
          </div>
          <h1>
            {clubName[0]} {clubName[1]}
          </h1>
          <p className="subtitle">
            Um site só, três tipos de acesso. Escolha como quer entrar para ver a
            demonstração.
          </p>

          <div className="role-grid">
            {roles.map((role) => (
              <Link
                key={role.id}
                to={role.to}
                className={`role-card ${role.variant}`}
              >
                <div className="role-icon" aria-hidden="true">
                  {role.icon}
                </div>
                <h2 className="role-title">{role.title}</h2>
                <p className="role-desc">{role.desc}</p>
              </Link>
            ))}
          </div>

          <p className="login-note">
            No sistema real, isso seria um único login — o sistema reconhece
            automaticamente o tipo de conta e direciona para a tela certa.
          </p>
          <Link to="/" className="login-back">
            ← Voltar ao site do clube
          </Link>
        </div>
      </div>
    </>
  )
}
