// CPU BOUND TASK
function sum(a,b){
    return a + b;
}
let ans = sum(20,30);
// console.log(ans);

function summ(n){
    //return n * (n+1);
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans +i;
    }
    return ans;
}
const answ = summ(10);
const { log } = require("console");
// console.log(answ);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//INPUT/OUTPUT (I/0) BOUND TASK

const fs = require("fs"); //importing an external library "fs"
// console.log(fs);

const data = fs.readFileSync('./a.txt', 'utf-8'); //calls fs.readfile synchronously
console.log(data); //logs the data over here

const info = fs.readFileSync('./b.txt', 'utf-8');
console.log(info);
