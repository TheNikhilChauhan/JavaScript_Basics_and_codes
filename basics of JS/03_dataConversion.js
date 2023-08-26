let stringtype = "54";
console.log(stringtype, typeof stringtype);

//Conversion into Number

let numberType = Number(stringtype);
console.log(numberType, typeof numberType);

//IMP Note: number method passing string must  be of numeric values

let stringType = String(numberType);
console.log(stringType, typeof stringType);
//Any number can be converted to string easily but vice verca is not true

let score = "123abc";
let valueType = Number(score);
console.log(valueType, typeof valueType);
//here we get another type i.e. 'NaN' => Not a Number

//Boolean method
let age = "32";
let booleanValueOfAge = Boolean(age);
console.log(booleanValueOfAge, typeof booleanValueOfAge);
// in strings only blank string is false ("") and
// in case of numbers only 0 is false
