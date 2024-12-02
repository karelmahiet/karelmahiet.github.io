function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function playFullScreen() {
  const video = document.getElementById('myVideo');
  video.style.display = 'block'; // Rendre visible la vidéo
  video.requestFullscreen(); // Activer le mode plein écran
  video.play(); // Lire la vidéo
}