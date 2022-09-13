const asyncHandler = require("express-async-handler")

const getListings = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get property listings" })
})

const createListing = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({ message: "Create property listings" })
})

const updateListing = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update listing ${req.params.id}` })
})

const deleteListing = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete listing ${req.params.id}` })
})

module.exports = {
    getListings,
    createListing,
    updateListing,
    deleteListing,
}
