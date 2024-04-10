## Add a functionality to add each item to your favourites:

1.  ### In the file called `FavouriteContext.jsx`, containing the `Context`, the `Provider` and `custom hook`:

- add the necessary imports to create a context
- create a context to store the favourite items
- create an exportable provider and define the logic to add and remove an item from favourites. Don't forget to pass the data that needs to be consume in the external components to the value={{}} prop!
- create and export the hook to use the favourites context in other parts of the app as needed

2.  ### In the component `FavouritesList.jsx`:

- import the hook to access the global state with favourite items data
- create a component that renders the list of favourite items
- use the data from global state to manipulate the favourite items to display

3.  ### In the App.jsx file:

- Add the component rendering the list of favourite items

4.  ### In the main.jsx file:

- wrap the app with the new created favourites provider

Happy Coding! 🤓✌️