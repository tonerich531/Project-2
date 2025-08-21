// console.log(fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fe9afa06&s=gangster"))

const moviesWrapper = document.querySelector('.movies');
const searchName = document.querySelector('.search__name');
 

function searchChange(event) {
    renderMovies(event.target.value);
    searchName.innerHTML = event.target.value;
}

let currentMovies = [];



// Fetch movies from the OMDB API based on the search term


async function renderMovies(searchTerm) {
    console.log(searchTerm)
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fe9afa06&s=${searchTerm}`)
    const data = await response.json();
    currentMovies = data.Search;
    displayMovies(currentMovies);
}

// Display movies in the DOM


function displayMovies(movieList) {
    moviesWrapper.innerHTML = movieList
    .slice(0, 6)
    .map(movie => {
        return `
            <div class="movie">
                <figure>
                    <img class="movie__poster--img" src="${movie.Poster}" alt="">
                </figure>
                <h2>${movie.Title}</h2>
                <h4>${movie.Year}</h4>
                <button class="learn__more--btn">Learn More</button>
            </div>
            `
        }).join("");
}

// Sort functionality
function sortChange(event) {
    const sortOption = event.target.value

    let sortedMovies = [...currentMovies];
    
    if (sortOption === "newest") {
        sortedMovies.sort((a, b) => b.Year - a.Year);
    }

    else if (sortOption === "oldest") {
        sortedMovies.sort((a, b) => a.Year - b.Year);
    }

    displayMovies(sortedMovies);

}
    



