import { useState } from 'react';

function SingleItem({ item, removeItem }) {
  const [toBeDeleted, setToBeDeleted] = useState(false);

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className='single-item'>
      <input type='checkbox' onChange={() => setToBeDeleted(!toBeDeleted)} />
      <p
        style={
          toBeDeleted
            ? { textTransform: 'capitalize', textDecoration: 'line-through' }
            : { textTransform: 'capitalize' }
        }
      >
        {item.text}
      </p>
      <button className='btn remove-btn' onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default SingleItem;
