import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';

import SearchInput from "../../components/searchInput/SearchInput";
import SearchedMovies from "../../components/SearchedMovies/SearchedMovies";

// import css from './Movies.module.css';

const Movie = () => {
  const [searchQuery, setSearchQuery] = useState('');
 
  const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') ?? '';
 
  
 const handleSubmit = searchQueryValue => {
  if (searchQuery === searchQueryValue) {
      return toast.info("Input new search query.");
  }

  navigate(`${location.pathname}?query=${searchQueryValue}`);

  setSearchQuery(searchQueryValue);
}

useEffect(() => {
  if (query !== '') {
      setSearchQuery(query);
  }
}, [query])

    return (
    <>
    <SearchInput onSubmit={handleSubmit}/>
    <br />
    <br />
    <br />
      <SearchedMovies searchQuery={ searchQuery }/>
    </>
    )
  };
  

  
  export default Movie;