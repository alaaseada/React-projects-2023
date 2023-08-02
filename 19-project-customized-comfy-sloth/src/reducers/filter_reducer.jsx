import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { getMaxPrice } from '../utils/helpers';

const filter_reducer = (state, action) => {
  const action_type = action.type;
  if (action_type === LOAD_PRODUCTS) {
    let max_price = getMaxPrice(action.payload.products);
    return {
      ...state,
      all_products: [...action.payload.products],
      filtered_products: [...action.payload.products],
      filters: {
        ...state.filters,
        max_price: max_price,
        price: max_price,
      },
    };
  }
  if (action_type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action_type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action_type === UPDATE_SORT) {
    return { ...state, sort_method: action.payload.sort_method };
  }
  if (action_type === SORT_PRODUCTS) {
    const sort_method = state.sort_method;
    let sorted_list = [...state.filtered_products];
    switch (sort_method) {
      case 'price_asc':
        sorted_list = state.filtered_products.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        sorted_list = state.filtered_products.sort((a, b) => b.price - a.price);
        break;
      case 'name_asc':
        sorted_list = state.filtered_products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case 'name_desc':
        sorted_list = state.filtered_products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
    }
    return { ...state, filtered_products: sorted_list };
  }
  if (action_type === UPDATE_FILTERS) {
    return { ...state, filters: { ...action.payload.filters } };
  }
  if (action_type === FILTER_PRODUCTS) {
    let filtered_products = [...state.all_products];
    const { text, color, category, company, price, shipping } = state.filters;
    if (text) {
      filtered_products = filtered_products.filter((p) =>
        p.name.includes(text)
      );
    }

    if (category !== 'all') {
      filtered_products = filtered_products.filter(
        (p) => p.category === category
      );
    }

    if (company !== 'all') {
      filtered_products = filtered_products.filter(
        (p) => p.company === company
      );
    }

    if (color != 'all') {
      filtered_products = filtered_products.filter((p) =>
        p.colors.includes(color)
      );
    }

    filtered_products = filtered_products.filter((p) => p.price <= price);

    if (shipping) {
      filtered_products = filtered_products.filter(
        (p) => p.shipping <= shipping
      );
    }

    return { ...state, filtered_products: filtered_products };
  }
  if (action_type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
