import "./App.css"
import { Book } from "./components/Book"
import { Header } from "./components/Common/Header"
import data from "./data.json"

const App = () => {
  const { books } = data

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        {books.map((book, index) => {
          console.log(book)
          return <Book book={book} key={index} />
        })}
      </div>
    </div>
  )
}

export default App
