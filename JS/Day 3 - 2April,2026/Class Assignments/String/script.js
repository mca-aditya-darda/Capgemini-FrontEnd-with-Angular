let str = "  Hello World  ";

console.log(str.length);
console.log(str[0]);
console.log(str.charAt(1));

let a = "Hello";
let b = "JS";
console.log(a + " " + b);
console.log(a.concat(" ", b));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let trimmed = str.trim();
console.log(trimmed);

console.log(trimmed.slice(0, 5));
console.log(trimmed.substring(0, 5));
console.log(trimmed.substr(0, 5));

console.log(trimmed.indexOf("o"));
console.log(trimmed.lastIndexOf("o"));
console.log(trimmed.includes("World"));
console.log(trimmed.startsWith("Hello"));
console.log(trimmed.endsWith("World"));

console.log(trimmed.replace("World", "JS"));
console.log(trimmed.replaceAll("o", "0"));

let arr = trimmed.split(" ");
console.log(arr);
console.log(arr.join("-"));

console.log("Hi ".repeat(3));

let name = "Aditya";
console.log(`Hello ${name}`);

console.log("a" === "a");
console.log("a" > "b");

console.log('Hello "JS"');
