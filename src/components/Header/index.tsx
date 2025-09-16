import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Loading from "../Loading";
import { getUser } from "@services/userAPI";
import type { UserType } from "../../types";

export function Header() {
  const [isLoading, setIsLoading ] = useState<boolean>(false);
  const [ user, setUser ] = useState<UserType>({} as UserType)

  useEffect(() => {

    setIsLoading(true)
    const fetchUser = async () => {
       const user = await getUser()
       setUser(user)
      }
    fetchUser()
    if(user) {

      setIsLoading(false)
    }
  }, [user])

  return (
    <>
    {isLoading ? <Loading /> :

<header className="header">
      <div className="header-container">
      <div className="logo">Code <span>Beats</span></div>
      <div className="user-info">
          <img src="/src/assets/profile-picture.png" alt="Usuário" />
          <span>{user.name}</span>
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
      }
        </>
    )
  }
  