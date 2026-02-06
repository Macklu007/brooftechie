const express = require("express")
const router = express.Router()
const {
  capturePayment,
  // verifySignature,
  verifyPayment,
  sendPaymentSuccessEmail,
} = require("../controler/payment")
const { auth, isInstructor, isstudent, isAdmin } = require("../middleware/auth")
router.post("/capturePayment", auth, isstudent, capturePayment)
router.post("/verifyPayment", auth, isstudent, verifyPayment)
router.post(
  "/sendPaymentSuccessEmail",
  auth,
  isstudent,
  sendPaymentSuccessEmail
)
// router.post("/verifySignature", verifySignature)

module.exports = router