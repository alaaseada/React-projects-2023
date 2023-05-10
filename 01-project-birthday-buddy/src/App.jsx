import { useState } from 'react'
import Clearer from './Clearer'
import List from './List'
import source_data from './data'

function App() {
  const [data, setData] = useState(source_data)
  const handleClearance = () => {
    setData([])
  }
  return (
    <main>
      <section className="container">
        <h3>
          {data.length} Birthday{data.length > 1 ? 's' : ''} Today
        </h3>
        <List data={data} />
        <Clearer clearList={handleClearance} />
      </section>
    </main>
  )
}

export default App
