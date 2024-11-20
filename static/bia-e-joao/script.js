const startDate = new Date('2024-05-11T02:00:00');

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('years').textContent = years.toString().padStart(2, '0');
  document.getElementById('months').textContent = months.toString().padStart(2, '0');
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCounter, 1000);

// Carrossel automático
const carousel = document.querySelector('.carousel-images');
let index = 0;

function moveCarousel() {
  index++;
  if (index >= carousel.children.length) {
    index = 0;
  }
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(moveCarousel, 3000);

document.body.addEventListener("mousemove", function () {
  var audio = document.getElementById("music");
  audio.volume = 0.2;
  audio.play();
})