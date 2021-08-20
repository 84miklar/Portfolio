"use strict"

/*     PROJECTS      */
const showroowImg = document.querySelector(".showroom__img")
const showroomTxt = document.querySelector(".showroom__text")
const calcImg = document.querySelector(".calc__img")
const calcTxt = document.querySelector(".calc__text")
const adventureImg = document.querySelector(".advent__img")
const adventureTxt = document.querySelector(".advent__text")

const toggleProject = function (image, text) {
  if (document.querySelector(`.${image}`).classList.contains("img--clicked")) {
    document.querySelector(`.${image}`).classList.remove("img--clicked")
    document.querySelector(`.${text}`).classList.remove("text--open")
  } else {
    document.querySelector(`.${image}`).classList.add("img--clicked")
    document.querySelector(`.${text}`).classList.add("text--open")
  }
}

/*       TRY MY GAME-BUTTON       */
const gameButton = document.querySelector(".game__button")
let life = ["X", "X", "X"]

let toggleGame = function () {
  if (gameButton.textContent == "close game") {
    document.querySelector(".game__button").textContent = "try my little game"
    document.querySelector(".game").classList.remove("game--open")
  } else {
    document.querySelector(".game__button").textContent = "close game"
    document.querySelector(".game").classList.add("game--open")
  }

  document.querySelector(".numOne").textContent = "?"
  document.querySelector(".calcType").textContent = setCalcType()
  document.querySelector(".numTwo").textContent = "?"
  pointsNumber.textContent = "0"
  document.querySelector(".face").textContent = "😑"
  document.querySelector(".start").classList.remove("hidden")
  guess.classList.add("hidden")
  document.querySelector(".entered__Number").value = ""
  life = ["🦄", "🦄", "🦄"]
  document.querySelector(".life").textContent = life
}

/*         THE GAME             */

let calcType = document.querySelector(".calcType")
let guess = document.querySelector(".guess")
let pointsNumber = document.querySelector(".points__number")
let answer = Number(document.querySelector(".entered__Number").value)
let secretNumber = 0
let numberOne = 0
let numberTwo = 0
let calculationType = 0
let points = 0

//Sets the right calculation type depending on a random number
let setCalcType = function () {
  if (calculationType <= 5) {
    return (calcType.innerHTML = "+")
  } else {
    return (calcType.innerHTML = "-")
  }
}

const setNewNumbers = function () {
  numberOne = Math.trunc(Math.random() * 1000) + 1
  numberTwo = Math.trunc(Math.random() * 1000) + 1
  calculationType = Math.trunc(Math.random() * 10) + 1
  document.querySelector(".numOne").textContent = numberOne
  document.querySelector(".calcType").textContent = setCalcType()
  document.querySelector(".numTwo").textContent = numberTwo
}

//Returns the correct answer
let calculator = function () {
  if (calcType.innerHTML === "+") return numberOne + numberTwo
  else return numberOne - numberTwo
}

//change text on start button and get new numbers
document.querySelector(".start").addEventListener("click", function () {
  document.querySelector(".start").classList.add("hidden")
  guess.classList.remove("hidden")
  setNewNumbers()
})

//Decides if the guessed answer is same as correct answer, and adds points or reduces life
guess.addEventListener("click", function () {
  secretNumber = calculator()

  if (life.length > 1) {
    if (answer === secretNumber) {
      points++
      pointsNumber.textContent = `${points}`
      document.querySelector(".face").textContent = "😁"
    } else {
      life.pop()
      document.querySelector(".life").innerText = life
      document.querySelector(".face").textContent = "😞"
    }
    document.querySelector(".entered__Number").value = ""
    setNewNumbers()
  } else {
    document.querySelector(".life").innerHTML = "Game Over"
    document.querySelector(".face").textContent = "😭"
  }
})
