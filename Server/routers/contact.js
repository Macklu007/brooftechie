const express = require("express")
const router = express.Router()
const { contactUsController } = require("../controler/contactus")

router.post("/contact", contactUsController)

module.exports = router;