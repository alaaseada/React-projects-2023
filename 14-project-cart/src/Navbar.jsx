import { FaShoppingCart } from 'react-icons/fa';
import { useAppContext } from './Context';

function Navbar() {
  const {
    state: { purchases },
  } = useAppContext();
  const total_amount_of_purchases = purchases.reduce(
    (total, item) => total + item.amount,
    0
  );
  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaShoppingCart className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{total_amount_of_purchases}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
