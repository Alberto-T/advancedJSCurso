import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */



export const callbacksComponent = ( element ) => {

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    findHero( id1, (error, hero1) => {

        // element.innerHTML = hero?.name || 'No hay heroe'; / es una forma de hacerlo
        if ( error ) {
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, hero2)=> {
            if ( error ) {
                element.innerHTML = error;
                return;
        
            } 
            
            element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
        
        })


    });
        
}


/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: object)=> void } callback 
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    if ( !hero ) {
        callback(`Hero with id ${ id } not found.`);
        return; // regresa un undefined;
    }

    callback( null, hero );

}
