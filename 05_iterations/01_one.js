// for loop

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   if (element === 5) {
//     console.log(`This is number 5`);
//   }
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`inner loop value: ${j} and inner to outer value: ${i} `);
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

let myArr = ["superman", "flash", "batman"];
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  //   console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of index is ${index}`);
// }

//continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of index is ${index}`);
}
