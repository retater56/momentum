export function setBg(hours, randomNum) {
  const img = new Image();
  let dayTime;
  randomNum = String(randomNum).padStart(2, '0');

  if (hours >= 0 && hours < 6) {
    dayTime = 'night';
  } else if (hours >= 6 && hours < 12) {
    dayTime = 'morning';
  } else if (hours >= 12 && hours < 18) {
    dayTime = 'afternoon';
  } else if (hours >= 18 && hours < 24) {
    dayTime = 'evening';
  }
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${randomNum}.jpg`;
  img.onload = () => {
    document.body.style.background = 'url(' + img.src + ')';
  };
}
