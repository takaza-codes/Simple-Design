const track = document.querySelector(".pictures__track");
const btnLeft = document.querySelector(".pictures__arrow--left");
const btnRight = document.querySelector(".pictures__arrow--right");
const cards = document.querySelectorAll(".pictures__card");
let currentPosition = 0;
const visibleCards = 1;
const totalCards = cards.length;
function updatePosition() {
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
  btnLeft.disabled = currentPosition === 0;
  btnRight.disabled = currentPosition >= totalCards - visibleCards;
}
btnRight.addEventListener("click", () => {
  if (currentPosition < totalCards - visibleCards) {
    currentPosition++;
    updatePosition();
  }
});
btnLeft.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
    updatePosition();
  }
});
window.addEventListener("resize", updatePosition);
updatePosition();