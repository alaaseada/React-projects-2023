import { useGlobalContext } from './Context';

function SearchForm() {
  const { setKeyword } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchKeyword = e.target.elements.search.value;
    if (!searchKeyword) return;
    setKeyword(searchKeyword);
  };
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='form-input search-input'
        type='text'
        name='search'
        id='search'
        placeholder='cat'
      />
      <button className='btn' type='submit'>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
