export const MovieDetails = ({ movie }) => {
  console.log(movie);
  const { title, backdrop_path, overview } = movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w342/${backdrop_path}`;

  return (
    <div>
      <img src={backgroundImage} alt={overview} />
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  );
};
