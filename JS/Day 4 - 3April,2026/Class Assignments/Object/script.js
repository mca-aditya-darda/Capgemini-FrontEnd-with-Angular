// Object
let obj = {
  name: "Aditya",
  age: 22,
  address: {
    city: "Jaipur",
    state: "Rajasthan",
  },

  printDetails() {
    console.log(this.name);
  },

  printAllDetails() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.address.city);
    console.log(this.address.state);
  },
};

obj.printAllDetails();

// Factory Function
function factory(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user1 = factory("Aditya", 22);
console.log(user1);

// Object methods
console.log(Object.keys(obj));
console.log(Object.values(obj));

// Freeze & Seal
Object.freeze(obj);
console.log(Object.isFrozen(obj));

Object.seal(obj);
console.log(Object.isSealed(obj));

// call, apply, bind
function greet(city, country) {
  console.log(`Hello ${this.name} from ${city}, ${country}`);
}

let person = { name: "Aditya" };

greet.call(person, "Jaipur", "India");
greet.apply(person, ["Jaipur", "India"]);

let bound = greet.bind(person);
bound("Jaipur", "India");
