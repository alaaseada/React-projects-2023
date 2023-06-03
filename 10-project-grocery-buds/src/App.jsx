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
  const [groceryItems, setGroceryItems] = useState(getLocalStorage());

  useEffect(() => {
    setLocalStorage(groceryItems);
  }, [groceryItems]);

  const addItem = (text) => {
    const new_items = groceryItems.concat({
      id: nanoid(),
      text,
      completed: false,
    });
    setGroceryItems(new_items);
    toast.success(`${text} has been added.`);
  };

  const completeItem = (id) => {
    const new_items = groceryItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setGroceryItems(new_items);
  };

  const removeItem = (id) => {
    try {
      const new_items = groceryItems.filter((item) => item.id !== id);
      setGroceryItems(new_items);
      toast.success(`The item has been deleted.`);
    } catch (err) {
      toast.error(`An error has occurred. ${err}`);
    }
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <GroceryList
        groceryItems={groceryItems}
        removeItem={removeItem}
        completeItem={completeItem}
      />
    </section>
  );
}

export default App;
