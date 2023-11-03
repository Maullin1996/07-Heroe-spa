import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] );

    return (
        /*row row-cols-1 row-cols-md-3 g-3 son clases de boostrap */

        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        {...hero}
                    />
                ))
            }
        </div>
    );
}
/*Para ecitar desestructurar elemento por elemento en el 
componente de hace uso de  {...hero}*/
