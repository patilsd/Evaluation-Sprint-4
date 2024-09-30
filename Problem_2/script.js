const API_Key = '61a17b1a';
const Base_URL = ` http://www.omdbapi.com/?i=tt3896198&apikey=61a17b1a`;

const moviesGrid = document.getElementById('moviesGrid');
const searchBar = document.getElementById('SearchBar');
const loadingIndicator = document.getElementById('loading');
const errorMessage = document.getElementById('error');
const movieDetailsModal = document.getElementById('movieDetailsModal');
const movieTitle = document.getElementById('movieTitle');
const moviePoster = document.getElementById('moviePoster');
const movieDetails = document.getElementById('movieDetails');
const closebtn = document.getElementById('close-btn');

async function fetchMovies(query = 'popular'){
    try{
        loadingIndicator.classList.remove('hidden');
        const response = await fetch(`${Base_URL}&s=${query}`);
        const data = await response.json();
        if(data.Response === 'True'){
            displayMovies(data.Search);
        }else{
            displayError(data.Error);
        }
    }catch (error){
        displayError('Unable to fetch movies. Please try again later');
    }finally{
        loadingIndicator.classList.add('hidden');
    }
}


function displayMovies(movies){
    moviesGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML=`
        <img src="$movie.Poster" alt="${movie.Title}">
        <h3> ${movie.Title}</h3>
        <p>${movie.Year} - ${movie.Type}</p>
        `;
        movieCard.addEventListener('click', () => showMovieDetails(movie.imbdID));
        moviesGrid.appendChild(movieCard);
    });
}

async function showMovieDetails(movieId){
    try{
        const response = await fetch(`${Base_URL}&i=${movieID}`);
        const data = await response.json();
        if (data.Response === 'True'){
            movieTitle.textContent = data.Title;
            moviePoster.src=data.Poster;
            
        }
    }
}
