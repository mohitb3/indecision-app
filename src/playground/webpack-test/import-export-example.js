// import './utils.js';
// import subtr, { square, add } from './utils';

// console.log('app.js is running dawg');
// console.log('square(4) = ', square(4));
// console.log('add(4, 17) = ', add(4, 17));
// // you can name default exports anything you want!
// console.log('subtr(4, 17) = ', subtr(4, 17));

import isSenior, { isAdult, canDrink } from './person';
const ages = [3, 17, 18, 20, 21, 23, 65, 80, 19];
ages.forEach(age => {
  console.log(`isAdult(${age}) = ${isAdult(age)}`);
  console.log(`canDrink(${age}) = ${canDrink(age)}`);
  console.log(`isSenior(${age}) = ${isSenior(age)}`);
  console.log('');
});