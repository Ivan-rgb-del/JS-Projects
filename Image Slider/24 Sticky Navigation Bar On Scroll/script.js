const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', changeNav);

function changeNav() {
  if (window.scrollY > 200) {
    navbar.classList.add('active');
  }
  else {
    navbar.classList.remove('active');
  }
};