function one() {
  username = "Mike";

  function two() {
    const product = "Mobile";
    console.log(username);
  }
  //   console.log(product); //error bcoz product is not defined

  two();
}

// one();

if (true) {
  const username = "Harvey";
  if (username === "Harvey") {
    const product = "Laptop";
    // console.log(username + " purchased " + product);
  }
  //   console.log(product);
}

// console.log(username);

// ******************************

function addOne(num) {
  return num + 1;
}

console.log(addOne(4));

console.log(addTwo(4)); // hoisting
const addTwo = function (num) {
  return num + 2;
};

// console.log(addTwo(4));
