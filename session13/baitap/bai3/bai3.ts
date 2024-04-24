abstract class Animal {
    abstract makeSound(): void;
  }
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof woof!");
    }
  }
  class Cat extends Animal {
    makeSound(): void {
      console.log("Meow meow!");
    }
  }
  const dog = new Dog();
  dog.makeSound();
  const cat = new Cat();
  cat.makeSound();