// A CLASS is a blueprint for creating objects.
// It has predefined properties and methods defined, which can be used to create objects.

// const { log } = require("console");


class Rectangle {
    constructor(width, height, color) { //properties
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){                              //method: function inside a class
        const area = this.width * this.height;
        // console.log(this);
        return area;
    }

    paint(){
        console.log(`The color of the rectangle is ${this.color}`);
        
    }
}

//new keyword is used to create an object of a class.
// The new keyword calls the constructor function inside a class, which builds and returns a new object 
// with the properties and methods defined in that class.
const rect1 = new Rectangle(2, 4, "Red");//intance of the rectangle class/object rect1 of the rectangle class
const rect2 = new Rectangle(10, 20, "Blue");//object rect2 of rectangle class

const area = rect1.area();
const area2 = rect2.area();
console.log(area);
console.log(area2);


const paint = rect1.paint();
const paint2 = rect2.paint();

