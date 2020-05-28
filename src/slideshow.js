

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

const prevButton = document.querySelector('#prevBtn')
const nextButton = document.querySelector('#nextBtn')

console.log(carouselImages)
let counter = 1;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
  carouselSlide.style.transition = "transform 0.4 ease-in-out"
  counter++;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

export {carouselSlide, carouselImages, prevButton, nextButton}
