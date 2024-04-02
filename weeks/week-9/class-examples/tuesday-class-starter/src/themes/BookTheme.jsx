import React, { createContext, useContext, useState } from "react";

// Creating a new context for books and storing it in the BookContext variable
const BookContext = createContext();

// Defining a context provider component named 'BookProvider'
export const BookProvider = ({ children }) => {
  // Using useState to initialize and manage book data
  const [books, setBooks] = useState([
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
  ]);

  // Function to add a new book to the array
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Returning the provider component to make the 'books' array and 'addBook' function available to child components
  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};

// Defining a custom hook named 'useBook' to provide an easier way to access the BookContext
export const useBookTheme = () => useContext(BookContext);
