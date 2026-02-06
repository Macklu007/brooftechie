import { useState } from "react"
import {  useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { IoAddCircleOutline } from "react-icons/io5"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { CreateSection, EditSection} from "../../../../services/operation/section"
import { Nestedview } from "./nestedview"

import { setCourse,setStep,setEditCourse } from "../../../../slices/courseslice"
import Navigationcompo from "../navigationcompo"




export function CourseBulider(){

      const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const { course,editCourse } = useSelector((state) => state.course)

  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [editSectionName, setEditSectionName] = useState(null)
  const dispatch = useDispatch()
   
  function fnx1(){
   dispatch (setEditCourse(true))
   dispatch( setStep(1))
  }

 function fnx2() {
  if (!course?.courseContent?.length) {
    toast.error("Add At least one section");
    return;
  }

  const allHaveSubSections = course.courseContent.every(
    (section) => section?.subSection?.length > 0
  );

  if (allHaveSubSections) {
    dispatch(setStep(3));
  } else {
    const invalidSection = course.courseContent.find(
      (section) => !section?.subSection?.length
    );

    toast.error(`${invalidSection.sectionName} does not have a Subsection`);
  }
}




   async function formsubmit(data){
     
    setLoading(true);
    
    if(editSectionName){
      
      if(editSectionName.sectionName === data.sectionName){
        
        setValue("sectionName", "")
          setEditSectionName(null)
         toast.error("no change done")
         setLoading(false);
         
        
          return
        

       }

          
      const result=await EditSection(token,{
         sectionName: data.sectionName,
         sectionId:editSectionName.sectionId,
          courseId: course._id,

      })
      console.log("result---",result)
      
      if(result){

        dispatch(setCourse(result))
         setValue("sectionName", "")
         toast.success("section edited")
      }
      
      setEditSectionName(null)
       setLoading(false);
         
    }


   else{
       
       const updatedcourse =await CreateSection(token, {
          sectionName: data.sectionName,
          courseId: course._id,
        })

        if(updatedcourse){
          dispatch(setCourse(updatedcourse));
           setValue("sectionName", "")
          
        }


    

       setLoading(false);
      }

   }


    return(
        <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
         <p className="text-2xl font-semibold text-richblack-5">Course Builder</p>
     
      <form className="space-y-4" onSubmit={handleSubmit(formsubmit)}>
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="sectionName">
            Section Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="sectionName"
            
            placeholder="Add a section to build your course"
            {...register("sectionName", { required: true })}
            className="form-style w-full text-black" 
          />
          {errors.sectionName && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Section name is required
            </span>
          )}
        </div>
       


        <button type="submit" className="bg-yellow-200 text-richblack-800 flex gap-2 h-10 justify-center items-center">{editSectionName ? "EditSection":"CreateSection"}  <IoAddCircleOutline size={20} className="text-yellow-50" /></button>




        </form>



       

      

         <Nestedview setEditSectionName={setEditSectionName} setValue={setValue} setLoading={setLoading}/>

           <Navigationcompo fnx1={fnx1} fnx2={fnx2}/>


        </div>
            
    )
}