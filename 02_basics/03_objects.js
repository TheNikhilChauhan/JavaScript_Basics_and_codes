// singleton with constructor, literals

//singleton
//Object.create

// object literals

const sym = Symbol("key1");
const user = {
  name: "Harvey",
  [sym]: "myKey1",
  age: 20,
  location: "Delhi",
  email: "harvey@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//accessing objects
//dot notation
// console.log(user.email);
// //square notation
// console.log(user["email"]);
// console.log(typeof user.sym);
// console.log(user[sym]);
// console.log(typeof user[sym]);

//modifying
user.email = "harvey@gmail.com";
user["age"] = 27;
// Object.freeze(user); // can't make any changes now
user.email = "harvey@microsoft.com";
console.log(user.email);
console.log(user);

//methods
user.greeting = function () {
  console.log("Hello user!");
};

console.log(user.greeting());

user.greetingTwo = function () {
  console.log(`hello user, ${this.name}`);
};
console.log(user.greetingTwo());
