import express from "express"
import cors from "cors"
import Router from "./routes/routes.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app
.use(express.json())
.use(cors())
.use(Router)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

