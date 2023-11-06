import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {


    const { login } = useContext( AuthContext )

    const {userName, onInputChange} = useForm({
        userName:''
    });
    const navigate = useNavigate();

    const onLogin = (event) => {
        event.preventDefault();
        if ( userName.trim().length <=1 ) return;
        const lastPath = localStorage.getItem('lastPath') || '/';
        login( userName );
        navigate(lastPath)
    }

    return (
        <>
            <div className="container mt-5 text-center">
                <h1> Login </h1>
                <hr/>

                <form onSubmit={ onLogin }>
                    <input
                        type="text"
                        placeholder='Nombre del usuario'
                        className='form-control text-center ml-5'
                        name='userName'
                        autoComplete='off'
                        value={ userName }
                        onChange={ onInputChange }
                    />
                    <br/>
                        <button 
                            className="btn btn-primary mx-auto d-block"
                            onClick={ onLogin }
                        >
                            Login
                        </button>
                </form>
            </div>
        </>
    )
}
