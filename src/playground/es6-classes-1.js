class Person {
	constructor(name = 'Anon', age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);

		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}.`;
		}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, home) {
		super(name, age);

		this.home = home;
	}

	getGreeting() {
		let greeting = super.getGreeting();

		if (this.home) {
			greeting += ` I'm visiting from ${this.home}`;
		}

		return greeting;
	}
}

const me = new Person('Mohit Bisht', 24);
console.log(me);
console.log(me.getDescription());
console.log(me.getGreeting());
console.log('');

const joaquin = new Student('Joaquin Hernando Jaramillo Sabogal', 24, 'Microbiology');
console.log(joaquin);
console.log(joaquin.getDescription());
console.log(joaquin.getGreeting());
console.log('');

const aragorn = new Traveler('Aragorn', 87, 'Minas Tirith');
console.log(aragorn);
console.log(aragorn.getDescription());
console.log(aragorn.getGreeting());
console.log('');

const you = new Traveler();
console.log(you);
console.log(you.getDescription());
console.log(you.getGreeting());
console.log('');
