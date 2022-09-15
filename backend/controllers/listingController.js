const asyncHandler = require("express-async-handler")
const Quicksort = require("../functions/Quicksort")
const QuicksortDes = require("../functions/QuicksortDes")

const Listing = require("../models/listingModel")

const getListings = asyncHandler(async (req, res) => {
    const listings = await Listing.find({}, { _id: 0 })
    res.status(200).json(listings)
})

const getSortedProducts = asyncHandler(async (req, res) => {
    const listings = await Listing.find({}, { _id: 0 })
    let sorted = Quicksort(listings)
    res.status(200).json(sorted)
})

const getSortedDes = asyncHandler(async (req, res) => {
    const listings = await Listing.find({}, { _id: 0 })
    let sorted = QuicksortDes(listings)
    res.status(200).json(sorted)
})

module.exports = {
    getListings,
    getSortedProducts,
    getSortedDes,
}
