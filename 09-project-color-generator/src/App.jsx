import Selector from './Selector'
import { useState } from 'react'
import ColorPalette from './ColorPalette'
import Values from 'values.js'

const App = () => {
  const [color, setColor] = useState('')
  const [shades, setShades] = useState([])

  const generateColorPalette = (e) => {
    e.preventDefault()
    const shadesList = new Values(color).all(10)
    setShades(shadesList)
  }

  const changeColor = (e) => {
    setColor(e.target.value)
  }
  return (
    <>
      <Selector
        generateColorPalette={generateColorPalette}
        color={color}
        changeColor={changeColor}
      />
      <ColorPalette colorShades={shades} />
    </>
  )
}
export default App
