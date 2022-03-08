import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg';

//Link it is an <a>
//navlink add active or not {isActive}

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="REact Logo" />
                <ul>
                    <li>
                        <NavLink to="/home" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : '' } >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Userts</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="about" element={ <h1>About Page</h1> } />
                <Route path="users" element={ <h1>Users Page</h1> } />
                <Route path="/home" element={ <h1>Home Page</h1> } />
                <Route path="/*" element={ <Navigate to="/home" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
