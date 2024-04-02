import { Link } from "react-router-dom";
export const RandomErrorComp = () => {
  // Function to generate a random string
  const generateRandomString = () => {
    return Math.random().toString(36).substring(7);
  };

  // Generate a random string
  const errorMessage = generateRandomString();
  return (
    <>
      <div className="not-found">
        <h6>Error Page</h6>
        <p>The current geenrated string equals = {errorMessage}</p>
        <Link to={`/page-not-found`}>
          Click here to force an not found page
        </Link>
      </div>
    </>
  );
};
