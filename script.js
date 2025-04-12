function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const video = document.getElementById('myVideo');
const video2 = document.getElementById('myVideo2');
const playFullscreenButton = document.getElementById('playFullScreen');
const playFullscreenButton2 = document.getElementById('playFullScreen2');

//luigi
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


//genimon
playFullscreenButton2.addEventListener('click', () => {
  video2.style.display = 'block';
  video2.play();
  if (video2.requestFullscreen) {
    video2.requestFullscreen();
  } else if (video2.webkitRequestFullscreen) {
    video2.webkitRequestFullscreen();
  } else if (video2.msRequestFullscreen) {
    video2.msRequestFullscreen();
  }
});


document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    video2.pause();
    video2.style.display = 'none';
  }
});

document.addEventListener('webkitfullscreenchange', () => {
  if (!document.webkitFullscreenElement) {
    video2.pause();
    video2.style.display = 'none';
  }
});

document.addEventListener('msfullscreenchange', () => {
  if (!document.msFullscreenElement) {
    video2.pause();
    video2.style.display = 'none';
  }
});
