import { Link } from "react-router-dom";
import "./MovieCard.css"; // Import the CSS file

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <article className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
        <div className="">
          <p>Released {release_date}</p>
          <h2>{title}</h2>
        </div>
      </article>
    </Link>
  );
};
