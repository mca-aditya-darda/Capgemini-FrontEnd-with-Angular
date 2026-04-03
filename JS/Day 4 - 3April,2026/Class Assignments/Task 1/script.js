let arr = [10, 20, 30, 40, 50];

console.log("Original:", arr);

arr.splice(arr.length, 0, 60);
console.log("Push:", arr);

arr.splice(arr.length - 1, 1);
console.log("Pop:", arr);

arr.splice(0, 0, 5);
console.log("Unshift:", arr);

arr.splice(0, 1);
console.log("Shift:", arr);
