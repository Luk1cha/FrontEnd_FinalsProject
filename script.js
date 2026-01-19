const burgerBtn = document.getElementById('burgerBtn');
const burgerNav = document.getElementById('burgerNav');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerNav.classList.toggle('active');
});

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
