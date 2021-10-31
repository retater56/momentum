import showDate from './js/date.js';
import { showGreeting, setLocaleStorage, getLocalStorage } from './js/greeting.js';
import { setBg } from './js/setBg.js';
import getWeather from './js/weather.js';
import getQuotes from './js/quotes.js';
import playList from './js/playList.js';

const date = new Date();
const hours = date.getHours();

let lang = 'eng';
let nextLang = 'ru';

const changeLangBtn = document.querySelector('.language-change');
changeLangBtn.innerHTML = 'RU';

showGreeting(hours, lang);

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
};
const day = document.querySelector('.date');
day.textContent = date.toLocaleDateString(lang, options);

const weather = document.querySelector('.city');
let city;
getWeather(lang);

weather.addEventListener('change', (e) => {
  city = e.target.value;
  getWeather(lang, city);
});

changeLangBtn.addEventListener('click', () => {
  if (lang == 'eng') {
    lang = 'ru';
    nextLang = 'eng';
  } else if (lang == 'ru') {
    lang = 'eng';
    nextLang = 'ru';
  }
  changeLangBtn.innerHTML = nextLang.toUpperCase();
  showGreeting(hours, lang);

  day.textContent = date.toLocaleDateString(lang, options);

  getWeather(lang, city);
});

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

const quote = document.querySelector('.change-quote');

getQuotes();

quote.addEventListener('click', () => getQuotes());

let isPlay = false;
let playNum = 0;
const audio = new Audio();

const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListActive = document.querySelectorAll('.play-item');

function playMusic() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  playListActive[playNum].classList.add('item-active');
}

playBtn.addEventListener('click', () => {
  playBtn.classList.toggle('pause');

  if (!isPlay) {
    isPlay = true;
    playMusic();
  } else {
    isPlay = false;
    audio.pause();
  }
});

playNextBtn.addEventListener('click', () => {
  if (playNum == playList.length - 1) {
    playNum = 0;
    playListActive[playList.length - 1].classList.remove('item-active');
  } else {
    playNum += 1;
    playListActive[playNum - 1].classList.remove('item-active');
  }

  playBtn.classList.add('pause');
  isPlay = true;
  playMusic();
});

playPrevBtn.addEventListener('click', () => {
  if (playNum == 0) {
    playNum = playList.length - 1;
    playListActive[0].classList.remove('item-active');
  } else {
    playNum -= 1;
    playListActive[playNum + 1].classList.remove('item-active');
  }

  playBtn.classList.add('pause');
  isPlay = true;
  playMusic();
});
