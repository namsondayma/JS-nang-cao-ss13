interface Geometry1 {
    calculateArea(): number;
    calculatePerimeter(): number;
  }
  class Circle1 implements Geometry1 {
    private radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  class Rectangle1 implements Geometry1 {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    calculateArea1(): number {
      return this.width * this.height;
    }
    calculatePerimeter1(): number {
      return 2 * (this.width + this.height);
    }
  }
  const circle: Geometry1 = new Circle1(5);
  console.log("Circle Area:", circle.calculateArea1());
  console.log("Circle Perimeter:", circle.calculatePerimeter1());
  const rectangle: Geometry1 = new Rectangle1(4, 6);
  console.log("Rectangle Area:", rectangle.calculateArea1());
  console.log("Rectangle Perimeter:", rectangle.calculatePerimeter1());