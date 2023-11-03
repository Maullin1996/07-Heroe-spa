import { heroes } from "../data/heroes"

// los que hace la funcion es busar el heroe con el id suminitrado
// y si el heroe exite manda la imformación y si no existe manda un 
// undefined

export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id );

}