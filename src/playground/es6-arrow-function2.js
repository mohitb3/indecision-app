// this keyword and arguments object no longer bound with arrow function

const add = (a, b) => {
    // arguments object undefined in arrow function
    // console.log(arguments);
    return a + b;
};

console.log(add(68, 1));

const user = {
    name: 'Mohit',
    cities: ['St. Louis', 'Germantown', 'Herndon'],
    printPlacesLived() {
        console.log('printPlacesLived()')
        const that = this;
        console.log('this = ', this);
        console.log('that = ', that);

        this.cities.forEach(function (city) {
            console.log(this);
            console.log(that.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();

// Challenge

const multiplier = {
    // array of numbers to multiply
    numbers: [3, 45, 2, 17],

    // single number to multiply by
    multiplyBy: 2,

    // function return a new array where the number has been multiplied
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply()); 