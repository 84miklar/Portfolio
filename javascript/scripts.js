"use strict";

const images = document.querySelector(".project");
const modals = document.querySelector(".project__text");

const openModal = function () {
  modals.classList.remove("hidden");
  images.classList.add("img__scaledown");
};

const closeModal = function () {
  modals.classList.add("hidden");
  images.classList.remove("img__scaledown");
};

const imageClicked = function () {
  if (!images.classList.contains("img__scaledown")) {
    openModal();
  } else {
    closeModal();
  }
};

modals.addEventListener("click", closeModal);

images.addEventListener("click", imageClicked);
/*
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", imageClicked);
}
for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener("click", closeModal);
}
*/
