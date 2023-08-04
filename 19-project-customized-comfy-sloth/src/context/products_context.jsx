import axios from 'axios';
import { useContext, useEffect, useReducer, createContext } from 'react';
import reducer from '../reducers/products_reducer';
import {
  contentful_products_url as url,
  single_product_url as single_url,
} from '../utils/constants';
import { createClient } from 'contentful';

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

const client = createClient({
  accessToken: import.meta.env.VITE_CONTENT_DELIVERY_ACCESS_TOKEN,
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
});
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
      const { items } = await client.getEntries({ content_type: 'products' });
      const products = items.map((item) => {
        return { id: item.sys.id, ...item.fields };
      });
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products } });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (id) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
      const result = await client.getEntry(id);
      const product = { id: result.sys.id, ...result.fields };
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: { product } });
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
