import Wrapper from '../assets/wrappers/CocktailCard';
import { NavLink } from 'react-router-dom';

const CocktailCard = ({ card: { id, title, image, info, glass } }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={title} className='img' />
      </div>
      <div className='footer'>
        <h4>{title}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <NavLink className='btn' to={`/cocktail/${id}`}>
          Details
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
