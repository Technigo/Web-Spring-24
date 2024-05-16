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

app.get("/reservations", async (req, res) => {
  const reservations = await Reservation.find().sort({ date: "asc" }).limit(3).exec()
  res.json(reservations)
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

app.patch("/reservations/:id", async (req, res) => {
  const { id } = req.params
  // const { newPartySize } = req.body

  try {
    //For updating to a known value
    // const reservation = await Reservation.findByIdAndUpdate(id, { partySize: newPartySize }, { new: true, runValidators: true })
    // const reservation = await Reservation.findByIdAndUpdate(id, { $set: { partySize: newPartySize }  }, { new: true, runValidators: true })
    
    //For incrementing one
    const reservation = await Reservation.findByIdAndUpdate(id, { $inc: { partySize: 1 } }, { new: true, runValidators: true })

    //In the session we tried these two:
    // const reservation = await Reservation.findByIdAndUpdate(id, { partySize: partySize + 1 }, { new: true, runValidators: true })
    // const reservation = await Reservation.findByIdAndUpdate(id, { $set: { partySize: partySize + 1 }  }, { new: true, runValidators: true })
    //This doesn't work because the method `findByIdAndUpdate` doesn't support directly modifying the field in the update document.
    //It's recommended to use the ${inc} operator for increments, but if we for some reason would need to
    //use a condition or in an other way do some more complex logic to determine the increment, we could
    //handle it before calling `findByIdAndUpdate`

    // const currentReservation = await Reservation.findById(id)
    // if (currentReservation) {
    //   const updatedPartySize = currentReservation.partySize + 1 //Now, this is not complex logic, but just to showcase an example
    //   const reservation = await Reservation.findByIdAndUpdate(id, { $set: { partySize: updatedPartySize } }, { new: true, runValidators: true })
    // }

    res.status(200).json({
      success: true,
      response: reservation,
      message: "Party size updated"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Couldn't update party size"
    })
  }
})

app.delete("/reservations/:id", async (req, res) => {
  const { id } = req.params

  try {
    const reservation = await Reservation.findByIdAndDelete(id)

    res.status(200).json({
      success: true,
      response: reservation,
      message: "Deleted reservation successfully"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Couldn't delete reservation"
    })
  }
})

//console.log(new Date())

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
