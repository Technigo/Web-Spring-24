import cors from "cors"
import express from "express"
import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-events"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

const { Schema, model } = mongoose

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4
  },
  date: {
    type: Date,
    required: true
  },
  isVirtual: {
    type: Boolean,
    default: false
  },
  typeOfEvent: {
    type: String,
    enum: ["music", "tech", "other"],
    default: "other"
  }
})

// console.log(new Date())

const Event = model("Event", eventSchema)

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!")
})

app.post("/events", async (req, res) => {
  const { name, date, isVirtual, typeOfEvent } = req.body

  try {
    const event = await new Event({ name, date, isVirtual, typeOfEvent }).save()

    res.status(201).json({
      success: true,
      response: event,
      message: "Event created"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Event couldn't be created"
    })
  }
})

app.patch("/events/:id", async (req, res) => {
  const { id } = req.params

  const { newName } = req.body

  try {
    const event = await Event.findByIdAndUpdate(id, { name: newName }, { new: true, runValidators: true })

    res.status(200).json({
      success: true,
      response: event,
      message: `Event name updated to ${newName}`
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Event name could not be updated"
    })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
