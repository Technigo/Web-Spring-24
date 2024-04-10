import { useFavourites } from "../contexts/FavouriteContext"


const FavouriteList = () => {
  const { favourites } = useFavourites()

  return (
    <div className="favorite-list">
      <h2>Favourite Items</h2>
      {favourites.length > 0 ? (
        <ul style={{ listStyleType: "none" }}>
          {favourites.map((item, index) => (
            <li key={index}>❤️ {item.name}</li>
          ))}
        </ul>
      ) : (
        <ul style={{ listStyleType: "none" }}>No faves</ul>
      )}
    </div>
  )
}

export default FavouriteList
