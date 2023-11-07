import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el <PriveRoute />', () => {

    test('Debe de mostrar el children si está autenticado ', () => {
        /*Se utiliza esta función para poder analizar el 
        local storage */
        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                user: 'Mauro'
            }
        }
        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();
    });

    test('Debe de llamar el local storage', () => {

        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                user: 'Mauro'
            }
        }
        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( localStorage.setItem ).toHaveBeenCalledWith('lasPath', '/search?q=batman');
    });
});