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

/* The FavouriteList component retrieves the list of favorite items (favourites) from the context using the useFavourites hook.
It conditionally renders content based on whether there are favorite items in the list.
If there are favorite items (favourites.length > 0), it renders an unordered list (<ul>) containing each favorite item's name with a heart emoji (❤️) in front of it.
If there are no favorite items (favourites.length === 0), it renders a message saying "No faves". */
