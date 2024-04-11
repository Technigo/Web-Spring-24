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

/* 

This code snippet defines a context and provider for managing a list of favorite items in a React application. It also exports a custom hook for consuming the context.

1. Creating Context:

const FavouriteContext = createContext(): This creates a new context object called FavouriteContext. Context objects in React allow for passing data through the component tree without having to pass props down manually at every level.

2. FavouriteProvider Component:

export const FavouriteProvider = ({ children }) => { ... }: This is a provider component responsible for managing the state of the list of favorite items (favourites) and providing it to the components that need it.

const [favourites, setFavourites] = useState([]): This line initializes the state variable favourites as an empty array using the useState hook. It also defines a function setFavourites to update the state.

addToFavourites Function: This function adds an item to the list of favorites. It updates the state by appending the new item to the existing list.

removeFromFavourites Function: This function removes an item from the list of favorites. It updates the state by filtering out the item to be removed.

3. FavouriteContext.Provider: This is the provider component provided by the FavouriteContext. It wraps its children with the context provider and passes down the favourites state and the addToFavourites and removeFromFavourites functions as the context value.
useFavourites Hook:

4. export const useFavourites = () => useContext(FavouriteContext): This is a custom hook called useFavourites. It allows consuming components to access the favourites state and the addToFavourites and removeFromFavourites functions from the context without directly using the FavouriteContext.Consumer component. */
