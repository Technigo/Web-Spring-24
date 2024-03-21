import { useEffect, useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import "./Tasks.css"

export const Tasks = () => {
  const [taskList, setTaskList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newTodo, setNewTodo] = useState("")

  const url = "https://week-7-backend.onrender.com/tasks"

  // ***** fetch task s*****
  const fetchTasks = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setTaskList(data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      /*      This block is executed no matter what, whether there was an error or not. 
      It's typically used for cleanup tasks. In this case, it sets the loading state back to false, 
      indicating that the loading operation has finished.
      */
      setLoading(false)
    }
  }

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  // ***** post task *****
  const onFormSubmit = async (event) => {
    event.preventDefault()

    if (newTodo.trim().length < 10) {
      alert("Task must be at least 10 characters long")
      return // Prevent further execution
    }

    // The provided code defines an options object used for configuring and customizing an HTTP request, specifically a POST request.
    const options = {
      method: "POST",
      // Headers provide additional information about the request, such as the data format.
      headers: {
        "Content-Type": "application/json",
      },
      // JSON.stringify converts a JavaScript value to a JSON string
      body: JSON.stringify({
        description: newTodo,
      }),
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        // fetch updated list with newly added task
        await fetchTasks()
      }
    } catch (error) {
      console.error(error)
    } finally {
      // cleanup function, setNewToDo string as empty
      // preventing any unintended data from lingering in the variable.
      setNewTodo("")
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="wrapper">
      <TaskForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit}
      />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}
