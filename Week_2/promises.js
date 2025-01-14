//Definition: A promise in JavaScript is an object that represents
//the "eventual completion"(or failure) of an 
//asynchronous operation and its resulting value.

//Promises are just a syntactically superior way to wrtie instead of a callbacks.(layman terms)
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

function random(resolve) { //resolve is also a function

}

let p = new Promise(random); // a promise  is supposed to return you something...eventually


//using the eventual value returned by the promise
function callback() {
    console.log("promise succeded"); 
}
p.then(callback); //whenever the promise eventually completes, yaha control bhej dena
//please call this once you eventually complete
