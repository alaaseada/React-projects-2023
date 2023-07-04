import { useState } from 'react';
import data from './data';
import CartItem from './CartItem';
import Footer from './Footer';
import { useAppContext } from './Context';

function Cart() {
  const {
    state: { purchases },
  } = useAppContext();

  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {purchases.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      {purchases.length ? (
        <Footer />
      ) : (
        <h4 className='empty-cart'>Is currently Empty</h4>
      )}
    </section>
  );
}

export default Cart;
