import imgUrl from "../../assets/solarSystem.jpg"
import "./Header.css"

export const Header = () => {
  let imageObject = {
    imgUrl: imgUrl,
    imgAlt: "An Image of the Solar System",
  }
  return (
    <header>
      <img src={imageObject.imgUrl} alt={imageObject.imgAlt}></img>
    </header>
  )
}
