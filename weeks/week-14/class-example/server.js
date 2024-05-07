import express from "express";
import cors from "cors";
import mongoose from 'mongoose'
// import Flower from './models/Flower' <--- If you want to import models from a separate file

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/flowershop"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const { Schema } = mongoose

// Schema - the blueprint
const flowerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  color: String,
  inStock: {
    type: Boolean,
    default: true
  }
})

// The model
const Flower = mongoose.model('Flower', flowerSchema)

// import the data
import flowerData from "./data/flowers.json"


// Seed the database
if (process.env.RESET_DATABASE) {

  const seedDatabase = async () => {
    console.log('Resetting and seeding')
    await Flower.deleteMany()

    flowerData.forEach(flower => {
      new Flower(flower).save()
    })
  }
  seedDatabase()
}



// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
// http://localhost:8080/
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

// Get all flowers
// http://localhost:8080/flowers
app.get("/flowers", async (req, res) => {

  const allFlowers = await Flower.find()

  if (allFlowers.length > 0) {
    res.json(allFlowers)
  } else {
    res.status(404).send('no flowers was found based on the filters')
  }

})

//
// Fetches all flowers that are in stock
app.get("/flowers/in-stock", async (req, res) => {

  // const flowersInStock = flowerData.filter(flower => flower.inStock)
  const flowersInStock = await Flower.find({ inStock: true }).exec()

  if (flowersInStock.length > 0) {
    res.json(flowersInStock)
  } else {
    res.status(404).send("No flowers in stock at the moment")
  }
})




// Get one flower based on id
// http://localhost:8080/flowers/12 <- for example
app.get("/flowers/:flowerId", async (req, res) => {
  const { flowerId } = req.params

  const flower = await Flower.findById(flowerId).exec()

  if (flower) {
    res.json(flower)
  } else {
    res.status(404).send('no flower was found')
  }
})


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
