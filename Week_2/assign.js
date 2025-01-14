//Try to create a promisified version of 
// setTimeout
// fs.readFile

function waitFor3s(resolve) {
    setTimeout(resolve, 3000)
}

function setTimeoutPromisified(){
    return new Promise(waitFor3s);
}

function main() {
    console.log("main is called");
    
}

setTimeoutPromisified().then(main); //promise based approach
//setTimeout(main, 3000); // callback based approach

//////////////////////////////////////////////////////////////////////////////

const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {

    fs.readFile("a.txt", "utf-8", function(err, data) {
        sendTheFinalValueHere(data);
    })
}

function readFile(fileName) {
    //read the file and return its value
    return new Promise(readTheFile);
}

const p = readFile();

function callback(contents) {
    console.log(contents);
}
p.then(callback)
