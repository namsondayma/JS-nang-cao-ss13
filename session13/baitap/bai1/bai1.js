"use strict";
class hehehaha {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends hehehaha {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
    }
}
const rectangle = new Rectangle("Rectangle", 10, 5);
console.log("Shape name:", rectangle.getName());
rectangle.getSize();
