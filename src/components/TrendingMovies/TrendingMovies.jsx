import { useState, useEffect } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import MoviesListItem from '../MoviesListItem';
import normalizedData from '../../Service/normalized-data';
import { fetchTrendingMovies } from '../../Service/api';
import s from './TrendingMovies.module.css';

export default function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchTrendingMovies()
            .then(data => {
                setMovies(normalizedData(data.results));
            });
    }, [])

    return <MoviesList>
        <MoviesListItem data={movies} />
    </MoviesList>
}