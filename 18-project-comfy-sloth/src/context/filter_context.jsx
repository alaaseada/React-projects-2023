import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';
import filter_reducer from '../reducers/filter_reducer';

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort_method: 'price_asc',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: { products } });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort_method]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [products, state.filters]);

  const changeToGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const changeToListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSortMethod = (sort_method) => {
    dispatch({ type: UPDATE_SORT, payload: { sort_method } });
    dispatch({ type: SORT_PRODUCTS });
  };

  const updateFilters = (filters) => {
    dispatch({ type: UPDATE_FILTERS, payload: { filters } });
  };

  const clearFilters = (products) => {
    dispatch({ type: CLEAR_FILTERS, payload: { products } });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        changeToGridView,
        changeToListView,
        updateSortMethod,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
