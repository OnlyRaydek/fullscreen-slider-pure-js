'use strict';

const slideImage = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const navigation = document.querySelector('.navigation');

const numberOfImages = slideImage.length;
const slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

//* Set up the slider

(function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + '%';
  });

  slideImage[0].classList.add('active');
})();

//* Add logic for navigation

(function createnavigation() {
  for (let i = 0; i < numberOfImages; i++) {
    navigation.children[i].addEventListener('click', () => {
      changeSlide(i);
    });
  }

  navigation.children[0].classList.add('active');
})();

//* Change Slide

function changeSlide(slideNumber) {
  slidesContainer.style.transform = 'translateX(-'
  + slideNumber * slideWidth + 'px)';

  currentSlide = slideNumber;

  setActiveClass();
};

//* Set Active Class

function setActiveClass() {
  // Set active class for Slide
  const currentActive = document.querySelector('.slide.active');

  currentActive.classList.remove('active');
  slideImage[currentSlide].classList.add('active');

  // set active class for navigation
  const currentDot = document.querySelector('.navigation-item.active');

  currentDot.classList.remove('active');
  navigation.children[currentSlide].classList.add('active');
};
