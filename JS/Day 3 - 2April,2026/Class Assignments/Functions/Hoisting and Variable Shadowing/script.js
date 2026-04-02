console.log(a);
var a = 10;

greet();
function greet() {
  console.log("Hi");
}

var x = 10;
function f() {
  var x = 20;
  console.log(x);
}
f();
console.log(x);

let y = 10;
{
  let y = 30;
  console.log(y);
}
console.log(y);

function demo() {
  console.log(p);
  var p = 2;
}
demo();
