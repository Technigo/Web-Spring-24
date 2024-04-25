import { useState } from "react"

export const Button = () => {
  const [colour, setColour] = useState("bg-blue-500")
  
  const changeColor = () => {
    /*   setColour((prevColor) =>
      prevColor === "bg-blue-500" ? "bg-red-500" : "bg-blue-500"
    ) */

    setColour("bg-red-500")
  }

  return (
    <div className="h-32 flex justify-center items-center">
      <button
        className={`px-4 py-2 rounded text-white ${colour}`}
        onClick={changeColor}
      >
        Change Color
      </button>
    </div>
  )
}
