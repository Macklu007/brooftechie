import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetCourseState,setStep } from '../../../slices/courseslice';
import { setloading } from '../../../slices/authslice';
import { editcouse } from '../../../services/operation/course';
import Spinner from '../../common/spinner';
import toast from 'react-hot-toast';



function CoursePublish() {
    const[formdata,setformdata]=useState(false)
    const {step,course}=useSelector((state)=>(state.course))
    const dispatch=useDispatch();
     const {token,loading}=useSelector((state)=>(state.auth))
   


   async function handlesubmit(e){
        e.preventDefault();

        dispatch(setloading(true))

        if(formdata){

           const formData={            
            "courseId":course._id,
            "status":"Published"

           }
           


            const response=await editcouse(formData,token)
            if(response){
                console.log(response)
                toast.success("COURSE PUBLISHED")
                dispatch(resetCourseState());
            
           }
        }

       dispatch(setloading(false))
       
    }
   function backhandler(){
   dispatch(setStep(2))
    
   }

  return (
    <div className='w-full h-80 bg-richblack-700 flex flex-col  items-center gap-10'>
        {loading&&
        <Spinner/>

        }
        
        <p className='font-extrabold text-3xl text-richblack-100' >Publish Settings</p>
        <form onSubmit={handlesubmit} className=' h-72 flex  flex-col justify-evenly'>
           
            <div>
                 <input type="checkbox" id="publish" name="publish" onChange={()=>{setformdata(!formdata)}} className='size-4'    />
            <label htmlFor='publish ' className='text-xl '>Make this course as public</label>
             
            </div>
            

             <div className='flex flex-row gap-5'>
                   <button type='button' className='h-10 w-28 bg-richblack-300 text-richblack-800 font-bold' onClick={backhandler}>Back</button>
                  <button className='h-10 w-28 bg-yellow-50 text-richblack-600 font-extrabold'> Save Changes</button>
             </div>
        

        </form>
                 
    </div>
  )
}

export default CoursePublish