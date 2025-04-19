const videoWrapper = document.querySelector('.projects-video__wrapper');
const video = videoWrapper.querySelector('.projects-video__player');
const overlay = videoWrapper.querySelector('.projects-video__overlay');
const playButton = videoWrapper.querySelector('.projects-video__play-btn');

playButton.addEventListener('click', () => {
  overlay.style.opacity = '0';
  video.setAttribute('controls', 'controls');
  video.play();
});
