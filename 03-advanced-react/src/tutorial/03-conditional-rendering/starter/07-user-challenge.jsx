import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    const name = prompt('Please enter your username')
    name && setUser(name)
  }

  const logout = () => {
    setUser(null)
  }
  return (
    <>
      <h4>user challenge</h4>
      {!user ? (
        <button onClick={login} className="btn">
          Login
        </button>
      ) : (
        <button onClick={logout} className="btn">
          Logout
        </button>
      )}
      {user && <h3>'Hello, ' + {user}</h3>}
    </>
  )
}

export default UserChallenge
