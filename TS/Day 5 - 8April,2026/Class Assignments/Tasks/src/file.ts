interface User {
  name: string;
  age: number;
}

let data: [number, boolean, User] = [1, false, { name: "Aditya", age: 30 }];

console.log("Task 1 Output:", data);

function add(a: number, b: number): number {
  return a + b;
}

function operate(
  fn: (a: number, b: number) => number,
  x: number,
  y: number,
): number {
  return fn(x, y);
}

let result = operate(add, 5, 3);
console.log("Task 2 Output:", result);

class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  display(): void {
    console.log("Car Brand:", this.brand);
  }
}

let car1 = new Car("BMW");
car1.display();

let x: any = "hello";
x = 10;
x = true;

console.log("Task 4 (any):", x);

let y: unknown = "hello";
y = 10;
y = true;

console.log("Task 5 (unknown):", y);
console.log("Type of y:", typeof y);

if (typeof y === "string") {
  console.log("Uppercase:", y.toUpperCase());
} else {
  console.log("y is not a string, cannot use toUpperCase()");
}

// Type Alias
type User2 = {
  name: string;
  age: number;
};
let user: User2 = {
  name: "Rahul",
  age: 25,
};

console.log("User2:", user);
// Interface
interface Person {
  name: string;
  age: number;
}

// Create object using interface
let person: Person = {
  name: "Aditya",
  age: 22,
};

console.log("Person:", person);

// Union Type
let id: string | number;

id = "A123";
console.log("ID (string):", id);

id = 101;
console.log("ID (number):", id);

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log("Enum value:", c);
console.log("Enum name:", Color[c]);
