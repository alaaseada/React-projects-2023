import { useEffect } from 'react';
import Cart from './Cart';
import { useAppContext } from './Context';
import Navbar from './Navbar';
import { SET_ISLOADING } from './actions';

function App() {
  const {
    state: { isLoading },
    dispatch,
  } = useAppContext();

  const changeLoading = () => {
    dispatch({ type: SET_ISLOADING, payload: { status: false } });
  };

  useEffect(() => {
    const loading_timer = setTimeout(changeLoading, 3000);
    return () => clearTimeout(loading_timer);
  }, []);

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
