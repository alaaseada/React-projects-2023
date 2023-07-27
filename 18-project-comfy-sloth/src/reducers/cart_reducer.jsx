import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  LOAD_CART_FROM_STORAGE,
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
    const cart = new Map(state.cart);
    cart.delete(action.payload.id);
    return { ...state, cart };
  }
  if (action_type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action_type === COUNT_CART_TOTALS) {
    const cartItems = Array.from(state.cart.values());
    const total_items = cartItems.reduce((total, item) => {
      total += item.amount;
      return total;
    }, 0);
    const order_total = cartItems.reduce((total, item) => {
      total += item.product.price * item.amount;
      return total;
    }, 0);
    return { ...state, total_items, order_total };
  }
  if (action_type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, verb } = action.payload;
    const item = state.cart.get(id);
    if (verb == 'increase') {
      item.amount =
        item.amount < item.product.stock ? item.amount + 1 : item.product.stock;
    } else if (verb == 'decrease') {
      item.amount = item.amount > 1 ? item.amount - 1 : 1;
    }

    return { ...state, cart: new Map(state.cart).set(id, item) };
  }
  if (action_type === LOAD_CART_FROM_STORAGE) {
    const cart = new Map(action.payload.localCart);
    return { ...state, cart };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
