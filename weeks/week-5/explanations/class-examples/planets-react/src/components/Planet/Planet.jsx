import PropTypes from "prop-types"
import "./Planet.css"
import { Moons } from "./Moons"
import { Description } from "./Description"
import { Atmosphere } from "./Atmosphere"

export const Planet = ({
  name,
  distance,
  diameter,
  moons,
  description,
  atmosphere,
}) => {
  return (
    <div className="planet">
      <p>
        <span>Name: {name}</span>
      </p>
      <p>
        <span>Distance from the sun: {distance}</span>
      </p>
      <p>
        <span>Diameter: {diameter}</span>
      </p>
      <Moons moons={moons} />
      <Description description={description} />
      <Atmosphere atmosphere={atmosphere} />
    </div>
  )
}

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  moons: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  atmosphere: PropTypes.array.isRequired,
}

/* Defining types for component props improves reusability of your components by validating received data. It can warn other developers if they make a mistake while reusing the component with improper data type. */
