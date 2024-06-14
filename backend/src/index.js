import express from "express";
import router from "./routes/route.js";
import mongoose from "mongoose";
import connect from "./db/dbConfig.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const port = process.env.PORT


// Middleware
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))     // HTTP request will show in console
app.disable('x-powerd-by') // Hackers wil not be aware of my stack


// Route
app.get("/", (req, res) => {
    res.status(201).json("Home Page")
})

app.use('/api/v2/users', router)


// Server connected when valid db connected
connect()

.then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening at port: ${port}`)
        })
    } catch (error) {
        console.log("Server connection error!", error)
    }
})

.catch(error => {
    console.log("Invalid databse connection!", error)
})
