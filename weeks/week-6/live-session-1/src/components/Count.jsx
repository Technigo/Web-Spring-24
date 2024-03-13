import { useState } from 'react'

export const Count = () => {
  const [count, setCount] = useState(100)

  const handleCount = () => {
    setCount((count) => count + 1)
  }

  return (
    <button onClick={handleCount}>
      count is {count}
    </button>
  )
}

