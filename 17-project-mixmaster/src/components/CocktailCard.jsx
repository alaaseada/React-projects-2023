import Wrapper from '../assets/wrappers/CocktailCard';
import { NavLink } from 'react-router-dom';

const CocktailCard = ({ card }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={card.strDrinkThumb} alt={card.strDrink} className='img' />
      </div>
      <div className='footer'>
        <h4>{card.strDrink}</h4>
        <h5>{card.strGlass}</h5>
        <p>{card.strAlcoholic}</p>
        <NavLink className='btn' to={`/cocktail/${card.idDrink}`}>
          Details
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
