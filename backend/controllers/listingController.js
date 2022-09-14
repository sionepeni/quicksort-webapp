const asyncHandler = require("express-async-handler")

const Listing = require("../models/listingModel")

const getListings = asyncHandler(async (req, res) => {
    const listings = await Listing.find()
    res.status(200).json(listings)
})

const createListing = asyncHandler(async (req, res, next) => {
    const listing = new Listing({
        name: req.body.name,
        style: req.body.style,
    })
    listing
        .save()
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((err) => {
            console.log(err.message)
        })
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
