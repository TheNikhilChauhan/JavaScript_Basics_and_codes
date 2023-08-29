// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumbers(5, 6);

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// const result = addTwoNumbers(5, 6);
// console.log(result);

// function addTwoNumbers(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// const result = addTwoNumbers(10, 20);
// console.log(`Result: ${result}`);

// function loginUserMessage(username) {
//   return `${username} just logged in`;
// }

// // console.log(loginUserMessage("Ragnar"));
// console.log(loginUserMessage()); // undefined

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage());
console.log(loginUserMessage("Yujiro"));
