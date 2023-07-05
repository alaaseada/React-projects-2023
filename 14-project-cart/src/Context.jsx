// Imports
import { createContext, useContext, useEffect, useReducer } from 'react';
import data from './data';
import { reducer } from './reducer';
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  REDUCE_AMOUNT,
  SET_ISLOADING,
  DISPLAY_ITEMS,
} from './actions';
import { getTotals } from './utils';

// variables
const url = 'https://www.course-api.com/react-useReducer-cart-project';
const cartItemsMap = new Map();
const defaultState = {
  cartItems: cartItemsMap,
  isLoading: false,
};

// Global Context hook
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

// App Context
export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalAmount, totalCost } = getTotals(state.cartItems);

  const clearItems = () => {
    dispatch({ type: CLEAR_CART });
  };
  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } });
  };
  const reduceAmount = (id) => {
    dispatch({ type: REDUCE_AMOUNT, payload: { id } });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const displayItems = (data) => {
    dispatch({ type: DISPLAY_ITEMS, payload: { data } });
  };
  const fetchData = async () => {
    dispatch({ type: SET_ISLOADING, payload: { isLoading: true } });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { data } });
    dispatch({ type: SET_ISLOADING, payload: { isLoading: false } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        displayItems,
        clearItems,
        increaseAmount,
        reduceAmount,
        removeItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
