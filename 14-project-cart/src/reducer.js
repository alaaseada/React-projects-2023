import {
  CLEAR_CART,
  REDUCE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_ITEM,
  SET_ISLOADING,
  DISPLAY_ITEMS,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    // Clear cart
    case CLEAR_CART:
      return { ...state, cartItems: new Map() };

    // Reduce Amount
    case REDUCE_AMOUNT:
      var id = action.payload.id;
      const cart_reduced = new Map(state.cartItems);
      const item_to_reduce = cart_reduced.get(id);
      if (item_to_reduce.amount === 1) {
        cart_reduced.delete(id);
        return {
          ...state,
          cartItems: cart_reduced,
        };
      }
      var new_item = {
        ...item_to_reduce,
        amount: item_to_reduce.amount - 1,
      };
      cart_reduced.set(id, new_item);
      return {
        ...state,
        cartItems: cart_reduced,
      };

    // Increase Amount
    case INCREASE_AMOUNT:
      var id = action.payload.id;
      const cart_increased = new Map(state.cartItems);
      const item_to_increase = cart_increased.get(id);
      var new_item = {
        ...item_to_increase,
        amount: item_to_increase.amount + 1,
      };
      cart_increased.set(id, new_item);
      return {
        ...state,
        cartItems: cart_increased,
      };

    // Remove Item
    case REMOVE_ITEM:
      var id = action.payload.id;
      const modified_cart = new Map(state.cartItems);
      modified_cart.delete(id);
      return { ...state, cartItems: modified_cart };

    // Loading
    case SET_ISLOADING:
      return { ...state, isLoading: action.payload.isLoading };

    // Display Items
    case DISPLAY_ITEMS:
      return { ...state, cartItems: action.payload.data };
    // Default if no match
    default:
      throw new Error(`No Matching ${action.type} action.`);
  }
};
