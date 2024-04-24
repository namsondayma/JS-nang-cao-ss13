"use strict";
class Animal {
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow meow!");
    }
}
const dog = new Dog();
dog.makeSound();
const cat = new Cat();
cat.makeSound();
