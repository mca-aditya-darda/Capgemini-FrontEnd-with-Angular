// Named Function
function greet(name) {
  console.log(name);
}
greet("Aditya");

// Anonymous Function
setTimeout(function () {
  console.log("Hello");
}, 1000);

// Function Expression
const greetExp = function (name) {
  console.log(name);
};
greetExp("Aditya");

// First Class Functions
function sayHello() {
  return "Hello";
}
function execute(fn) {
  console.log(fn());
}
execute(sayHello);

// Higher Order Function
function operate(fn, a, b) {
  return fn(a, b);
}
console.log(operate((x, y) => x + y, 2, 3));

// Callback Function
function process(callback) {
  let data = "Done";
  callback(data);
}

process(function (msg) {
  console.log(msg);
});

// Arrow Function
const greetArrow = (name) => {
  console.log(name);
};
greetArrow("Aditya");

// Implicit Return
const addition = (a, b) => a + b;
console.log(addition(2, 3));

// Default Parameters
function greetDefault(name = "Guest") {
  console.log(name);
}
greetDefault();

// Closure
function outer() {
  let a = 100;
  return function inner() {
    console.log(a);
  };
}
let res = outer();

res();

//IIFE
(function (name) {
  console.log(name);
})("Aditya");
