import { Photo } from "../Photo/Photo"
import { TextBox } from "../TextBox/TextBox"
import "./Card.css"

export const Card = ({ color, mode, source, title, description, direction }) => {
  return (
    <article className={`article-container ${direction}`}>
      <Photo
        color={color}
        mode={mode}
        source={source}
      />
      <TextBox
        title={title}
        description={description}
        direction={direction}
        mode={mode}
      />
    </article>
  )
}