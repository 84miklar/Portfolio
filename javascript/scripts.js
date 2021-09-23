"use strict";

/*   NAVBAR */
const navbar = document.querySelector(".main__nav");
const links = document.querySelectorAll(".links");
const hamburger = document.querySelector(".hamburger");
const toggleNavbar = function () {
  if (navbar.classList.contains("main__nav--closed")) {
    navbar.classList.remove("main__nav--closed");
    links.forEach((el) => el.classList.add("links--closed"));
    hamburger.classList.add("hamburger--crossed");
  } else {
    navbar.classList.add("main__nav--closed");
    links.forEach((el) => el.classList.remove("links--closed"));
    hamburger.classList.remove("hamburger--crossed");
  }
};

/*     PROJECTS      */

//Toggles classes for animation
const toggleProject = function (image, text) {
  if (document.querySelector(`.${image}`).classList.contains("img--clicked")) {
    document.querySelector(`.${image}`).classList.remove("img--clicked");
    document.querySelector(`.${text}`).classList.remove("text--open");
    document.querySelector(`.${text}`).removeAttribute("onclick");
  } else {
    document.querySelector(`.${image}`).classList.add("img--clicked");
    document.querySelector(`.${text}`).classList.add("text--open");
  }
};

/*       TRY MY GAME-BUTTON       */
const gameButton = document.querySelector(".game__button");
let life = ["🦄", "🦄", "🦄"];

//Toggles classes för animation
let toggleGame = function () {
  if (gameButton.textContent == "close game") {
    document.querySelector(".game__button").textContent = "try my little game";
    document.querySelector(".game").classList.remove("game--open");
  } else {
    document.querySelector(".game__button").textContent = "close game";
    document.querySelector(".game").classList.add("game--open");
  }

  resetGame();
};

// Resets the game to default
let resetGame = () => {
  document.querySelector(".numOne").textContent = "?";
  document.querySelector(".calcType").textContent = setCalcType();
  document.querySelector(".numTwo").textContent = "?";
  pointsNumber.textContent = "0";
  document.querySelector(".face").textContent = "😑";
  document.querySelector(".start").classList.remove("hidden");
  guess.classList.add("hidden");
  document.querySelector(".entered__Number").value = "";
  life = ["🦄", "🦄", "🦄"];
  document.querySelector(".life").textContent = life;
};

/*         THE GAME             */

let calcType = document.querySelector(".calcType");
let guess = document.querySelector(".guess");
let pointsNumber = document.querySelector(".points__number");
let answer = document.querySelector(".entered__Number");

let numberOne = 0;
let numberTwo = 0;
let calculationType = 0;
let points = 0;

//Sets the right calculation type depending on a random number
let setCalcType = function () {
  if (calculationType <= 5) {
    return (calcType.innerHTML = "+");
  } else {
    return (calcType.innerHTML = "-");
  }
};

//Sets new numbers and calculation type for the game
const setNewNumbers = function () {
  numberOne = Math.trunc(Math.random() * 1000) + 1;
  numberTwo = Math.trunc(Math.random() * 1000) + 1;
  calculationType = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".numOne").textContent = numberOne;
  document.querySelector(".calcType").textContent = setCalcType();
  document.querySelector(".numTwo").textContent = numberTwo;
  document.querySelector(".entered__Number").value = "";
};

//Returns the correct answer
let calculator = function () {
  if (calcType.innerHTML === "+") return numberOne + numberTwo;
  else return numberOne - numberTwo;
};
let secretNumber = calculator();

//change text on start button and get new numbers
document.querySelector(".start").addEventListener("click", function () {
  document.querySelector(".start").classList.add("hidden");
  guess.classList.remove("hidden");
  setNewNumbers();
});

//Decides if the guessed answer is same as correct answer, and adds points or reduces life
guess.addEventListener("click", function () {
  console.log(parseInt(answer.value));

  if (life.length > 0) {
    if (parseInt(answer.value) === calculator()) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
    setNewNumbers();
  } else {
    gameOver();
  }
});

let gameOver = () => {
  document.querySelector(".life").innerHTML = "Game Over";
  document.querySelector(".face").textContent = "😭";
};

let correctAnswer = () => {
  points++;
  pointsNumber.textContent = `${points}`;
  document.querySelector(".face").textContent = "😁";
};

let wrongAnswer = () => {
  life.pop();
  document.querySelector(".life").innerText = life;
  document.querySelector(".face").textContent = "😞";
  if (life.length == 0) {
    gameOver();
  }
};
