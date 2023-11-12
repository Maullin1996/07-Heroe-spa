import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import queryString from 'query-string'
import { getHeroesByName } from '../helpers';
import '../../styless.css'

export const SearchPage = () => {

    const navigate = useNavigate();
    // para leer el query parametres se utiliza:
    const location = useLocation();
    //console.log({ location }); //con el propósito de ver los parametros del location 
    /* para simplificar la complejidad que puede tener el query parameter 
    se instala la siguiente paquete yarn add query-string*/
    /*con esta función siempre vamos a tener un string
    y con la desestructuración siempre va a tener un valor de q
    asi si sea el valor por defecto que es un string vacio */
    const { q='' } = queryString.parse( location.search );
    
    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0);
    const showError  = (q.length > 0) && heroes.length === 0;

    //console.log({query});
    const {searchText, onInputChange} = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) =>{
        event.preventDefault();

        //if ( searchText.trim().length <=1 ) return;
        /* se realiza un query parameter con el fin de enrutar 
        directamente desde la misma página web*/
        navigate(`?q=${ searchText }`)

    }

    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr/>
                    <form onSubmit={ onSearchSubmit }>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button className="btn btn-outline-primary mt-2">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr/>
                        {/* para buscar los heroes mirar clase 203 */}
                        {/* si se encontró el heroe */}
                        {/* si no se encontró el heroe */}
                    {/* {
                        // forma número 1 
                        ( q=== '' )
                        ? <div className="alert alert-primary">Search a hero</div>
                        : ( heroes.length === 0 )
                            &&  <div className="alert alert-danger">There's not a hero with the name: <b>{ q }</b></div>
                    } */}

                    {/* forma 2 */}
                    <div className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{display: showSearch ? '':'none'}}>
                        Search a hero
                    </div>

                    <div
                        aria-label="alert"
                        className="alert alert-danger animate__animated animate__fadeIn" 
                        style={{display: showError ? '' : 'none'}}>
                        There's not a hero with the name: <b>{ q }</b>
                    </div>

                    {
                        heroes.map( hero => (
                            <HeroCard key={ hero.id } {...hero} />
                        ))
                    }

                </div>
            </div>

        </>
    );
}
