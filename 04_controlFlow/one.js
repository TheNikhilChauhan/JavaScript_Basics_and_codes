//if

// <, >, <=, >=, ==, !=, ===

// if (2 == "2") {
//   console.log("Executed");
// }
// if (2 === "2") {
//   console.log("Executed again");
// }
// if (2 != 3) {
//   console.log("Executed again");
// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//   console.log("User is logged in");
// }

// //else: conditional
// const temperature = 45;
// if (temperature <= 50) {
//   console.log("Temp is less than 50");
// } else {
//   console.log("Temp is greater than 50");
// }
// console.log("Temp code is executed");

// ********************
// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // it will throw error

//short hand notation
// const balance = 1000;
//it is not a good practice to do it like this
// if (balance > 500) console.log("greater than 500"), console.log("balance is greater than 500");

/* if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
} */

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged In");
}
