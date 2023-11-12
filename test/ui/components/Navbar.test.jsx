import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { AuthContext } from '../../../src/auth';
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', ()  => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: 'Mauro',
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el nombre del usuarui', () => {

        render( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Navbar /> 
            </MemoryRouter>
        </AuthContext.Provider>
        );
        expect( screen.getByText('Mauro') ).toBeTruthy();

    });

    test('Debe de llamar el logout y el navigate cuando se hace click en el boton', () => {

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar /> 
                </MemoryRouter>
            </AuthContext.Provider>
            );

            const logoutBtn = screen.getByRole('button');
            fireEvent.click( logoutBtn );

            expect( contextValue.logout ).toHaveBeenCalled();
            expect( mockUseNavigate ).toHaveBeenCalledWith(
                '/login', {"replace": true}
            );
    });
});