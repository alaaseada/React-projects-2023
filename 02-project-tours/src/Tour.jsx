import { useState } from 'react'

function Tour({ tour: { id, name, info, image, price } , removeTour}) {
  const [isReadMore, setIsReadMore] = useState(false)
  const trucateText = (str, n) => {
    return str.length > n ? str.slice(0, n) + `...` : str
  }
  return (
    <article className="single-tour">
      <img src={image} alt="name" className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {!isReadMore ? trucateText(info, 200) : info}
          &nbsp;
          <button
            className="info-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {!isReadMore ? 'Read more' : 'Read less'}
          </button>
        </p>
        <button className="delete-btn btn-block btn" onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </article>
  )
}

export default Tour
