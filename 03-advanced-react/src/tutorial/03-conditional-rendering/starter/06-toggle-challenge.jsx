import { useState } from 'react'

const ToggleChallenge = () => {
  const [showDetails, setShowDetails] = useState(false)

  const toggle = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <h2>toggle challenge</h2>
      <p>
        lorem ipsum this is the news from BBC
        <button style={{ margin: '0 10px' }} className="btn" onClick={toggle}>
          {showDetails ? '-' : '+'}
        </button>
      </p>
      {showDetails ? (
        <Details
          details=" lorem ipsum this is the news from BBC lorem ipsum this is the news
          from BBClorem ipsum this is the news from BBClorem ipsum this is the
          news from BBClorem ipsum this is the news from BBClorem ipsum this is
          the news from BBClorem ipsum this is the news from BBClorem ipsum this
          is the news from BBClorem ipsum this is the news from BBClorem ipsum
          this is the news from BBClorem ipsum this is the news from BBC"
        />
      ) : (
        ''
      )}
    </>
  )
}

const Details = ({ details }) => {
  return <p>{details}</p>
}
export default ToggleChallenge
