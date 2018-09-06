console.log('utils.js is running');

export const square = x => x * x;

export const add = (a, b) => a + b;

export default (a, b) => a - b;
/**
 * Two types of exports:
 * 1) default export
 * 2) named exports
 */

// Named exports:
//  export { square, add, subtract as default };