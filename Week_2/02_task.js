
// CPU BOUND TASK

function add(a,b){
    return a + b;
}
let ans = add(20,30);
console.log(ans);

function sum(n){
    //return n * (n+1);
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}
const answ = sum(5);
// const { log } = require("console");
console.log(answ);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//INPUT/OUTPUT (I/0) BOUND TASK

const fs = require("fs"); //importing an external library "fs"
// console.log(fs);

const data = fs.readFileSync('./a.txt', 'utf-8'); //calls fs.readfile synchronously, utf is encoding
console.log(data); //logs the data over here

const info = fs.readFileSync('./b.txt', 'utf-8');
console.log(info);
