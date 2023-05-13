import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Controllers({goBack, goForward}) {
  return (
    <div className='btn-container'>
     <button className='prev-btn' onClick={goBack}>
        <FaChevronLeft/>
     </button>
     <button className='next-btn' onClick={goForward}>
        <FaChevronRight/>
     </button>
    </div>
  )
}

export default Controllers