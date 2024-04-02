import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Hourglass } from "react-loader-spinner";
import { MovieDetails } from "../components/movies/MovieDetails";

export const MovieInfo = () => {
  const [movie, setMovie] = useState(null); // Initialize movie state as null
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const { id } = useParams();

  useEffect(() => {
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;
    //const api = "b8b70837ecdf33d41538d9964f7c8a97";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiEnv}&language=en-US`;

    const fetchMovies = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        setMovie(json);
        setIsLoading(false); // Set isLoading to false when data is loaded
        // Scroll to the top of the page when data is loaded
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Simulate a 3-second delay before fetching data
    const delay = setTimeout(() => {
      fetchMovies();
    }, 2000);

    // Clean up the timeout on unmount
    return () => clearTimeout(delay);
  }, [id]);

  return (
    <>
      {isLoading && (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      )}
      {!isLoading && movie && <Link to="/movies">Back</Link>}
      {!isLoading && movie && <MovieDetails movie={movie} />}
    </>
  );
};
