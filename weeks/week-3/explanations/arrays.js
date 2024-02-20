// arrays
console.log("let's talk about arrays!")

// An array is a data structure that stores a collection of elements.
// You can declare an array using the square brackets [] notation.

// empty array
const emptyArray = []

// array of numbers

const numberArray = [2, 4, 6, 8]

// array of strings

const stringArray = ["eat", "work", "sleep"]

// array with mixed data types
const mixedArray = ["work", "exercise", 1, true]

// ACCESS
// You can access elements in an array using their index. The index starts at 0 for the first element.
const team = ["Nella", "Poya", "Matilda", "Diego"]
console.log(team[1])
console.log(team[3])

// MODIFY
// You can modify elements in an array by assigning a new value to a specific index.

const animals = ["cat", "dog", "shark", "elephant", "squirrel"]
animals[2] = 10
console.log(animals)
console.log(animals.length)

// ITERATE
// You can iterate over an array using loops, such as the for loop or the for of loop.

// Using for of loop:

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
]

// increment
for (let i = 0; i < planets.length; i++) {
  console.log(`My favourite planet it ${planets[i]}`)
}

// decrement
for (let count = 10; count > 0; count--) {
  console.log(count)
}

/* In this example, the for...of loop iterates over each element in the array. 
On each iteration, the element variable takes the value of the current 
array element, and it is printed using console.log(element). 
This loop simplifies the syntax compared to the traditional for loop,
as you don't need to explicitly use the index to access each element. */

for (let element of planets) {
  console.log(`${element} looped using for()`)
}

// forEach()  executes a provided function once for each array element.

planets.forEach(function (element) {
  console.log(`${element} looped using forEach()`)
})

// Iterate and modify objects in the array
const people = [
  { name: "Sam", age: 30 },
  { name: "Sarah", age: 25 },
]

people.forEach((person) => {
  person.age += 1
  person.name = person.name.toUpperCase()
})

console.log("people", people)

/* In summary, choose for loops when you need more control or performance optimization, and use forEach for cleaner and more concise code, especially when working with arrays and simple iteration tasks. Ultimately, the choice depends on your specific requirements, coding style, and performance considerations. */

// ADD ELEMENTS
// You can add elements to an array using various methods.
// The push() method adds elements to the end of an array.

// For example:
const famousActors = [
  "Tom Hanks",
  "Leonardo DiCaprio",
  "Jennifer Lawrence",
  "Denzel Washington",
  "Cate Blanchett",
  "Brad Pitt",
  "Johnny Depp",
]

famousActors.push("Emma Stone")
console.log("famous actors", famousActors)

// REMOVE
// The pop() method removes the last element from an array.
const presidents = [
  "George Washington",
  "Donald Trump",
  "John F. Kennedy",
  "Barack Obama",
]

presidents.pop()
console.log("presidents", presidents)

// CHECK PRESENCE
/* You can check if an element exists in an array using the includes() method or indexOf() method.
The includes() method returns true if the element exists, and false otherwise.
The indexOf() method returns the index of the element if found, and -1 otherwise. */

const stars = ["Sirius", "Vega", "Polaris", "Proxima Centauri", "Sun"]

console.log(stars.includes("Sirius"))
console.log(stars.includes("Polaris"))
console.log(stars.indexOf("Polaris"))
console.log(stars.indexOf(6))

// SORT
/* You can sort the elements of an array using the sort() method.
The sort() method sorts the elements alphabetically or numerically. */

const numbers = [3, 1, 2, 5, 4]
numbers.sort()
console.log(numbers)

console.log(stars.sort())

const random = [3, 1, 6, 2, 8]
random.sort((a, b) => a - b)
console.log("sort ascending", random)

random.sort((a, b) => b - a)
console.log("sort descending", random)

// FIND INDEX
// You can find the index of the first occurrence of an element in an array using the indexOf() method.

const foodArray = ["Pizza", "Burger", "Sushi", "Pasta", "Tacos"]
let index = foodArray.indexOf("Sushi")
console.log("index", index)

// OTHER METHODS
// Array.filter()
// Returns a new array with all elements that pass the test implemented by the provided function.

const cities = ["Paris", "Rome", "Stockholm", "London"]
console.log(
  "city",
  cities.filter((city) => city === "Stockholm")
)

// Array.reduce()
// The reduce() method in JavaScript is used to reduce an array to a single value. It iterates over each element of the array and applies a function that you provide, accumulating a single result.

// What is a callback function? is a function that is passed as an argument to another function and is executed after some operation has been completed.

const array = [1, 2, 3, 4]

const total = array.reduce((accumulator, currentValue) => {
  console.log("reduce method", accumulator, currentValue)
  return accumulator + currentValue
})

console.log("total", total)

// In this case, it calculates 1 + 2 + 3 + 4, resulting in 10.

// another way

// Array.splice()
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

// replace removed value
const myArray = [1, 2, 3, 4, 5]

const indexToRemove = 1
const numberOfItemsToRemove = 1

myArray.splice(indexToRemove, numberOfItemsToRemove, 6)
console.log("splice", myArray)
