import { useSecondCountStore } from "../stores/useSecondCountStore"
import { logSecondCount } from "../utils/logSecondCount"

export const SecondCount = () => {
  const { count, increment, decrement, reset } = useSecondCountStore()

  return (
    <div>
      <h2>Second count</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={logSecondCount}>Log</button>
    </div>
  )
}
