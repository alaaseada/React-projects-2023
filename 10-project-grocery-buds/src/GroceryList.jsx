import SingleItem from './SingleItem';

function GroceryList({ groceryItems, removeItem }) {
  return (
    <div className='items'>
      {groceryItems.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </div>
  );
}

export default GroceryList;
