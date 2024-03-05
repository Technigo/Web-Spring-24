import PropTypes from "prop-types"

export const Atmosphere = ({ atmosphere }) => {
  return (
    <div>
      <span>Atmosphere:</span>
      {atmosphere.map((atm, key) => (
        <ul key={key}>
          {" "}
          <li key={atm}>{atm}</li>
        </ul>
      ))}
    </div>
  )
}

Atmosphere.propTypes = {
  atmosphere: PropTypes.array.isRequired,
}

Atmosphere.defaultProps = {
  components: "Components are missing",
}
