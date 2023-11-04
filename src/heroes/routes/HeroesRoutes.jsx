
import { Dcpage, HeroPage, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui";
import { Navigate, Outlet } from "react-router-dom";

export const childHeroesRoutes = [

    {
        path: "/marvel",
        element: <MarvelPage />,
    },
    {     
        path: "/dc",
        element: <Dcpage />,
    },
    {     
        path: "/search",
        element: <SearchPage />,
    },
    {     
        path: "/hero/:id",
        element: <HeroPage />,
    },
    {
        path: "/",
        element: <Navigate to = {"/marvel"}/>
    },
];

export const HeroesRoutes = () => {
    return (
        <>
                <Navbar />
                    <div className="container">
                        <Outlet/>
                </div>
        </>
    );
}
