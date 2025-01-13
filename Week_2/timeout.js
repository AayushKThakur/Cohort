function timeout(){
    console.log("Click the button!");
}
console.log("Hi!");

setTimeout(timeout, 1000);           // I/O INTENSIVE TASK

console.log("Welcome to loupe.");

let c = 0;                             //CPU INTENSIVE TASK
for (let i = 0; i < 10000000; i++) {
    c = c + 1;
}

console.log("Expensive operation done");

/*
option 1                            CORRECT OPTION. 
Hi                                  If the cpu is busy after the timer of i/o task, the i/o task will be put to a callback queue, as js is single threaded
Welcome to loupe                    Because the thread is busy, the call stack is occupied. once done and cpu is availbale again, the i/o task comepletes and prints.
Expensive operation done
click the button

option 2                            My choice.
Hi
Welcome to loupe
click the button
Expensive operation done
*/