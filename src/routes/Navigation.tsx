import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { ShoppingPage } from "../02-component-pattern/pages/ShoppingPage";
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
                        <NavLink 
                            to="/" 
                            className={ ({isActive}) => isActive ? 'nav-active' : '' } >
                            Shopping
                        </NavLink>
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
                <Route path="/" element={ <ShoppingPage /> } />
                <Route path="/" element={ <Navigate to="/"  /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
