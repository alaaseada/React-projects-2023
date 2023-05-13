import { BsCloudMinusFill, BsCloudPlusFill } from 'react-icons/bs';

function Question({ question: { id, title, info }, isReadMore, onClick }) {
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button onClick={() => onClick(id)} className='question-btn'>
          {isReadMore ? <BsCloudMinusFill /> : <BsCloudPlusFill />}
        </button>
      </header>
      {isReadMore && <p>{info}</p>}
    </article>
  );
}

export default Question;
