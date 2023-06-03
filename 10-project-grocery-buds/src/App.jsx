import { ToastContainer, toast } from 'react-toastify';
import Form from './Form';
import GroceryList from './GroceryList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) return JSON.parse(list);
  return [];
};

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

function App() {
  const [groceryItems, setGroceryItems] = useState([]);

  useEffect(() => {
    setGroceryItems(getLocalStorage());
  }, []);

  const addItem = (text) => {
    const new_items = groceryItems.concat({ id: nanoid(), text });
    setGroceryItems(new_items);
    toast.success(`${text} has been added.`);
    setLocalStorage(new_items);
  };

  const removeItem = (id) => {
    try {
      const new_items = groceryItems.filter((item) => item.id !== id);
      setGroceryItems(new_items);
      toast.success(`The item has been deleted.`);
      setLocalStorage(new_items);
    } catch (err) {
      toast.error(`An error has occurred. ${err}`);
    }
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <GroceryList groceryItems={groceryItems} removeItem={removeItem} />
    </section>
  );
}

export default App;
