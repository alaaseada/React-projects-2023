import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <h4>{text || 'Default value'}</h4>
      {text && (
        <div>
          <h2>Whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {!text && (
        <div>
          <h2>Control what we return with short circuits and negation</h2>
        </div>
      )}
    </div>
  )
}

export default ShortCircuitExamples
