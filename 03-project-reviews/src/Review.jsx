import Controllers from "./Controllers"
import { FaQuoteRight } from 'react-icons/fa';


function Review({review: {name, job, image, text}, onRandomSelection, goBack, goForward}) {
  return (
    <article className='review'>
    <div className='img-container'>
        <img src={image} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
    </div>
     <h4 className='author'>{name}</h4>
     <p className='job'>{job}</p>
     <p className='info'>{text}</p>
     <Controllers goBack={goBack} goForward={goForward}/>
     <button className="btn btn-hipster" onClick={onRandomSelection} >Surprise me</button>
    </article>
  )
}

export default Review