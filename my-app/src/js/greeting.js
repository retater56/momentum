export async function showGreeting(hours, lang) {
  const f = await fetch('../assets/data/language.json');
  const data = await f.json();

  const greeting = document.querySelector('.greeting');
  
  if (hours >= 0 && hours < 6) {
    greeting.textContent = data.greeting[lang][0];
  } else if (hours >= 6 && hours < 12) {
    greeting.textContent = data.greeting[lang][1];
  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = data.greeting[lang][2];
  } else if (hours >= 18 && hours < 24) {
    greeting.textContent = data.greeting[lang][3];
  }
}

export function setLocaleStorage() {
  let name = document.querySelector('.name').value;
  localStorage.setItem('name', name);
}

export function getLocalStorage() {
  let name = document.querySelector('.name');
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
