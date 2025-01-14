//Promises are just a syntactically superior way to wrtie instead of a callbacks.(layman terms)
//Callbacks: "I'll call you back when I'm done." (But things can get chaotic if there's too much back-and-forth.)
// Promises: "I promise to tell you when I'm done, or if there's a problem." (And you can handle things in a nice sequence.)
//Promises simplify and organize asynchronous tasks!


function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

function callback() {
    console.log("3 seconds have passed");
}


setTimeoutPromisified(3000).then(callback); //syntactically cleaner version of: setTimeout(3000,callback)