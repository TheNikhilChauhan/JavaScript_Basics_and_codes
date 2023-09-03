// immediately invoked function expression

(function db() {
  console.log(`DB CONNECTED`);
})();

//we can invoke iife with arrow functions also
(() => {
  console.log(`DB CONNECTED Again`);
})();

((name) => {
  console.log(`DB CONNECTED Again ${name}`);
})("India");
