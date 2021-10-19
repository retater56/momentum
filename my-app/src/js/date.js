function showDate() {
  let date = new Date();
  const time = document.querySelector('.time');
  const day = document.querySelector('.date');

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  time.textContent = date.toLocaleTimeString();
  day.textContent = date.toLocaleDateString('en-US', options);
  setTimeout(showDate, 1000);
}

export default showDate();
