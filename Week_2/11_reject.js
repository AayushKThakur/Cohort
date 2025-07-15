//err first callback vs rejects in promises

const fs = require("fs");

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

function readFileAsync() {
    return new Promise(function (resolve, reject) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            // Check for error
            if (err) {
                reject("File not found");
            } else {
                resolve(data);
            }
        });
    });
} 

readFileAsync()
    .then(function (x) {
        console.log("File has been read:", x);
    })
    .catch(function (e) {
        console.log(e);
    });
