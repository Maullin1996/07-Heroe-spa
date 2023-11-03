import { Link } from "react-router-dom";

const CharactersByHero = ({characters, alter_ego}) =>{
    if (characters === alter_ego) return (<></>);
    return <p>{ characters }</p>;
}

export const HeroCard = ({
    id,
    superhero, 
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

        const heroImageUrl=`/assets/heroes/${ id }.jpg`;

    return (
        <div className="col" class="animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-guitters">

                    <div className="col-4">
                        <img src={ heroImageUrl } className="card-img" alt={ superhero }/>
                    </div>

                    <div className="col-8">

                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            {/* forma 1 para hacer que el nombre del caracter no se repita
                            {
                                ( alter_ego !== characters ) && (<p>{ characters }</p>)
                            }
                             */}

                            {/* Forma 2 */}
                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small>{ first_appearance }</small>
                            </p>
                            {/* Para que me lleve a una pagina personalizada con la informacion del heroe */}
                            <Link to={`/hero/${ id }`}>
                                Más...
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
