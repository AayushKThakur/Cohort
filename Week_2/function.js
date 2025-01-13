//FUNCTIONAL ARGUMENTS: Passing a function to another function as an argument.

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

function doOperation(a, b, op) { //op arugument, gets replaced by this; function op(a,b){ return a + b } 
//   return op(a, b)
    //a=1
    //b=2
    let val = op(a,b); //sum(1,2)
    return val;
}

console.log(doOperation(1, 2, sum)) 
// not calling the function like sum(1,2) because that will return 3. we need to call the name of the function signature and not what the function returns.  

 