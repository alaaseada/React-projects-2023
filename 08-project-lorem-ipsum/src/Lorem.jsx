import React from 'react';

function Lorem({ count, generateText, changeCount }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    generateText();
  };

  const handleChange = (e) => {
    changeCount(e.target.value);
  };
  return (
    <>
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='count'>Paragraphs: </label>
        <input
          className=''
          type='number'
          name='count'
          id='count'
          value={count}
          onChange={handleChange}
          max={8}
          min={1}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
    </>
  );
}

export default Lorem;
