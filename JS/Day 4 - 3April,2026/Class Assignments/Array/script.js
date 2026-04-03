// Array

let arr = [10, 20, 30, 40, 50];

console.log("Original:", arr);

// length
console.log("Length:", arr.length);

// push (add at end)
arr.push(60);
console.log("After push:", arr);

// pop (remove from end)
arr.pop();
console.log("After pop:", arr);

// unshift (add at start)
arr.unshift(5);
console.log("After unshift:", arr);

// shift (remove from start)
arr.shift();
console.log("After shift:", arr);

// slice (does NOT change original)
let sliced = arr.slice(1, 3);
console.log("Slice (1,3):", sliced);
console.log("After slice:", arr);

// splice (changes original)
arr.splice(1, 2);
console.log("After splice:", arr);

// reverse
arr.reverse();
console.log("After reverse:", arr);

// join
console.log("Join:", arr.join("-"));

// Array Destructuring
let arr2 = [1, 2, 3, 4, 5];
let [a, b, , c] = arr2;

console.log("Destructured:", a, b, c);

// Spread Operator
let original = [1, 2, 3];
let copy = [...original];

console.log("Spread Copy:", copy);
