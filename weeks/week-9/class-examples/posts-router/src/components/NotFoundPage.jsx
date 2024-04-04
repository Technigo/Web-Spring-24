import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  const image =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWpreTBqdWlhNG1jN2RuMzJ1cjlsY2kxdDBhb2d5bDhraXBpNjY1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uQ3cOFteDaU/giphy.gif"
  return (
    <div>
      <Link to="/">Go home</Link>
      <h1>
        Oh Uh, it seems that the page you are trying to access does not exist.
      </h1>
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  )
}
