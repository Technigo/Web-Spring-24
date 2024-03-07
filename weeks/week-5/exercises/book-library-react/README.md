# Instructions

## Books library

Let's create the book library in React!

## 📚 How to use the books data & construct your components 🤓

In the `/src/data.json`, we've included a data object contains some books data. You can `import` this JSON file into a component using `import data from './data.json'` (which we've already done for you in the App component).

The result of importing the JSON is a variable called `data` which includes the full JSON object. Your task is to use this, along with `.map()` to mount an 'Book' component for each book. Your app could have a structure like this:

- `App` component which has the `data`
  - `Book` component which is rendered using `.map()` and which you pass the book data into using props.
    - `Title` component
    - `Author` component
    - `BookInfo` component
    - `Image` component

This is just a suggestion - how you decide to structure your components is completely up to you.

## Folder Structure

- App.jsx - (Parent Component) - 🍿 Provided in Boiler Plate 🍿
- Header.jsx - (Child Component of App.jsx) - 🤓 Not Provided, to be created 🤓
- Book.jsx - (Child Component of App.jsx) - 🤓 Not Provided, to be created 🤓
  - Title.jsx - (Child Component of Book.jsx) - 🤓 Not Provided, to be created 🤓
  - Author.jsx - (Child Component of Book.jsx) - 🤓 Not Provided, to be created 🤓
  - BookInfo.jsx - (Child Component of Book.jsx) - 🤓 Not Provided, to be created 🤓
    - In the `BookInfo` component you should display the following props:
    - `year` prop
    - `genre` prop
    - `rating` prop
    - `description` prop
  - CoverImage.jsx - (Child Component of Book.jsx) - 🤓 Not Provided, to be created 🤓

## Want a challenge?

Find a link for every book on Amazon, create a new pair of key/value to store the url value in the `data.json` file, finally pass the link into the Book component as a prop to be redirected to Amazon and see the book.

###
