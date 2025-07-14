const fs = require("fs");

function print(err, data) { 
    console.log(data); 
    
}
//error first callbacks/function/argument. 
//For eg, washing machine telling you first thing, i did not turn off did not fail(no error)
//Second thing these are your clothes.(the data)

function print(err, data) {
    if(err){
        console.log("File not found!");
    } else {
        console.log(data);
    }
}
fs.readFile("a.txt", "utf-8", print); //asynchronously

fs.readFile("b.txt", "utf-8", print); //asynchronously

console.log("Done!"); //executes while the file is being read.

//EXPLANATION:

// readFile is a function that reads a file and returns the data.
// function readFile(filePath, encoding, op/callback/printfunction){
//     //read file
//     op("error!", "hi there") 
//the developer of fs library, since they have written the function like this 
// first with any erorr thier is and then the function.
// so we have to pass a function as an argument to the readFile function.
// so that when the file is read, the function is called with the error and the data.
// so that we can print the data.
// so that we can handle the error. 
// }
