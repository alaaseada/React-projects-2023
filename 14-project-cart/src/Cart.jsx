import { useState } from 'react';
import data from './data';
import CartItem from './CartItem';
import Footer from './Footer';
import { useAppContext } from './Context';

function Cart() {
  const {
    state: { cartItems },
  } = useAppContext();

  const constructItems = () => {
    let cartItemsArray = Array.from(cartItems.entries());
    let cartItemsComponents = cartItemsArray.map((item) => {
      const [id, cartItem] = item;
      return <CartItem item={cartItem} key={id} />;
    });
    return cartItemsComponents;
  };

  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>{constructItems()}</div>
      {cartItems.size ? (
        <Footer />
      ) : (
        <h4 className='empty-cart'>Is currently Empty</h4>
      )}
    </section>
  );
}

export default Cart;
