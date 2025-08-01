// # Assignments #1 - Create a cli

// Create a `command line interface` that lets the user specify a file path and 
// the nodejs process counts the number of words inside it.

// First let's do this
//Create a node.js program that let's you read through a file (that it takes as an input) and counts the number
// of words in it 

//Solution 1

// const fs = require("fs");

// function main(fileName) {
//     fs.readFile(fileName, "utf-8", function(err, data) {
//         let total = 0;
//         for (let i = 0; i < data.length; i++) {
//             if(data[i] === " ") {
//                 total++;
//             }
//         }
//         console.log(total + 1); //number of words = number of spaces+1
//     })
// }

// main(process.argv[2]); 

//Any command line interface gives us a help keyword, for eg, node -h.
// So this should also work if you are creating your own CLI.

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // const lines = data.split('\n').length; //for checking no:of lines
        const lines = data.split(' ').length;

        console.log(`There are ${lines} words in ${file}`);
      }
    });
  });

program.parse();