import Wrapper from '../assets/wrappers/CocktailPage';
import { NavLink } from 'react-router-dom';

const CocktailItem = ({
  drink: { id, title, category, info, image, glass, instructions, ingredients },
}) => {
  return (
    <Wrapper>
      <header>
        <NavLink to='/' className='btn'>
          Back Home
        </NavLink>
        <h3>{title}</h3>
      </header>
      <div className='drink'>
        <img src={image} className='img' alt={title} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name: </span>
            {title}
          </p>
          <p>
            <span className='drink-data'>Category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>Info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>Glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>Ingredients: </span>
            {ingredients}
          </p>
          <p>
            <span className='drink-data'>Instructions</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CocktailItem;
