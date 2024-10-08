
const BASE_URL = 'https://api.themoviedb.org/3' ;
const API_KEY = '?api_key=54b41b33abb9adafc88a0ced21b1a504';


async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies(page="1") {
    const PATH_PARAMS = '/trending/all/day';
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${API_KEY}`);
}

export function fetchMovies(searchQuery, page = "1") {
    const PATH_PARAMS = '/search/movie';
    const searchParams = '&language=en-US&include_adult=false';

    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${API_KEY}&query=${searchQuery}&page=${page}${searchParams}`)
}

export function fetchMovieDetails(movie_id) {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';
    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}${API_KEY}${searchParams}`)
}

export function fetchMovieCredits(movie_id) {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/credits${API_KEY}${searchParams}`)
}

export function fetchMovieReviews(movie_id, page = "1") {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';


    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/reviews${API_KEY}${searchParams}&page=${page}`)
}
export function fetchMovieTrailer(movie_id, page = "1") {
    const PATH_PARAMS = '/movie/';
    const searchParams = '&language=en-US';

    
    return fetchWithErrorHandling(`${BASE_URL}${PATH_PARAMS}${movie_id}/videos${API_KEY}${searchParams}`)
}
