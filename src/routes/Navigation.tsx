import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg';
import { LazyPage01, LazyPage02, LazyPage03 } from '../01-lazyload/pages';


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
                        <NavLink to="/lazy1" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Lazy01</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy2" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Lazy02</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy3" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Lazy03</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="lazy1" element={ <LazyPage01 /> } />
                <Route path="lazy2" element={ <LazyPage02 /> } />
                <Route path="lazy3" element={ <LazyPage03 /> } />
                <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
