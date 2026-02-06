const express=require("express");
const router=express.Router();
const{updateProfile,deleteAccount,getAllUserDetails,updateDisplayPicture,instructorDashboard ,getEnrolledCourses}=require("../controler/Profile");
const{auth,isInstructor}=require("../middleware/auth");
router.put("/updateprofile",auth,updateProfile,);
router.put("/updatepic",auth,updateDisplayPicture);
router.delete("/deleteprofile",auth,deleteAccount);
router.get("/enrolledcourse",auth,getEnrolledCourses);
router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)



module.exports=router;