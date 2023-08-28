// destructuring

const course = {
  courseName: "JavaScript",
  price: 999,
  courseDuration: "4 months",
};

console.log(course.courseName);
//or
const { courseName: cName } = course;
// console.log(courseName);
console.log(cName);

//APIs
