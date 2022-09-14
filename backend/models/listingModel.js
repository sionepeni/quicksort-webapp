const mongoose = require("mongoose")
const Schema = mongoose.Schema

// List all attributes needed for front-end form.

const listingSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        style: {
            type: String,
            required: false,
        },
        color: {
            type: String,
            required: false,
        },
    },
    // disabling __v key from db
    { versionKey: false }
)

const Listing = mongoose.model("List", listingSchema)
module.exports = Listing
