import {uniq} from 'lodash';// Named import
import jsonp from 'jsonp'; //Default import

// import someKey from './src/config'; // Default Import
// import { anotherKey, url, sayHi } from './src/config'; // Named import

// You can use the 'as' keyword when importing a variable or function to change the name when it's imported to your file
// import { anotherKey as key, url as appUrl, sayHi } from './src/config';

// const ages = [1,1,4,52,12,4];

// console.log(uniq(ages));

// sayHi('Jalani')


import User, {createURL, gravatar} from './src/user';

const user = new User('Jalani', 'jalani2727@gmail.com', 'jalani2727.github.io')

const profile = createURL(user.name)
const image = gravatar(user.email)