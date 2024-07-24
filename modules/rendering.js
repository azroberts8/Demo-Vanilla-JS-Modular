export function renderMovies(movies) {
    const movieContainer = document.getElementById('movieContainer');

    // remove all rendered movies
    movieContainer.children.forEach(e => movieContainer.removeChild(e));

    // render all movies in passed list
    movies.forEach(e => {
        const block = document.createElement('div');

        const cover = document.createElement('img');
        cover.src = e.Poster;
        
        const label = document.createElement('div');
        label.innerHTML = `${e.Title} (${e.Year})`;

        block.appendChild(cover);
        block.appendChild(label);
        movieContainer.appendChild(block);
    })
}