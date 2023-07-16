import { useState } from 'react';
const App = () => {
  const [currentColor, setCurrentColor] = useState('#f15025');

  const hexToRGB = (color) => {
    const r = parseInt(color[1] + color[2], 16);
    const g = parseInt(color[3] + color[4], 16);
    const b = parseInt(color[5] + color[6], 16);
    return [r, g, b];
  };

  const createLightShades = () => {
    const [r, g, b] = hexToRGB(currentColor);
    let lightColors = [];
    for (let i = 1; i <= 10; i++) {
      lightColors.push(
        '#' +
          Math.ceil(r - r * i * 0.1).toString(16) +
          Math.ceil(g - g * i * 0.1).toString(16) +
          Math.ceil(b - b * i * 0.1).toString(16)
      );
    }

    return lightColors;
  };

  return (
    <main>
      <section className='container'>
        <h4>color Generator</h4>
        <form className='color-form'>
          <input type='color' value={currentColor} />
          <input
            type='text'
            name='color'
            id='color'
            onChange={(e) => setCurrentColor(e.target.value)}
            placeholder='#f15025'
          />
          <input
            className='btn'
            style={{ backgroundColor: { currentColor } }}
            type='submit'
          />
        </form>
      </section>
      <section className='colors'>
        {createLightShades()
          .reverse()
          .map((item) => {
            console.log(item);
            return (
              <article
                className='color false'
                style={{
                  backgroundColor: item,
                }}
              ></article>
            );
          })}
        <article
          className='color false'
          style={{ backgroundColor: { currentColor } }}
        ></article>
        {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(() => {
          return (
            <article
              className='color false'
              style={{ backgroundColor: '#ff00dd' }}
            ></article>
          );
        })}
      </section>
    </main>
  );
};
export default App;
