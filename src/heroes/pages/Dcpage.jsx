import { HeroList } from '../components';

export const Dcpage = () => {
    /*
    Para imprimir en consola los heroes y verificar de que si 
    los está enviando
    console.log(HeroList({publisher:'DC Comics'}))*/
    return (
        <>
            <h1>DC Comics</h1>
            <hr />
            <HeroList publisher='DC Comics'/>
        </>
    );
}
