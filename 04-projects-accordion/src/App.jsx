import './App.css';
import Question from './Question';
import data from './data';

function App() {
  const questions = data;
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
          return <Question key={question.id} question={question} />;
        })}
      </section>
    </main>
  );
}

export default App;
