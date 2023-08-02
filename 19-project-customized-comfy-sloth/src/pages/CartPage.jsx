import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();
  const cartItems = Array.from(cart.values());

  if (!cartItems.length) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>You Cart is Empty</h2>
          <Link className='btn' to='/products'>
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper className='page'>
      <PageHero title='Cart' />
      <CartContent cart={cartItems} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
