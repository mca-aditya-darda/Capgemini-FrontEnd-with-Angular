// ! only declarations

var a;
let b;
// const c; // it is not possible

//! initializations
a = 20;
b = "qwer";

//! redeclarations
var a = 123456;
// let b = 'h' // not possible

//!declaration + initializations
var v1 = 123;
let v2 = 987;
const v3 = 234;

//!reinitialization
v1 = "qwerty";
v2 = "poiuyt";
// v3 = "kkkk";

console.log(v1);
console.log(v2);
// console.log(v3);

// console.log(window) // works in browser but not available in node
