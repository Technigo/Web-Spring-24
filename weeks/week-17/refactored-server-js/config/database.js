import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-restaurant-reservations"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

export default mongoose
