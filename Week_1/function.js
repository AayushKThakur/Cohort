// Assigment 1: Return a function to add two numbers.
function sum(a, b) {
  return a + b;
}
let ans = sum("Aayush", "Thakur");
console.log(ans);

// Assignment 2: write a function to check voting eligibility
function canVote(age) {
  if (age > 18) {
    return true;
  }
  return false;
}
let vote = canVote(17);
console.log(vote);
