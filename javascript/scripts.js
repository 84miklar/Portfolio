"use strict";

/*     PROJECTS      */
const showroowImg = document.querySelector(".showroom__img");
const showroomTxt = document.querySelector(".showroom__text");
const calcImg = document.querySelector(".calc__img");
const calcTxt = document.querySelector(".calc__text");
const adventureImg = document.querySelector(".advent__img");
const adventureTxt = document.querySelector(".advent__text");

const toggleProject = function (image, text) {
  if (
    document.querySelector(`.${image}`).classList.contains("img__scaledown")
  ) {
    document.querySelector(`.${image}`).classList.remove("img__scaledown");
    document.querySelector(`.${text}`).classList.add("hidden");
  } else {
    document.querySelector(`.${image}`).classList.add("img__scaledown");
    document.querySelector(`.${text}`).classList.remove("hidden");
  }
};

/*       TRY MY GAME-BUTTON       */
const gameButton = document.querySelector(".game__button");

let toggleGame = function () {
  if (gameButton.textContent == "close game") {
    document.querySelector(".game__button").textContent = "try my little game";
    document.querySelector(".game").classList.add("hidden");
  } else {
    document.querySelector(".game__button").textContent = "close game";
    document.querySelector(".game").classList.remove("hidden");
  }

  document.querySelector(".numOne").textContent = "?";
  document.querySelector(".calcType").textContent = setCalcType();
  document.querySelector(".numTwo").textContent = "?";
  pointsNumber.textContent = "0";
  document.querySelector(".face").textContent = "😑";
};

/*         THE GAME             */

let calcType = document.querySelector(".calcType");
let guess = document.querySelector(".guess");
let pointsNumber = document.querySelector(".points__number");
let secretNumber = 0;
let numberOne = 0;
let numberTwo = 0;
let calculationType = 0;
let points = 0;

let setCalcType = function () {
  if (calculationType <= 5) {
    return (calcType.innerHTML = "+");
  } else {
    return (calcType.innerHTML = "-");
  }
};

const setNewNumbers = function () {
  numberOne = Math.trunc(Math.random() * 10) + 1;
  numberTwo = Math.trunc(Math.random() * 2) + 1;
  calculationType = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".numOne").textContent = numberOne;
  document.querySelector(".calcType").textContent = setCalcType();
  document.querySelector(".numTwo").textContent = numberTwo;
};

let calculator = function () {
  if (calcType.innerHTML === "+") return numberOne + numberTwo;
  else return numberOne - numberTwo;
};

document.querySelector(".start").addEventListener("click", function () {
  document.querySelector(".start").textContent = "new numbers";
  setNewNumbers();
});

guess.addEventListener("click", function () {
  let answer = Number(document.querySelector(".entered__Number").value);
  secretNumber = calculator();
  if (answer === secretNumber) {
    points++;
    pointsNumber.textContent = `${points}`;
    document.querySelector(".face").textContent = "😁";
  } else {
    document.querySelector(".face").textContent = "😞";
  }
  document.querySelector(".entered__Number").value = "";
  setNewNumbers();
});

// var sec = 0;
// function pad(val) {
//   return val > 9 ? val : "0" + val;
// }
// setInterval(function () {
//   document.getElementById("seconds").innerHTML = pad(++sec % 60);
//   document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
// }, 1000);
