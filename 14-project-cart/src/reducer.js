import { CLEAR_CART, REMOVE_ITEM } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, purchases: [] };
    case REMOVE_ITEM:
      return {
        ...state,
        purchases: state.purchases.filter(
          (item) => item.id != action.payload.id
        ),
      };
    default:
      throw new Error(`No Matching ${action.type} action.`);
  }
};
