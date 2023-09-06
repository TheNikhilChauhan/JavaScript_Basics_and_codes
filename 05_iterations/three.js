// these are array specific loop
// for of

const arr = [1, 2, 3, 4, 5];

// for (const iterator of object) {

// } syntax of for of

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello and Welcome to my Blog!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//maps
const map = new Map();
map.set("IN", "India");
map.set("AUS", "Australia");
map.set("Fr", "France");
map.set("RUS", "Russia");
map.set("IN", "India"); // no duplication allowed

console.log(map);

for (const [key, value] of map) {
  console.log(`key: ${key}`);
  console.log(`value: ${value}`);
}
// maps are iterable

const myObj = {
  Marvel: "Ironman",
  DC: "Superman",
};

for (const [key, value] of myObj) {
  console.log(`key: ${key}`);
}
// objects are not iterable with for of
