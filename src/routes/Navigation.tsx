import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg';
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstract }  from '../03-forms/pages'


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
                        <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Formik YUP</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-componets"  className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abstract"  className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Abstract</NavLink>
                    </li>
                    
                </ul>
            </nav>
            <Routes>
                <Route path="/register" element={ <RegisterPage /> } />
                
                <Route path="/formik-basic" element={ <FormikBasicPage /> } />
                <Route path="/formik-yup" element={ <FormikYupPage /> } />
                <Route path="/formik-componets" element={ <FormikComponents />} />
                <Route path="/formik-abstract" element={ <FormikAbstract />} />
                <Route path="/" element={ <Navigate to="/" replace /> } />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
