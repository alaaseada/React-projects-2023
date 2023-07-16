import React from 'react';
import { useReducer } from 'react';
import reducer from './reducer';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { data } from '../../../data';

const defaultState = {
  people: data,
};
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
