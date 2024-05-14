import cors from "cors"
import express from "express"
import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-restaurant-reservations"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

const { Schema, model } = mongoose

const reservationSchema = new Schema({
  guestName: {
    type: String,
    required: true,
    minlength: 4
  },
  guestPhone: {
    type: String,
    required: true,
    minlength: 10
  },
  date: {
    type: Date,
    required: true
  },
  partySize: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  }
})

const Reservation = model("Reservation", reservationSchema)

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!")
})

app.post("/reservations", async (req, res) => {
  const { guestName, guestPhone, date, partySize } = req.body

  try {
    const reservation = await new Reservation({ guestName, guestPhone, date, partySize }).save()

    //Set success status
    res.status(201).json({
      success: true,
      response: reservation,
      message: "Reservation created successfully"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Reservation couldn't be made"
    })
  }
})

console.log(new Date())

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
