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
setTimeout(function() {
    console.log("hi");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
            
        },5000);
    },3000);
},1000);

console.log("outside the callback hell");

//ALT solution (doesnt really have callback hell), defined function outside
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
//promise chaining 1 (looks slightly better, got rid of unecessary identations)
// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hi there");
//         })
//     })
// })
// console.log("outside the callback hell");

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