const user = {
  username: "Harvey",
  price: 999,

  greeting: function () {
    console.log(`${this.username} , hello and welcome to my page`);
    console.log(this); // referring to both user
  },
};

// user.greeting();
// user.username = "Louis";
// user.greeting();

// console.log(this); // referring to empty object

function nothing() {
  let username = "Ragnar";
  console.log(this.username); // we get undefined
}

// nothing(); // this doesn't work on functions it works on objects

// const users = function () {
//   let username = "Sherlock";
//   console.log(this.username);
// };

//declaring function using arrows
// const users = () => {
//   let username = "Sherlock";
//   console.log(this);
// };
// users();

//basic arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//implicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "Sherlock" });
// to return the object we must wrap it with paranthesis else we will get undefined

console.log(addTwo(5, 6));
