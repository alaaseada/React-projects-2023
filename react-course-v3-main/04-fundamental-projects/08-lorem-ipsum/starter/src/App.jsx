import Lorem from './Lorem';
import { useState } from 'react';
import text from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [generatedText, setGeneratedText] = useState([]);

  const generateText = () => {
    setGeneratedText(text.slice(0, count));
  };

  const changeCount = (val) => {
    setCount(val);
  };

  return (
    <section className='section-center'>
      <Lorem
        count={count}
        generateText={generateText}
        changeCount={changeCount}
      />
      <article className='lorem-text'>
        {generatedText.map((item, index) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
