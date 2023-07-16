import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
import { useState } from 'react';

const Landing = () => {
  const [keyword, setKeyword] = useState('');
  const changeSearchKeyword = (newKeyword) => {
    setKeyword(newKeyword);
  };
  return (
    <>
      <SearchForm changeSearchKeyword={changeSearchKeyword} />
      <CocktailList keyword={keyword} />
    </>
  );
};

export default Landing;
