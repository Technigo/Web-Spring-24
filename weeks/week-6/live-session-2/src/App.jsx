import './App.css'
import { useState } from 'react'
import { FormAllInOne } from './components/FormAllInOne'
import { SplitUpForm } from './components/SplitUpForm'
import { SplitUpSummary } from './components/SplitUpSummary'

export const App = () => {
  // Add the state here if you are working with components for form and summary, or multistep
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [showSummary, setShowSummary] = useState(false)



  return (
    <main className={`container light`}>
      {/* <FormAllInOne /> */}


      {showSummary ?
        <SplitUpSummary name={name} age={age} /> :
        <SplitUpForm
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          setShowSummary={setShowSummary}
        />}

    </main>
  )
}

