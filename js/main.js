const hamburgerBtn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.header-nav');

hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
