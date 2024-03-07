import { Author } from "./Author"
import { BookInfo } from "./BookInfo"
import { Image } from "./Image"
import { Title } from "./Title"

export const Book = ({ book }) => {
  const openUrl = (url) => {
    if (url) {
      window.open(url, "_blank")
    }
    return window.open("https://en.wikipedia.org/wiki/Main_Page", "_blank")
  }

  return (
    <div className="book">
      <Title title={book.title} onClick={() => openUrl(book.url)} />
      <Author author={book.author} />
      <BookInfo
        year={book.year}
        genre={book.genre}
        rating={book.rating}
        description={book.description}
      />
      <Image image={book.image} />
    </div>
  )
}
