import {
  CLEAR_CART,
  REDUCE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_ITEM,
  SET_ISLOADING,
} from './actions';

export const reducer = (state, action) => {
  let new_purchases;
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, purchases: [] };
    case REDUCE_AMOUNT:
      new_purchases = state.purchases.map((item) => {
        if (item.id === action.payload.id) {
          const new_amount = item.amount > 1 ? item.amount - 1 : 1;
          return { ...item, amount: new_amount };
        } else {
          return item;
        }
      });
      return {
        ...state,
        purchases: new_purchases,
      };
    case INCREASE_AMOUNT:
      new_purchases = state.purchases.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      console.log(new_purchases);
      return { ...state, purchases: new_purchases };
    case REMOVE_ITEM:
      new_purchases = state.purchases.filter(
        (item) => item.id != action.payload.id
      );
      return { ...state, purchases: new_purchases };
    case SET_ISLOADING:
      return { ...state, isLoading: action.payload.status };
    default:
      throw new Error(`No Matching ${action.type} action.`);
  }
};
