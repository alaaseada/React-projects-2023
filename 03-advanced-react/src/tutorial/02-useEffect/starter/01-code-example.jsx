import { useEffect, useState } from 'react'

const CodeExample = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <h1>value: {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Update value 1
      </button>
    </div>
  )
}
export default CodeExample
