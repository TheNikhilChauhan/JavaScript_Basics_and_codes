//Strings : these are immutable so all these methods doesn't actually change the string

let firstName = "Awesome";
let lastName = "Programmer";
// console.log(firstName, lastName); // it provides inbuilt space between words

//String Concatination

//Method-1 using + operator

// let fullName1 = firstName + " " + lastName;
// console.log(fullName1); // no space to give space we need to mention the space

//Method-2 Using Template literals

// let fullName = `I want to become an ${firstName} ${lastName}`;
// console.log(fullName);

// new keyword
// const name = new String("nikhil");

// console.log(name);
// console.log(name[0]);

//Getting strings character
console.log(firstName[0]);

//String Methods : methods returns the value
// to upper case and indexof

console.log(firstName.toUpperCase());
console.log(lastName.indexOf("g"));

//trim method : it removes the extra space at the start and end of the string
// let hobbies = "      Eat       Sleep Code Repeat      ";
// //the space will remain like this to remove the space we use trim
//
// let result = hobbies.trim();
// console.log(hobbies);
// console.log(result);

// //to prove the trim is working
// console.log(result.indexOf("E")); //0
// console.log(hobbies.indexOf("E")); //6

// //last indexof : case sensitive
// console.log(result.lastIndexOf("Repeat"));

// //inclues method: case sensitive
// console.log(result.includes("Sleep"));

//slice method
let fullName = "ProgrammerCoder";

let result = fullName.slice(0, 5); // from index 0 to 4
let result1 = fullName.slice(-14, 5);

console.log("Original string = ", fullName);
console.log("Sliced string = ", result);
console.log("Sliced string = ", result1);

// Split method
// let colors = "Brown, Red, Green, Blue";
// let arrColor = colors.split(",");
// console.log(arrColor);
