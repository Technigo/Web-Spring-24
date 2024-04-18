import { Count } from "./components/Count"
import { SecondCount } from "./components/SecondCount"

import "./App.css"

export const App = () => {
  return (
    <>
      <h1>Zustand & useRef</h1>
      <hr />
      <Count />
      <hr />
      <SecondCount />
    </>
  )
}
