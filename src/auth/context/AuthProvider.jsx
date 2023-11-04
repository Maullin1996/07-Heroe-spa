import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'
/*Este va a ser el componente encargado de proveer la informacón a toda nuetra
Apliación  */
/*Al resivir todas las props (los componentes hijos)
se vuelve un Higher Funtuonal Component */
/*Si no se tiene el value se puede dejar como un objeto 
vacio */
/*Cuando se necesita mucho control en el estado se
recomienda usar un reducer */
const initialState = {
    logged: false,
}
/*La doble negación para que que sea verdadero */
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return{
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer( authReducer, initialState, init )

    /*El login va a hacer un dispatch de una acción */
    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: name
        }

        localStorage.setItem('user', JSON.stringify( name ))

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem( 'user' );
        const action = {
            type: types.logout,
        };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            //Methods
            login: login,
            logout: logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
// si se manda el value{{autState, dispatch}} se le da demaciado poder a los
// demas componentes