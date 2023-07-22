
const BASE_URL = 'https://api.themoviedb.org/3/' ;
const API_KEY = '?api_key=42620835f02dcd78b3193c06b2ed76b5';

async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies(page="1") {
    const PATH_PARAMS = '/trending/movie/day';

    // return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
    //     .then(response => response.json())
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${API_KEY}&page=${page}`)
}

export function fetchMovies(searchQuery, page = "1") {
    const PATH_PARAMS = '/search/movie';
    const searchParams = '&language=en-US&include_adult=false';

    // return fetch(`${BASE_URL}${PATH_PARAMS}${API_KEY}&query=${searchQuery}&page=${page}${searchParams}`)
    //     .then(response => response.json())
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${API_KEY}&query=${searchQuery}&page=${page}${searchParams}`)
}

export function fetchMovieDetails(movie_id) {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    // return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}${API_KEY}${searchParams}`)
    //     .then(response => response.json())
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}${API_KEY}${searchParams}`)
}

export function fetchMovieCredits(movie_id) {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    // return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}/credits${API_KEY}${searchParams}`)
    //     .then(response => response.json())
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/credits${API_KEY}${searchParams}`)
}

export function fetchMovieReviews(movie_id, page = "1") {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    // return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
    //     .then(response => response.json())
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
}
export function fetchMovieTrailer(movie_id, page = "1") {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    // return fetch(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
    //     .then(response => response.json())
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/videos${API_KEY}${searchParams}`)
}
// adult
// boolean
// backdrop_path
// string
// id
// integer
// title
// string
// original_language
// string
// original_title
// string
// overview
// string
// poster_path
// string
// media_type
// string
// genre_ids
// array of integers
// popularity
// number
// release_date
// string
// video
// boolean
// vote_average
// number
// vote_count
// integer