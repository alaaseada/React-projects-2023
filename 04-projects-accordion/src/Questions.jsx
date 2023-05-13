import { useState } from 'react';
import Question from './Question';

function Questions({ questions }) {
  const [openedId, setOpenedId] = useState(-1);
  const switchCase = (id) => {
    setOpenedId(id);
  };
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            question={question}
            onClick={switchCase}
            isReadMore={question.id === openedId ? true : false}
          />
        );
      })}
    </section>
  );
}

export default Questions;
