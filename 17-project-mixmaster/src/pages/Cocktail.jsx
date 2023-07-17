import React from 'react';
import CocktailItem from '../components/CocktailItem';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData, Navigate } from 'react-router-dom';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getItemQuery = (id) => {
  return {
    queryKey: ['get_item', id],
    queryFn: async () => {
      const { data } = await axios.get(`${baseURL}${id}`);
      return data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const id = params.id;
    await queryClient.ensureQueryData(getItemQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data: drinks } = useQuery(getItemQuery(id));
  if (!drinks) {
    return <Navigate to='/' />;
  }
  const drink = drinks[0];
  const ingredients = Object.keys(drink)
    .filter((key) => key.startsWith('strIngredient') && drink[key] !== null)
    .map((key) => drink[key])
    .join(', ');
  const formattedDrink = {
    id: drink.idDrink,
    title: drink.strDrink,
    category: drink.strCategory,
    info: drink.strAlcoholic,
    image: drink.strDrinkThumb,
    glass: drink.strGlass,
    instructions: drink.strInstructions,
    ingredients: ingredients,
  };
  return <CocktailItem drink={formattedDrink} />;
};

export default Cocktail;
