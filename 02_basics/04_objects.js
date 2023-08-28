// object literal
// const instaUser = {}

//singleton
const instaUser = new Object();

instaUser.id = "123a";
instaUser.name = "Mike";
instaUser.isLoggedIn = false;
console.log(instaUser);

// const anotherUser = {
//   email: "harvey@gmail.com",
//   fullname: {
//     userFullName: {
//       firstName: "Harvey",
//       middleName: "Reginald",
//       lastName: "Specter",
//     },
//   },
// };
// console.log(anotherUser.fullname.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj5 = { 5: "cc", 6: "g" };

//spread operator
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//Object.assign(target, value) cloning
const obj4 = Object.assign({}, obj1, obj2, obj5);
console.log(obj4);

//arrays of objects: usually get that type from the data
// that comes from database

const user = [
  {
    id: 1,
    name: "Harvey",
  },
  {
    id: 2,
    name: "Mike",
  },
  {
    id: 3,
    name: "Louis",
  },
  {
    id: 4,
    name: "Donna",
  },
  {
    id: 5,
    name: "Jessica",
  },
];

console.log(user[1]);

// creating objects of keys and values
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty("name"));
