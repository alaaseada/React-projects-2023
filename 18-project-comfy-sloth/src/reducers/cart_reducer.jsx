import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  const action_type = action.type;
  if (action_type === ADD_TO_CART) {
    return {
      ...state,
      cart: new Map(state.cart).set(
        action.payload.item.product.id,
        action.payload.item
      ),
    };
  }
  if (action_type === REMOVE_CART_ITEM) {
    return { ...state };
  }
  if (action_type === CLEAR_CART) {
    return { ...state };
  }
  if (action_type === COUNT_CART_TOTALS) {
    return { ...state };
  }
  if (action_type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, verb } = action.payload;
    console.log(id, verb);
    const item = state.cart.get(id);
    if (verb == 'increase') {
      item.amount =
        item.amount < item.product.stock ? item.amount + 1 : item.product.stock;
    } else if (verb == 'decrease') {
      item.amount = item.amount > 1 ? item.amount - 1 : 1;
    }

    return { ...state, cart: new Map(state.cart).set(id, item) };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
