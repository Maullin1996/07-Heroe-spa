import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el init', () => {

        const newState = authReducer( { logged: false }, {} );
        expect( newState ).toEqual({ logged: false });
    });

    test(' Debe de (login) llamar el login autenticar y establecer el user ', () => {
        const action = {
            type: types.login,
            payload: {user: 'Mauro'}
        }
        const newState = authReducer({ logged: false } , action );
        //console.log(newState);
        expect( newState ).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('Debe de (logout borrar el name del usuario y logged en false)', () => {

        const state = {
            logged: true,
            user: {user: 'Mauro'}
        }

        const action = {
            type: types.logout,

        }

        const newState = authReducer( state, action);

        expect( newState ).toEqual({
            logged: false
        });

    });
});