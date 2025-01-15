//Definition: A promise in JavaScript is an object that represents
//the "eventual completion"(or failure) of an 
//asynchronous operation and its resulting value.

//Promises are just a syntactically superior way to write instead of a callbacks.(layman terms)
//Callbacks: "I'll call you back when I'm done." (But things can get chaotic if there's too much back-and-forth.)
// Promises: "I promise to tell you when I'm done, or if there's a problem." (And you can handle things in a nice sequence.)
//Promises simplify and organize asynchronous tasks!

// function waitFor3S(resolve){

//     // console.log(resolve);

//     setTimeout(resolve, 3000) //calls resolve function after 3s
//     //main is passed in resolve argument, so will pass main after 3s
    
// }
// function main() {
//     console.log("main is called");
// }
// waitFor3S(main);
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback); //promisified version
//syntactically cleaner version of: setTimeout(3000,callback) //callback version

///////////////////////////////////////////////////////////////////////////////////////////////

// function random(resolve) { //resolve is also a function

// }

// let p = new Promise(random); // a promise  is supposed to return you something...eventually


//using the eventual value returned by the promise
// function callback() {
//     console.log("promise succeded"); 
// }
// p.then(callback); //whenever the promise eventually completes, yaha control bhej dena
//please call this once you eventually complete

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const { log } = require("console");
// const fs = require("fs")

// console.log("----top of the file----");

// function readTheFile(resolve) {
//     console.log("readTheFile called");
//     setTimeout(function(){
//         console.log("callback based setTimeout completed");
//         resolve();
//     }, 3000);
// }

// function setTimeoutPromisified(fileName) {
//     console.log("setTimeoutPromisifies called");
//     //read the file and return its value
//     return new Promise(readTheFile);
// }

// const p = setTimeoutPromisified();

// function callback() {
//     console.log("timer is done");
// }

// p.then(callback)

// console.log("----end of the file----");

////////////////////////////////////////////////////////////////

//writing our own promise class

// class Promise2 {
//     constructor (fn) {
//         function afterDone() {
//             this.resolve();
//         }
//         fn(afterDone)
//     }
//     then(callback) {
//         this.resolve = callback;
//         //thid.width = 3
//         //this.color = "red";
//     }
// }

// function readTheFile(resolve) {
//     setTimeout(function() {
//         console.log("callback nased setTimeout completed");
//         resolve();
//     }, 3000);
// }

// function setTimeoutPromisified() {
//     return new Promise2(readTheFile)
// }

// let p = setTimeoutPromisified();
// function callback() {
//     console.log("callback has been called");
// }
// p.then(callback);

