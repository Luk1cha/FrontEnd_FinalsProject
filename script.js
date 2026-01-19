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

// Email validation
const subscribeForm = document.querySelector('#Subscribe form');
const emailInput = document.getElementById('user_email');

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Show success popup
  showSuccessPopup();
  
  // Clear form
  emailInput.value = '';
});

function showSuccessPopup() {
  const popup = document.createElement('div');
  popup.className = 'success-popup';
  popup.textContent = 'Successfully subscribed!';
  
  document.body.appendChild(popup);
  
  // Show popup with animation
  setTimeout(() => {
    popup.classList.add('show');
  }, 10);
  
  // Remove popup after 3 seconds
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.remove();
    }, 300);
  }, 2000);
}

// Cookie consent banner
const cookieConsent = document.getElementById('cookieConsent');
const cookieAccept = document.getElementById('cookieAccept');
const cookieDeny = document.getElementById('cookieDeny');

// Get screen resolution
function getScreenResolution() {
  return {
    resolution: window.innerWidth + 'x' + window.innerHeight,
    timestamp: new Date().toISOString()
  };
}

// Set cookie function
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// Get cookie function
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
}

// Check if user has already made a choice and has recorded data
function checkCookieChoice() {
  const cookieChoice = getCookie('cookieConsent');
  const screenData = getCookie('screenResolution');
  
  // If both cookie choice and screen data exist, hide the popup
  if (cookieChoice && screenData) {
    cookieConsent.classList.add('hide');
    setTimeout(() => {
      cookieConsent.style.display = 'none';
    }, 300);
  }
}

// Accept all cookies
cookieAccept.addEventListener('click', () => {
  const screenData = getScreenResolution();
  
  setCookie('cookieConsent', 'accepted');
  setCookie('screenResolution', JSON.stringify(screenData));
  
  console.log('User accepted cookies. Screen Resolution:', screenData);
  
  cookieConsent.classList.add('hide');
  setTimeout(() => {
    cookieConsent.style.display = 'none';
  }, 300);
});

// Deny cookies
cookieDeny.addEventListener('click', () => {
  setCookie('cookieConsent', 'denied');
  
  console.log('User denied cookies');
  
  cookieConsent.classList.add('hide');
  setTimeout(() => {
    cookieConsent.style.display = 'none';
  }, 300);
});

// Check cookie choice on page load
checkCookieChoice();

// scroll to the top

document.getElementById("logo-link").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default jump behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling!
  });
});
