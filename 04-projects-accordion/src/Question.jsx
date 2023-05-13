import { useState } from 'react';
import { BsCloudMinusFill, BsCloudPlusFill } from 'react-icons/bs';

function Question({ question: { title, info } }) {
  const [isReadMore, setIsReadMore] = useState(false);

  const showMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button onClick={showMore} className='question-btn'>
          {isReadMore ? <BsCloudMinusFill /> : <BsCloudPlusFill />}
        </button>
      </header>
      {isReadMore && <p>{info}</p>}
    </article>
  );
}

export default Question;
