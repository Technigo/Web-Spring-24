import express from "express";
import cors from "cors";

// import the data
import flowerData from "./data/flowers.json"

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
app.get("/flowers", (req, res) => {

  let filterFlowers = [...flowerData]


  // query for a flower name
  const nameSearch = req.query.name
  if (nameSearch) {
    filterFlowers = filterFlowers.filter(flower => flower.name.toLowerCase().includes(nameSearch.toLowerCase()))
  }

  // query for a flower color
  const colorSearch = req.query.color
  if (colorSearch) {
    filterFlowers = filterFlowers.filter(flower => flower.color.toLowerCase() === colorSearch.toLowerCase())
  }

  if (filterFlowers.length > 0) {
    res.json(filterFlowers)
  } else {
    res.status(404).send('no flowers was found based on the filters')
  }


})

//
// Fetches all flowers that are in stock
app.get("/flowers/in-stock", (req, res) => {
  const flowersInStock = flowerData.filter(flower => flower.inStock)

  if (flowersInStock.length > 0) {
    res.json(flowersInStock)
  } else {
    res.status(404).send("No flowers in stock at the moment")
  }
})




// Get one flower based on id
// http://localhost:8080/flowers/12 <- for example
app.get("/flowers/:flowerId", (req, res) => {
  const { flowerId } = req.params

  const flower = flowerData.find(flower => +flowerId === flower.id)

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
