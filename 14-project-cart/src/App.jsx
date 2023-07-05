import { useEffect } from 'react';
import Cart from './Cart';
import { useAppContext } from './Context';
import Navbar from './Navbar';

function App() {
  const {
    state: { isLoading },
    displayItems,
    setLoading,
  } = useAppContext();

  return (
    <main>
      {isLoading ? (
        <div className='loading'></div>
      ) : (
        <>
          <Navbar />
          <Cart />
        </>
      )}
    </main>
  );
}

export default App;
