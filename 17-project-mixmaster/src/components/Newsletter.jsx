import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    if (response.status === 201) {
      toast.success(response.data.msg);
    }
    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <section className='page'>
      <Form className='form' method='POST'>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Our Newsletter
        </h4>
        <div className='form-row'>
          <label className='form-label' htmlFor='name'>
            First Name
          </label>
          <input
            className='form-input'
            type='text'
            name='name'
            id='name'
            required
          />
        </div>
        <div className='form-row'>
          <label className='form-label' htmlFor='lastName'>
            Last Name
          </label>
          <input
            className='form-input'
            type='text'
            name='lastName'
            id='lastName'
            required
          />
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
            required
          />
        </div>
        <button
          className='btn btn-block'
          type='submit'
          style={{ marginTop: '0.5rem' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </Form>
    </section>
  );
};

export default Newsletter;
