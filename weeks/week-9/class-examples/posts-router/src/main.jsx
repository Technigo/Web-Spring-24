import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

/* 
The first thing you need to do is to wrap the entire app inside a BrowserRouter component. Do this inside the `main.jsx` file by importing the library:
  
  import { BrowserRouter } from 'react-router-dom';

(You can also rename the component giving it an alias using the `as`keyword.)

  import { BrowserRouter as Router } from "react-router-dom"

Then wrap the <App/>component with the BrowserRouter component.
 */