import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, sidebarIsOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, sidebarIsOpen: false };
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        featured_products: action.payload.products.filter(
          (product) => product.featured === true
        ),
        products_loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, products_error: true, products_loading: false };
    case GET_SINGLE_PRODUCT_BEGIN:
      return { ...state, product_loading: true };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        selected_product: action.payload.data,
        product_loading: false,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, product_error: true, product_loading: false };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
