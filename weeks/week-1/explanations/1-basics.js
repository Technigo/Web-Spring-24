// JS Basics

// --------------
// --------------
// --------------
// What is Javascript ?

// JavaScript is a programming language that allows web developers to add interactivity and functionality to their websites. It's executed directly in a web browser and enables you to control how elements on a webpage behave and respond to user actions. JavaScript is a crucial tool for creating dynamic and engaging web experiences.

// Why JavaScript?
// JavaScript is essential because it brings websites to life. Without it, web pages would be static and lack interaction. This is done through a concept called a JIT Compiler, which means "Just in Time"

// What is a compiler
// Imagine a compiler as a special tool that turns fancy code made by us programmers into simple instructions that computers can follow. This happens through something called Just-In-Time Compilation, where a browser's engine changes the human-friendly code into a super-efficient version that makes things work better on the computer.

// --------------
// --------------
// --------------
// JS Methods
// In JavaScript, we have something called a "method," which is a builtIn tool that helps us with a specific task. Just like a tool from a toolbox would.
// There are many methods to use in this amazing language, but lets learn them incrementally. For now, the most important part is that methods can be associated to specific data types which we will learn ;)

//  Example of methods

// log()  - registers or logs a message in the console
// alert() - displays a message in the browser
// prompt() - displays a dialog box that prompts the user for input
// length - checks the length of a value

// Your First JS Method

// The all mighty log() method - console.log()
// What is it?

//Its a JavaScript method used to provides a way to log messages, debug code, and test out JavaScript expressions. It's like a command center where developers can see what's happening behind the scenes and diagnose any issues in their code.

// Why do we use it?
// It helps developers understand what's happening in their code by showing information during execution.

// How ?
// Use console.log() and put data inside its parentheses or backticks to see it in the console, aiding debugging and tracking values.

// Using Double Quotes ""
// We use this approach whenever we want to write a "string" to the console :)

console.log("Hello World!")

// Using Backticks `` for string interpolation
// We use this approach whenever we want to write a "string" + expressions to the console :)
// We will use this in the near future to mix both messages/strings and javascripts expressions :)

const firstName = "Antonella"
console.log(firstName)
console.log(`Hello ${firstName}`)

alert("Hello")
prompt("What's your name?")

// Save the value of the input into a variable

const musicSelection = prompt(
  `Select your favourite music genre
  1 - Rock
  2 - Pop
  3 - Electronic
  Please enter the number of your choice.
  `
)

console.log(musicSelection)

let selectedGenre = ""

if (musicSelection === "1") {
  selectedGenre = "Rock"
} else if (musicSelection === "2") {
  selectedGenre = "Pop"
} else if (musicSelection === "3") {
  selectedGenre = "Electronic"
} else {
  alert("Invalid choice, please start again and select an option. Bye 👋")
  exit(1)
}

alert(`You chose ${selectedGenre}`)
