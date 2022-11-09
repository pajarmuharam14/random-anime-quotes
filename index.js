const outputQuotes = document.querySelector(".quotes");
const outputAuthor = document.querySelector(".author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  outputQuotes.innerHTML = `"${quotes[random].quote}"`;
  outputAuthor.innerHTML = `~${quotes[random].author}`;
});
