const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePoster = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const moveTitleToDisplay = document.querySelector(".favoriteMovieTitle");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if (titleInStorage && imageUrlInStorage) {
  moveTitleToDisplay.textContent = titleInStorage;
  container.style.backgroundImage = `linear-gradient(rgba(203, 200, 0, 0.626), rgba(0, 0, 0, 0.177)),
  url('${imageUrlInStorage}')`;
}

btn.addEventListener("click", () => {
  let movieTitleInput = movieTitle.value;
  let posterUrlInput = moviePoster.value;
  localStorage.setItem("title", movieTitleInput);
  localStorage.setItem("imageUrl", posterUrlInput);
  moveTitleToDisplay.textContent = movieTitleInput;

  container.style.backgroundImage = `linear-gradient(rgba(203, 200, 0, 0.626), rgba(0, 0, 0, 0.177)),
  url('${posterUrlInput}')`;
});
