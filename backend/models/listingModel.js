const mongoose = require("mongoose")
const Schema = mongoose.Schema

// List all attributes needed for front-end form.

const listingSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        Price: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: false,
        },
    },
    // disabling __v key from db
    { versionKey: false }
)

const Listing = mongoose.model("List", listingSchema)
module.exports = Listing
