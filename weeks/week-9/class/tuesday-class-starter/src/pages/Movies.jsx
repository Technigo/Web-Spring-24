import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../components/movies/MovieCard";
export const Movies = () => {
  const [movies, setMovies] = useState([]);

  // Version 2
  useEffect(() => {
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;
    //console.log(apiEnv);
    //const api = "b8b70837ecdf33d41538d9964f7c8a97";

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setMovies(json.results);
        //console.log(json.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div>
        <h1>List of Movies fetched from an api</h1>
        {/* {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))} */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={
              movie.title.length > 20
                ? `${movie.title.slice(0, 20)}...`
                : movie.title
            }
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </>
  );
};
