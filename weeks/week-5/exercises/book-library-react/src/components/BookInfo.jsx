export const BookInfo = ({ year, genre, rating, description }) => {
  const genres = () => {
    if (Array.isArray(genre)) {
      return genre.map((genreItem) => genreItem).join(", ")
    }
    return genre
  }
  const listOfGenres = genres()

  return (
    <div>
      <p>{year}</p>
      <p>{listOfGenres}</p>
      <p>⭐️ {rating}</p>
      <p className="description">{description}</p>
    </div>
  )
}
