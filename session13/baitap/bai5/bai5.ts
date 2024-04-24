interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
  }
  abstract class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    speedUp(): void {
      this.speed += 10;
      this.printSpeed();
    }
    slowDown(): void {
      this.speed -= 10;
      this.printSpeed();
    }
    stop(): void {
      this.speed = 0;
      this.printSpeed();
    }
    protected printSpeed(): void {
      console.log(`Current speed: ${this.speed}`);
    }
  }
  class Car extends Vehicle {
    constructor(speed: number) {
      super(speed);
    }
  }
  const car = new Car(50);
  car.speedUp();
  car.slowDown();
  car.stop();