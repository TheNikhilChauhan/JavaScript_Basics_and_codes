const promiseOne = new Promise(function (resolve, reject) {
  //do async task
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
// we have created promise now we can consume it.

promiseOne.then(function () {
  console.log("Promise consumed");
});

//now we did it in the same
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async taks 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 is resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Harvey", email: "Specter@gmail.com" });
  }, 1000);
});
// whatever parameter i pass in the resolve i get that back in .then()
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "harvey", password: "12345" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "12345" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  //promiseFive is an object and we can't consume it normally so we put it inside a variable
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

/* async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // use await here bcoz response.json will take time to convert it into json
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUsers(); */

//fetch

fetch("https://api.github.com/users/nIkHiLChn")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("E: ", error);
  });
