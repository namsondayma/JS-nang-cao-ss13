/*
Abstract class cho phép định nghĩa các phương thức trừu tượng và định nghĩa một số phương thức có sẵn. Lớp con kế thừa từ abstract class phải triển khai các phương thức trừu tượng và có thể sử dụng các phương thức có sẵn.
Interface chỉ định nghĩa các phương thức mà lớp implement phải triển khai. Không có phương thức có sẵn trong interface. Lớp implement interface phải triển khai tất cả các phương thức trong interface.
 */
abstract class Animal1 {
    abstract makeSound(): void;
    move(): void {
      console.log("Animal is moving");
    }
  }
  class monkey extends Animal1 {
    makeSound(): void {
      console.log("hehehe");
    }
  }
  const monkey = new monkey();
  monkey.makeSound();
  monkey.move();