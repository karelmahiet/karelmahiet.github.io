function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const video = document.getElementById('myVideo');
const playFullscreenButton = document.getElementById('playFullScreen');

playFullscreenButton.addEventListener('click', () => {
  video.style.display = 'block';
  video.play();
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    video.pause();
    video.style.display = 'none';
  }
});

document.addEventListener('webkitfullscreenchange', () => {
  if (!document.webkitFullscreenElement) {
    video.pause();
    video.style.display = 'none';
  }
});

document.addEventListener('msfullscreenchange', () => {
  if (!document.msFullscreenElement) {
    video.pause();
    video.style.display = 'none';
  }
});
