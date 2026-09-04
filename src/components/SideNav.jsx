import { NavLink } from 'react-router-dom'
import Brand from './Brand.jsx'

// Sidebar compartilhada pelas áreas com menu lateral.
// variant: 'light' (área do sócio) | 'dark' (painel administrativo)
export default function SideNav({ variant, items, foot }) {
  return (
    <aside className={`side ${variant}`}>
      <Brand />
      <nav className="side-nav">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      {foot && <div className="side-foot">{foot}</div>}
    </aside>
  )
}
