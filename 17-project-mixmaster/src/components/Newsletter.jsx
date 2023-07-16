import { Form } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData.get('fname'));
  return null;
};

const Newsletter = () => {
  return (
    <section className='page'>
      <Form className='form' method='POST'>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Our Newsletter
        </h4>
        <div className='form-row'>
          <label className='form-label' htmlFor='fname'>
            First Name
          </label>
          <input className='form-input' type='text' name='fname' id='fname' />
        </div>
        <div className='form-row'>
          <label className='form-label' htmlFor='lname'>
            Last Name
          </label>
          <input className='form-input' type='text' name='lname' id='lname' />
        </div>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <div className='form-row'>
          <input
            className='form-input'
            type='email'
            name='email'
            id='email'
            defaultValue={'test@test.com'}
          />
        </div>
        <button
          className='btn btn-block'
          type='submit'
          style={{ marginTop: '0.5rem' }}
        >
          Subscribe
        </button>
      </Form>
    </section>
  );
};

export default Newsletter;
