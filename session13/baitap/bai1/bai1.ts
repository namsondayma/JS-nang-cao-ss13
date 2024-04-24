abstract class hehehaha {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    getName(): string {
      return this.name;
    }
    abstract getSize(): void;
  }
  class Rectangle extends hehehaha {
    private width: number;
    private height: number;
    constructor(name: string, width: number, height: number) {
      super(name);
      this.width = width;
      this.height = height;
    }
    getSize(): void {
      console.log(`Width: ${this.width}`);
      console.log(`Height: ${this.height}`);
    }
  }
  const rectangle = new Rectangle("Rectangle", 10, 5);
  console.log("Shape name:", rectangle.getName());
  rectangle.getSize();