const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const mongodb = require("mongodb")
const config = require("../db")
const connectDB = require("./config/db2")
const port = process.env.PORT || 4000

require("./config/db")()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/listings", require("./routes/listingRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port: ${port}`))
