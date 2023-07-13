import Wrapper from '../assets/wrappers/CocktailList';
import useFetchData from './FetchData';

const CocktailList = () => {
  const cocktails = useFetchData();
  return (
    <Wrapper>
      {cocktails?.map((drink) => {
        return <p>{drink.strDrink}</p>;
      })}
    </Wrapper>
  );
};

export default CocktailList;
