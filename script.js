const movieLists = document.querySelector('.movie');

// async function fetchMovie() {
async function fetchMovie() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films', {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    // Sort the movie from the best to worst
    const sortedMovies = data.sort((best, worst) => worst.rt_score - best.rt_score);
    return sortedMovies;
}

// Async function displayMovie
// Then create the html inside of it 
async function displayMovies() {
    const movies = await fetchMovie();
    const html = movies.map(movie => {
        return `
            <li class="film">
                <div class="row">
                    <h2>${movie.title}</h2>
                    <p>${movie.release_date}</p>
                    <span>${movie.rt_score}</span>
                </div>
                <p>${movie.description}</p>
                <small>
                    <p>${movie.director}
                    <span>${movie.producer}</span>
                    </p>
                </small>
            </li>
        `;
    });
    movieLists.innerHTML = html.join('');
}
displayMovies();