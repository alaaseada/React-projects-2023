import { useState } from 'react';

const ControlledInputs = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const sendData = (e) => {
    e.preventDefault();
    console.log(user);
    cancel();
  };

  const changeState = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const cancel = () => {
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <form className='form' onSubmit={sendData}>
      <div className='form-row'>
        <label className='form-label' htmlFor='name'>
          Name
        </label>
        <input
          className='form-input'
          type='text'
          id='name'
          value={user.name}
          onChange={changeState}
        />
      </div>
      <div className='form-row'>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input
          className='form-input'
          type='email'
          id='email'
          value={user.email}
          onChange={changeState}
        />
      </div>
      <div className='form-row'>
        <label className='form-label' htmlFor='password'>
          Password
        </label>
        <input
          className='form-input'
          type='password'
          id='password'
          value={user.password}
          onChange={changeState}
        />
      </div>
      <div className='form-row col-2'>
        <button className='btn btn-block' type='submit'>
          Submit
        </button>
        <button onClick={cancel} className='btn btn-block'>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ControlledInputs;
