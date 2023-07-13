import Wrapper from '../assets/wrappers/SearchForm';
const SearchForm = () => {
  return (
    <Wrapper>
      <form className='form'>
        <input className='form-input' type='text' name='keyword' />
        <button className='btn' type='submit'>
          Search
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
