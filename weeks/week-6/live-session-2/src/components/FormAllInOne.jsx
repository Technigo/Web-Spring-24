import { useState } from 'react'

export const FormAllInOne = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSummary(true)
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setAge('')
    setShowSummary(false)
  }


  return (
    <>
      {showSummary ?
        <div>
          <h2>This is the Summary:</h2>
          <p>Your name is {name} and you are {age} years old. The email you've provided is {email}</p>
          <p>Thank you for you submission!</p>
          <button onClick={clearForm}>Restart</button>
        </div> :
        <form onSubmit={handleSubmit}>
          <div>

            <label for="nameInput">name:</label>
            <input id="nameInput" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>

            <label for="emailInput">email:</label>
            <input id="emailInput" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>

            <label for="ageInput">Age:</label>
            <input id="ageInput" name="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <button type="submit">Submit form</button>
        </form>}
    </>
  )
}

