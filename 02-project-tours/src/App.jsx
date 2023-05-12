import './App.css'
import { useEffect, useState } from 'react'
import Tours from './Tours'
import Loading from './Loading'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  
  const getTours = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        setIsError(true)
        return
      }
      const data = await response.json()
      setTours(data)
    } catch (err) {
      setIsError(true)
      console.log(err)
    }
    setIsLoading(false)
  }

  const removeTour = (id) => {
    const updated_tours = tours.filter((tour) => tour.id !== id)
    setTours(updated_tours)
  }

  useEffect(() => {
    getTours()
  }, [])

  const errorous_content = 
          <div className="alert alert-danger">
            An error occured while fetching data.
          </div>

  const empty_content = 
          <div className="title">
            <h2>No Tours Left</h2>
            <button className="btn" style={{marginTop: "2rem"}} onClick={getTours}>Refresh</button>
          </div>

  const not_empty_content = 
          <section>
              <div className="title">
                <h2>Our Tours</h2>
                <div className="title-underline"></div>
                </div>
                <Tours tours={tours} removeTour={removeTour} /> 
          </section>

  return <main>{isLoading ? <Loading /> : isError ? errorous_content : tours.length > 0 ? not_empty_content : empty_content}</main>
}


export default App
