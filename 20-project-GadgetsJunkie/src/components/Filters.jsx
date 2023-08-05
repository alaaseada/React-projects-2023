import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice, getMaxPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const { all_products, filters, updateFilters, clearFilters } =
    useFilterContext();
  const unique_categories = getUniqueValues(all_products, 'category');
  const unique_companies = getUniqueValues(all_products, 'company');
  const unique_colors = getUniqueValues(all_products, 'colors');

  const eventHandler = (e) => {
    const event_source = e.target.name;
    let new_value;
    switch (event_source) {
      case 'category':
        new_value = e.target.innerText.toLowerCase();
        break;
      case 'color':
        new_value = e.target.dataset.color;
        break;
      case 'shipping':
        new_value = e.target.checked;
        break;
      case 'price':
        new_value = Number(e.target.value);
        break;
      default:
        new_value = e.target.value;
        break;
    }
    updateFilters({ ...filters, [event_source]: new_value });
  };

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              id='text'
              className='search-input'
              placeholder='Search'
              value={filters.text}
              onChange={eventHandler}
            />
          </div>

          {/* Category */}
          <div className='form-control'>
            <h5>Category</h5>
            <div>
              {unique_categories.map((category, index) => {
                return (
                  <button
                    onClick={eventHandler}
                    key={index}
                    name='category'
                    type='button'
                    className={category === filters.category ? 'active' : null}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div className='form-control'>
            <h5>Company</h5>
            <select
              name='company'
              className='company'
              onChange={eventHandler}
              value={filters.company}
            >
              {unique_companies.map((company, index) => {
                return (
                  <option key={index} name='company' value={company}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Colors */}
          <div className='form-control'>
            <h5>Colors</h5>
            <div className='colors'>
              {unique_colors.map((color, index) => {
                if (color === 'all') {
                  return (
                    <button
                      key={0}
                      className={`all-btn ${
                        filters.color === 'all' ? 'active' : null
                      }`}
                      onClick={(e) => eventHandler(e)}
                      name='color'
                      data-color='all'
                      type='button'
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index + 1}
                    name='color'
                    className='color-btn'
                    data-color={color}
                    style={{ backgroundColor: color }}
                    onClick={eventHandler}
                    type='button'
                  >
                    {color === filters.color && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* price */}
          <div className='form-control'>
            <h5>Price</h5>
            <p className='price'>{formatPrice(filters.price)}</p>
            <input
              type='range'
              name='price'
              value={filters.price}
              min={filters.min_price}
              max={filters.max_price}
              onChange={eventHandler}
            />
          </div>

          {/* Shipping */}
          <div className='form-control shipping'>
            <label htmlFor='shipping'>Free Shipping</label>
            <input
              type='checkbox'
              checked={filters.shipping}
              name='shipping'
              id='shipping'
              onChange={eventHandler}
            />
          </div>

          {/* Reset */}
        </form>
        <button className='clear-btn' type='button' onClick={clearFilters}>
          Clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
