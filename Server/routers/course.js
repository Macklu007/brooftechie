const express=require("express");
const router=express.Router();
const {
  createRating,
  getAverageRating,
  getAllRatingReview,
} = require("../controler/RatingAndReview")

const{createCourse,editCourse,getAllCourses ,getInstructorCourses, deleteCourse,getCourseDetails,getFullCourseDetails}=require("../controler/course");
const {auth,isstudent,isInstructor,issAdmin}=require("../middleware/auth");
const{createCategory,showAllCategories,categoryPageDetails }=require("../controler/category");
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controler/section");

const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controler/subSection")

const{updateCourseProgress}=require("../controler/courseprogess")





router.post("/addSection", auth, isInstructor, createSection);
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection);
// Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection);
// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.get("/getInstructorCourses",auth,isInstructor,getInstructorCourses);



router.post("/createcategory" ,auth,issAdmin,createCategory);
router.get("/showcategory" ,showAllCategories);
router.post("/course/getCategoryPageDetails" ,categoryPageDetails);






router.post("/createcourse",auth,isInstructor,createCourse);
router.post("/editcourse",auth,isInstructor,editCourse);
router.get("/getallcourse",auth,isInstructor,getAllCourses );
router.delete("/deletecourse",auth,isInstructor,deleteCourse)
router.post("/course/getCourseDetails",getCourseDetails)
router.post("/course/getFullCourseDetails",auth,isstudent,getFullCourseDetails);

// update course progress
router.post("/course/updateCourseProgress", auth, isstudent, updateCourseProgress)



// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/course/createRating", auth, isstudent, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getReviews", getAllRatingReview)



module.exports=router;