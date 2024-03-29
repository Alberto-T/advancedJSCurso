import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorAsyncComponent = async( element ) => {

        const heroGenerator = getHeroGenerator();
        let isFinishied = false;

        do{
            const { value, done } = await heroGenerator.next();
            isFinishied = done;
            if( isFinishied ) break;

            element.innerHTML = value;

        } while( !isFinishied )
    
}

async function* getHeroGenerator(){

    for( const hero of heroes ) {
        await sleep();
        yield hero.name;
    }

    return 'Ya no hay más héroes';
}


const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(); 
        }, 500);
    })
}
