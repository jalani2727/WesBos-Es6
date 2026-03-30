// Wes puts his api keys and REST endpoints in a file like this one.
// The goal for this config file is for it to be a module.
// Variable defined in a module are scoped to that module. Therefore, they need to be exported. This is a benefit of files you intend to be modules. They are self-contained.


// If only one thing is being exported in this module, you can use a default export
// const someKey='12313a2sdf';
// export default someKey;
// Default exports can be renamed wherever you import them.


// Named exports are for methods you plan on using in different places. They have to be imported as the name they are exported as.
// export const anotherKey = '654648984dfdf65';

// importing this into a different file would look like: import {anotherKey} from 'path/to/this/file'

// export const url = 'http://wesbos.com';

// Functions can also be exported
// export function sayHi(name){
//     console.log(`Hello there ${name}`)
// }

// Rather than having multiple export statements, you can export everything you would like to export using curly brackets
const anotherKey = '654648984dfdf65';
const url = 'http://wesbos.com';
function sayHi(name){
    console.log(`Hello there ${name}`)
}

export {
    anotherKey,
    url,
    sayHi
}

// If you want to, you can use the 'as' keyword here as well to change the name of the thing you're exporting.