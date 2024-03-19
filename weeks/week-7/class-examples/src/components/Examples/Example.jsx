import { useEffect, useState } from "react"
import "./Example.scss"

export const Example = () => {
  const [name, setName] = useState("")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  //STRUCTURE TO FOLLOW
  // Sturcture of useEffect Hook
  // useEffect(() => {})
  // useEffect(() => {}, [])

  // Example 1: Runs on every render

  useEffect(() => {
    console.log("I have been re-rendered at every component update")
  })

  // Explanation:
  // Without dependencies, useEffect runs after every render.
  // This is useful when you want to execute a side effect every time the component updates with state updates.

  // -----------------
  // -----------------
  // -----------------

  // // Example 2: Runs once after the initial render
  // Same as componentDidMount Alternative'
  // Has dependency array
  // Basically it tells react to run once the component did mount

  useEffect(() => {
    console.log(" ---- ONLY RUNNING ONCE [] ARRAY PASSED")
  }, [])

  // Explanation: With an empty dependency array [], useEffect runs once after the initial render, mimicking componentDidMount. This is useful for one-time setups like fetching data.

  // -----------------
  // -----------------
  // -----------------

  // Example 3: Runs after the initial render and when specified dependencies change
  // It runs on the first render + whenever a dependency changes - 'same as componentDidUpdate Alternative'
  // Look at removing the dependency and see the warning on the console
  useEffect(() => {
    console.log(
      `Runs after the initial render and when the name changes. ${name}`
    )
  }, [name])

  // Explanation:  When dependencies [name] are specified, useEffect runs after the initial render and whenever the specified dependencies change, similar to componentDidUpdate. This is useful to handle side effects related to certain state/props changes.

  // Example 4: Runs once after the initial render and has a cleanup function
  // It runs on the first render + cleanup function- 'same as componentDidMount Alternative'
  // Has dependency array
  // Basically it tells react to run once the component did mount
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log("Attach Listener")
    window.addEventListener("resize", updateWindowWidth)

    // cleanup within the useState hook is basically a return within the useEffect callback function
    // Why removing event listener is important? Avoid memory leaks, if the browser is not handled it properly.
    return () => {
      console.log("Dettach Listener")
      window.removeEventListener("resize", updateWindowWidth)
    }
  }, []) // try to insert the dependency [windowWidth]

  /*   Explanation: example, an empty dependency array [] indicates that the side-effect logic will only execute once after the initial render, mimicking the componentDidMount lifecycle method in class components.
  Upon execution, a message "Attach Listener" is logged to the console, and an event listener for window resizing is established, invoking the updateWindowWidth function whenever a resize event occurs. 
  This function, updateWindowWidth, updates the component’s state, windowWidth, with the current inner width of the window, potentially triggering a re-render.
  Crucially, a cleanup function is provided, which logs "Detach Listener" to the console and removes the previously set event listener. 

  This cleanup function will be invoked when the component is unmounted from the DOM, ensuring that the event listener is removed to prevent memory leaks 
  and avoid unnecessary operations when the component is no longer present in the UI. 

  In React, when you put a console.log in a cleanup function (such as in a useEffect cleanup function), it might appear to be called even when the component is not yet unmounted due to the asynchronous nature of the cleanup process.

  When React performs cleanup, it schedules the cleanup functions to be executed after the component has been removed from the DOM. However, it doesn't necessarily wait for these cleanup functions to complete before proceeding with other tasks, such as unmounting the component.

  This means that while React schedules the cleanup function to be executed after the component unmounts, it doesn't wait for it to finish before continuing with other tasks. As a result, if there are asynchronous operations within the cleanup function (such as logging to the console), they might still execute even though the component hasn't been fully unmounted yet.


  This pattern demonstrates a practical application of useEffect to manage side-effects and their cleanup in a React functional component.
 */
  // -----------------
  // -----------------
  // -----------------

  return (
    <div>
      <h2>Example of useEffect Hook</h2>
      <p>The window width size is currently: {windowWidth}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="type a name..."
      />
    </div>
  )
}
