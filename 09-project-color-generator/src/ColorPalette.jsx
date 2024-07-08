import { nanoid } from 'nanoid'
import ColorBox from './ColorBox'

const ColorPalette = ({ colorShades }) => {
  return (
    <section className="colors">
      {colorShades.map((color) => {
        return <ColorBox key={nanoid()} color={color} />
      })}
    </section>
  )
}
export default ColorPalette
