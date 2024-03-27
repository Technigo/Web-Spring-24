import "./Photo.css"

export const Photo = ({ color, mode, source }) => {
  return (
    <img
      src={source}
      className={`${color} ${mode}`}
      alt="photo"
    />
  )
}
