import { useState, useEffect, useContext, createContext } from 'react';
import { useQueryClient } from '@tanstack/react-query';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const AppContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDrakTheme] = useState(false);
  const [keyword, setKeyword] = useState('cat');
  const queryClient = useQueryClient();

  const toggleTheme = () => {
    setIsDrakTheme(!isDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', !isDarkTheme);
  };

  const handleSearchKeyChange = (text) => {
    setKeyword(text);
  };
  const performSearch = () => {
    queryClient.invalidateQueries({ queryKey: ['filterImages'] });
  };
  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        keyword,
        handleSearchKeyChange,
        performSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
