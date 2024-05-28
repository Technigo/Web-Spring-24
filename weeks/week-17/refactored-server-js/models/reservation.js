import mongoose from "../config/database.js"

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

export default Reservation
