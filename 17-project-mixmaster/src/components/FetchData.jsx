import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const useFetchData = (keyword) => {
  const getData = async () => {
    const { data } = await axios.get(`${baseURL}${keyword}`);
    console.log('I am here');
    return data;
  };

  const {
    data: { drinks },
  } = useQuery({
    queryKey: ['getCocktails', keyword],
    queryFn: getData,
  });

  return drinks;
};

export default useFetchData;
