const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const port = process.env.PORT || 5000
const cors = require("cors")

require("./config/db")()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/products", require("./routes/listingRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port: ${port}`))
