import React from 'react';
import CocktailItem from '../components/CocktailItem';
import axios from 'axios';
import { useLoaderData, Navigate } from 'react-router-dom';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const id = params.id;
  const { data } = await axios.get(`${baseURL}${id}`);
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  if (!data.drinks) {
    return <Navigate to='/' />;
  }
  const drink = data.drinks[0];
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
