import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Code <span>Beats</span></div>
        <div className="user-info">
          <img src="/src/assets/profile-picture.png" alt="Usuário" />
          <span>Usuário</span>
        </div>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/search" className={({ isActive }) => isActive ? "active" : ""}>
              Pesquisar
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={({ isActive }) => isActive ? "active" : ""}>
              Favoritas
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
              Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
