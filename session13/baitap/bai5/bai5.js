"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        this.printSpeed();
    }
    slowDown() {
        this.speed -= 10;
        this.printSpeed();
    }
    stop() {
        this.speed = 0;
        this.printSpeed();
    }
    printSpeed() {
        console.log(`Current speed: ${this.speed}`);
    }
}
class Car extends Vehicle {
    constructor(speed) {
        super(speed);
    }
}
const car = new Car(50);
car.speedUp();
car.slowDown();
car.stop();
