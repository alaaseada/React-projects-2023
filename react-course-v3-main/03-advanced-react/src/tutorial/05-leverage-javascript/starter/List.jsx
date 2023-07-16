import React from 'react';
import { people } from '../../../data';
import Person from './Person';

function List() {
  return (
    <>
      <ul>
        {people.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </ul>
    </>
  );
}

export default List;
