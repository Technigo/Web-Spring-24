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
  // number = number + 1
  // number += 1
  number++;
  console.log("Number updated:", number);
  count.innerText = number;
};

myButton.addEventListener("click", () => {
  console.log("Button clicked");
  updateCount();
});
// USING 'onclick' INSTEAD OF 'addEventListener' - POTENTIAL SYNTAX ERROR
mySecondButton.onclick = () => {
  console.log("Second button clicked");
  updateCount();
};

///////////////////////////////
// MISSING ARGUMENT WHEN CALLING calculateGrade - POTENTIAL TYPEERROR
const calculateGrade = () => {
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
  // 'output' IS NOT DEFINED - REFERENCEERROR
  output.innerHTML = `<h2>You got ${studentGrade}</h2>`;
};

// 'score' IS NOT DEFINED - REFERENCEERROR
score.addEventListener("change", () => {
  console.log("Score changed");
  const studentScore = score.value;
  console.log("Student score:", studentScore);
  // MISSING ARGUMENT WHEN CALLING calculateGrade - POTENTIAL TYPEERROR
  const studentGrade = calculateGrade();
  console.log(studentGrade);
  updateText(studentGrade);
});

// SYNTAXERROR DUE TO UNCLOSED BRACKET
const myArray = [1, 2, 3;

// 'checkbox' IS NOT DEFINED - REFERENCEERROR
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
  userName = prompt("Hi! What's your name?"); //REASSIGNING THE GLOBAL VARIABLE
  console.log("User greeted:", userName);
  boostUser();

  // const userName = prompt("Hi! What's your name?") //LOCAL VARIABLE
  // boostUser(userName) //PASSING IT AS ARGUMENT (DON'T FORGET TO PICK IT UP AS A PARAM TOO)
};

setTimeout(greetUser, 1500);
