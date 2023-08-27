const marvel = ["Ironman", "Spiderman", "Dr.Strange"];

const dc = ["batman", "superman", "flash"];

// marvel.push(dc);
// console.log(marvel);

// const newArr = marvel.concat(dc);
// console.log(newArr);

// const allArr = [...marvel, ...dc];
// console.log(allArr);

//flat()

const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

console.log(arr.flat(Infinity));

console.log(Array.isArray("Ironman"));
console.log(Array.from("Ironman"));

console.log(Array.from({ name: "Ironman" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
