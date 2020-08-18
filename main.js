const body = document.querySelector('body');
const btn = document.querySelector('.day_night');

btn.addEventListener('click', (e) => {
  const day = 'day';
  const night = 'night';

  if (btn.textContent === day) {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    btn.textContent = night;
  } else if (btn.textContent === night) {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    btn.textContent = day;
  }
});
nightBtn.addEventListener('click', (e) => {});
