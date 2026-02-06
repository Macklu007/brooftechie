
const exprees=require("express");
const{resetPasswordToken,resetPassword}=require("../controler/resetPassword");
const router =exprees.Router();
const{login,signup,sendotp,changepassword}=require("../controler/auth");
const { auth } = require("../middleware/auth");



router.post("/login",login);
router.post("/signup",signup);
router.post("/sendotp",sendotp);
router.put("/changepassword",auth,changepassword);


router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)



module.exports=router;