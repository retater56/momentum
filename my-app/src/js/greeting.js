export function showGreeting(hours) {
  let greeting = document.querySelector('.greeting');
  if (hours >= 0 && hours < 6) {
    greeting.textContent = 'Good night,';
  } else if (hours >= 6 && hours < 12) {
    greeting.textContent = 'Good morning,';
  } else if (hours >= 12 && hours < 18) {
    greeting.textContent = 'Good afternoon,';
  } else if (hours >= 18 && hours < 24) {
    greeting.textContent = 'Good evening,';
  }
}

export function setLocaleStorage() {
    let name = document.querySelector('.name').value
    localStorage.setItem('name', name)
}

export function getLocalStorage() {
    let name = document.querySelector('.name')
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name')
    }
}
