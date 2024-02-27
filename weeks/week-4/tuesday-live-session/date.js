//9 ways of creating a new date object
// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

const date = new Date() //now
console.log("Now:", date)

const birthday = new Date("1990-10-06") //date string
console.log("Birthday:", birthday)

const millisecondsSince1970 = Date.now() //Milliseconds since Jan 1, 1970
const dateConstructedFromMilliseconds = new Date(millisecondsSince1970) //Construct date from milliseconds
console.log("dateConstructedFromMilliseconds:", dateConstructedFromMilliseconds)

//get only e.g. hours or day
const hours = date.getHours()
const day = date.getDay()
console.log("Hours:", hours)
console.log("Day:", day)

//Change to e.g. American format
const localeTimeString = date.toLocaleTimeString()
const localeShortTimeString = date.toLocaleTimeString("en-US")
console.log(localeShortTimeString)

//Suggestions for naming branches 👇
// feature/feature-name

// bug-fix/bug-name

// sunrise-sunset-feature
