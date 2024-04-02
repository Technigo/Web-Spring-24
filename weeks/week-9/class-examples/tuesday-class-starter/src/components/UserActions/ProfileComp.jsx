import React, { useState, useEffect } from "react";
import { useBookTheme } from "../../themes/BookTheme"; // Importing the custom hook for accessing book data
import { useUserTheme } from "../../themes/UserTheme";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook from React Router

export const ProfileComp = () => {
  const { books, addBook } = useBookTheme(); // Accessing book data and addBook function

  const { isLoggedIn, userNameStore, emailStore } = useUserTheme(); // Using the custom hook to access user authentication functions

  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" }); // State for new book form
  const [bookBoolean, setBookBoolean] = useState(false);

  const navigate = useNavigate(); // Getting the navigate function from React Router

  const handleBookChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value }); // Update new book data
  };

  const handleAddBook = () => {
    // Check if any of the fields are empty
    if (newBook.title === "" || newBook.author === "" || newBook.year === "") {
      // Display alert to inform the user
      alert(
        "Please fill in all fields (title, author, and year) before adding the book."
      );
    } else {
      // If all fields are filled, proceed with adding the book
      addBook(newBook); // Add new book to the list
      setNewBook({ title: "", author: "", year: "" }); // Clear new book form
      setBookBoolean(true);
    }
  };

  // Effect to check if username exists in localStorage, if not, redirect to login page
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername || !isLoggedIn) {
      navigate("/"); // Redirect to login page if username is not found
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      <h2>Profile</h2>
      <div className="">
        <h4>Welcome back {userNameStore}</h4>
        <p>Your email is {emailStore}</p>
        <p>isLoggedIn Variable {isLoggedIn.toString()}</p>
      </div>
      {bookBoolean && (
        <div className="login">
          <h4>
            Thank you for submitting another book, od you want to add more?{" "}
          </h4>
          <button onClick={() => setBookBoolean(false)}>Click Here</button>
        </div>
      )}
      {!bookBoolean && (
        <div className="login">
          <h4>Add A Book</h4>
          {/* Add new book form */}
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleBookChange}
          />

          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleBookChange}
          />

          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={newBook.year}
            onChange={handleBookChange}
          />

          <button onClick={handleAddBook}>Add Book</button>
        </div>
      )}

      {/* Displaying books */}
      <div className="book-card">
        <p>Books:</p>
        <ul>
          {books.map((book, index) => (
            <li
              key={index}
            >{`${book.title} by ${book.author}, ${book.year}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
