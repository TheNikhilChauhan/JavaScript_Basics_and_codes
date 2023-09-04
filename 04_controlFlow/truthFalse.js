// const userEmail = "harvey@gmail.com"
// we are not comparing the value we are here just assuming that this value in string is true

// const userEmail = "";
// in case of empty string its false

// const userEmail = [];
// //in case of empty array its true
// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

//falsy values:

// false, 0, BigInt 0n, null, "", undefined, NaN
//apart from these all the values are truthy values

//some truthy values
// "0": it is truthy, 'false', " ", [], {}, function(){}

// if (userEmail === 0) {
//   console.log("Array is empty");
// }

//object
// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }

//Nullish Coalescing Operator(??) : null and undefined
//usually use this in database
// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;

// console.log(val1);

//ternary operator
const coffeePrice = 300;
coffeePrice <= 200
  ? console.log("Less than 200")
  : console.log("More than 200");
