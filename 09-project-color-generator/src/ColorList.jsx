import SingleColor from './SingleColor';

function ColorList({ colorList }) {
  return (
    <section className='colors'>
      {colorList.map((color, index) => {
        return <SingleColor key={index} color={color} />;
      })}
    </section>
  );
}

export default ColorList;
