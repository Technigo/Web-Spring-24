import PropTypes from "prop-types"

export const Description = ({ description }) => {
  return (
    <div>
      <span>Description:</span>
      {description}
    </div>
  )
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
}

Description.defaultProps = {
  description: "Description is missing",
}
