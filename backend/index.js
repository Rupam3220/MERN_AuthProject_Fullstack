import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`)
})