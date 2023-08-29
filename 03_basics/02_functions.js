// function calculateCartPrice(...num1) {
//   return num1;
// }
// //rest operator
// console.log(calculateCartPrice(100, 200, 500));

//what if we add two more parameters with rest operator
// function calculateCartPrice(val1, val2, ...num1) {
//   console.log(`Value1: ${val1} and Value2: ${val2}`);
//   return num1;
// }

// console.log(calculateCartPrice(100, 200, 500));

// functions with objects
const user = {
  username: "Harvey",
  price: 300,
};
function handleObject(anyobject) {
  console.log(
    `Username is: ${anyobject.username} and price is: ${anyobject.price}`
  );
}
handleObject(user);

handleObject({
  username: "Louis",
  price: 500,
});

//functions with arrays
const arr = [100, 200, 300, 400];
function returnSecondValue(getArr) {
  return getArr[1];
}
console.log(returnSecondValue(arr));

console.log(returnSecondValue([500, 600, 700, 800]));
