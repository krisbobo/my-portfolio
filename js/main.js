const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.mobile-nav-hidden');
const closeHamburger = document.querySelector('.hidden');
const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('.mobile-nav-menu');
const navIcon = document.querySelectorAll('.navIcon');
hamburger.addEventListener('click', () => {
  navbar.classList.add('header');
  closeHamburger.classList.add('open');
});
closeHamburger.addEventListener('click', () => {
  navbar.classList.remove('header');
  navToggle.classList.add('hamburger');
  closeHamburger.classList.remove('open');
});
closeMenu.addEventListener('click', () => {
  navbar.classList.remove('header');
  closeHamburger.classList.remove('open');
});
window.addEventListener('resize', () => {
  if (document.clientWidth > '768px') {
    navbar.classList.remove('header');
    navIcon.forEach((icon) => {
      icon.classList.add('hidden');
    });
    hamburger.classList.remove('hidden');
  }
});

// form validation

const form = document.querySelector('.contact-form');
const email = document.querySelector('#mail');
const errorHolder = document.querySelector('.error');

function inputCheck() {
  const userEmail = email.value.trim();
  const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);
  if (!isLowerCase(userEmail)) {
    errorHolder.innerText = 'Invalid Email! Email should be written in lowercase.';
  }
  if (isLowerCase(userEmail)) {
    form.submit();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputCheck();
});
