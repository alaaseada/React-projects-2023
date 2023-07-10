import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';

export const useFetchImages = (keyword) => {
  const result = useQuery({
    queryKey: ['filterImages'],
    queryFn: async () => {
      const url = `/search/photos?query=${keyword}`;
      const { data } = await customFetch(url);
      return data;
    },
  });
  console.log(result);
  return {
    data: result.data,
    isError: result.isError,
    isLoading: result.isLoading,
  };
};
