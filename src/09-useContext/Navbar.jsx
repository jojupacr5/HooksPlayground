import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} 
                to="/"
              >Home</NavLink>
            </li>
            <NavLink 
                className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} 
                to="/about"
              >About</NavLink>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`} 
                to="/login"
              >Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
