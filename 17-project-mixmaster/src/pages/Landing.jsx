import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const keyword = '';
  const { data } = await axios.get(`${baseURL}${keyword}`);
  return { drinks: data.drinks, keyword };
};

const Landing = () => {
  const { drinks, keyword } = useLoaderData();
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
