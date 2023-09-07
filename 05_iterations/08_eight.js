//reduce
//array.reduce(accumulator, currentValue ) => accumulator + currentValue, initialValue

const myNums = [1, 2, 3, 4];

// const total = myNums.reduce((accumulator, currentValue) => {
//   console.log(`accum: ${accumulator} and curVal: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);

const total = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(total);

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Java Course",
    price: 1999,
  },
  {
    itemName: "Python Course",
    price: 3999,
  },
  {
    itemName: "DSA Course",
    price: 4999,
  },
];

const pay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(pay);
