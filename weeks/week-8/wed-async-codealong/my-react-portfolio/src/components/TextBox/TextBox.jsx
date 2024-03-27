export const TextBox = ({ title, description, mode }) => {
  return (
    <div className="text-box">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Button 1</button>
      {mode === "portrait" ? <button>Button 2</button> : ""}
    </div>
  )
}