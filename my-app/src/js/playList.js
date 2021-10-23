const playList = [
  {
    title: 'Aqua Caelestis',
    src: '../assets/sounds/Aqua Caelestis.mp3',
    duration: '00:58'
  },
  {      
    title: 'River Flows In You',
    src: '../assets/sounds/River Flows In You.mp3',
    duration: '03:50'
  },
  {
    title: 'Ennio Morricone',
    src: '../assets/sounds/Ennio Morricone.mp3',
    duration: '01:37'
  },
  {
    title: 'Summer Wind',
    src: '../assets/sounds/Summer Wind.mp3',
    duration: '01:50'
  }
]

const playListContainer = document.querySelector('.play-list');

playList.forEach((el) => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = el.title;
  playListContainer.append(li);
});

export default playList;