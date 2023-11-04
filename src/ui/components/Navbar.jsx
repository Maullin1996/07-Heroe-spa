
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    /*Para salirme de la ruta se usa el siguiente coustom Hook 
    Para poder encontrar este Hook hay que ir a las rutas
    en el navegador "Navigation.Provider" en el apartado
    de push replace */
    const { user, logout } = useContext( AuthContext );

    const navigate = useNavigate();

    /*El replace se utliza para reemplazar la ruta que 
    se estaba viendo */
    const onLogout = () => {

        logout();
        navigate('/login', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-link ${isActive ? 'active' : '' }` } 
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-primary'>
                        {user}
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}