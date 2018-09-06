const obj = {
	name: 'Dick',
	getName() {
		return this.name;
	},
}

/**
 * obj.getName() is in the context of the object obj, so we have
 * access to obj's this binding
 */
console.log('obj.getName() = ', obj.getName());

/**
 * getName() is not run in the context of the object obj, so we 
 * do not have access to obj's this binding
 */
const getName = obj.getName;
// console.log('getName() = ', getName());

/**
 * Regular functions, like getName(), have undefined for this by default 
 */
const func = function () {
	return this;
}
console.log('func() = ', func());

/**
 * bind() allows you to set the this context
 */
const getNameBinded = obj.getName.bind(obj);
console.log('getNameBinded() = ', getNameBinded());

const getNameBinded2 = obj.getName.bind({ name: 'Jason' });
console.log('getNameBinded2() = ', getNameBinded2());