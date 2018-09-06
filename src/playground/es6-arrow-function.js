function square(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = x => x * x;

console.log(square(8));
console.log(squareArrow(9));

// Challenge:
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mohit Bisht'));
console.log(getFirstName('Mike Wazozki'));