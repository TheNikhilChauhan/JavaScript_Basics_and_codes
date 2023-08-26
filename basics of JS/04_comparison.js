//comparison

console.log(null > 0); //output: false
console.log(null == 0); //output: false
console.log(null >= 0); //output: true

/* The reason is that an equality check == and comparison >,
<, <=, >= works differently. Comparisons convert null to a number, 
treating it as 0. Thats why null >= 0 is true and null > 0 is false. */

// '==' and '==='

console.log(2 == "2"); // true => it converts the string to a number.
console.log("2" === 2); // false => it checks the values and data type also.
