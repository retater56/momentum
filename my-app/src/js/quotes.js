function getQuotes() {
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
  let random = Math.floor(Math.random() * (100 + 1)) + 1;

  const quotes = '../assets/data/quotes.json';
  fetch(quotes)
    .then((res) => res.json())
    .then((data) => {
      random === random ? (random += 1) : random;
      quote.innerHTML = data.quotes[random].quote;
      author.innerHTML = data.quotes[random].author;
    });
}

export default getQuotes;
