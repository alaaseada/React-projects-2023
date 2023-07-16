import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from '../components/CocktailCard';

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>
        No matching cocktails were found...
      </h4>
    );
  }
  return (
    <Wrapper>
      {drinks.map((drink) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          drink;
        const card = {
          id: idDrink,
          title: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
        return <CocktailCard key={idDrink} card={card} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
