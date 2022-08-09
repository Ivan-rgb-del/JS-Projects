const btns = document.querySelectorAll('.btn-toggle');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});