//setTimeout PROMISIFIED
// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve){
//         setTimeout(resolve,duration);
//     });
// }

// //setTimeout => promisified setTimeout
// function callback(){
//     console.log("5 seconds has passed");
    
// }
// setTimeoutPromisified(5000).then(callback);

//CALLBACK HELL
// Q. write code that, 
// step1. logs hi after 1 sec
// step2. logs hello after 3 sec of step1  
// step3. logs hello there after 5 secs of step 2

setTimeout(function() {
    console.log("hi");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
            
        },5000);
    },3000);
},1000);

console.log("outside the callback hell"); //sync operation, prints before the callback hell

//ALT solution (doesnt really have callback hell, defined function outside
function step3Done(){
    console.log("hello there");
}
function step2Done(){
    console.log("hello");
    setTimeout(step3Done, 5000);
}
function step1Done(){
    console.log("hi");
    setTimeout(step2Done, 3000);
}
setTimeout(step1Done,1000);


//PROMISIFIED VERSION
// function setTimeoutPromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }



//PROMISE CHAINING

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}

// promise hell (looks slightly better, got rid of unecessary identations), but still hell
// You're nesting .then() inside another .then().
// This leads to callback hell using Promises, which defeats the purpose.
// It's harder to debug, handle errors, or extend.
setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("hi there");
        })
    })
})
console.log("outside the callback hell");


//PROMISE CHAINING
// Each .then() returns the next Promise, so they run in sequence.
// It's flat, clean, readable.
// Errors can be caught with a single .catch().
setTimeoutPromisified(1000).then(function(){
    console.log("hi");
    return setTimeoutPromisified(3000)
}).then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000)
}).then(function (){
    console.log("hi there");    
});
console.log("outside the callback hell");
//promise chaining