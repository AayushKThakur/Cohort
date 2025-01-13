const fs = require("fs");

// function print(err, data) { //error first callbacks/function/argument. eg, washing machine telling you first thing, i did not turn off did not fail, second thing these are your clothes.
//     console.log(data); 
    
// }
function print(err, data) {
    if(err){
        console.log("File not found!");
    } else {
        console.log(data);
    }
}
fs.readFile("a.txt", "utf-8", print); //asynchronously

fs.readFile("b.txt", "utf-8", print); //asynchronously

console.log("Done!");


// function readFile(filePath, encoding, op/callback/printfunction){
//     //read file
//     op("error!", "hi there") 
//     //the developer of fs librarysince they the function like this first with any erorr thier is and then the function
// }
