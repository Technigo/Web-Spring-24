// 1. update array later in the code

/* Let's consider a simple example where you have an array of numbers and you want to add a new number to this array. Instead of directly manipulating the array wherever you need to add a number, you can encapsulate this logic into a separate function. Here's how you can do it: */

// Initialize the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

// Function to add a number to the array
const addNumberToArray = (arr, number) => {
  arr.push(number)
}

console.log("Original array:", numbers)
addNumberToArray(numbers, 1000) // Add 6 to the array
console.log("Updated array:", numbers)

// update object
let userProfile = {
  username: "example_user",
  email: "example@example.com",
}

// Function to update the user profile with additional information
const updateProfile = (profile, newInfo) => {
  // Merge the newInfo object into the profile object
  // Object.assign(profile, newInfo)
  return { ...profile, ...newInfo }
}

// console.log("Original profile:", userProfile);

// Information to be added to the profile
let additionalInfo = {
  age: 30,
  country: "United States",
}

// Update the profile with additional information
userProfile = updateProfile(userProfile, additionalInfo)
// console.log("Updated profile:", userProfile);

// 2 .push() vs .legth

const plants = ["Rose", "Sunflower", "Tulip", "Lavender", "Fern"]
console.log(plants.length)

// 3. params in functions
// parameter = value when defining my function
const greet = (name) => {
  console.log("Hello, " + name + "!")
}

// Call the "greet" function and pass a value "Alice" as the argument for the "name" parameter

// argument is the value passed when you call the function
greet("Alice") // Output: Hello, Alice!

// Call the "greet" function again with a different value
greet("Bob") // Output: Hello, Bob! */

// pass the greet function as callback to the forEach() method applied on people

const people = [
  "Alice",
  "Bob",
  "Nick",
  "Brian",
  "AJ",
  "Howie",
  "Britney",
  "Christina",
]
// people.forEach(greet)

// 4 .map()

/* 
The map() method in programming, particularly in JavaScript, is used to transform each element of an array using a provided function and then returns a new array with the transformed elements. It takes a callbackfunction as param. The callbackFunction is a function that defines the transformation to be applied to each element of the array. This function can take up to three arguments: the current element being processed, the index of the current element, and the array itself.*/

const numbersArray = [1, 2, 3, 4, 5]
// Using map() to double each number
const doubledNumbers = numbersArray.map((number) => {
  // console.log("num", number, "i", index, "[]", array)
  return number * 2
})

console.log("initial array", numbersArray)
console.log("transformed array", doubledNumbers)

/* Return Value: The map() method returns a new array containing the results of applying the provided function to each element of the original array. The original array remains unchanged.

Immutable Operation: It's important to note that map() does not modify the original array; it returns a new array with the transformed elements. This makes it a "pure" function in the sense that it doesn't have side effects on the original data. */

// 5. Remove elements based on first letter on array
//  .filter()

const removeElementsByFirstLetter = (arr, letterToRemove) => {
  return arr.filter(
    // keep only the elements whose first letter, after converting to lowercase, does not match the specified letter
    (element) =>
      element.charAt(0).toLowerCase() !== letterToRemove.toLowerCase()
  )
}

const initialArray = ["Apple", "Banana", "Orange", "Grape", "Kiwi"]
const letterToRemove = "a" // remove elements starting with "A" or "a"
const newArray = removeElementsByFirstLetter(initialArray, letterToRemove)
console.log("arrays", initialArray, newArray)
