import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import data from './data';
import { reducer } from './reducer';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const defaultState = {
  purchases: data,
  isLoading: true,
};
export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
