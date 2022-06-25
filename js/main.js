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

// Local Storage

const formName = document.querySelector('#name');
const formEmail = document.querySelector('#mail');
const formMessage = document.querySelector('#message');

function updateChange() {
  const datafromForm = {
    user_name: formName.value,
    user_email: formEmail.value,
    user_message: formMessage.value,
  };
  localStorage.setItem('form', JSON.stringify(datafromForm));
}

document.addEventListener('DOMContentLoaded', () => {
  const getformValue = localStorage.getItem('form');
  if (getformValue) {
    const formObject = JSON.parse(getformValue);
    formName.value = formObject.user_name;
    formEmail.vaule = formObject.user_email;
    formMessage.value = formObject.user_message;
  }
});
formName.onchange = updateChange;
formEmail.onchange = updateChange;
formMessage.onchange = updateChange;

// Create data object

const projectSection = [
  {
    heading: 'My Recent Work',
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'css', html: 'html', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
  },
  {
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'css', html: 'html', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
  },
  {
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'css', html: 'html', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
  },
  {
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'css', html: 'html', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
  },
];