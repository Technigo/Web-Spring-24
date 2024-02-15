// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat")
const inputWrapper = document.getElementById("input-wrapper")
const helpButton = document.getElementById("helpButton")

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
   // The if statement checks if the sender is the user and if that's the case it inserts
   // an HTML section inside the chat with the posted message from the user
   if (sender === "user") {
      console.log(`The sender is:`, sender)
      chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
      // The else if statement checks if the sender is the bot and if that's the case it inserts
      // an HTML section inside the chat with the posted message from the bot
   } else if (sender === "bot") {
      console.log(`The sender is: ${sender}`)
      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
   }

   // This little thing makes the chat scroll to the last message when there are too many to
   // be shown in the chat box
   chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation

const handleUserAge = (userAge) => {
  showMessage(`I'm ${userAge} old`, "user")
  inputWrapper.innerHTML = `<button type="button" id="myButton">Click me!</button>`

  const myButton = document.getElementById("myButton")
  myButton.addEventListener("click", () => console.log("Clicked button"))
}

const greetUser = (e) => {
  e.preventDefault()
  showMessage("Welcome to PlantBot. My name is Palm! What's your name?", "bot")  
  handleUserAge(33)
}

const calculateUserAge = (userAge) => {
  const newAge = userAge + 1
  return newAge
}

const ageInAYear = calculateUserAge(33)
console.log(ageInAYear)

// Eventlisteners goes here 👇
helpButton.addEventListener("click", (event) => greetUser(event))



// let style //global variable

// document
// .getElementById("style-choice")
// .addEventListener("change", (event) => {
//   style = event.target.value
//   showMessage(`I would like a ${style} cut!`, "user")
//   handleStyle()
// })