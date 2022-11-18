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
    formEmail.value = formObject.user_email;
    formMessage.value = formObject.user_message;
  }
});
formName.onchange = updateChange;
formEmail.onchange = updateChange;
formMessage.onchange = updateChange;

// *******Create data object*******

const projectSection = [
  {
    id: 0,
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    mobileImg: './images/mobilemodal.png',
    desktopImg: './images/desktopmodal.png',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'CSS', html: 'HTML', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
    seeLive: 'https://krisbobo.github.io/my-portfolio/',
    seeSource: 'https://github.com/krisbobo/my-portfolio',
  },
  {
    id: 1,
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    mobileImg: './images/mobilemodal.png',
    desktopImg: './images/desktopmodal.png',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'CSS', html: 'HTML', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
    seeLive: 'https://krisbobo.github.io/my-portfolio/',
    seeSource: 'https://github.com/krisbobo/my-portfolio',
  },
  {
    id: 2,
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    mobileImg: './images/mobilemodal.png',
    desktopImg: './images/desktopmodal.png',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'CSS', html: 'HTML', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
    seeLive: 'https://krisbobo.github.io/my-portfolio/',
    seeSource: 'https://github.com/krisbobo/my-portfolio',
  },
  {
    id: 3,
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    mobileImg: './images/mobilemodal.png',
    desktopImg: './images/desktopmodal.png',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'CSS', html: 'HTML', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
    seeLive: 'https://krisbobo.github.io/my-portfolio/',
    seeSource: 'https://github.com/krisbobo/my-portfolio',
  },
];

// ========= Modal Popup ===========

const popUp = (index) => `
        <div class="modal">
          <div class="content">
            <div class="modal-header">
              <span class="close">&times;</span>
    
              <h2 id="modal-title" class="someHeader">${projectSection[index].title}</h2>
            </div>
            <div class="modal-body">
              <img class="mobileModal" src=${projectSection[index].mobileImg} alt="My Project">
              <img class="desktopModal" src=${projectSection[index].desktopImg} alt="My Project">
              <p class="someText">${projectSection[index].supportingText}</p>
            </div>
            <div class="modal-footer">
              <div class="devLanguages">
                <ul>
                    <li>${projectSection[index].langBox.html}</li>
                    <li>${projectSection[index].langBox.css}</li>
                    <li>${projectSection[index].langBox.Ruby}</li>
                    <li>${projectSection[index].langBox.Bootstrap}</li>
                </ul>
              </div>
              <div class="modalButtons">
                <div class="liveDemo"><a href="${projectSection[index].seeLive}">See Live</a><img src="./images/modalIcon.png" alt="See Live Icon"></div>
                <div class="sourcecode"><a href="${projectSection[index].seeSource}">See Source</a><img src="./images/github.png" alt="github image"></div>
              </div>
            </div>
          </div>
        </div>`;

// ======= Inject work section dynamically ==========

const worksContainer = document.querySelector('.work-container');
projectSection.forEach((work, index) => {
  const workCards = document.createElement('div');
  workCards.classList.add('workCards');
  workCards.innerHTML = `  
            <div class="col-1">
                <img src=${work.img} alt="Image placeholder">
            </div>

            <div class="col-2">
                <h3 class="title">${work.title}</h3>
                <p class="supporting-text">${work.supportingText}</p>
                <ul class="lang-box">
                    <li>${work.langBox.css}</li>
                    <li>${work.langBox.html}</li>
                    <li>${work.langBox.Bootstrap}</li>
                    <li class="border-check">${work.langBox.Ruby}</li>
                </ul>
                <div class="work-button"><button data-id="${index}" class="card-btn" type="button">${work.button}</button></div>
            </div>
  `;

  worksContainer.appendChild(workCards);
});

const workBtn = document.querySelectorAll('.card-btn');
// const span = document.getElementsByClassName('close')[0];

for (let i = 0; i < workBtn.length; i += 1) {
  workBtn[i].addEventListener('click', () => {
    document.body.innerHTML = popUp(i);
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', async () => {
      window.location.reload();
    });
  });
}
