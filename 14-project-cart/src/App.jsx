import { useEffect } from 'react';
import Cart from './Cart';
import { useAppContext } from './Context';
import Navbar from './Navbar';
import { useFetch } from './useFetch';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

function App() {
  const {
    state: { isLoading },
    displayItems,
    setLoading,
  } = useAppContext();

  useEffect(() => {
    const { data } = useFetch(url);
    if (data) {
      console.log(data);
      displayItems(data);
      setLoading(false);
    } else {
      setLoading(true);
    }
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
