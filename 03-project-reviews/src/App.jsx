import {useState} from 'react';
import './App.css'
import data from "./data"
import Review from './Review'

function App() {
  const reviews = data
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const getRandomReview = () => {
    let random_index = Math.floor(Math.random() * reviews.length)
    if(random_index === currentIndex){
      random_index = currentIndex + 1
    }
    setCurrentIndex(random_index)
  }
  
  const goBack = () => {
    setCurrentIndex(currentIndex - 1 < 0 ? reviews.length - 1 : currentIndex - 1)
  }

  const goForward = () => {
    setCurrentIndex(currentIndex + 1 >= reviews.length ? 0 : currentIndex + 1)
  }

  const review = reviews[currentIndex]

  return (
    <main>
    <Review review={review} onRandomSelection={getRandomReview} goBack={goBack} goForward={goForward}/>
    </main>
  )
}

export default App
