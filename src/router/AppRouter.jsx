import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { childHeroesRoutes, HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <HeroesRoutes/>,
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