const btn = document.getElementById('btn');
const inputType = document.querySelector('.input');

btn.addEventListener('click', () => {
  inputType.classList.toggle('input-active');
});