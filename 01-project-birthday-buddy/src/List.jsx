/* eslint-disable react/prop-types */
import Person from './Person'

function List({ data }) {
  return (
    <section>
      {data.map((person) => {
        return <Person key={person.id} info={person} />
      })}
    </section>
  )
}

export default List
