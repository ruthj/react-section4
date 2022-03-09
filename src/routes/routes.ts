import { lazy, LazyExoticComponent   } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage01, LazyPage02, LazyPage03 } from '../01-lazyload/pages';


type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/*webpackChunkName:"LazyLayout"*/ '../01-lazyload/layout/LazyLayout'))


// const Lazy1 = lazy(() => import(/*webpackChunkName:"LazyPage1"*/ '../01-lazyload/pages/LazyPage01'))
// const Lazy2 = lazy(() => import(/*webpackChunkName:"LazyPage2"*/ '../01-lazyload/pages/LazyPage02'))
// const Lazy3 = lazy(() => import(/*webpackChunkName:"LazyPage3"*/ '../01-lazyload/pages/LazyPage03'))


export const routes:Route[] = [
    {
        to: '/lazyload/',
        path:'lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },

    {
        to: '/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]