import { addMovie, removeMovie } from "./modules/movies.js";
import { renderMovies } from "./modules/rendering.js";

let searchBox;
let addButton;
let removeButton;

function addFavoriteMovie() {
    const title = searchBox.value;
    addMovie(title).then(renderMovies);
}

function removeFavoriteMovie() {
    const title = searchBox.value;
    const movieList = removeMovie(title);
    renderMovies(movieList);
}

window.onload = () => {
    searchBox = document.getElementById('searchBox');
    addButton = document.getElementById('addButton');
    removeButton = document.getElementById('removeButton');

    addButton.addEventListener('click', addFavoriteMovie);
    removeButton.addEventListener('click', removeFavoriteMovie);
}