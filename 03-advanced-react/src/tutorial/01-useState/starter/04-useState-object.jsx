import { useState } from 'react'

const candidates = [
  { name: 'Alaa', age: 36, hobby: 'Reading books' },
  { name: 'Meho', age: 38, hobby: 'Playing video games' },
  { name: 'Nabil', age: 32, hobby: 'Hanging out with  friends' },
  { name: 'Ola', age: 25, hobby: 'Go shopping' },
  { name: 'Haytham', age: 26, hobby: 'Hiking and playing football' },
]
const UseStateObject = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [person, setPerson] = useState(candidates[0])

  const handeClick = () => {
    let new_index = currentIndex + 1 >= candidates.length ? 0 : currentIndex + 1
    setCurrentIndex(new_index)
    setPerson(candidates[new_index])
  }

  const { name, age, hobby } = person
  return (
    <div>
      <h4>useState object example</h4>
      <p>{name}</p>
      <p>{age}</p>
      <p>{hobby}</p>
      <button className="btn" onClick={handeClick}>
        Choose another person
      </button>
    </div>
  )
}

export default UseStateObject
