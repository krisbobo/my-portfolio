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

// *******Create data object*******

const projectSection = [
  {
    id: 1,
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'css', html: 'html', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
    seeLive: 'https://krisbobo.github.io/my-portfolio/',
    seeSource: 'https://github.com/krisbobo/my-portfolio',
  },
  {
    id: 2,
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'css', html: 'html', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
    seeLive: 'https://krisbobo.github.io/my-portfolio/',
    seeSource: 'https://github.com/krisbobo/my-portfolio',
  },
  {
    id: 3,
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'css', html: 'html', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
    seeLive: 'https://krisbobo.github.io/my-portfolio/',
    seeSource: 'https://github.com/krisbobo/my-portfolio',
  },
  {
    id: 4,
    img: './images/imageplaceholder.png',
    title: 'Multi-Post Stories',
    supportingText: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langBox: {
      css: 'css', html: 'html', Bootstrap: 'Bootstrap', Ruby: 'Ruby',
    },
    button: 'See Project',
    seeLive: 'https://krisbobo.github.io/my-portfolio/',
    seeSource: 'https://github.com/krisbobo/my-portfolio',
  },
];

const worksContainer = document.querySelector('#porto');
projectSection.forEach((work, i) => {
  const workCards = document.createElement('div');
  workCards.classList.add('workCards');
  workCards.innerHTML = `  
        <div class="work-1 work">
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
                <div class="work-button"><button class="card-btn" type="button" data-work="${i}">${work.button}</button></div>
            </div>
        </div>
  `;

  worksContainer.appendChild(workCards);
});

// ******* Modal Popup*******

const modal = document.querySelector('myModal');
const span = document.getElementsByClassName('close')[0];

function pop(event) {
  const clickBtn = event.target.getAttribute('id');
  let currentWork = '';
  projectSection.forEach((e) => {
    if (clickBtn === e.id) currentWork = e;
  });

  const content = document.createElement('div');
  content.classList.add('content');
  content.innerHTML = `
        <div class="modal-header">
          <span class="close">&times;</span>

          <h2 id="modal-title" class="someHeader">${currentWork.title}</h2>
        </div>
        <div class="modal-body">
          <img class="mobileModal" src="./images/mobilemodal.png" alt="My Project">
          <img class="desktopModal" src="./images/desktopmodal.png" alt="My Project">
          <p class="someText">${currentWork.supportingText}</p>
        </div>
        <div class="modal-footer">
          <div class="devLanguages">
            <ul>
                <l>CSS</li>
                <li>HTML</li>
                <li>Bootstrap</li>
                <li>Ruby</li>
            </ul>
          </div>
          <div class="modalButtons">
            <div class="liveDemo"><a href="${currentWork.seeLive}">See Live</a><img src="./images/modalIcon.png" alt="See Live Icon"></div>
            <div class="sourcecode"><a href="${currentWork.seeSource}">See Source</a><img src="./images/github.png" alt="github image"></div>
          </div>
        </div>
  `;

  modal.append(content);

  span.addEventListener('click', () => {
    document.getElementsByClassName('modal')[0].style.display = 'none';
  });

  document.querySelectorAll('.liveDemo').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.projectSection.seeLive);
    });
  });

  document.querySelectorAll('.sourceCode').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.projectSection.seeSource);
    });
  });
}

const clickAction = document.querySelectorAll('.card-btn');
clickAction.forEach((e) => {
  e.addEventListener('click', pop);
});