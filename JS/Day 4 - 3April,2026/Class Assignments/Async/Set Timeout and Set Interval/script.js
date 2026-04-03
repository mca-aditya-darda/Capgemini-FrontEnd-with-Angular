let a = 1;

// setInterval
let id = setInterval(() => {
  console.log("Running");
}, 1000);
clearInterval(id); // when needed

// setTimeout
setTimeout(() => {
  console.log("Set Timeout");
}, 1000);
