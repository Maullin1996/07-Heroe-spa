import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";
/*Como se sabe que el componente no se va a renderizar
constantemente si no una sola vez, no se utiliza el useMeno
pero por cuestiones de buenas constumbres se va aultizar para 
evitar errores con programas pesados en un futuro */
export const HeroPage = () => {

    const {id} = useParams();
    //console.log(id);

    const navigate = useNavigate();

    /*Cuando el Id cambie de va a disparar la función */
    const hero = useMemo( () => getHeroById( id ), [id]);

    const onNavigateBack = () => {
        navigate(-1)
    }

    const heroImageUrl = `./heroes/${ id }.jpg`;

// si no tenemos un heroe = !hero me manda a la página de marvel
    if ( !hero ){
        return <Navigate to="/marvel"/>
    }

    return (
        <div className="row m-5  animate__animated animate__bounceInLeft">
            <div className="col-4">
                <img
                    src={ heroImageUrl }
                    alt={ hero.superhero }
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" > <b>Alter ego:</b>{ hero.alter_ego }</li>
                    <li className="list-group-item" > <b>Publisher:</b> { hero.publisher } </li>
                    <li className="list-group-item" > <b>First appearance:</b> { hero.first_appearance } </li>
                </ul>

                <h5 className="mt-3"> Characters </h5>
                <p>{ hero.characters }</p>
            </div>

            <button 
                className="btn btn-outline-primary"
                onClick={ onNavigateBack }
            >
                Back
            </button>

        </div>
    )
}
