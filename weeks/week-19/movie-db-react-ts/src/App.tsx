import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";
import { MoviesDatabase } from "./components/MoviesDatabase";
import { Movie } from "./global/types";


// Import environment variable with a specific typing. By default, TypeScript might treat these variables as unknown or any, which reduces type safety. The as type cast in TypeScript is a way to explicitly tell the TypeScript compiler to treat a value as a specific type. 
const apiKey = import.meta.env.VITE_DB_API_KEY as string;
const apiUrl = "https://www.omdbapi.com/";


// Functional component
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");  // useState infers the type from the initial value
  const [movies, setMovies] = useState<Movie[]>([]);  // Explicit type annotation for movies state (array of Movie objects)
  const [error, setError] = useState<string | null>(null);  // Explicit type annotation for error state
  const url = `${apiUrl}?apikey=${apiKey}&s=${searchTerm}`;  // Constructing the URL with TypeScript inferring the types of the constants

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm) {
        setMovies([]);
        return;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          // TypeScript infers data.Search as Movie[] based on setMovies type
          setMovies(data.Search);
          setError(null);
        } else {
          setError(data.Error);
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setMovies([]);
      }
    };

    // delay of 500 milliseconds / half a second
    const timeoutId = setTimeout(fetchMovies, 500);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [searchTerm, url]); // Dependencies for the useEffect hook

  
  // Event handler function for input change with a defined event type
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <MoviesDatabase
      data={movies}
      error={error}
      handleInputChange={handleInputChange}
      searchTerm={searchTerm}
    />
  );
};

export default App