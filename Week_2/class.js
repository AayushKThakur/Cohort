class Rectangle {
    constructor(width, height, color) { //properties
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){                              //method
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`The color of the rectangle is ${this.color}`);
        
    }
}

const rect = new Rectangle(2, 4, "Red");    //object of class rectangle
const rect2 = new Rectangle(10, 20, "Blue");//object of class rectangle

const area = rect.area();
const area2 = rect2.area();
console.log(area);
console.log(area2);


const paint = rect.paint();
const paint2 = rect2.paint();
