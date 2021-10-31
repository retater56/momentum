function showDate() {
  let date = new Date();
  const time = document.querySelector('.time');
  time.textContent = date.toLocaleTimeString();
  setTimeout(showDate, 1000);
}

export default showDate();
