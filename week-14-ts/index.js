"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "";
function greet(firstName) {
    console.log("Hello" + firstName);
}
greet("aayush");
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(ans);
// ans ="asdasd"
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(8));
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hello");
});
// greet(1);
//# sourceMappingURL=index.js.map