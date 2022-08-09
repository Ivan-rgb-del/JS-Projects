const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slides = document.querySelectorAll('.slide');

let count = 1;

function showPict() {
  slides.forEach((slide, index) => {
    if (index < count) {
      slide.classList.add('active');
    }
    else {
      slide.classList.remove('active');
    }
  });
};

right.addEventListener('click', () => {
  count++;

  if (count > slides.length) {
    count = 1;
  };

  showPict();
});

left.addEventListener('click', () => {
  count--;

  if (count <= 0) {
    count = slides.length;
  };

  showPict();
});