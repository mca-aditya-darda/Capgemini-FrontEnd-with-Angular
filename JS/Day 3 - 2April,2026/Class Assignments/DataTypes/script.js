// Number
let a = 10;
console.log(a);

// String
let str = "Hello";
console.log(str);

// Boolean
let isTrue = true;
console.log(isTrue);

// Undefined
let x;
console.log(x);

// Null
let y = null;
console.log(y);

// BigInt
let big = 123456789012345678901234567890n;
console.log(big);

// Symbol
let sym = Symbol("id");
console.log(sym);

// Function
function greet() {
  return "Hello";
}
console.log(greet);

// typeof check

console.log(typeof a); // number
console.log(typeof str); // string
console.log(typeof isTrue); // boolean
console.log(typeof x); // undefined
console.log(typeof y); // object (bug)
console.log(typeof big); // bigint
console.log(typeof sym); // symbol
console.log(typeof greet); // function
