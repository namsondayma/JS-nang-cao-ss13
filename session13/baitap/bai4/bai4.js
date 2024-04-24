"use strict";
class Circle1 {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea1() {
        return this.width * this.height;
    }
    calculatePerimeter1() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle1(5);
console.log("Circle Area:", circle.calculateArea1());
console.log("Circle Perimeter:", circle.calculatePerimeter1());
const rectangle = new Rectangle1(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea1());
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter1());
