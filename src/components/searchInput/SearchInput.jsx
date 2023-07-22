
import { useState } from 'react';
import { toast } from 'react-toastify';

import s from './SearchInput.module.css';


function SearchInput(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = event => {
      setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
      event.preventDefault();

      if (searchQuery.trim() === '') {
          //Setting searchQuery state '' in case query got spaces
          setSearchQuery('');

          return toast.info("Input your search query");
      }

      console.log('se ha almacenado su busqueda')

      props.onSubmit(searchQuery);
      
      setSearchQuery('');
  }
  
    return (
        <form className={s.formSearch} onSubmit={handleSubmit}>
          <input
            className={s.inputSr}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            value={searchQuery}
            onChange={handleSearchQuery}
          />
          <button type="submit" >
            <span >Search</span>
          </button>
  
        </form>
      );
  };
  
  export default SearchInput;
  
