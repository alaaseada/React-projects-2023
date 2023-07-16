import avatar from '../../../assets/default-avatar.svg';

function Person(person) {
  const img = person.images?.[0]?.small?.url || avatar;
  return (
    <li>
      <p>{person.name}</p>
      <p>{person.nickName}</p>
      <img
        key={`img-${person.id}`}
        className='person-img'
        src={img}
        alt={person.name}
      />
    </li>
  );
}

export default Person;
