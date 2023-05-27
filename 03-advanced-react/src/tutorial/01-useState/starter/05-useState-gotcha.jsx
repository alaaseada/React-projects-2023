import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setTimeout(() => {
      setValue((prevState) => prevState + 1)
    }, 3000)
  }
  return (
    <div>
      <h4>useState "gotcha"</h4>
      <p>{value}</p>
      <button onClick={handleClick} className="btn">
        +
      </button>
    </div>
  )
}

export default UseStateGotcha
