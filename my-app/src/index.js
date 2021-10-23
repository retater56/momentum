import showDate from './js/date';
import { showGreeting, setLocaleStorage, getLocalStorage } from './js/greeting';
import { setBg } from './js/setBg';

const date = new Date();
const hours = date.getHours();

showGreeting(hours);
window.addEventListener('beforeunload', setLocaleStorage);
window.addEventListener('load', getLocalStorage);

let random;

function getRandomNum() {
  return (random = Math.floor(Math.random() * (19 + 1)) + 1);
}

setBg(hours, getRandomNum());

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

slidePrev.addEventListener('click', () => {
  random != 1 ? (random = +random - 1) : (random = 20);
  setBg(hours, random);
});

slideNext.addEventListener('click', () => {
  random != 20 ? (random = +random + 1) : (random = 1);
  setBg(hours, random);
});

