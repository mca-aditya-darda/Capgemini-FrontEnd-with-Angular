// Loops

let arr = [10, 20, 30, 40, 50];

// for...of (values)
for (let val of arr) {
  console.log("for of:", val);
}
console.log();

// for...in (indexes)
for (let idx in arr) {
  console.log("for in:", idx);
}
console.log();

// forEach
arr.forEach((value, index) => {
  console.log("forEach:", value, index);
});
console.log();

arr.forEach((element) => {
  console.log("forEach:", element);
});
console.log();

// map
let mappedArr = arr.map((value) => value * 2);
console.log("Map:", mappedArr);
console.log();

// filter
let filterArr = arr.filter((value) => value >= 30);
console.log("Filter:", filterArr);
console.log();

// reduce
let sum = arr.reduce((acc, value) => acc + value, 0);
let mul = arr.reduce((acc, value) => acc * value, 1);

console.log("Reduce");
console.log("Addition:", sum);
console.log("Multiply:", mul);
console.log();

// Another example
let arr2 = ["a", "b", "c", "d", "e"];

console.log("Original Array2:", arr2);

let upper = arr2.map((val) => val.toUpperCase());
console.log("Uppercase:", upper);
