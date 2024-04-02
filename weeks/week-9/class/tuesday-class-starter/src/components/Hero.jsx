export const Hero = ({ imageUrl }) => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Content inside the Hero component */}
    </div>
  );
};
