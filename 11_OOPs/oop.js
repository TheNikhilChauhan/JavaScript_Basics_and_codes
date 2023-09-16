//object literal

const user = {
  username: "Harvey",
  loginCount: 3,
  signedIn: true,

  getUserDetails: function () {
    console.log(this);
    console.log(`Username:  ${this.username}`);
  },
};

// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this)

//now i'm creating user 2 but to do that i have to create
// user 2 with same structure as the above to avoid that
// we use constructor so that we don't have to write the same
// code again and again

/* const user2 = {
    username: "Harvey",
    loginCount: 3,
    signedIn: true,
  
    getUserDetails: function () {
      console.log(this);
      console.log(`Username:  ${this.username}`);
    },
  }; */

// new keyword which we have used in our previous sessions
// is a constructor function. With that we can create multiple
// instances from single object literal

//constructor
function User(username, loginCount, isLoggedIn) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);

  return this;
}

// const userOne = User("Hitesh", 12, true);
// const userTwo = User("Louis", 15, false);
// console.log(userOne);
// userOne has been overwritten by userTwo... thats why we
// use constructur function: new keyword which provides us
// with a new copy of the instance

const userOne = new User("Hitesh", 12, true);
const userTwo = new User("Louis", 15, false);
console.log(userOne);
console.log(userTwo);
