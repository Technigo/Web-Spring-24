import { formatDistance } from "date-fns"
import "./Tasks.css"
// import data from "../data.json"

const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  // ***** check/uncheck task *****
  const onTaskCheckChange = (task) => {
    // update a state object
    /* updatedTask is a new object that is the same as the task object except for the isChecked property, 
    which is toggled from true to false or from false to true. 
    This code is often used to update a property of an object while preserving the rest of its properties. */
    const updatedTask = { ...task, isChecked: !task.isChecked }

    // Make a POST request here with the updated task isChecked value
    fetch(`https://week-7-backend.onrender.com/tasks/${task._id}/check`, {
      method: "POST",
      headers: { updatedTask, "Content-Type": "application/json" },
      body: JSON.stringify({
        isChecked: updatedTask.isChecked,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error)
        // Handle network or other errors
      })

    // Update the task list in the state
    // Use .map to update the specific task if found, otherwise return it unchanged
    setTaskList((taskList) =>
      taskList.map((singleTask) =>
        singleTask._id === task._id ? updatedTask : singleTask
      )
    )
  }

  return (
    <section className="tasks">
      {taskList
        .map((task) => (
          <div key={task._id} className="task">
            <input
              onChange={() => onTaskCheckChange(task)}
              type="checkbox"
              checked={task.isChecked}
            />
            <h4>{task.description}</h4>
            {/*        <p>{formatRelative(task.date, new Date())}</p> */}
            <p>
              {formatDistance(new Date(task.date), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>
        ))
        .reverse()
        .slice(0, 10)}
    </section>
  )
}

export default TaskList
