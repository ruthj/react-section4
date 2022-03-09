import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { LazyPage01, LazyPage02, LazyPage03 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
        <h1>Lazy Layout PAGE!!!</h1>
        {/* child routes should be here */}
        <ul>
            <li>
                <NavLink to="lazy01">Lazy01</NavLink>
            </li>
            <li>
                <NavLink to="lazy02">Lazy02</NavLink>
            </li>
            <li>
                <NavLink to="lazy03">Lazy03</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path="lazy01" element={ <LazyPage01 /> } />
            <Route path="lazy02" element={ <LazyPage02 /> } />
            <Route path="lazy03" element={ <LazyPage03 /> } />

            {/* <Route path="*" element={ <div>Not Found</div> } /> */}
            <Route path="*" element={<Navigate replace to="lazy01" /> } />
        </Routes>
    </div>
  )
}

export default LazyLayout