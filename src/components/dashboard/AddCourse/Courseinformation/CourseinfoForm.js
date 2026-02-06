import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { apiConnector } from '../../../../services/apiconnector';
import { Catagoryapi } from '../../../../services/apis';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import {Upload} from"./Upload"
import RequirementsField from './RequirementField';
import { ChipsInput } from './ChipsInput';
import { useDispatch } from 'react-redux';
import { setCourse, setEditCourse, setStep } from '../../../../slices/courseslice';
import { FaArrowRightLong } from "react-icons/fa6";
import { addcourse,editcouse } from '../../../../services/operation/course';
import toast from 'react-hot-toast';
import Spinner from '../../../common/spinner';
import Navigationcompo from '../navigationcompo';
import { useNavigate } from 'react-router-dom';


export default function CourseinfoForm() {
      const{course,editCourse,}=useSelector((state)=>state.course);
      const{token}=useSelector((state)=>state.auth);
       const navi=useNavigate();
      const[loading,setloading]=useState(false);
       const dispatch=useDispatch();
        const[Catagory,setCatagory]=useState([]);


  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();


   
   

  const fetchcatagory= async ()=>{

      try{    
         setloading(true);


      const response=await apiConnector("GET",Catagoryapi.getapi);

      if(!response.data.success){
        throw new Error(response.data.message);
      }

      setCatagory(response.data.data);

      }


      catch(err){
        console.log(err.message);

      }


      setloading(false);
     










    }

  useEffect(()=>{

    fetchcatagory();

    if(editCourse){
      setValue("courseTitle", course.courseName)
      setValue("courseShortDesc", course.courseDescription)
      setValue("coursePrice", course.price)
      setValue("courseTags", course.tag)
      setValue("courseBenefits", course.whatYouWillLearn)
      setValue("courseCategory", course.category)
      setValue("courseRequirements", course.instructions)
      setValue("courseImage", course.thumbnail)
    }




    
  },[]);

  const isFormUpdated = () => {
    const currentValues = getValues()
   
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString() ||
      currentValues.courseImage !== course.thumbnail
    ) {
      return true
    }
    return false
  }

  async function  submit(data){

    if(editCourse){

      if(isFormUpdated()){

         const currentValues = getValues()
        const formData = new FormData();

         formData.append("courseId", course._id)
        
         if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle)
        }
        if( currentValues.courseShortDesc !== course.courseDescription){
           formData.append("courseDescription", data.courseShortDesc)

        }

        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice)
        }
        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags))
        }
        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits)
        }
        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory)
        }

        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          )
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnailImage", data.courseImage)
        }
 



        setloading(true);

      const result =await editcouse(formData,token)
      setloading(false);

      if(result){
        toast.success("Course edit successful")
        dispatch(setCourse(result.data));
        dispatch(setStep(2));

      }
      else{
        toast.error("error in Edit the Course")
      }


      }

      return

    }



     const formData = new FormData()
    formData.append("courseName", data.courseTitle)
    formData.append("courseDescription", data.courseShortDesc)
    formData.append("price", data.coursePrice)
    formData.append("tag", JSON.stringify(data.courseTags))
    formData.append("whatYouWillLearn", data.courseBenefits)
    formData.append("category", data.courseCategory)
    formData.append("status", "Draft")
    formData.append("instructions", JSON.stringify(data.courseRequirements))
    formData.append("thumbnailImage", data.courseImage);

    

    setloading(true);

   const result= await addcourse(formData,token);
   setloading(false);
   if(result){
    dispatch(setStep(2));
    dispatch(setCourse(result.data));
    toast.success("Course Added Successfully")
   }

   else{
    toast.error("Error in Adding Course")
   }

    
  }


  function handlekey(event){
    if(event.key==="Enter"){
      event.preventDefault();
    }
  }

    if(loading){
      return <Spinner/>
    }



 
  return (

    <div>
      

      <form onSubmit={handleSubmit(submit)} onKeyDown={handlekey} >
        <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseTitle">
          Course Title <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="courseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className="form-style w-full text-richblack-5 bg-richblack-700 h-10 rounded-md"
        />
        {errors.courseTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course title is required
          </span>
        )}
      </div>

            <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseShortDesc">
          Course Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full text-richblack-5 bg-richblack-700  rounded-md"
        />
        {errors.courseShortDesc && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course Description is required
          </span>
        )}
      </div>


           <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="coursePrice">
          Course Price <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="coursePrice"
            placeholder="Enter Course Price"
            type="number"
            {...register("coursePrice", {
              required: true,
              valueAsNumber: true,
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
              },
            })}
            className="form-style w-full pl-12 text-richblack-5 bg-richblack-700 h-10 rounded-md"
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
        </div>
        {errors.coursePrice && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course Price is required
          </span>
        )}
      </div>



      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseCategory">
          Course Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("courseCategory", { required: true })}
          defaultValue=""
          id="courseCategory"
          className="form-style w-full text-richblack-5 bg-richblack-700 h-10 rounded-md"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            Catagory?.map((category, index) => (
              <option key={index} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course Category is required
          </span>
        )}
      </div>


      

    <ChipsInput  
        label="Tags"
        name="courseTags"
        placeholder="Enter Tags and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
        tags={course?.tags ? course.tags :[]} />

      <Upload register={register} name="courseImage" label="Course Thumbnail" video={false} setvalue={setValue} errors={errors} edit={editCourse ? course?.thumbnail : null} />


       <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseBenefits">
          Benefits of the course <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="courseBenefits"
          placeholder="Enter benefits of the course"
          {...register("courseBenefits", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full bg-richblack-700"
        />
        {errors.courseBenefits && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Benefits of the course is required
          </span>
        )}
      </div>

      
        <RequirementsField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        setValue={setValue}
        errors={errors}
        getValues={getValues}
      />


        <div className="flex justify-end gap-x-2">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Continue Wihout Saving
          </button>
        )}

        <button
        disabled={loading}
        type='submit'
        className='w-32 h-10 bg-yellow-100 rounded-md text-richblack-900 flex flex-row justify-center items-center gap-2'
        >{`${!editCourse ?"Next":"Save chnages"}`}<FaArrowRightLong /> </button>


        </div>



      </form>

     
     {editCourse &&
     <button onClick={()=>{dispatch(setEditCourse(false));
      navi("/dashboard/my-courses")
     }} className='text-xl font-extrabold text-richblack-900 bg-gray-400 w-20 rounded-md'>Cancel</button>}
      

        
    </div>
  )
}
