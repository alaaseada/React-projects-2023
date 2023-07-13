import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const useFetchData = () => {
  const [cocktails, setCocktails] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`${baseURL}margarita`);
    setCocktails(data.drinks);
  };

  useEffect(() => {
    getData();
  }, []);

  return cocktails;
};

export default useFetchData;
