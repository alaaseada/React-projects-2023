import axios from 'axios';
import { useContext, useEffect, useReducer, createContext } from 'react';
import reducer from '../reducers/products_reducer';

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

const url = '/.netlify/functions/products';
const single_url = '/.netlify/functions/single-product';

const initialState = {
  sidebarIsOpen: false,
  products: [],
  products_loading: false,
  products_error: false,
  featured_products: [],
  selected_product: {},
  product_loading: false,
  product_error: false,
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const { data: products } = await axios.get(url);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: { products },
      });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (id) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
      const {
        data: { product },
      } = await axios.get(`${single_url}/?id=${id}`);
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: { data: { ...product.fields } },
      });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
