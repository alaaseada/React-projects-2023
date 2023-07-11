import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';

export const useFetchImages = (keyword) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['filterImages', keyword],
    queryFn: async () => {
      const url = `/search/photos?query=${keyword}&page=1`;
      const { data } = await customFetch(url);
      return data;
    },
  });
  return {
    data,
    isError,
    isLoading,
  };
};
