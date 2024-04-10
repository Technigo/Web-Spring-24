import { useFavourites } from "../contexts/FavouriteContexts"

const FavouriteList = () => {
  const { favourites } = useFavourites()

  return (
    <div className="favorite-list">
      <h2>Favourite Items</h2>
      <ul style={{ listStyleType: "none" }}>
        {favourites.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FavouriteList
