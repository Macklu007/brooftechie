
import { apiConnector } from "../apiconnector";
import { courseapi } from "../apis";
import toast from "react-hot-toast";


export async function addcourse(formdata,token){

    try{
       const response=await apiConnector("POST",courseapi.addcourse,formdata,{
        Authorization: `Bearer ${token}`,
    })

         if(response.status){
            return response.data
         }

         throw new Error(response.message)
    
    }

    catch(err){
        console.log(err.message,"error in fecthing data")
    }
   

}


export async function editcouse(formdata,token){
    try{
       const response= await apiConnector("POST",courseapi.editcouse,formdata,{
        Authorization: `Bearer ${token}`,
    })
      if(response.status){
       
            return response.data
         }

         throw new Error(response.message)
    }
    catch(err){
        console.log(err.message,"error in fetching")
    }
   
}

export async function Getallcourse (token){
    try{
       const result=await apiConnector("GET",courseapi.getallinstructorcouse,null,{
        Authorization: `Bearer ${token}`,
    })
   if(result.status===200){
    
    return result
   }
   throw new Error(result.message);
   


    }
    catch(err){
        console.error(err);

    }

}

export async function deleteCourse(token,formdata){
    try{
       const result=await apiConnector("DELETE",courseapi.deleteCourseApi,formdata,{
        Authorization: `Bearer ${token}`,
    }) 
      
     return result
    }
    catch(err){
        console.log(err);
    }


}
export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST",courseapi.COURSE_DETAILS_API, {
      courseId,
    })
    console.log("COURSE_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}


export const getFullDetailsOfCourse = async (courseId, token) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector(
      "POST",
     courseapi. GET_FULL_COURSE_DETAILS_AUTHENTICATED,
      {
        courseId,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
  } catch (error) {
    console.log("COURSE_FULL_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// mark a lecture as complete
export const markLectureAsComplete = async (data, token) => {
  let result = null
  console.log("mark complete data", data)
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST",courseapi. LECTURE_COMPLETION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log(
      "MARK_LECTURE_AS_COMPLETE_API API RESPONSE............",
      response
    )

    if (!response.data.message) {
      throw new Error(response.data.error)
    }
    toast.success("Lecture Completed")
    result = true
  } catch (error) {
    console.log("MARK_LECTURE_AS_COMPLETE_API API ERROR............", error)
    toast.error(error.message)
    result = false
  }
  toast.dismiss(toastId)
  return result
}

// create a rating for course
export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...")
  let success = false
  try {
    const response = await apiConnector("POST",courseapi.CREATE_RATING_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE RATING API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating")
    }
    toast.success("Rating Created")
    success = true
  } catch (error) {
    success = false
    console.log("CREATE RATING API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId)
  return success
}
