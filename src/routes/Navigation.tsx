import { spawn } from "child_process";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg';
 //import { LazyPage01, LazyPage02, LazyPage03 } from '../01-lazyload/pages';
import { routes } from './routes';
//lazy components no needed because the routes.ts




//Link it is an <a>
//navlink add active or not {isActive}
console.log('routes',routes);

export const Navigation = () => {

    const navRoutes = 
        routes.map((route) => 
            <li key={route.path}>
                <NavLink 
                    to={route.path} 
                    className={ ({isActive}) => isActive ? 'nav-active' : '' } >
                        {route.name}
                    </NavLink>
            </li>
        )

    
    
  return (
    <Suspense fallback={<h1>Loading ....!!!!!</h1>}>
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    {navRoutes}

                    {/*
                        TEACHER SOLUTION
                        routes.map(route => 
                            <li key="route.path">
                                <NavLink 
                                    to={route.path} 
                                    className={ ({isActive}) => isActive ? 'nav-active' : '' } >
                                    {route.name}
                                </NavLink>
                            </li>
                        )
                    */}
                    {/* <li>
                        <NavLink to="/lazy1" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Lazy01</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy2" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Lazy02</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy3" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Lazy03</NavLink>
                    </li> */}
                </ul>
            </nav>
            <Routes>
                {
                    routes.map(route => (
                        <Route 
                            key={route.to}
                            path={route.path} 
                            element={ <route.Component /> }
                        />
                    ))
                }
                <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
            </Routes>
                {/* <Route path="lazy1" element={ <LazyPage01 /> } />
                <Route path="lazy2" element={ <LazyPage02 /> } />
                <Route path="lazy3" element={ <LazyPage03 /> } /> 
                <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />*/}
           
        </div>
    </BrowserRouter>
    </Suspense>
  )
}
