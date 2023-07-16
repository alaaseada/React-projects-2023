import { useLocation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ changeSearchKeyword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newKeyword = e.target.parentElement.elements['keyword'].value;
    changeSearchKeyword(newKeyword);
  };

  return (
    <Wrapper>
      <form className='form'>
        <input className='form-input' type='text' name='keyword' id='keyword' />
        <button className='btn' onClick={handleSubmit}>
          Search
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
