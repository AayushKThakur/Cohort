const { log } = require("console");

const d = new Date(); //created a new object of the JS built in Date class

console.log(d.getFullYear()); // called a method(function) of the class

const map = new Map(); //ANOTHER BUILD IN JS CLASS
map.set('name','Aayush');
map.set('age', '21');

const firstName = map.get('name');
console.log(firstName);

// console.log(map.get('name'));

// Code	                What's Happening
// new Date()	        Creates a new Date object
// d.getFullYear()	    Calls a method to get the year
// new Map()	        Creates a new Map object
// map.set()	        Adds data to the map
// map.get()	        Retrieves data from the map