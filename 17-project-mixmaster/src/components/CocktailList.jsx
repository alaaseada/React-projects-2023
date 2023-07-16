import Wrapper from '../assets/wrappers/CocktailList';
import useFetchData from './FetchData';
import CocktailCard from '../components/CocktailCard';
import { useLocation } from 'react-router-dom';

const CocktailList = ({ keyword }) => {
  const cocktails = useFetchData(keyword);
  return (
    <Wrapper>
      {cocktails?.map((drink) => {
        return <CocktailCard key={drink.idDrink} card={drink} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
