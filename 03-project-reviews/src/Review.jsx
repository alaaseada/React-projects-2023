import Controllers from "./Controllers"

function Review({review: {name, job, image, text}, onRandomSelection, goBack, goForward}) {
  return (
    <article className='review'>
    <div className='img-container'>
        <img src={image} className="person-img"/>
        <span className="quote-icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg></span>
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