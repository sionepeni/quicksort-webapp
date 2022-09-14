const express = require("express")
const router = express.Router()
const {
    getListings,
    createListing,
    updateListing,
    deleteListing,
} = require("../controllers/listingController")

router.route("/").get(getListings)
router.route("/").post(createListing)

router.route("/:id").delete(deleteListing).put(updateListing)

module.exports = router
