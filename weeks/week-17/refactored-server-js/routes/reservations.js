import express from "express"

import Reservation from "../models/reservation.js"

const router = express.Router()

// Start defining your routes here
router.get("/", (req, res) => {
  res.send("Hello Technigo!")
})

router.get("/reservations", async (req, res) => {
  const reservations = await Reservation.find().sort({ date: "asc" }).limit(3).exec()
  res.json(reservations)
})

router.post("/reservations", async (req, res) => {
  const { guestName, guestPhone, date, partySize } = req.body

  try {
    const reservation = await new Reservation({ guestName, guestPhone, date, partySize }).save()

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

router.patch("/reservations/:id", async (req, res) => {
  const { id } = req.params

  try {
    const reservation = await Reservation.findByIdAndUpdate(id, { $inc: { partySize: 1 } }, { new: true, runValidators: true })

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

router.delete("/reservations/:id", async (req, res) => {
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

export default router
