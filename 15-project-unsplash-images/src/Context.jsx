import { useState, useEffect, useContext, createContext } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const getInitialPreferredMode = () => {
  const darkModeIsPreferred =
    window.matchMedia('(prefers-color-scheme:dark)').matches ||
    localStorage.getItem('darkTheme') === 'true';
  return darkModeIsPreferred;
};

export const AppContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialPreferredMode());
  const [keyword, setKeyword] = useState('cat');

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('darkTheme', newTheme);
  };

  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
