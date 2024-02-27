//https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key

const BASE_URL = "htt://www.dictionaryapi.com/api/v3/references/thesaurus/json/"
const API_KEY = "1b5c3473-b930-4d32-a959-4b6be1c72f42" //query param
const word = "conundrum" //path param

const URL = `${BASE_URL}${word}?key=${API_KEY}`

//DOM Selectors
const wordTitle = document.getElementById("word")
const type = document.getElementById("type")
const explanation = document.getElementById("explanation")
const synonymsList = document.getElementById("syn")
const errorDiv = document.getElementById("error")

const updateHTML = (data) => {
  const wordChoice = data[0].hwi.hw
  const wordType = data[0].fl
  const shortDef = data[0].shortdef[0]
  const synonyms = data[0].meta.syns[0]

  wordTitle.innerText = wordChoice
  type.innerText = wordType
  explanation.innerText = shortDef

  synonyms.forEach(synonym => {
    synonymsList.innerHTML += `
      <li>${synonym}</li>
    `
  })
}

const fetchWord = () => {
  fetch(URL)
    .then(response => response.json())
    .then(data => updateHTML(data))
    .catch(error => {
      console.log(error)
      errorDiv.innerText = "Something went wrong"
    })
}

fetchWord()
