import { Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ keyword }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form className='form'>
        <input
          className='form-input'
          type='text'
          name='search'
          id='search'
          defaultValue={keyword}
        />
        <button className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'Searching' : 'Search'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
