const express = require("express")
const router = express.Router()
const {
    getListings,
    getSortedProducts,
    getSortedDes,
} = require("../controllers/listingController")

router.route("/").get(getListings)
router.route("/quicksort").get(getSortedProducts)
router.route("/quicksortdes").get(getSortedDes)

module.exports = router
