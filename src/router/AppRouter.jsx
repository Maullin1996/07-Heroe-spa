import {
    createBrowserRouter,
    HashRouter,
    RouterProvider,
} from 'react-router-dom';
import { childHeroesRoutes, HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const router = createBrowserRouter([
    {
        path: "/login",
        element:
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        ,
    },
    {
        path: "/",
        element:
        <PrivateRoute>
            <HeroesRoutes/>
        </PrivateRoute>,
        children: childHeroesRoutes
    }
]);



export const AppRouter = () =>{
    return( 
        <>
                <RouterProvider router={router} />
        </>
    )
}