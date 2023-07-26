import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';
import cart_reducer from '../reducers/cart_reducer';

const initialState = {
  cart: new Map(),
  total_items: 0,
  order_total: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: { item } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const countCartTotal = () => {
    dispatch({ type: COUNT_CART_TOTALS });
  };

  const toggleCartItemAmount = (id, verb) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, verb } });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        clearCart,
        countCartTotal,
        toggleCartItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
