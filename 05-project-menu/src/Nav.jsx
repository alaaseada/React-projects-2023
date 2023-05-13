function Nav({ categories, onButtonClick }) {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type='button'
            className='btn'
            onClick={() => onButtonClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Nav;
