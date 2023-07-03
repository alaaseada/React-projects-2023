import { useState } from 'react';
import data from './data';
import CartItem from './CartItem';
import Footer from './Footer';
import { useAppContext } from './Context';

function Cart() {
  const { purchases } = useAppContext();

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
      <Footer />
    </section>
  );
}

export default Cart;
