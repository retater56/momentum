import showDate from "./js/date";
import {showGreeting, setLocaleStorage, getLocalStorage} from "./js/greeting";

showGreeting()
window.addEventListener('beforeunload', setLocaleStorage)
window.addEventListener('load', getLocalStorage)