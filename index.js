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

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

