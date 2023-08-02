import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();

  const increaseAmount = () => {
    setAmount((prevState) => {
      return prevState < product.stock ? prevState + 1 : product.stock;
    });
  };

  const decreaseAmount = () => {
    setAmount((prevState) => {
      return prevState > 1 ? prevState - 1 : 1;
    });
  };

  return (
    <Wrapper>
      {product.colors && (
        <div className='colors'>
          <span>Colors: </span>
          <div>
            {product.colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className={`color-btn ${
                    color === selectedColor ? 'active' : ''
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  {color === selectedColor && <FaCheck />}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className='btn-container'>
        <AmountButtons
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          amount={amount}
        />
        <Link
          to='/cart'
          className='btn'
          onClick={() =>
            addToCart({
              product: {
                id: product.id,
                name: product.name,
                stock: product.stock,
                image:
                  product.images[0]?.thumbnails?.small?.url ||
                  product.images[0].url,
                price: product.price,
              },
              amount,
              selectedColor,
            })
          }
        >
          Add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
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
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
