import { Movie } from "../global/types";
import "./MoviesDatabase.css";

// Interface defining the shape of the props expected by the MoviesDatabase component
interface MoviesDatabaseProps {
  data: Movie[]; // An array of Movie objects
  error: string | null; // A string or null, representing any error message
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // a function that had a prop and returns no value
  searchTerm: string; // The current search term
}

// Functional component with explicit props type
export const MoviesDatabase: React.FC<MoviesDatabaseProps> = ({
  data,
  error,
  handleInputChange,
  searchTerm,
}) => {

  const handleMovieItemClick = (imdbID: string) => {
    window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
  };

  return (
    <div className="movie-database-container">
      <h1>🎥 Movie Database 🍿</h1>
      <h3>
        An app built in React - TypeScript fetching data from{" "}
        <a href="https://www.omdbapi.com/" target="_blank" className="link">
          OMDb
        </a>{" "}
        API{" "}
      </h3>
      <input
        type="text"
        value={searchTerm} // searchTerm is inferred as string
        onChange={handleInputChange} // handleInputChange has a defined type for event
        placeholder="Search for movies..."
        className="search-input"
      />
      {error && <p>{error}</p>} {/* error can be a string or null */}
      <div className="movie-list">
        {data.map(({ imdbID, Title, Year, Poster }) => {
          const poster = Poster !== "N/A" ? Poster : "./no-poster.svg";
          return (
            <div
              key={imdbID} // Each movie item requires a unique key
              className="movie-item"
              onClick={() => handleMovieItemClick(imdbID)}
            >
              <h2 className="title">{Title}</h2>
              <p>{Year}</p>
              <img src={poster} alt={Title} className="poster" />
            </div>
          );
        })}
      </div>
    </div>
  );
};


/* 
React typings give you the proper equivalent of each event you might be familiar with from standard DOM:

Events supported are: AnimationEvent, ChangeEvent, ClipboardEvent, CompositionEvent, DragEvent, FocusEvent, FormEvent, KeyboardEvent, MouseEvent, PointerEvent, TouchEvent, TransitionEvent, WheelEvent. As well as SyntheticEvent, for all other events.
 */

export function MovieDatabaseTwo({ 
    data,
    error,
    handleInputChange,
    searchTerm
  }: {
    data: Movie[],
    error: string | null,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    searchTerm: string 
  }) {

  const handleMovieItemClick = (imdbID: string) => {
    window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
  };

  return (
    <div className="movie-database-container">
      <h1>🎥 Movie Database 🍿</h1>
      <h3>
        An app built in React - TypeScript fetching data from{" "}
        <a href="https://www.omdbapi.com/" target="_blank" className="link">
          OMDb
        </a>{" "}
        API{" "}
      </h3>
      <input
        type="text"
        value={searchTerm} // searchTerm is inferred as string
        onChange={handleInputChange} // handleInputChange has a defined type for event
        placeholder="Search for movies..."
        className="search-input"
      />
      {error && <p>{error}</p>} {/* error can be a string or null */}
      <div className="movie-list">
        {data.map(({ imdbID, Title, Year, Poster }) => {
          const poster = Poster !== "N/A" ? Poster : "./no-poster.svg";
          return (
            <div
              key={imdbID} // Each movie item requires a unique key
              className="movie-item"
              onClick={() => handleMovieItemClick(imdbID)}
            >
              <h2 className="title">{Title}</h2>
              <p>{Year}</p>
              <img src={poster} alt={Title} className="poster" />
            </div>
          );
        })}
      </div>
    </div>
  );
}


export function MovieDatabaseThree(props: { 
  data: Movie[],
  error: string | null,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  searchTerm: string 
}) {

  const {data, error, handleInputChange, searchTerm} = props

const handleMovieItemClick = (imdbID: string) => {
  window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
};

return (
  <div className="movie-database-container">
    <h1>🎥 Movie Database 🍿</h1>
    <h3>
      An app built in React - TypeScript fetching data from{" "}
      <a href="https://www.omdbapi.com/" target="_blank" className="link">
        OMDb
      </a>{" "}
      API{" "}
    </h3>
    <input
      type="text"
      value={searchTerm} // searchTerm is inferred as string
      onChange={handleInputChange} // handleInputChange has a defined type for event
      placeholder="Search for movies..."
      className="search-input"
    />
    {error && <p>{error}</p>} {/* error can be a string or null */}
    <div className="movie-list">
      {data.map(({ imdbID, Title, Year, Poster }) => {
        const poster = Poster !== "N/A" ? Poster : "./no-poster.svg";
        return (
          <div
            key={imdbID} // Each movie item requires a unique key
            className="movie-item"
            onClick={() => handleMovieItemClick(imdbID)}
          >
            <h2 className="title">{Title}</h2>
            <p>{Year}</p>
            <img src={poster} alt={Title} className="poster" />
          </div>
        );
      })}
    </div>
  </div>
);
}