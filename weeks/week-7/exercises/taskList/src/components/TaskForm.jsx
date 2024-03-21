const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>📝 ToDo App</h1>
      <h2>Type you tasks here below 👇</h2>

      <textarea
        value={newTodo}
        onChange={onNewTodoChange}
        placeholder="Type a task.."
      />
      <button type="submit">Add task</button>
    </form>
  )
}

export default TaskForm
