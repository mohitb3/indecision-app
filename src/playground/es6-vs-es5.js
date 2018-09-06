class OldSyntax {
  constructor() {
    this.name = 'Mohit';
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi! My name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log('ES5 Syntax');
console.log(oldSyntax);
console.log(getGreeting());

console.log('');

class NewSyntax {
  name = 'Bob';

  // arrow function automatically binds getGreeting to the class object
  getGreeting = () => {
    return `Hi! My name is ${this.name}`;
  }
}
const newSyntax = new NewSyntax();
const newGreeting = newSyntax.getGreeting;
console.log('ES6 Syntax');
console.log(newSyntax);
console.log(newGreeting());
