import PropTypes from "prop-types"

export const Moons = ({ moons }) => {
  return (
    <p>
      <span>Moons: {moons}</span>
    </p>
  )
}

Moons.propTypes = {
  moons: PropTypes.number.isRequired,
}
