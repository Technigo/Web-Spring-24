import cors from "cors"
import express from "express"

import reservationsRoutes from "./routes/reservations.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/", reservationsRoutes)

export default app
