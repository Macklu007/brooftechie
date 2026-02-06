  
  

export const baseurl=process.env.REACT_APP_BASE_URL;
  

  export const Catagoryapi={
    getapi:baseurl +"/showcategory" ,

 }

export const authapis={
    otpapi:baseurl + "/sendotp",
    signupapi:baseurl+ "/signup",
    loginapi:baseurl +"/login",
    resetapi:baseurl + "/reset-password-token",
    updateapi:baseurl + "/reset-password" ,
}

export const sectionapi ={
  createsectionapi :baseurl + "/addSection",
  updatesectionapi:baseurl + "/updateSection",
  deletesectionapi:baseurl + "/deleteSection"

}


export const contactusapi ={
  contactus:baseurl + "/contact"
}

export const settingapi={
  uploadprofile:baseurl +"/updatepic",
  updateprofileinfo:baseurl +"/updateprofile",
  updatepassword:baseurl + "/changepassword",
}


export const profileapi={
  getenrollcourse:baseurl +"/enrolledcourse",
}

export const profileEndpoints = {
  GET_USER_DETAILS_API: baseurl + "/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: baseurl + "/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: baseurl + "/instructorDashboard",
}


export const courseapi={
  addcourse:baseurl +"/createcourse",
  editcouse:baseurl+"/editcourse",
  getallinstructorcouse: baseurl + "/getInstructorCourses",
  deleteCourseApi:baseurl +"/deletecourse",
  COURSE_DETAILS_API: baseurl + "/course/getCourseDetails",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:baseurl + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: baseurl + "/course/updateCourseProgress",
  CREATE_RATING_API: baseurl + "/course/createRating",

}

export const subSectionapi ={
  addsubsection:baseurl + "/addSubSection",
  updatesubsection:baseurl + "/updateSubSection",
  deletesubsection:baseurl + "/deleteSubSection",
}

export const catalogData = {
  CATALOGPAGEDATA_API: baseurl + "/course/getCategoryPageDetails",
}

export const categories = {
  CATEGORIES_API: baseurl + "/showcategory",
}

export const studentEndpoints = {
  COURSE_PAYMENT_API:  baseurl + "/payment/capturePayment",
  COURSE_VERIFY_API: baseurl + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: baseurl + "/payment/sendPaymentSuccessEmail",
}
