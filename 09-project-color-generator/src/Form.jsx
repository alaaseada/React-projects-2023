import { useState } from 'react';

function Form({ createColorList }) {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createColorList(color);
  };

  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input type='color' value={color} onChange={handleChange} />
        <input
          type='text'
          placeholder='#f15025'
          value={color}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='btn'
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
