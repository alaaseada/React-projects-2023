import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const useFetchData = (keyword) => {
  const getData = async () => {
    try {
      const { data } = await axios.get(`${baseURL}${keyword}`);
      return data;
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const { data } = useQuery({
    queryKey: ['getCocktails', keyword],
    queryFn: getData,
  });
  const drinks = data ? data.drinks : [];
  return drinks;
};

export default useFetchData;
