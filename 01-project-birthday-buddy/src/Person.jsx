function Person(props) {
  // eslint-disable-next-line react/prop-types
  const { name, image, age } = props.info
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  )
}

export default Person
