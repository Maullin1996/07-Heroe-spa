import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter />', () => {

test('Debe de mostrar el login si está autentificado', () => {

    // const setRouter = createMemoryRouter(AppRouter.routes, {
    //     initialEntries:["/marvel"],
    // });

    // const contextValue = {
    //     logged: false
    // }

    // render(
    //     <AuthContext.Provider value={contextValue}>
    //         <RouterProvider  router={setRouter} />
    //     </AuthContext.Provider>
    // )
});
});