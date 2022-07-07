const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const slider = document.querySelector(".slider");

let direction;

const slideNext = () => {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-20%)";
};

const slidePrev = () => {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(20%)";
};

const slide = () => {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }

  slider.style.transition = "none";
  slider.style.transform = "translate(0)";

  setTimeout(() => {
    slider.style.transition = "all 0.5s";
  });
};

prevButton.addEventListener("click", slidePrev);

nextButton.addEventListener("click", slideNext);

slider.addEventListener("transitionend", slide);