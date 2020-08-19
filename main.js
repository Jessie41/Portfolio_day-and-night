const body = document.querySelector('body');
const btn = document.querySelector('.day_night');

btn.addEventListener('click', (e) => {
  const day = 'day';
  const night = 'night';

  if (btn.textContent === day) {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    btn.textContent = night;
    const alist = document.querySelectorAll('a');

    let i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'green';
      i++;
    }
  } else if (btn.textContent === night) {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    btn.textContent = day;

    const alist = document.querySelectorAll('a');

    let i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'white';
      i++;
    }
  }
});
