import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { useAppContext } from './Context';
import { REDUCE_AMOUNT, INCREASE_AMOUNT, REMOVE_ITEM } from './actions';

function CartItem({ item }) {
  const { dispatch } = useAppContext();
  const increase = () => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id: item.id } });
  };
  const decrease = () => {
    dispatch({ type: REDUCE_AMOUNT, payload: { id: item.id } });
  };
  const remove = () => {
    dispatch({ type: REMOVE_ITEM, payload: { id: item.id } });
  };
  return (
    <article className='cart-item'>
      <img src={item.img} alt={item.title} />
      <div>
        <h5>{item.title}</h5>
        <span className='item-price'>${item.price}</span>
        <button className='remove-btn' onClick={remove}>
          Remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={increase}>
          <FaCaretUp className='amount-icon' />
        </button>
        <span className='amount'>{item.amount}</span>
        <button className='amount-btn' onClick={decrease}>
          <FaCaretDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
