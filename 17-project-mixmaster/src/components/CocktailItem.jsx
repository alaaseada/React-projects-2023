import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

const CocktailItem = () => {
  const [drink, setDrink] = useState({});
  const { id } = useParams();
  const getDrink = async () => {
    const {
      data: { drinks },
    } = await axios.get(`${baseURL}/lookup.php?i=${id}`);
    console.log(drinks[0]);
    setDrink(drinks[0]);
  };

  useEffect(() => {
    getDrink();
  }, []);

  const ingredientKeys = Object.keys(drink).filter(
    (key) => key.startsWith('strIngredient') && drink[key]
  );
  const ingredients = ingredientKeys.map((key) => drink[key]).join(', ');

  return (
    <Wrapper>
      <header>
        <NavLink to='/' className='btn'>
          Back Home
        </NavLink>
        <h3>{drink.strDrink}</h3>
      </header>
      <div className='drink'>
        <img src={drink.strDrinkThumb} className='img' alt={drink.strDrink} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name: </span>
            {drink.strDrink}
          </p>
          <p>
            <span className='drink-data'>Category: </span>
            {drink.strCategory}
          </p>
          <p>
            <span className='drink-data'>Info: </span>
            {drink.strAlcoholic}
          </p>
          <p>
            <span className='drink-data'>Glass: </span>
            {drink.strGlass}
          </p>
          <p>
            <span className='drink-data'>Ingredients: </span>
            {ingredients}
          </p>
          <p>
            <span className='drink-data'>Instructions</span>
            {drink.strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CocktailItem;
