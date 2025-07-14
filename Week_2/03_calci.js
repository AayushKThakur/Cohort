
//FUNCTIONAL ARGUMENTS: Passing a function to another function as an argument.

const { log } = require("console");

// Write a calculator program that adds, subtracts, multiplies, divides two arguments.
// Approach #1
// Calling the respective function
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(sum(1, 2))

// Approach #2
// Passing in what needs to be done as an argument.
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) { 
// op is a parameter of type function (a functional parameter)., e.g., sum, subtract, etc.
let val = op(a, b); // This will call the argument passed for op with a and b.
return val;
}

const ans = doOperation(1, 2, sum);
// sum is a function being passed as an argument (a functional argument).
console.log(ans);

// not calling the function like sum(1,2) because that will return 3. 
// we need to call the name of the function signature and not what the function returns.  

 