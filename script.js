const burgerBtn = document.getElementById('burgerBtn');
const burgerNav = document.getElementById('burgerNav');
const header = document.querySelector('header');

let lastScrollTop = 0;

// Close menu when a link is clicked
const burgerLinks = burgerNav.querySelectorAll('a');
burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    burgerNav.classList.remove('active');
  });
});

// Close menu when Contact us button is clicked
const burgerContactBtn = document.querySelector('.burger-contact-btn');
burgerContactBtn.addEventListener('click', () => {
  burgerBtn.classList.remove('active');
  burgerNav.classList.remove('active');
});

// Header show/hide on scroll
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling DOWN - hide header
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling UP - show header
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Burger button toggle
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerNav.classList.toggle('active');
});
