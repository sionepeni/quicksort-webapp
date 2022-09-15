const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const port = process.env.PORT || 4000

require("./config/db")()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/products", require("./routes/listingRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port: ${port}`))
