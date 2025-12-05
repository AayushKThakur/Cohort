let firstName: string = "";

function greet(firstName: string) {
  console.log("Hello" + firstName);
}
greet("aayush");

function sum(a: number, b: number): number {
  return a + b;
}
let ans = sum(1, 2);
console.log(ans);
// ans ="asdasd"

function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isLegal(8));

function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}
delayedCall(function () {
  console.log("hello");
});

// greet(1);
