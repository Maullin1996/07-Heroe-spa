import { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

//higher funtional component al recibir los hijos
export const PrivateRoute = ({children }) => {

    const { logged }  = useContext( AuthContext );
    
    /*Esto se hace con el fin de retornar a la
    ultima pagina en la que estabamos antes  de salirnos */
    const { pathname, search } = useLocation();
    const lasPath = pathname + search
    localStorage.setItem('lasPath', lasPath);


    return (logged)
    ? children
    : <Navigate to={"/login"} />
}
