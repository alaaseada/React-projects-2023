import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (keyword) => {
  return {
    queryKey: ['get_cocktails', keyword || 'all'],
    queryFn: async () => {
      const { data } = await axios.get(`${baseURL}${keyword}`);
      return data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const keyword = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailsQuery(keyword));
    return { keyword };
  };

const Landing = () => {
  const { keyword } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(keyword));
  return (
    <>
      <SearchForm keyword={keyword} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
