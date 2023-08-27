const accountId = 13245;
let accountEmail = "hannibal@gmail.com";
var accountPassword = "12345";
accountCity = " New Delhi";
let accountState;

//accountId = 2; //not allowed

accountEmail = "harvey@gmail.com";
accountPassword = "56789";
accountCity = "Jaipur";

/* It is not safe to use var
    because of the problem*/

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
