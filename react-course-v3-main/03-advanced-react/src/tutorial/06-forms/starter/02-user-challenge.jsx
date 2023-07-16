import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [userName, setUserName] = useState('');

  const addUser = (e) => {
    e.preventDefault();
    userName &&
      setUsers(() => {
        const ids = users.map((user) => user.id);
        const new_id = Math.max(...ids) + 1;
        return users.concat({ id: new_id, name: userName });
      });
    emptyForm();
  };

  const emptyForm = () => {
    setUserName('');
  };

  const removeItem = (id) => {
    setUsers(() => {
      const new_users = users.filter((item) => item.id !== id);
      return new_users;
    });
  };

  return (
    <div>
      <form className='form' onSubmit={addUser}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            value={userName}
            className='form-input'
            id='name'
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={user.id}>
              {' '}
              {index + 1}- {user.name}{' '}
              <button className='btn' onClick={() => removeItem(user.id)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserChallenge;
