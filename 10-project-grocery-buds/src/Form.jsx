import { useState } from 'react';

function Form({ addItem }) {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Buds</h4>
      <div className='form-control'>
        <input
          className='form-input'
          type='text'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className='btn' type='submit'>
          Add item
        </button>
      </div>
    </form>
  );
}

export default Form;
