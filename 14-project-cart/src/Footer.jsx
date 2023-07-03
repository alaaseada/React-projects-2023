import { useAppContext } from './Context';

function Footer() {
  const { purchases } = useAppContext();
  const total_price = purchases.reduce((total, item) => {
    return total + parseFloat(item.price) * item.amount;
  }, 0);
  return (
    <footer>
      <hr />
      <div>
        <h5 className='cart-total'>
          Total
          <span>${Math.round(total_price, 2)}</span>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
