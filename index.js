import express from "express"
import cors from "cors"
import Router from "./routes/routes.js"

const app = express()

app
.use(express.json())
.use(cors())
.use(Router)

app.listen(5000, () => {
    console.log("Server running")
})
