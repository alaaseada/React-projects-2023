import { useAppContext } from './Context';
import { CLEAR_CART } from './actions';

function Footer() {
  const { state, dispatch } = useAppContext();
  const total_price = state.purchases.reduce((total, item) => {
    return total + parseFloat(item.price) * item.amount;
  }, 0);

  const clear = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <footer>
      <hr />
      <div>
        <h5 className='cart-total'>
          Total
          <span>${total_price}</span>
        </h5>
      </div>
      <button className='btn btn-hipster' onClick={clear}>
        Clear cart
      </button>
    </footer>
  );
}

export default Footer;
