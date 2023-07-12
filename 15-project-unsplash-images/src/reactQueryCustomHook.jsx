import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import customFetch from './utils';

const baseURL = 'https://api.unsplash.com';
export const useFetchImages = (keyword) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['filterImages', keyword],
    queryFn: async () => {
      const url = `${baseURL}/search/photos?query=${keyword}&page=1&client_id=${
        import.meta.env.VITE_ACCESS_KEY
      }`;
      const { data } = await axios.get(url);
      return data;
    },
  });
  return {
    data,
    isError,
    isLoading,
  };
};
