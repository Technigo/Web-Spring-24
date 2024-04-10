import { createContext, useContext, useState } from "react"

const FavouriteContext = createContext()

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const addToFavourites = (item) => {
    setFavourites([...favourites, item])
  }

  const removeFromFavourites = (itemToRemove) => {
    setFavourites(favourites.filter((item) => item !== itemToRemove))
  }

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  )
}

export const useFavourites = () => useContext(FavouriteContext)
