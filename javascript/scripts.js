"use strict";
/*
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".open-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
*/
/*
const sendMail = function () {
  mail.href = "mailto:mikael_larsson84@hotmail.com";
  mail.click("button");
};

var mail = document.createElement("a");
var button = document.querySelector(".test");
button = document.addEventListener("click", sendMail);
*/

const image = document.querySelector(".project");
const modal = document.querySelector(".project__text");

const openModal = function () {
  modal.classList.remove("hidden");
  image.classList.add("img__scaledown");
};

const closeModal = function () {
  modal.classList.add("hidden");
  image.classList.remove("img__scaledown");
};

const imageClicked = function () {
  if (!image.classList.contains("img__scaledown")) {
    openModal();
  } else {
    closeModal();
  }
};

modal.addEventListener("click", closeModal);

image.addEventListener("click", imageClicked);
