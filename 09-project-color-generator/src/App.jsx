import { useState } from 'react';
import Form from './Form';
import ColorList from './ColorList';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [colorList, setColorList] = useState(new Values('#f15025').all(10));

  const createColorList = (color) => {
    try {
      const valid_color = /^(#)([0-9A-Fa-f]{2}){3}/.exec(color);
      if (!valid_color)
        throw Error(
          'Cannot create the color list of this color. Invalid color.'
        );
      const color_values = new Values(color).all(10);
      if (!color_values)
        throw Error('Cannot create the color list of this color.');
      setColorList(color_values);
    } catch (err) {
      toast.error(`An error has occurred! ${err}`);
    }
  };

  return (
    <main>
      <ToastContainer position='top-center' />
      <Form createColorList={createColorList} />
      <ColorList colorList={colorList} />
    </main>
  );
}

export default App;
