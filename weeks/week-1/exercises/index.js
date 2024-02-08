console.log("Music Festival tickets booth")

alert(
  "Welcome to the Music Festival Concert Slot Reservation. Get ready to choose your favourite music genre."
)

const userName = prompt("Please enter your name")

console.log(userName)

alert(`Hello ${userName}! Let's get started!`)

const musicSelection = parseInt(
  prompt(`
Select your favourite music genre:
1 - Rock
2 - Pop
3 - Electric
Please enter the number of your choice
`)
)

console.log("music selection", musicSelection, typeof musicSelection)
// "1"
// 1

let selectedGenre = ""
// musicSelection === 1 
// true / false

const boolean = true
const anotherBoolean = false

if (musicSelection === 1) {
  // true
  selectedGenre = "Rock"
} else if (musicSelection === 2) {
  selectedGenre = "Pop"
} else if (musicSelection === 3) {
  selectedGenre = "Electronic"
} else {
  alert("Invalid choice, please start again and select an option. Bye 👋")
  exit(1)
}

console.log("selected genre", selectedGenre)
alert(`You chose ${selectedGenre}`)

let concertSlot = ""
let artistNames = []

switch (selectedGenre) {
  case "Rock":
    concertSlot = parseInt(
      prompt(
        `Select a slot for Rock
        1 - The Strokes
        2 - Blink 182
        3 - Pearl Jam
        Please enter the number of your choice:
        `
      )
    )
    artistNames = ["The Strokes", "Blink 182", "Pearl Jam"]
    break

  case "Pop":
    concertSlot = parseInt(
      prompt(
        `Select a slot for Pop
        1 - Rihanna
        2 - Beyonce
        3 - Ariana Grande
        Please enter the number of your choice:
        `
      )
    )
    artistNames = ["Rihanna", "Beyonce", "Ariana Grande"]
    break

  case "Electronic":
    concertSlot = parseInt(
      prompt(
        `Select a slot for Electronic
        1 - Tame Impala
        2 - Björk
        3 - Daft Punk
        Please enter the number of your choice
        `
      )
    )
    artistNames = ["Tame Impala", "Björk", "Daft Punk"]
    break

  default:
    alert("Invalid choice, please start again and select an option. Bye 👋")
    exit(1)
}

console.log("concert slot", concertSlot)

let timeSlot

switch (concertSlot) {
  case 1:
    timeSlot = "18:00"
    break

  case 2:
    timeSlot = "21:00"
    break

  case 3:
    timeSlot = "23:00"
    break

  default:
    alert("Invalid choice, please start again and select an option. Bye 👋")
    exit(1)
}

console.log("time slot", timeSlot)

if (concertSlot === 1) {
  alert(
    `Great choice! You've reserved a spot to see ${artistNames[0]} at ${timeSlot} for the ${selectedGenre} concert!`
  )
} else if (concertSlot === 2) {
  alert(
    `Great choice! You've reserved a spot to see ${artistNames[1]} at ${timeSlot} for the ${selectedGenre} concert!`
  )
} else if (concertSlot === 3) {
  alert(
    `Great choice! You've reserved a spot to see ${artistNames[2]} at ${timeSlot} for the ${selectedGenre} concert!`
  )
}
