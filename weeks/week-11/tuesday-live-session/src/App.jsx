import { Posts } from "./components/Posts"
import { ThemeUseContextExample } from "./examples/ThemeUseContextExample"
import { ThemeZustandExample } from "./examples/ThemeZustandExample"

import "./App.css"

export const App = () => {
  return (
    <>
      <h1>Zustand</h1>
      {/* <ThemeUseContextExample /> */}
      <ThemeZustandExample />
      <hr />
      <Posts />
    </>
  )
}
