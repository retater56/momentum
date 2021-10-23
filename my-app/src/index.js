import showDate from './js/date';
import { showGreeting, setLocaleStorage, getLocalStorage } from './js/greeting';
import { setBg } from './js/setBg';
import getWeather from './js/weather';
import getQuotes from './js/quotes';
import playList from './js/playList';

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

const weather = document.querySelector('.city');

getWeather();

weather.addEventListener('change', (e) => {
  let city = e.target.value;
  getWeather(city);
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
    playListActive[playList.length - 1].classList.remove('item-active')
  } else {
    playNum += 1;
    playListActive[playNum - 1].classList.remove('item-active')
  }

  playBtn.classList.add('pause');
  isPlay = true;
  playMusic();
});

playPrevBtn.addEventListener('click', () => {
  if (playNum == 0) {
    playNum = playList.length - 1;
    playListActive[0].classList.remove('item-active')
  } else {
    playNum -= 1;
    playListActive[playNum + 1].classList.remove('item-active')
  }

  playBtn.classList.add('pause');
  isPlay = true;
  playMusic();
});
