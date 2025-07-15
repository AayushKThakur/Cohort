const { log } = require("console");

// ✅ TOPIC: What is a Promise?

// ✅ Definition:
// A Promise in JavaScript is an object that represents the
// "eventual completion" (or failure) of an asynchronous operation and its resulting value.

// ✅ Why use Promises?
// Callbacks: "I'll call you back when I'm done."
// ❌ If you stack too many, it becomes hard to read (callback hell)

// Promises: "I promise to notify you when I'm done, or if there's an error."
// ✅ They simplify and organize async code using .then() and .catch()

///////////////////////////////////////////////////////////////////////////////////////////////////////
// ✅ SECTION 1: Basic callback-based async function

function waitFor3S(resolve) {
    // 'resolve' is a function. It will be called after 3 seconds.
    // We simulate delay using setTimeout
    setTimeout(resolve, 3000); // call resolve after 3s
}

function main() {
    console.log("Callback-based: main is called after 3 seconds");
}

// Using the callback version
// waitFor3S(main); // Uncomment to see it work

///////////////////////////////////////////////////////////////////////////////////////////////////////
// ✅ SECTION 2: Promisifying setTimeout (turning it into a Promise)

function setTimeoutPromisified(ms) {
    // Return a Promise that resolves after ms milliseconds
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
    console.log("Promise version: 3 seconds have passed");
}

// Using Promises instead of callback
// setTimeoutPromisified(3000).then(callback); // Uncomment to see it work

// ✅ This is syntactically cleaner than:
// setTimeout(callback, 3000);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// ✅ SECTION 3: Understanding Promise structure manually

// Function that doesn't do anything yet
function random(resolve) {
    // 'resolve' is the function provided by the Promise system
    // We will call resolve() later to complete the Promise
}

// Creating a new Promise manually
let p = new Promise(random);

// The function to call when promise is fulfilled
function callback2() {
    console.log("Promise succeeded (manual example)");
}

// Attach callback2 to run when p is resolved
p.then(callback2); // When resolve() is called inside 'random', this will run

///////////////////////////////////////////////////////////////////////////////////////////////////////
// ✅ SECTION 4: Simulating delay using Promises

console.log("----top of the file----");

function delay(resolve) {
    console.log("delay called (inside new Promise executor)");
    setTimeout(() => {
        console.log("setTimeout completed");
        resolve(); // this triggers the .then() callback
    }, 3000);
}

function delayWithPromise() {
    console.log("delayWithPromise called");
    return new Promise(delay); // pass 'delay' function as executor
}

const p2 = delayWithPromise(); // Create a new Promise that resolves in 3 seconds

p2.then(() => {
    console.log("timer is done (via real Promise)");
});

console.log("----end of the file----");

///////////////////////////////////////////////////////////////////////////////////////////////////////
// ✅ SECTION 5: Writing our own custom Promise class (mimicking how JS Promises work)

// ⚠️ Fix: Use arrow function or bind to preserve 'this' inside nested function

class Promise2 {
    constructor(fn) {
        // Save 'this' so we can use it inside the callback
        const self = this;

        // Call the function passed to the constructor
        fn(() => {
            // After 3s, this will run
            if (self.resolve) self.resolve(); // call the function registered in .then()
        });
    }

    then(callback) {
        // Save the callback to be called when resolve is triggered
        this.resolve = callback;
    }
}

function readTheFile(resolve) {
    // Simulating async delay using setTimeout
    setTimeout(function () {
        console.log("callback-based setTimeout completed (in custom Promise)");
        resolve(); // Triggers the .then() callback
    }, 3000);
}

function setTimeoutPromisified2() {
    // Using our custom class instead of real Promise
    return new Promise2(readTheFile);
}

let p3 = setTimeoutPromisified2();

function callback3() {
    console.log("callback has been called (in custom Promise2)");
}

p3.then(callback3); // When custom promise resolves, run this

///////////////////////////////////////////////////////////////////////////////////////////////////////

