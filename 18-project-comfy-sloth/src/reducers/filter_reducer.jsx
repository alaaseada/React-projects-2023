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
    return {
      ...state,
      all_products: [...action.payload.products],
      filtered_products: [...action.payload.products],
      filters: {
        ...state.filters,
        price: getMaxPrice(action.payload.products),
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
    return { ...state, filters: action.payload.filters };
  }
  if (action_type === FILTER_PRODUCTS) {
    const filtered_products = state.all_products.filter((product) => {
      const { name, colors, category, company, price, shipping } = product;
      const condition = {};
      if (state.filters.text) {
        condition['name'] = `name.includes('${state.filters.text}')`;
      }

      if (state.filters.category != 'all') {
        condition['category'] = `category === '${state.filters.category}'`;
      }

      if (state.filters.company != 'all') {
        condition['company'] = `company === '${state.filters.company}'`;
      }

      if (state.filters.color != 'all') {
        condition['color'] = `colors.includes('${state.filters.color}')`;
      }

      condition['price'] = `price <= ${state.filters.price}`;

      if (state.filters.shipping) {
        condition['shipping'] = 'shipping === true';
      }

      if (Object.keys(condition).length < 1) {
        return true;
      }

      const filter_statement = Object.values(condition).join(' && ');
      console.log(filter_statement);
      return eval(filter_statement);
    });
    return { ...state, filtered_products: filtered_products };
  }
  if (action_type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: getMaxPrice(action.payload.products),
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
