var nameVar = 'Mohit';
var nameVar = 'Rohit';
console.log('nameVar', nameVar);

let nameLet = 'Ben';
console.log('nameLet', nameLet);

const nameConst = 'Anaking';
console.log('nameConst', nameConst);

// Block scoping;

const fullName = 'Mohit Bisht';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log('if() firstName = ', firstName);
}

console.log('firstName = ', firstName);