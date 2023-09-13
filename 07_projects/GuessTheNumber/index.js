let num = Math.floor(Math.random() * 100 + 1);
// console.log(num);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#sub");

const previousGuess = document.querySelector(".prevGuesses");
const remainingGuess = document.querySelector(".guessesRemain");
const result = document.querySelector(".result");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numberOfGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid number!");
  } else if (guess < 1) {
    alert("Please Enter a number more than 1 !");
  } else if (guess > 100) {
    alert("Please Enter a number less than 100!");
  } else {
    prevGuess.push(guess);
    if (numberOfGuess === 11) {
      displayGuess(guess);
      displayMessage(
        `Game Over! You have failed this game <br> Random number was ${num}`
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === num) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < num) {
    displayMessage(`Number is too low!`);
  } else if (guess > num) {
    displayMessage(`Number is too high!`);
  }
}

function displayMessage(message) {
  result.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess}, `;
  numberOfGuess++;
  remainingGuess.innerHTML = `${11 - numberOfGuess}`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    num = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numberOfGuess = 1;
    previousGuess.innerHTML = "";
    remainingGuess.innerHTML = `${11 - numberOfGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMessage("");
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("buton");
  p.innerHTML = `<h2 id="newGame" style="cursor: pointer">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
