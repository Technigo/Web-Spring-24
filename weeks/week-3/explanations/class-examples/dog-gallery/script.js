// Define an array of dog objects with information about each dog.
const DOGS = [
  {
    name: "Lily",
    img: "assets/dog1.jpg",
    fur: "brown",
    puppy: false,
  },
  {
    name: "Axel",
    img: "assets/dog2.jpg",
    fur: "beige",
    puppy: false,
  },
  {
    name: "Cecilia",
    img: "assets/dog3.jpg",
    fur: "beige",
    puppy: true,
  },
  {
    name: "Mario",
    img: "assets/dog4.jpg",
    fur: "brown",
    puppy: false,
  },
  {
    name: "Luigi",
    img: "assets/dog5.jpg",
    fur: "white",
    puppy: true,
  },
  {
    name: "Flora",
    img: "assets/dog6.jpg",
    fur: "grey",
    puppy: true,
  },
  {
    name: "Zeus",
    img: "assets/dog7.jpg",
    fur: "black",
    puppy: false,
  },
]

// Initialize an empty array to store favorite dogs.
const faveDogs = []

// Get references to HTML elements using their IDs.
const container = document.getElementById("container")
const favorites = document.getElementById("favorites")
const filterDropdown = document.getElementById("filterDropdown")
const sortAtoZ = document.getElementById("az")
const sortZtoA = document.getElementById("za")
const randomButton = document.getElementById("")
// Function to load and display the list of dogs.

//using .forEach()
/* forEach() method doesn't return anything (or more precisely, it returns undefined). Therefore, when you assign container.innerHTML to the result of dogArray.forEach(...), it's effectively setting container.innerHTML to undefined, which clears the content of the container. */

const loadDogs = (dogArray) => {
  // clears the content of the HTML container element with the id container. This ensures that when the loadDogs function is called, any previously loaded content in the container is removed before the new content is added.
  container.innerHTML = ""

  dogArray.forEach((dog) => {
    container.innerHTML += `
    <div class="card">
      <p>${dog.name}</p>
      <button onclick="addToFaves('${dog.name}')">Add to favories</button>
      <img src=${dog.img} art=${dog.name}>
      <p>${dog.puppy ? "PUPPY" : ""}</p>
    </div>
      `
  })
}

// using map()

/* const loadDogs = (dogArray) => {
  container.innerHTML = dogArray
    .map(
      (dog) => `
    <div class="card">
      <p>${dog.name}</p>
      <button onclick="addToFaves('${dog.name}')">Add to favorites</button>
      <img src="${dog.img}" alt="${dog.name}">
      <p>${dog.puppy ? "PUPPY" : ""}</p>
    </div>
  `
    )
    // map returns an array, and if you want to convert that array into a single string of HTML content, you need to use join("") to concatenate all the elements of the array into one string.

   .join("")
}
 */
// Function to filter and display dogs based on fur color.
const filterDogs = () => {
  // Get the selected value from the filter dropdown.
  const value = filterDropdown.value

  if (value === "all") {
    loadDogs(DOGS)
  } else {
    // Otherwise, filter dogs based on fur color and load the filtered list.
    const filteredList = DOGS.filter((dog) => dog.fur === value)

    loadDogs(filteredList)
  }
}

// Function to add a dog to the list of favorite dogs.
const addToFaves = (dog) => {
  // Push the dog's name to the favorite dogs array.
  faveDogs.push(dog)
  // Update the display of favorite dogs.
  loadFaves()
}

// Function to display the list of favorite dogs.

const loadFaves = () => {
  // Clear the favorites element's content.
  favorites.innerHTML = ""
  // Iterate through the favorite dogs array and display their names.
  faveDogs.forEach((dog) => {
    favorites.innerHTML += ` <p>${dog}</p>`
  })
}

// sort dogs alphabetically

const sortDogsAtoZ = () => {
  const sortedDogs = [...DOGS].sort((a, b) => a.name.localeCompare(b.name))
  loadDogs(sortedDogs)
}

const sortDogsZtoA = () => {
  const sortedDogs = [...DOGS].sort((a, b) => b.name.localeCompare(a.name))
  loadDogs(sortedDogs)
}

sortAtoZ.addEventListener("click", sortDogsAtoZ)
sortZtoA.addEventListener("click", sortDogsZtoA)

const getRandomValue = () => {
  container.innerHTML = ""

  DOGS[Math.floor(Math.random() * DOGS.length)]
  const dog = DOGS[Math.floor(Math.random() * DOGS.length)]

  container.innerHTML += `
  <div class="card">
    <p>${dog.name}</p>
    <button onclick="addToFaves('${dog.name}')">Add to favorites</button>
    <img src=${dog.img} art=${dog.name}>
    <p>${dog.puppy ? "puppy" : ""}</p>
  </div>
  `
}

random.addEventListener("click", getRandomValue)

// Apply the filter when the user changes the dropdown selection.
filterDropdown.addEventListener("change", filterDogs)
// Load the initial list of dogs when the page loads.
loadDogs(DOGS)
