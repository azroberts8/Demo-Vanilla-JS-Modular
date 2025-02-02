const API_KEY = "ece9dfef";
const movieList = [];

async function fetchMovie(title) {
    return await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`, {
        method: "GET",
        redirect: "follow",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://azroberts8.github.io',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Allow-Methods': 'GET'
        }
    })
        .then(res => console.log(res))
        .then(res => res.json())
        .then(res => JSON.parse(res))
        .catch(e => console.log(e));
}

export async function addMovie(title) {
    await fetchMovie(title)
        .then(movie => movieList.push(movie));
    return movieList;
}

export function removeMovie(title) {
    const movieIndex = movieList.findIndex(movie => movie.Title === title);
    if(movieIndex > -1) movieList.splice(movieIndex, 1);
    return movieList;
}