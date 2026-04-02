// Calculator 1 -

let add = function (a, b) {
  return a + b;
};

let subtract = function (a, b) {
  return a - b;
};

let multiply = function (a, b) {
  return a * b;
};

let divide = function (a, b) {
  return a / b;
};

function calc(a, b, opFn) {
  console.log(opFn(a, b));
}

calc(10, 20, add);
calc(20, 10, subtract);
calc(10, 5, multiply);
calc(20, 4, divide);

// Calculator 2 -

function calc2(a, b, opFn) {
  if (opFn == "+") {
    return a + b;
  } else if (opFn == "-") {
    return a - b;
  } else if (opFn == "*") {
    return a * b;
  } else if (opFn == "/") {
    return a / b;
  }
}

console.log(calc2(10, 20, "+"));
console.log(calc2(10, 20, "-"));
console.log(calc2(10, 20, "*"));
console.log(calc2(10, 20, "/"));
