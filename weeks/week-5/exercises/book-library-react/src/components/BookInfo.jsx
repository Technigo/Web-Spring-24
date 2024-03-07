export const BookInfo = ({ year, genre, rating, description }) => {
  return (
    <div>
      <p>{year}, {genre}</p>
      <p>⭐️ {rating}</p>
      <p className="description">{description}</p>
    </div>
  )
}
