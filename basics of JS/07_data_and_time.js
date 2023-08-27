// Dates

// let currentDate = new Date(); // 0 to 11 month
// console.log(typeof currentDate);
// console.log(currentDate.toString());
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleString());
// console.log(currentDate.toTimeString());
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toISOString());

// let currentDate = new Date(2023, 0, 12);
// console.log(currentDate.toDateString());

// let currentDate3 = new Date("08-22-2023");
// console.log(currentDate3.toLocaleString());

// let currentDate2 = new Date(2023, 0, 12, 4, 30);
// console.log(currentDate2.toLocaleString());

// const currentTimestamp = Date.now();
// const currentTs = new Date().getTime();
// console.log(currentTimestamp);
// console.log(currentTs);

//get date and time
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.getHours(), ":", newDate.getMinutes());
