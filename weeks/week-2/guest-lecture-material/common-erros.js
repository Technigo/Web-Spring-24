// ReferenceError: Variable is not defined
// This error occurs when you try to use a variable that has not been declared.
console.log(myVariable); // Throws ReferenceError: myVariable is not defined

// TypeError: Cannot Read Property of Undefined
// This error occurs when you try to access a property or method of an undefined value.
const myObject = {};
console.log(myObject.property); // Throws TypeError: Cannot read property 'property' of undefined

// SyntaxError: Unexpected Token
// This error occurs when there is a syntax mistake in your code.
const myArray = [1, 2, 3;
// Throws SyntaxError: Unexpected token ';', expecting ']'

