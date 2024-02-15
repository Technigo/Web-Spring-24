//DOM selectors
const myButton = document.getElementById("myButton");
const mySecondButton = document.getElementById("mySecondButton");
const count = document.getElementById("count");
const score = document.getElementById("score");
const output = document.getElementById("output");
console.log(myButton, mySecondButton, count, score, output);

const checkbox = document.getElementById("checkbox");

//Global variables
let number = 0;
let userName = "";

const updateCount = () => {
  //number = number + 1
  //number += 1
  number++;
  console.log("Number updated:", number);
  count.innerText = number;
};

myButton.addEventListener("click", () => {
  console.log("Button clicked");
  updateCount();
});
mySecondButton.onclick = () => {
  console.log("Second button clicked");
  updateCount();
};

///////////////////////////////
const calculateGrade = (score) => {
  if (score >= 90) {
    console.log("Score is greater than or equal to 90");
    return "A";
  } else if (score >= 50) {
    console.log("Score is greater than or equal to 50");
    return "B";
  } else {
    console.log("Score is less than 50");
    return "C";
  }
};

const updateText = (studentGrade) => {
  console.log("Updating text with student grade:", studentGrade);
  output.innerHTML = `<h2>You got ${studentGrade}</h2>`;
};

score.addEventListener("change", () => {
  console.log("Score changed");
  const studentScore = score.value;
  console.log("Student score:", studentScore);
  const studentGrade = calculateGrade(studentScore);
  console.log(studentGrade);
  updateText(studentGrade);
});

//score.addEventListener("change", calculateGrade) //without argument
//score.addEventListener("change", () => calculateGrade(argument)) //with argument

checkbox.onchange = () => {
  if (checkbox.checked) {
    console.log("checked");
  } else {
    console.log("not checked");
  }
};

/////////////////////////
const boostUser = () => {
  console.log(`You rock, ${userName}`);
};

const greetUser = () => {
  userName = prompt("Hi! What's your name?"); //reassigning the global variable
  console.log("User greeted:", userName);
  boostUser();

  // const userName = prompt("Hi! What's your name?") //local variable
  // boostUser(userName) //passing it as argument (don't forget to pick it up as a param too)
};

setTimeout(greetUser, 1500);
