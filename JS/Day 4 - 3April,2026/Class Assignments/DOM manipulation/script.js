// Select elements

let h1 = document.getElementById("heading");
console.log(h1);

let h2 = document.getElementsByClassName("heading");
console.log(h2);

let h3 = document.getElementsByTagName("h1");
console.log(h3);

let h4 = document.querySelectorAll(".heading");
console.log(h4);

let form = document.getElementsByTagName("form");
console.log(form);
console.dir(form);

// Modify content

let h5 = document.querySelector("h2");
h5.innerHTML = "this is a <i>heading</i>";

// Create and remove element

let h6 = document.createElement("h3");
h6.innerHTML = "This is another Heading";

let div = document.querySelector("div");

div.appendChild(h6);
div.removeChild(h6);
