export const Title = ({ title, onClick }) => {
  return (
    <h2 className="title" onClick={onClick}>
      {title}
    </h2>
  )
}
