const API_KEY = "ece9dfef";
const movieList = [];

async function fetchMovie(title) {
    return await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
    })
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