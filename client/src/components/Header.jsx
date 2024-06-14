import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";


export const Header = () => {
  const {user, Logout} = useAuth()
  

  const handleLogout = () =>{
    Logout()
  }

    const getNavLinkClassName = (props) => {
        if (props.isActive) return "active"
        return
      }
    return (
        <header>
          <h2 className="logo">Clinic Management System</h2>
          {user ? ( 
        <nav>
        <ul>
          <li>
            <NavLink className={getNavLinkClassName} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to="/add-patient">
              Add Patient
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>
             Logout
            </button>
          </li>
        </ul>
      </nav>
     ) : ( 
        <nav>
        <ul>
          <li>
            <NavLink className={getNavLinkClassName} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to="/add-patient">
              Add Patient
            </NavLink>
          </li>
          </ul>
          </nav>)}
      </header>
     )}

