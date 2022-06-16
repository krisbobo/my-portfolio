const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');

// What we want navToggle to do

navToggle.addEventListener('click', () => {
  nav.classList.toggle('header');
  navIcon.forEach((icon) => {
    icon.classList.toggle('d-block');
  });
});

window.addEventListener('resize', () => {
  if (document.clientWidth > '768px') {
    nav.classList.remove('header');
    navIcon.forEach((icon) => {
      icon.classList.add('hidden');
    });
    hamburger.classList.remove('hidden');
  }
});