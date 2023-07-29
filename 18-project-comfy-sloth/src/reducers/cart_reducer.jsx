import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  const action_type = action.type;
  // Add to cart
  if (action_type === ADD_TO_CART) {
    const { amount, selectedColor, product } = action.payload.item;
    const cart_item_id = product.id + selectedColor;
    const item = state.cart.get(cart_item_id) || null;
    if (item) {
      item.amount =
        item.amount + amount <= product.stock
          ? item.amount + amount
          : product.stock;
      return {
        ...state,
        cart: new Map(state.cart).set(cart_item_id, item),
      };
    }
    return {
      ...state,
      cart: new Map(state.cart).set(cart_item_id, action.payload.item),
    };
  }
  // Remove item from cart
  if (action_type === REMOVE_CART_ITEM) {
    const cart = new Map(state.cart);
    cart.delete(action.payload.id);
    return { ...state, cart };
  }
  // Clear the cart
  if (action_type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  // Count cart totals
  if (action_type === COUNT_CART_TOTALS) {
    const cartItems = Array.from(state.cart.values());
    const { total_items, order_total } = cartItems.reduce(
      (total, item) => {
        total.total_items += item.amount;
        total.order_total += item.product.price * item.amount;
        return total;
      },
      { total_items: 0, order_total: 0 }
    );
    return { ...state, total_items, order_total };
  }
  // Toggle cart item count
  if (action_type === TOGGLE_CART_ITEM_AMOUNT) {
    const { cart_item_id, verb } = action.payload;
    const item = state.cart.get(cart_item_id);

    if (verb == 'increase') {
      item.amount =
        item.amount < item.product.stock ? item.amount + 1 : item.product.stock;
    } else if (verb == 'decrease') {
      item.amount = item.amount > 1 ? item.amount - 1 : 1;
    }
    const new_cart = new Map(state.cart).set(cart_item_id, item);
    return { ...state, cart: new_cart };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
