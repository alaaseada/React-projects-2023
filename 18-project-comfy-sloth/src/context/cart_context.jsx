import React, { useEffect, useContext, useReducer } from 'react';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';
import cart_reducer from '../reducers/cart_reducer';

const loadItemsFromLocalStorage = () => {
  let localCart = localStorage.getItem('cart');
  if (localCart) {
    return new Map(JSON.parse(localCart));
  }
  return new Map();
};

const initialState = {
  cart: loadItemsFromLocalStorage(),
  total_items: 0,
  order_total: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      'cart',
      JSON.stringify(Array.from(state.cart.entries()))
    );
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: { item } });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
    localStorage.clear();
  };

  const countCartTotal = () => {
    dispatch({ type: COUNT_CART_TOTALS });
  };

  const toggleCartItemAmount = (cart_item_id, verb) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: { cart_item_id, verb },
    });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItemFromCart,
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
