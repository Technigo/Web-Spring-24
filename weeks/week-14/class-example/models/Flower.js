import mongoose from "mongoose";

const { Schema } = mongoose;

// Schema - the blueprint
export const flowerSchema = new Schema({
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

// Create a Mongoose model named 'Flower' based on the 'flowerSchema' for the 'Flower' collection
// This model is used to interact with the "Flower" collection in the MongoDB database. It allows you to perform CRUD operations on documents in that collection and provides methods for data validation based on the schema.
export const Flower = mongoose.model("Flower", flowerSchema);