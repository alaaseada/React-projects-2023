import React from 'react';
import { useGlobalContext } from './Context';

function SearchForm() {
  const { keyword, handleSearchKeyChange, performSearch } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(keyword);
  };
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='form-input search-input'
        type='text'
        name='search'
        id='search'
        placeholder='cat'
        onChange={(e) => handleSearchKeyChange(e.target.value)}
      />
      <button className='btn' type='submit'>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
