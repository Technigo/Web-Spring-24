export const SplitUpForm = ({ name, setName, age, setAge, setShowSummary }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSummary(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="nameInput">name:</label>
        <input id="nameInput" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label for="ageInput">Age:</label>
        <input id="ageInput" name="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <button type="submit">Submit form</button>
    </form>

  )
}

