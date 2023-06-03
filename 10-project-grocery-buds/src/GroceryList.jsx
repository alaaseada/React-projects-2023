import SingleItem from './SingleItem';

function GroceryList({ groceryItems, removeItem, completeItem }) {
  return (
    <div className='items'>
      {groceryItems.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            completeItem={completeItem}
          />
        );
      })}
    </div>
  );
}

export default GroceryList;
