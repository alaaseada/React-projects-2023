import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { useAppContext } from './Context';

function CartItem({ item }) {
  const { increaseAmount, reduceAmount } = useAppContext();

  return (
    <article className='cart-item'>
      <img src={item.img} alt={item.title} />
      <div>
        <h5>{item.title}</h5>
        <span className='item-price'>${item.price}</span>
        <button className='remove-btn'>Remove</button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={(id) => increaseAmount(item.id)}
        >
          <FaCaretUp className='amount-icon' />
        </button>
        <span className='amount'>{item.amount}</span>
        <button className='amount-btn' onClick={(id) => reduceAmount(item.id)}>
          <FaCaretDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
