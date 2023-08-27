// arrays

// const arr = ["apple", 0, 1, 2, 3, 4, 5, "55"];
// console.log(arr[0]);

// const myarr = new Array(1, 2, 3, 4, 5);
// console.log(myarr[4]);

// Array methods

// const myarr = new Array(1, 2, 3, 4, 5);
// myarr.push(6);
// myarr.push("mango", 10);

//pop
// myarr.pop();
// myarr.pop();

//unshift

// myarr.unshift(9);

//shift
// const myarr = new Array(1, 2, 3, 4, 5);
// myarr.shift();

// console.log(myarr);

//indexOf()
// console.log(myarr.indexOf(3));

//includes()
// console.log(myarr.includes(9));

//slice and splice

const arr = [0, 1, 2, 3, 4, 5];

console.log("original array", arr);

const newArr = arr.slice(1, 3); // 3 is not included

console.log("sliced ", newArr);
console.log("after slice array: ", arr);

const thirdArr = arr.splice(1, 3); // 3 is included

console.log("spliced ", thirdArr);
console.log("after splice array: ", arr);
