const track = document.querySelector(".pictures__track");
const btnLeft = document.querySelector(".pictures__arrow--left");
const btnRight = document.querySelector(".pictures__arrow--right");
const cards = document.querySelectorAll(".pictures__card");

let currentIndex = 0;
const totalCards = cards.length;

function updateSlider() {
  const cardWidth = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  btnLeft.disabled = currentIndex === 0;
}

btnRight.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

btnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener("resize", updateSlider);

window.addEventListener("load", updateSlider);

