// for Each loop

// array.forEach(element => {

// });

const coding = ["JS", "Python", "Java", "CPP"];
// basic
// coding.forEach(function (item) {
//   console.log(item);
// });

//for each asks for callback function
// the way we write function is function keyword but don't use the name of function because it is a callback
// inside paranthesis we give name to get each element

// using arrow function
// coding.forEach((val) => {
//   console.log(val);
// });

// using function
// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

//another way
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
