import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en <PublicRoute />', () => {

    test('Debe de mostrar el children si no está autentificado', () => {

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={ contextValue } >
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Pública') ).toBeTruthy();

/*Notas:
*si se pone el logged en true saldra un error ya que si se quiere hacer 
uso de la navegacion, location o el usenaviagte este tiene que estar
preveido dentro del browserRouter o en el memory router 
*<h1>Ruta Pública</h1> solo se debe de motrar si no estoy autentificado
*/

    });

    test('Debe de navegar si está autentificado', () => {

        const contextValue = {
            logged: true,
            user: {
                user: 'Mauro'
            }
        }
        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='/marvel' element={ <h1>Página Marvel</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        //screen.debug();
        expect( screen.getByText('Página Marvel') ).toBeTruthy();

/*
*Para poder simular el navigate se hace uso del MemoryRouter 
y se tienen que crear todas las posibles rutas a las que 
redirecciona el componente
*El mensaje se imprime dos veces, ya que se estan haciendo dos pruebas
en el mismo documento.
*/
    });
});
