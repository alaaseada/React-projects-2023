import { useAppContext } from './Context';
import { CLEAR_CART } from './actions';

function Footer() {
  const { totalCost, clearItems } = useAppContext();

  return (
    <footer>
      <hr />
      <div>
        <h5 className='cart-total'>
          Total
          <span>${totalCost}</span>
        </h5>
      </div>
      <button className='btn btn-hipster' onClick={clearItems}>
        Clear cart
      </button>
    </footer>
  );
}

export default Footer;
